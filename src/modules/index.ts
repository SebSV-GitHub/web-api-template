import { Router as router } from "express";
import authenticationsModule from "./authentications/index.js";
import usersModule from "./users/index.js";
import postsModule from "./posts/index.js";

const routes = router();

routes.use("/api", [usersModule, authenticationsModule, postsModule]);

export default routes;
