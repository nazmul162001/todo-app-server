import express from "express";
import Todo from '../models/todoSchema.js'
const route = express.Router();

// create new todo
route.post('/', async(req,res)=> {
  try{
    const addTodo = await Todo(req.body).save();
    res.send(addTodo);
  }
  catch(error){
    res.send({error: error.message})
  }
})



export default route;