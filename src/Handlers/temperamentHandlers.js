const getAllTemp = require("../controllers/05-getTemperament");

const getAllTemperamentsHandler = async (req, res) => {
    // res.status(200).send("NIY: ESTA RUTA TRAE TODOS LOS TEMPERAMENTOS EXISTENTES");
    // Obtiene todos los temperamentos existentes.
    // Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
    try {
        const allTemperaments = await getAllTemp();
        res.status(200).json(allTemperaments);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {getAllTemperamentsHandler};