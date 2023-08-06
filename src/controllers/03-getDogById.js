const {Dog, Temperament} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const arrayFiltrada = require("../Filtros/filtroarray");
const filtroArrayBdd = require("../Filtros/filtroarraybdd");

const getDogById = async (id, source) => {
    
    const allDogsRaw = (await axios.get(URL)).data;
    const allDogs = arrayFiltrada(allDogsRaw);

    const allDogsBddRaw = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    const bddDogs = await filtroArrayBdd(allDogsBddRaw);

    const dogId = source === "bdd"
        ? await bddDogs.find(dog => dog.id === id)
        : await allDogs.find(dog => dog.id === Number(id));

    if(!dogId) throw Error ("NO EXISTE EL ID BUSCADO");
    else return dogId;
};

module.exports = getDogById;