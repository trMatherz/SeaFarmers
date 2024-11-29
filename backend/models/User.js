const mongoose = require('mongoose');

const ProblemProgressSchema = new mongoose.Schema({
  problemId: { type: String, required: true, unique: true }, // Unique ID for the problem
  state: { type: Number, required: true, default: 0 }, // Problem state (unseen, solved, or skipped)
});

const TopicProgressSchema = new mongoose.Schema({
  topicId: { type: String, required: true },
  solvedProblems: { type: Number, default: 0 },
  skippedProblems: { type: Number, default: 0 },
  unseenProblems: { type: Number, default: 0 },
  state: { type: Number, default: 0 },
  problems: { type: [ProblemProgressSchema], default: [] }  // Array of problems associated with the topic, default to an empty array
});

const ModuleProgressSchema = new mongoose.Schema({
  moduleId: { type: String, required: true }, 
  moduleName: { type: String, required: true }, 
  unseenTopics: { type: Number, default: 0 }, // Number of topics not yet seen
  skippedTopics: { type: Number, default: 0 }, // Number of topics skipped
  solvedTopics: { type: Number, default: 0 }, // Number of topics completed
  unseenProblems: { type: Number, default: 0 }, // Number of problems not yet seen
  skippedProblems: { type: Number, default: 0 }, // Number of problems skipped
  solvedProblems: { type: Number, default: 0 }, // Number of problems completed
  topics: { type: [TopicProgressSchema], default: [] }  // Array of topics, default to an empty array
});

const UserSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, },  // Default empty string for optional fields
  avatarUrl: { type: String, }, // Default empty string for optional fields
  modules: { type: [ModuleProgressSchema], default: [] }  // Array to store module progress data, default to an empty array
});

module.exports = mongoose.model('User', UserSchema);
