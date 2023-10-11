import type { Request, Response, NextFunction } from "express";

function requestMiddleware(
	fn: (request: Request, response: Response) => Promise<void>
) {
	return async (request: Request, response: Response, next: NextFunction) => {
		try {
			await fn(request, response);
		} catch (error: unknown) {
			next(error);
		}
	};
}

export default requestMiddleware;
