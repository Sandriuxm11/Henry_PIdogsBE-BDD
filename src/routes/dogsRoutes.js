const { Router } = require('express');

const dogsRoutes = Router();

dogsRoutes.get("/", (req, res) => {
    res.status(200).send("Obtiene todas las razas de los perros");
});

dogsRoutes.get("/name=*", (req, res)=>{
    res.status(200).send("Obtiene la raza por nombre buscado");
});

dogsRoutes.get("/:id", (req, res)=>{
    res.status(200).send("Obtiene la raza por ID buscado");
});

dogsRoutes.post("/", (req, res)=>{
    res.status(200).send("Crea una raza nueva de perro");
});

module.exports = dogsRoutes;