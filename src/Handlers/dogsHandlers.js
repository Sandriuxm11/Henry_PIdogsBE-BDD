const getAllDogs = require("../controllers/01-getAlldogs");
const getDogById = require("../controllers/03-getDogById");
const getRazaByName = require("../controllers/02-getRazaByName");
const createNewDog = require("../controllers/04-createNewDog");

const dogsHandler = async (req, res) => {
   
    // Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe la raza, debe mostrar un mensaje adecuado.
    // Debe buscar tanto los de la API como los de la base de datos.
    
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
    const {imagen, name, altura, peso, años_de_vida} = req.body;
        
        try {
            const newDog = await createNewDog(imagen, name, altura, peso, años_de_vida);
            res.status(201).json(newDog);
        } 
        catch (error) {
            res.status(400).json({error: error.message})
        }
    };

module.exports = {dogsHandler, dogsByIdHandler, createNewDogHandler};