const mongoose = require('mongoose');

const ProblemProgressSchema = new mongoose.Schema({
  problemId: { type: String, required: true }, 
  state: { type: Number, required: true, default: 0 }, 
});

const TopicProgressSchema = new mongoose.Schema({
  topicId: { type: String, required: true },
  solvedProblems: { type: Number, default: 0 },
  skippedProblems: { type: Number, default: 0 },
  unseenProblems: { type: Number, default: 0 },
  state: { type: Number, default: 0 },
  problems: { type: [ProblemProgressSchema], default: [] }  
});

const ModuleProgressSchema = new mongoose.Schema({
  moduleId: { type: String, required: true }, 
  moduleName: { type: String, required: true }, 
  unseenTopics: { type: Number, default: 0 }, 
  skippedTopics: { type: Number, default: 0 }, 
  solvedTopics: { type: Number, default: 0 }, 
  unseenProblems: { type: Number, default: 0 }, 
  skippedProblems: { type: Number, default: 0 }, 
  solvedProblems: { type: Number, default: 0 }, 
  topics: { type: [TopicProgressSchema], default: [] } 
});

const UserSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, },  
  avatarUrl: { type: String, }, 
  modules: { type: [ModuleProgressSchema], default: [] }  
});

module.exports = mongoose.model('User', UserSchema);
