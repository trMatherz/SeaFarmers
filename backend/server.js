const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const User = require('./models/User');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');

const callBack = 'https://seafarmers.onrender.com/auth/github/callback'; // GitHub OAuth callback URL
const backendURL = 'https://seafarmers.onrender.com'; // Backend URL for production
const frontendURL = 'https://trmatherz.github.io'; // Frontend URL for production

const PORT = process.env.PORT || 3001;  // Dynamically use the PORT environment variable

const corsOptions = {
  origin: frontendURL, // Allow only your frontend domain
  methods: ['GET', 'POST', 'PUT'], // Allowed methods
  credentials: true,  // Allow cookies to be sent
};

const app = express();

// MongoDB Atlas connection string
const dbURI = 'mongodb+srv://jakebhudman:O5YrN7AJFJF6Um3Z@seafarmersdata.7pmmz.mongodb.net/?retryWrites=true&w=majority&appName=SeaFarmersData';

// Connect to MongoDB without deprecated options
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());  
app.use(cookieParser());
app.use(cors(corsOptions));


// Configure session
app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: dbURI,  // MongoDB URI to store sessions
    collectionName: 'sessions',  // Collection where sessions will be stored
    ttl: 86400,  // Session expiration time in seconds (1 day)
  }),
  cookie: {
    httpOnly: true,  // Makes cookie inaccessible to JavaScript
    maxAge: 86400000,  // Session cookie expiration time in milliseconds (1 day)
  },
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware to set user data to locals (to use in views)
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Define a route for the home page (root)
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`
      <h1>Welcome, ${req.user.username}!</h1>
      <img src="${req.user.avatarUrl}" alt="Avatar" width="100">
      <a href="/dashboard">Go to Dashboard</a>
      <br>
      <a href="/logout">Logout</a>
    `);
  } else {
    res.send(`
      <h1>Welcome to the SeaFarmers App!</h1>
      <a href="/auth/github"><button>Sign in with GitHub</button></a>
    `);
  }
});

// Route for Dashboard (Displays user details)
app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`
    <h1>Dashboard</h1>
    <p>Your GitHub Username: ${req.user.username}</p>
    <p>Your GitHub Email: ${req.user.email}</p>
    <img src="${req.user.avatarUrl}" alt="Avatar" width="100">
    <a href="/">Go back to Home</a>
    <br>
    <a href="/logout">Logout</a>
  `);
});

// Configure GitHub strategy
passport.use(new GitHubStrategy({
  clientID: 'Ov23liSK5wS2TXDwgE1Y',
  clientSecret: '2ee93dd9cfa82ebf72ae72e1b21ab962f64d5d3f',
  callbackURL: callBack,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ githubId: profile.id });
    if (!user) {
      console.log("Making New User"); 
      user = new User({
        githubId: profile.id,
        username: profile.username,
        email: profile.emails ? profile.emails[0].value : null,
        avatarUrl: profile.photos ? profile.photos[0].value : null,
        modules: [],
      });
      await user.save();
      console.log("Made a New User"); 
    }
    return done(null, user);
  } catch (err) {
    console.error(err);
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user._id); 
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);  
    done(null, user);  
  } catch (err) {
    done(err, null); 
  }
});


app.get('/auth/github', passport.authenticate('github'));


app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    const userId = req.user._id; 
    res.redirect(`${frontendURL}/SeaFarmers/?userId=${userId}`);
  }
);


app.get('/api/user', async (req, res) => {
  const { userId } = req.query;
  if(userId == "guest") return res.status(400).json({ message: "Guest users cannot proceed with this request." });
  const user = await User.findOne({ _id: userId });
  if(!user) throw new Error(`User with ID ${userId} not found.`);
  res.json({
    username: user.username,
    email: user.email,
    avatarUrl: user.avatarUrl,
  });
});

const getDefaultModuleData = (moduleName) => {
  try {
    const filePath = path.join(__dirname, 'data', `${moduleName}Data.json`); // Dynamic file path
    const jsonData = fs.readFileSync(filePath, 'utf-8'); // Synchronously read the JSON file
    return JSON.parse(jsonData); // Parse and return the JSON data
  } catch (error) {
    console.error(`Error reading default module data for ${moduleName}:`, error.message);
    throw new Error(`Could not load default module data for ${moduleName}`);
  }
};

