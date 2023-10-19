import { Router as router } from "express";
import type { Post } from "@prisma/client";
import authHandler from "@app/middlewares/auth-handler.js";
import requestMiddleware from "@app/utils/request-middleware.js";
import validate, { Segment } from "@app/utils/validation.js";
import { postInput, postParameters } from "./validation-schema.js";
import * as controller from "./controller.js";

const routes = router();

routes.post(
	"/posts",
	authHandler,
	validate(postInput, Segment.Body),
	requestMiddleware(async (request, response) => {
		const postInput = request.body as Pick<Post, "title" | "content">;
		await controller.createPost(postInput, request.session.userId);
		response.sendStatus(200);
	})
);

routes.get(
	"/posts",
	authHandler,
	requestMiddleware(async (request, response) => {
		const { userId } = request.session;
		const posts = await controller.getPosts(userId);
		response.json(posts);
	})
);

routes.delete(
	"/posts/:id",
	authHandler,
	validate(postParameters, Segment.Parameters_),
	requestMiddleware(async (request, response) => {
		const { userId } = request.session;
		const { id: postId } = request.params;
		await controller.deletePost(userId, Number(postId));
		response.sendStatus(200);
	})
);

export default routes;
