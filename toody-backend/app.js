const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Todo = require('./models/todo.model');
const Note = require('./models/note.model');

mongoose.set('debug', true);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('connected to mongo');
})



const app = express();

app.get('/todos/', async (req, res) => {
  console.log('GET /todos hit');
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
});

app.get('/notes/', async (req, res) => {
  console.log('GET /notes hit');
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log('server listening on port 3001');
})