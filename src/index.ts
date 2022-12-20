import express, { Application } from "express";
import router from "../router/router";
require("../config/db");
const app: Application = express();

app.use(express.json());

app.use("/", router);

app.listen(2004, () => {
  console.log("server is running");
});
