"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../router/router"));
require("../config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", router_1.default);
app.listen(2004, () => {
    console.log("server is running");
});
