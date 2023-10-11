import process from "node:process";
import express from "express";
import modules from "@app/modules/index.js";
import loaders from "@app/loaders/index.js";

const app = express();

app.get("/api/health-check", (_request, response) => {
	response.json({
		message: "Ok",
		uptime: process.uptime(),
	});
});

app.use(loaders);
app.use(modules);

app.listen(8080, () => {
	console.log("Server listening on port 8080");
});
