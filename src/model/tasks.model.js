import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getTasks() {
	return await prisma.task.findMany({
		orderBy: { updatedAt: "desc" },
	});
}

export async function createTask(data) {
	return await prisma.task.create({
		data,
	});
}

export async function updateTask(id, data) {
	return await prisma.task.update({
		data,
		where: { id },
	});
}

export async function deleteTask(id) {
	return await prisma.task.delete({
		where: { id },
	});
}
