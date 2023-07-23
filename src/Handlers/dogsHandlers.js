const getAllDogs = require("../controllers/01-getAlldogs");
const getDogById = require("../controllers/03-getDogById");
const getRazaByName = require("../controllers/02-getRazaByName");
const createNewDog = require("../controllers/04-createNewDog");

const allDogsHandler = (req, res) => {
    const {name} = req.query;

    if(name !== undefined) res.status(200).send(`NIY: TRAE TODA LA INFORMACIÓN DEL PERRO ${name}`);
    else {res.status(200).send("NIY: TRAE LA INFORMACIÓN DE TODOS LOS PERROS")};
    }
    // try {
    //     const allDogs = getAllDogs();

    //     // if(!allDogs) throw Error ("No hay perros existentes");
    //     res.status(200).json(allDogs);
    // } 

    // catch (error) {
    //     res.status(404).json({error: error.message});
    // }
    // res.status(200).send("Obtiene todas las razas de los perros");
// };

const dogsByIdHandler = (req, res)=>{
    // Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
    // La raza es recibida por parámetro (ID).
    // Tiene que incluir los datos de los temperamentos asociadas a esta raza.
    // Debe funcionar tanto para los perros de la API como para los de la base de datos.
        const {id} = req.params;
        res.status(200).send(`NIY: RECIBO EL DETALLE DE LOS PERROS DE ACUERDO AL ID ${id}`);
    
        // if(!id) throw Error ("NO EXISTE EL ID BUSCADO");
    
        // else {
            // try {
            //     const dog = getDogById(id);
            //     res.status(200).json(dog);
            // } 
            // catch (error) {
            //     res.status(404).json({error: error.message});
            // }
        // }
    };

const createNewDogHandler = async (req, res)=>{
    // Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
    // Toda la información debe ser recibida por body.
    // Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).
        
        // res.status(200).send(`NIY: ESTOY CREANDO UN NUEVO PERRO CON LOS SIGUIENTES DATOS:
        // NOMBRE: ${name},
        // IMAGEN: ${imagen},
        // ALTURA: ${altura},
        // PESO: ${peso},
        // AÑOS DE VIDA: ${años_de_vida},
        // `)
    
        try {
            const {imagen, name, altura, peso, años_de_vida} = req.body;
            const newDog = await createNewDog(imagen, name, altura, peso, años_de_vida);
            res.status(201).json(newDog);
        } 
        catch (error) {
            res.status(400).json({error: error.message})
        }
    };

module.exports = {allDogsHandler, dogsByIdHandler, createNewDogHandler};