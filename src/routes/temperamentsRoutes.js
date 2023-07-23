const { Router } = require('express');

const {getAllTemperamentsHandler} = require("../Handlers/temperamentHandlers");
const temperamentsRoutes = Router();

temperamentsRoutes.get("/", getAllTemperamentsHandler);

module.exports = temperamentsRoutes;