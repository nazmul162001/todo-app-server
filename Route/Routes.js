import express from 'express';
import Todo from '../models/todoSchema.js';
const route = express.Router();

// create new todo
route.post('/', async (req, res) => {
  try {
    const addTodo = await Todo(req.body).save();
    res.send(addTodo);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// get todo
route.get('/', async (req, res) => {
  try {
    const getTodo = await Todo.find();
    res.send(getTodo);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// delete todo
route.delete('/:id', async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deleteTodo);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// update todo
route.put('/:id', async (req, res) => {
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          todoTask: req.body.todoTask,
        },
      }
    );
    res.send(updateTodo);
  } catch (error) {
    res.send({ error: error.message });
  }
});

export default route;
