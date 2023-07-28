const { Router } = require('express');
const {dogsHandler, dogsByIdHandler, createNewDogHandler} = require("../Handlers/dogsHandlers");
const dogsRoutes = Router();

dogsRoutes.get("/", dogsHandler);

dogsRoutes.get("/:id", dogsByIdHandler);

dogsRoutes.post("/", createNewDogHandler);

module.exports = dogsRoutes;