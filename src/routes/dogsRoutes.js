const { Router } = require('express');
const {allDogsHandler, dogsByNameHandler, dogsByIdHandler, createNewDogHandler} = require("../Handlers/dogsHandlers");
const dogsRoutes = Router();

dogsRoutes.get("/", allDogsHandler);

dogsRoutes.get("/:id", dogsByIdHandler);

dogsRoutes.post("/", createNewDogHandler);

module.exports = dogsRoutes;