const checkModuleUpdate = async (userId, moduleName) => {
  try {
    // Fetch the module data from the database (this function needs to be defined)
    const moduleData = getDefaultModuleData(moduleName);
    const user = await User.findOne({ _id: userId });
    
    if (!moduleData) throw new Error(`Module with name ${moduleName} not found.`);
    if (!user) throw new Error(`User with ID ${userId} not found.`);
    
    // Find the user's existing module progress data
    let userModuleData = user.modules.find(module => module.moduleName === moduleName);
    
    if (!userModuleData) {
      // If the module doesn't exist in the user's data, create it
      const newModule = {
        moduleId: moduleData.moduleId, // Required module ID
        moduleName: moduleData.moduleName, // Required module name
        unseenProblems: 0,
        unseenTopics: 0,
        topics: [] // Initialize topics as an empty array
      };
      userModuleData = newModule;
    }
   
    
    // Ensure all topics and problems are updated
    const updatedTopics = moduleData.topics.map((moduleTopic) => {
      // Ensure userTopic.topics exists
      let userTopic = userModuleData.topics.find((userTopic) => userTopic.topicId === moduleTopic.topicId);

      if (!userTopic) {
        // If the topic doesn't exist, create it and initialize the problems array
        userTopic = {
          topicId: moduleTopic.topicId,
          unseenProblems: 0,
          problems: []  // Initialize problems as an empty array
        };
        userModuleData.unseenTopics++; 
        userModuleData.topics.push(userTopic);  // Add the new topic to the user's topics
      }

      // Ensure all problems are present in the user topic
      const updatedProblems = moduleTopic.problems.map((moduleProblem) => {
        let userProblem = userTopic.problems.find((userProblem) => userProblem.problemId === moduleProblem.problemId);
        
        if (!userProblem) {
          // If the problem doesn't exist, create it
          userProblem = {
            problemId: moduleProblem.problemId,
          };
          userModuleData.unseenProblems++; 
          userTopic.unseenProblems++; 
          userTopic.problems.push(userProblem);  // Add the new problem to the topic
        }

        return userProblem;  // Return the updated problem
      });

      // Update the problems in the topic
      userTopic.problems = updatedProblems;

      return userTopic;  // Return the updated topic
    });
    
    userModuleData.topics = updatedTopics;
   
   
  
    // Reset all problem and topic counts in the module
    userModuleData.solvedProblems = 0;
    userModuleData.unseenProblems = 0;
    userModuleData.skippedProblems = 0;
    userModuleData.solvedTopics = 0;
    userModuleData.unseenTopics = 0;
    userModuleData.skippedTopics = 0;
  
   
    userModuleData.topics.forEach((topic) => {
      
      topic.solvedProblems = 0;
      topic.unseenProblems = 0;
      topic.skippedProblems = 0;
  
      
      topic.problems.forEach((problem) => {
       
        if (problem.state == 2) {
          topic.solvedProblems++;
          userModuleData.solvedProblems++;
        } else if (problem.state == 0) {
          topic.unseenProblems++;
          userModuleData.unseenProblems++;
        } else if (problem.state == 1) {
          topic.skippedProblems++;
          userModuleData.skippedProblems++;
        }
      });
  
      
      if (topic.state == 2) {
        userModuleData.solvedTopics++;
      } else if (topic.state == 0) {
        userModuleData.unseenTopics++;
      } else if (topic.state == 1) {
        userModuleData.skippedTopics++;
      }
    });
    

   
    if(!user.modules.find(module => module.moduleName === moduleName)) user.modules.push(userModuleData);  
    else {
      await User.updateOne(
        { _id: userId, 'modules.moduleName': moduleName },  // Find user by ID and matching module name
        { 
          $set: { 'modules.$': userModuleData }  // Set the module data to the new data for the matched module
        }
      );
    }
    // Save the updated user data
    await user.save();

    return { success: true, message: 'Module data updated successfully.' };
  } catch (error) {
    console.error('Error updating module data:', error);
    return { success: false, message: error.message };
  }
};

function updateData(defaultData, userModuleData) {
  // Clone defaultData to avoid mutating the original object
  const updatedData = { ...defaultData };

  // Update module-level properties
  updatedData.solvedProblems = userModuleData.solvedProblems;
  updatedData.skippedProblems = userModuleData.skippedProblems;
  updatedData.unseenProblems = userModuleData.unseenProblems;

  updatedData.solvedTopics = userModuleData.solvedTopics;
  updatedData.skippedTopics = userModuleData.skippedTopics;
  updatedData.unseenTopics = userModuleData.unseenTopics;

  // Update topics
  const updatedTopics = defaultData.topics.map((moduleTopic) => {
    // Find the corresponding topic in userModuleData
    const userTopic = userModuleData.topics.find(
      (userTopic) => userTopic.topicId === moduleTopic.topicId
    );

    if (userTopic) {
      // Update topic-level properties
      const updatedTopic = {
        ...moduleTopic,
        state: userTopic.state,
        solvedProblems: userTopic.solvedProblems,
        skippedProblems: userTopic.skippedProblems,
        unseenProblems: userTopic.unseenProblems,
      };

      // Update problems within the topic
      const updatedProblems = moduleTopic.problems.map((moduleProblem) => {
        // Find the corresponding problem in userTopic
        const userProblem = userTopic.problems.find(
          (userProblem) => userProblem.problemId === moduleProblem.problemId
        );

        if (userProblem) {
          return {
            ...moduleProblem,
            state: userProblem.state, // Update problem state
          };
        }

        // Return the original problem if no user updates are found
        return moduleProblem;
      });

      updatedTopic.problems = updatedProblems; // Update problems in the topic
      return updatedTopic;
    }

    // Return the original topic if no user updates are found
    return moduleTopic;
  });

  updatedData.topics = updatedTopics; // Update the topics in the module

  return updatedData; // Return the fully updated module data
}


