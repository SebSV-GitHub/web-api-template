import { Router as router } from "express";
import requestMiddleware from "@app/utils/request-middleware.js";
import type Credentials from "@app/types/credentials.js";
import validate, { Segment } from "@app/utils/validation.js";
import validationSchema from "./validation-schema.js";
import * as controller from "./controller.js";

const routes = router();

routes.post(
	"/authentications",
	validate(validationSchema, Segment.Body),
	requestMiddleware(async (request, response) => {
		const credentials = request.body as Credentials;
		const token = await controller.authenticate(credentials);
		response.json({ token });
	})
);

export default routes;
