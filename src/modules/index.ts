import { Router as router } from "express";
import usersModule from "./users/index.js";
import authenticationsModule from "./authentications/index.js";

const routes = router();

routes.use("/api", [usersModule, authenticationsModule]);

export default routes;