// Dynamic API to fetch module data by module name
app.get('/api/module/:moduleName', async (req, res) => {
  const { moduleName } = req.params;
  const defaultModuleData = getDefaultModuleData(moduleName);
  const { userId } = req.query;
  if(userId == "guest") return res.json(defaultModuleData);  // Return the default module data
  if(!userId) return res.json(defaultModuleData);  // Return the default module data
  
  checkModuleUpdate(userId, moduleName); 
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) throw new Error(`User with ID ${userId} not found.`);
    let userModuleData = user.modules.find(module => module.moduleName === moduleName);
    const updatedData = updateData(defaultModuleData, userModuleData); 
    res.json(updatedData);

  } catch (error) {
    console.error('Error fetching module data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/problem/updateState', async (req, res) => {
  const { moduleName, topicId, problemId, newState } = req.body;
 
  const { userId } = req.query;
  if(userId == "guest") return res.status(400).json({ message: "Guest users cannot proceed with this request." });
  const user = await User.findOne({ _id: userId });
  if(!user) throw new Error(`User with ID ${userId} not found.`);
  if (!user) throw new Error(`User with ID ${userId} not found.`);
  
  try {
    // Find the module, topic, and problem
    const module = user.modules.find((mod) => mod.moduleName === moduleName);
    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    const topic = module.topics.find((t) => t.topicId === topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const problem = topic.problems.find((p) => p.problemId === problemId);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    if(problem.state == 0) topic.unseenProblems--, module.unseenProblems--; 
    else if(problem.state == 1) topic.skippedProblems--, module.skippedProblems--; 
    else if(problem.state == 2) topic.solvedProblems--, module.solvedProblems--; 
    
    problem.state = newState;
    
    if(problem.state == 0) topic.unseenProblems++, module.unseenProblems++; 
    else if(problem.state == 1) topic.skippedProblems++, module.skippedProblems++; 
    else if(problem.state == 2) topic.solvedProblems++, module.solvedProblems++; 
    await user.save();  // Ensure changes are saved to the database
    
    // Respond with the updated problem
    res.status(200).json({
      success: true,
      message: 'Problem state updated successfully',
      updatedProblem: problem,
    });
  } catch (error) {
    console.error('Error updating problem state:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/topic/updateState', async (req, res) => {
  const { moduleName, topicId, newState } = req.body;
  const { userId } = req.query;
  if(userId == "guest") return res.status(400).json({ message: "Guest users cannot proceed with this request." });
  const user = await User.findOne({ _id: userId });
  if(!user) throw new Error(`User with ID ${userId} not found.`);
  try {
    // Find the module by moduleName
    const module = user.modules.find((mod) => mod.moduleName === moduleName);
    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    // Find the topic within the module by topicId
    const topic = module.topics.find((t) => t.topicId === topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    // Adjust counts based on the current state of the topic
    if (topic.state === 0) {  // Previously 'unseen'
      module.unseenTopics--;
      topic.unseenProblems--;
    } else if (topic.state === 1) {  // Previously 'skipped'
      module.skippedTopics--;
      topic.skippedProblems--;
    } else if (topic.state === 2) {  // Previously 'solved'
      module.solvedTopics--;
      topic.solvedProblems--;
    }

    // Set the new state for the topic
    topic.state = newState;

    // Adjust counts based on the new state of the topic
    if (newState === 0) {  // 'unseen'
      module.unseenTopics++;
      topic.unseenProblems++;
    } else if (newState === 1) {  // 'skipped'
      module.skippedTopics++;
      topic.skippedProblems++;
    } else if (newState === 2) {  // 'solved'
      module.solvedTopics++;
      topic.solvedProblems++;
    }

    // Save the updated user data (module and topic state changes)
    await user.save();

    // Respond with success and the updated topic data
    res.status(200).json({
      success: true,
      message: 'Topic state updated successfully',
      updatedTopic: topic,
    });
  } catch (error) {
    console.error('Error updating topic state:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Start the server

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
