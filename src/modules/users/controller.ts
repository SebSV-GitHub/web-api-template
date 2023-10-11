import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { hash } from "@app/utils/password.js";

const client = new PrismaClient();

async function getAllUsers() {
	return client.user.findMany();
}

async function createUser(userInput: Omit<User, "id">) {
	const password = await hash(userInput.password);
	return client.user.create({ data: { ...userInput, password } });
}

export { getAllUsers, createUser };
