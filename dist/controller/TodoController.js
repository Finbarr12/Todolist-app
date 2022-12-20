"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodo = exports.SearchTodo = exports.GetOneTodo = exports.GetAllTodo = exports.PostTodo = void 0;
const TodoModel_1 = __importDefault(require("../Model/TodoModel"));
const PostTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Task, Status, Description } = req.body;
        const Posted = yield TodoModel_1.default.create({ Task, Status, Description });
        return res.status(201).json({
            message: "Posted succesfully",
            data: Posted,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.PostTodo = PostTodo;
const GetAllTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllData = yield TodoModel_1.default.find();
        return res.status(200).json({
            message: "Posted succesfully",
            data: AllData,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.GetAllTodo = GetAllTodo;
const GetOneTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OneData = yield TodoModel_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "Posted succesfully",
            data: OneData,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.GetOneTodo = GetOneTodo;
const SearchTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searched = req.query;
        const SearchedData = yield TodoModel_1.default.find(searched);
        return res.status(200).json({
            message: "Posted succesfully",
            data: SearchedData,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.SearchTodo = SearchTodo;
const DeleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Deleted = yield TodoModel_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Posted succesfully",
            data: Deleted,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.DeleteTodo = DeleteTodo;
