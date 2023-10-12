import { PrismaClient } from "@prisma/client";
import type Credentials from "@app/types/credentials.js";
import AppError from "@app/utils/app-error.js";
import { verify } from "@app/utils/password.js";
import { sign } from "@app/utils/jwt.js";

const prisma = new PrismaClient();

async function authenticate(credentials: Credentials) {
	const { username, password } = credentials;
	const user = await prisma.user.findUnique({ where: { username } });

	if (!user) {
		throw new AppError("Invalid credentials", 403, "Username not found");
	}

	if (!(await verify(user.password, password))) {
		throw new AppError("Invalid credentials", 403, "Wrong password");
	}

	return sign({ username });
}

export { authenticate };
