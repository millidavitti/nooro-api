import {
	createTask,
	deleteTask,
	getTasks,
	updateTask,
} from "../../model/tasks.model.js";

export async function getTasksController(_, res) {
	try {
		const tasks = await getTasks();
		return res.status(200).json({ success: true, tasks });
	} catch (error) {
		console.log("---getTasksController---\n", error);
		return res.status(400).json({ success: false, error });
	}
}

export async function createTaskController(req, res) {
	try {
		await createTask(req.body);
		return res.status(200).json({ success: true });
	} catch (error) {
		console.log("---createTaskController---\n", error);
		return res.status(400).json({ success: false, error });
	}
}

export async function updateTaskController(req, res) {
	try {
		await updateTask(req.params.id, req.body);
		return res.status(200).json({ success: true });
	} catch (error) {
		console.log("---updateTaskController---\n", error);
		return res.status(400).json({ success: false, error });
	}
}

export async function deleteTaskController(req, res) {
	try {
		await deleteTask(req.params.id);
		return res.status(200).json({ success: true });
	} catch (error) {
		console.log("---deleteTaskController---\n", error);
		return res.status(400).json({ success: false, error });
	}
}
