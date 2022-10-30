const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: String,
  abbreviation: String,
  headcount: Number,
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;