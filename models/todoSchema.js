import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todoTask: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;