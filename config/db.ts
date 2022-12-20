import mongoose from "mongoose";

const URI = "mongodb://localhost/TodoApp";

const liveURI =
  "mongodb+srv://FinbarrDB:codelab06@cluster0.2xzneqt.mongodb.net/TodoList?retryWrites=true&w=majority";
mongoose.connect(liveURI);

mongoose.connection
  .on("open", () => {
    console.log("db connected");
  })
  .once("error", (error) => {
    console.log("an error occured", error);
  });
