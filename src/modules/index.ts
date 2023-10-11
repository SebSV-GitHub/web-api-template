import { Router as router } from "express";
import usersModule from "./users/index.js";

const routes = router();

routes.use("/api", [usersModule]);

export default routes;
