const express = require('express');
const router = express.Router();
const Module = require('../models/Module'); // Assuming you have a Module model

// Dynamic route to fetch module data by moduleName
router.get('/:moduleName', async (req, res) => {
  const { moduleName } = req.params;
  const userId = req.user._id;  // Assuming user info is available in req.user after authentication
  
  console.log(`Received request for module: ${moduleName} by user: ${userId}`); // Log user-specific request

  try {
    // Find user data and check if the module progress exists
    const user = await User.findById(userId);

    if (!user) {
      console.log(`User ${userId} not found`);  // Log if user is not found
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if progress for the module exists
    const moduleProgress = user.progress.modules.find(module => module.moduleName === moduleName);
    if (moduleProgress) {
      console.log(`Returning module data for ${moduleName} for user ${userId}`);
      return res.json(moduleProgress);  // Return the module progress for the user
    } else {
      // If no data exists, create the module data with defaults
      const newModuleData = {
        moduleName,
        solvedTopics: 0,
        solvedProblems: 0,
        totalTopics: 3, // Example default values, modify according to your needs
        totalProblems: 10, // Example default values
      };

      user.progress.modules.push(newModuleData); // Add new module data to the user's progress

      await user.save();  // Save the updated user data

      console.log(`Created new module progress for ${moduleName} for user ${userId}`);
      res.status(201).json(newModuleData);  // Return the newly created module data
    }
  } catch (error) {
    console.error('Error fetching module data:', error);  // Log any error
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT to update the module progress for the user
router.put('/:moduleName', async (req, res) => {
  const { moduleName } = req.params;
  const userId = req.user._id;  // Assuming user info is available in req.user after authentication
  const updatedData = req.body;  // The updated data (e.g., solvedProblems, solvedTopics)

  console.log(`Received PUT request to update ${moduleName} for user: ${userId}`);

  try {
    const user = await User.findById(userId);
    
    if (!user) {
      console.log(`User ${userId} not found`);
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the module in user's progress
    const moduleProgress = user.progress.modules.find(module => module.moduleName === moduleName);
    
    if (!moduleProgress) {
      console.log(`Module ${moduleName} not found in user progress. Creating it now.`);
      
      // If no module exists, create it with default values
      const newModuleData = {
        moduleName,
        solvedTopics: 0,
        solvedProblems: 0,
        totalTopics: 3, // Default value
        totalProblems: 10, // Default value
      };

      user.progress.modules.push(newModuleData);  // Add new module data to the user's progress
    }

    // Update the module data
    Object.assign(moduleProgress, updatedData);
    
    await user.save();  // Save the updated user data

    console.log(`Updated ${moduleName} for user ${userId}`);
    res.status(200).json(moduleProgress);  // Return the updated module data
  } catch (error) {
    console.error('Error updating module data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { moduleName, description, totalTopics, totalProblems } = req.body;
    const userId = req.user._id; // Assume user info is available in req.user after authentication

    const newModule = new Module({
      userId,
      moduleName,
      description,
      totalTopics,
      totalProblems,
    });

    await newModule.save();
    res.status(201).json({ message: 'Module created successfully', module: newModule });
  } catch (error) {
    console.error('Error creating module:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
