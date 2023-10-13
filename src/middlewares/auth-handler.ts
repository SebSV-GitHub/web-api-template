import type { Request, Response, NextFunction } from "express";
import type Session from "@app/types/session.js";
import AppError from "@app/utils/app-error.js";
import { verify } from "@app/utils/jwt.js";

function authHandler(
	request: Request,
	_response: Response,
	next: NextFunction
) {
	const header = request.get("authorization");

	if (!header) {
		throw new AppError("Missing authorization", 401);
	}

	const [prefix, token] = header.split(" ");

	if (!prefix) {
		throw new AppError("Missing prefix", 401);
	}

	if (!token) {
		throw new AppError("Missing token", 401);
	}

	if (prefix !== "Bearer") {
		throw new AppError("Invalid prefix", 401);
	}

	const session = verify(token) as Session;
	request.session = { userId: session.userId };

	next();
}

export default authHandler;
