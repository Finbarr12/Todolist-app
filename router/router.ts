import { Router } from "express";
import {
  PostTodo,
  GetAllTodo,
  GetOneTodo,
  SearchTodo,
  DeleteTodo,
} from "../controller/TodoController";

const router = Router();

router.route("/createlist").post(PostTodo);
router.route("/alllist").get(GetAllTodo);
router.route("/getonelist/:id").get(GetOneTodo);
router.route("/searchlist").get(SearchTodo);
router.route("/deleteone/:id").delete(DeleteTodo);

export default router;
