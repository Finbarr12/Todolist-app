import TodoModel from "../Model/TodoModel";
import { Request, Response } from "express";

const PostTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { Task, Status, Description } = req.body;

    const Posted = await TodoModel.create({ Task, Status, Description });

    return res.status(201).json({
      message: "Posted succesfully",
      data: Posted,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const GetAllTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const AllData = await TodoModel.find();
    return res.status(200).json({
      message: "Posted succesfully",
      data: AllData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const GetOneTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const OneData = await TodoModel.findById(req.params.id);
    return res.status(200).json({
      message: "Posted succesfully",
      data: OneData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const SearchTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const searched = req.query;
    const SearchedData = await TodoModel.find(searched);

    return res.status(200).json({
      message: "Posted succesfully",
      data: SearchedData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const DeleteTodo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const Deleted = await TodoModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Posted succesfully",
      data: Deleted,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

export { PostTodo, GetAllTodo, GetOneTodo, SearchTodo, DeleteTodo };
