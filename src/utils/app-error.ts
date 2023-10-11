class AppError extends Error {
	readonly statusCode: number;
	readonly description: string;

	constructor(
		message: string,
		statusCode: number,
		description: string = message
	) {
		super(message);
		this.statusCode = statusCode;
		this.description = description;
	}
}

export default AppError;
