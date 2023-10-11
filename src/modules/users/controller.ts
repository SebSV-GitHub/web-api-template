import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { hash } from "@app/utils/password.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import AppError from "@app/utils/app-error.js";

const client = new PrismaClient();

async function getAllUsers() {
	return client.user.findMany();
}

async function createUser(userInput: Omit<User, "id">) {
	const password = await hash(userInput.password);
	try {
		return await client.user.create({ data: { ...userInput, password } });
	} catch (error: unknown) {
		if (
			error instanceof PrismaClientKnownRequestError &&
			error.code === "P2002"
		) {
			throw new AppError("Username already in use", 409);
		}

		throw error;
	}
}

export { getAllUsers, createUser };
