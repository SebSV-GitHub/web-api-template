import type { Schema } from "joi";
import type { Request, Response, NextFunction } from "express";
import AppError from "./app-error.js";

export enum Segment {
	Body = "body",
	Parameters_ = "params",
	Query = "query",
}

function validate(schema: Schema, segment: Segment) {
	return (request: Request, _response: Response, next: NextFunction) => {
		const { error } = schema.validate(request[segment]);
		if (error) {
			throw new AppError(error.message, 400);
		}

		next();
	};
}

export default validate;
