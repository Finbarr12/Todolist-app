"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost/TodoApp";
const liveURI = "mongodb+srv://FinbarrDB:codelab06@cluster0.2xzneqt.mongodb.net/TodoList?retryWrites=true&w=majority";
mongoose_1.default.connect(liveURI);
mongoose_1.default.connection
    .on("open", () => {
    console.log("db connected");
})
    .once("error", (error) => {
    console.log("an error occured", error);
});
