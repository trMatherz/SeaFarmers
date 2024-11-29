const User = require('../models/User');  // Import the User model
const Progress = require('../models/progress');  // Import the Progress model (to store user progress)

// Update Topic Progress
exports.updateTopicProgress = async (req, res) => {
  const { userId } = req.params;  // Get the userId from the route params
  const { topicId, status } = req.body;  // Get the topic ID and status (unseen, skipped, solved) from the request body

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the user's progress document (create if not exists)
    let userProgress = await Progress.findOne({ userId: userId });

    if (!userProgress) {
      // Create new progress record if the user does not have one
      userProgress = new Progress({
        userId,
        topics: [],
        problems: []
      });
    }

    // Find the topic in the user's progress
    const topic = userProgress.topics.find(topic => topic.topicId === topicId);

    if (topic) {
      // Update existing topic progress
      topic.status = status;
    } else {
      // Add new topic progress if not found
      userProgress.topics.push({ topicId, status });
    }

    // Save the updated progress document
    await userProgress.save();

    res.status(200).json({ message: 'Topic progress updated successfully', userProgress });
  } catch (err) {
    console.error('Error updating topic progress', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Problem Progress
exports.updateProblemProgress = async (req, res) => {
  const { userId } = req.params;  // Get the userId from the route params
  const { problemId, status } = req.body;  // Get the problem ID and status (unseen, skipped, solved) from the request body

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the user's progress document (create if not exists)
    let userProgress = await Progress.findOne({ userId: userId });

    if (!userProgress) {
      // Create new progress record if the user does not have one
      userProgress = new Progress({
        userId,
        topics: [],
        problems: []
      });
    }

    // Find the problem in the user's progress
    const problem = userProgress.problems.find(problem => problem.problemId === problemId);

    if (problem) {
      // Update existing problem progress
      problem.status = status;
    } else {
      // Add new problem progress if not found
      userProgress.problems.push({ problemId, status });
    }

    // Save the updated progress document
    await userProgress.save();

    res.status(200).json({ message: 'Problem progress updated successfully', userProgress });
  } catch (err) {
    console.error('Error updating problem progress', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to update the solved problems count
exports.solveProblem = async (req, res) => {
  try {
    const { solvedProblems } = req.body;  // Get the updated solvedProblems count from the request body
    const userId = req.user.id;  // Assuming you have user authentication and the user ID is available
    
    // Find the user and update the solvedProblems field
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId }, 
      { solvedProblems }, // Update the solved problems count
      { new: true } // Return the updated document
    );

    // If the user was not found, send an error
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the updated user data
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating solved problems:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get the current user data
exports.getUserData = async (req, res) => {
  try {
    const userId = req.user.id;  // Assuming the user ID is available through authentication

    // Find the user and return their data
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
