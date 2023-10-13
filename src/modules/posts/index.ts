import { Router as router } from "express";
import type { Post } from "@prisma/client";
import authHandler from "@app/middlewares/auth-handler.js";
import requestMiddleware from "@app/utils/request-middleware.js";
import validate, { Segment } from "@app/utils/validation.js";
import validationSchema from "./validation-schema.js";
import * as controller from "./controller.js";

const routes = router();

routes.post(
	"/posts",
	authHandler,
	validate(validationSchema, Segment.Body),
	requestMiddleware(async (request, response) => {
		const postInput = request.body as Pick<Post, "title" | "content">;
		await controller.createPost(postInput, request.session.userId);
		response.sendStatus(200);
	})
);

export default routes;
