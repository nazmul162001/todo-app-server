import mongoose from "mongoose";
import express from "express";
import cors from 'cors'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'
import route from './Route/Routes.js'
dotenv.config()

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/todo', route);


// connect mongoose
mongoose.connect('mongodb+srv://todo:jEA7cMyyPyYW95Hl@cluster0.jkdxs.mongodb.net/?retryWrites=true&w=majority', () => {
  console.log('MongoDB Connected');
})



app.get('/', (req,res) => {
  res.send('Todo App Running')
})
app.listen(port, ()=> {
  console.log('server connected');
})