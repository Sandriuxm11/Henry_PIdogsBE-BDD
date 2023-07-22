const { Router } = require('express');
const getAllTemp = require("../controllers/05-getTemperament");

const temperamentsRoutes = Router();

temperamentsRoutes.get("/", (req, res) => {
    // Obtiene todos los temperamentos existentes.
    // Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
    try {
        const allTemperaments = getAllTemp();
        res.status(200).json(allTemperaments);
    } 
    catch (error) {
        
    }
})

module.exports = temperamentsRoutes;