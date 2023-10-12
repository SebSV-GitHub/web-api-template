import process from "node:process";
import jwt from "jsonwebtoken";
import config from "config";
import type Session from "@app/types/session.js";

function sign(payload: Session) {
	const secret = getSecret();
	return jwt.sign(payload, secret, { expiresIn: config.get("jwt.expiresIn") });
}

function verify(token: string) {
	const secret = getSecret();
	return jwt.verify(token, secret);
}

function getSecret() {
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error("JWT Secret not defined");
	}

	return secret;
}

export { sign, verify };
