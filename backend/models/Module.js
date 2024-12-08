const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  problemId: { type: String, required: true, unique: true }, // Unique ID for the problem
  location: { type: String, required: true, unique: true }, 
  name: { type: String, required: true }, // Name of the problem
  state: { type: Number, required: true, default: 0 }, // Problem state (unseen, solved, or skipped), default set to 0
  source: { type: String, required: true, default: "" }, // The source of the problem (e.g., platform name), default set to empty string
  star: { type: Boolean, required: true, default: false }, // The source of the problem (e.g., platform name), default set to empty string
  difficulty: { type: Number, required: true, default: 0 }, // Difficulty level (e.g., 1 to 5), default set to 0
  tags: [String], // The source of the problem (e.g., platform name), default set to empty string
  link:  { type: String, required: true, default: "" }, 
});

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  source: { type: String, required: true, default: "" }, 
  star: { type: Boolean, required: true, default: false },
  description: { type: String, required: true, default: "" }, 
  link:  { type: String, required: true, default: "" }, 
});

const TopicSchema = new mongoose.Schema({
  topicId: { type: String, required: true },
  topicName: { type: String, required: true },
  solvedProblems: { type: Number, default: 0 }, // Default set to 0
  skippedProblems: { type: Number, default: 0 }, // Default set to 0
  unseenProblems: { type: Number, default: 0 }, // Default set to 0
  state: { type: Number, required: true, default: 0 }, 
  problems: [ProblemSchema],
  resources: [ResourceSchema]
});

const GeneralTopicSchema = new mongoose.Schema({
  generalTopicId: { type: String, required: true },
  generalTopicName: { type: String, required: true },
  topics: [String]
});

const ModuleSchema = new mongoose.Schema({
  moduleId: { type: String, required: true }, // Name of the module
  moduleName: { type: String, required: true }, // Name of the module
  description: { type: String, required: true, default: "" }, // Description of the module, default set to empty string
  unseenTopics: { type: Number, required: true, default: 0 }, // Default set to 0
  skippedTopics: { type: Number, required: true, default: 0 }, // Default set to 0
  solvedTopics: { type: Number, required: true, default: 0 }, // Default set to 0
  unseenProblems: { type: Number, required: true, default: 0 }, // Default set to 0
  skippedProblems: { type: Number, required: true, default: 0 }, // Default set to 0
  solvedProblems: { type: Number, required: true, default: 0 }, // Default set to 0
  totalTopics: { type: Number, required: true, default: 0 }, // Default set to 0
  totalProblems: { type: Number, required: true, default: 0 }, // Default set to 0
  generalTopics: [GeneralTopicSchema], 
  topics: [TopicSchema]
});

module.exports = mongoose.model('Module', ModuleSchema);
