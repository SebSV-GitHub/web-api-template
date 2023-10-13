import process from "node:process";
import jwt from "jsonwebtoken";
import config from "config";
import type Session from "@app/types/session.js";
import AppError from "./app-error.js";

function sign(payload: Session) {
	const secret = getSecret();
	return jwt.sign(payload, secret, { expiresIn: config.get("jwt.expiresIn") });
}

function verify(token: string) {
	const secret = getSecret();
	try {
		return jwt.verify(token, secret);
	} catch (error: unknown) {
		if (error instanceof Error) {
			if (error.name === "JsonWebTokenError") {
				throw new AppError("Invalid token", 401);
			}

			if (error.name === "TokenExpiredError") {
				throw new AppError("Expired token", 401);
			}
		}
	}
}

function getSecret() {
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error("JWT Secret not defined");
	}

	return secret;
}

export { sign, verify };
