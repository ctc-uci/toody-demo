const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: String,
  abbreviation: String,
  headcount: Number,
});
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;