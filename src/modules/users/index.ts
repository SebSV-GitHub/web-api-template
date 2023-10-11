import { Router as router } from "express";
import type { User } from "@prisma/client";
import requestMiddleware from "@app/utils/request-middleware.js";
import * as controller from "./controller.js";

const routes = router();

routes.get("/users", async (_request, response) => {
	const users = await controller.getAllUsers();
	response.json(users);
});

routes.post(
	"/users",
	requestMiddleware(async (request, response) => {
		const userInput = request.body as Omit<User, "id">;
		await controller.createUser(userInput);
		response.json(userInput);
	})
);

export default routes;
