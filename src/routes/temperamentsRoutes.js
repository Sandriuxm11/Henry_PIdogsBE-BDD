const { Router } = require('express');

const temperamentsRoutes = Router();

temperamentsRoutes.get("/", (req, res) => {
    res.status(200).send("Se obtiene los temperamentos de los perros");
})

module.exports = temperamentsRoutes;