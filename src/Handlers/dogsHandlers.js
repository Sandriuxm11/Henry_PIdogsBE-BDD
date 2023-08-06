const getAllDogs = require("../controllers/01-getAlldogs");
const getDogById = require("../controllers/03-getDogById");
const getRazaByName = require("../controllers/02-getRazaByName");
const createNewDog = require("../controllers/04-createNewDog");

const dogsHandler = async (req, res) => {
    const {name} = req.query;

        try {
            const resultados = !name ? await getAllDogs() : await getRazaByName(name);
            res.status(200).json(resultados);        
        } 
        catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    
const dogsByIdHandler = async (req, res)=>{
    // Tiene que incluir los datos de los temperamentos asociadas a esta raza.
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";
        
        try {
            const dogById = await getDogById(id, source);
            res.status(200).json(dogById);
        } 
        catch (error) {
            res.status(400).json({error: error.message});
        }
    };

const createNewDogHandler = async (req, res)=>{
    // Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
    // Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).
    const {imagen, name, altura, peso, años_de_vida, temperamento} = req.body;
        
        try {
            const newDog = await createNewDog({imagen, name, altura, peso, años_de_vida, temperamento});
            res.status(201).json(newDog);
        } 
        catch (error) {
            res.status(400).json({error: error.message})
        }
    };

module.exports = {dogsHandler, dogsByIdHandler, createNewDogHandler};