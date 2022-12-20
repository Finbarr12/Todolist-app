import mongoose from "mongoose";

interface TodoData {
  Task: string;
  Status: string;
  Description: string;
}

interface ITodo extends TodoData, mongoose.Document {}

const TodoDb = new mongoose.Schema({
  Task: String,
  Status: String,
  Description: String,
},{timestamps:true});

export default mongoose.model<ITodo>("TodoDb", TodoDb);
