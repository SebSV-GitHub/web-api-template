import process from "node:process";
import express from "express";

const app = express();

app.get("/health-check", (_request, response) => {
	response.json({
		message: "Ok",
		uptime: process.uptime(),
	});
});

app.listen(8080, () => {
	console.log("Server listening on port 8080");
});
