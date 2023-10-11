import type { ErrorRequestHandler } from "express";
import AppError from "@app/utils/app-error.js";

const errorHandler: ErrorRequestHandler = (error, _request, response, next) => {
	if (error instanceof AppError) {
		const { statusCode, message } = error;
		response.status(statusCode).json({ message });
		next();
		return;
	}

	response.status(500).json({ message: "Unknown error occurred" });
	next();
};

export default errorHandler;
