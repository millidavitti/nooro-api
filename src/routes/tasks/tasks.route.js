import express from "express";
import {
	createTaskController,
	deleteTaskController,
	getTasksController,
	updateTaskController,
} from "./tasks.controllers.js";

const taskRoutes = express.Router();

// GET /tasks
taskRoutes.get("/", getTasksController);

// POST /tasks
taskRoutes.post("/", createTaskController);

// PUT /tasks
taskRoutes.put("/:id", updateTaskController);

// DELETE /tasks/:id
taskRoutes.delete("/:id", deleteTaskController);

export default taskRoutes;
