const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Todo = require('./models/todo.model');
const Note = require('./models/note.model');

const todosRouter = require('./routes/todos.router');
const notesRouter = require('./routes/notes.router');

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('connected to mongo');
});

const app = express();

app.use(
  express.urlencoded({ extended: true }),
  express.json(),
);

app.use('/todos', todosRouter);
app.use('/notes', notesRouter);

app.listen(3001, () => {
  console.log('server listening on port 3001');
})