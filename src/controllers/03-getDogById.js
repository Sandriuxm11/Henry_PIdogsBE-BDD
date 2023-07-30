const {Dog} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const arrayFiltrada = require("../Filtros/filtroarray");

const getDogById = async (id, source) => {
    
    const allDogsRaw = (await axios.get(URL)).data;

    const allDogs = arrayFiltrada(allDogsRaw);

    const dogId = source === "bdd"
        ? await Dog.findByPk(id)
        : await allDogs.find(dog => dog.id === Number(id));

    if(!dogId) throw Error ("NO EXISTE EL ID BUSCADO");
    else return dogId;
};

module.exports = getDogById;