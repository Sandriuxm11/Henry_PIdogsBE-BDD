const {Dog} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const arrayFiltrada = require("../Filtros/filtroarray");

const getRazaByName = async (name) => {
    // Pasar todo a LowerCase - Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // 
    // const nameFinal = toLowerCase(name);

    const databaseDogs = await Dog.findAll({where: {name : name}});

    const apiDogsRaw = (await axios.get(URL)).data;
    const apiDogs = arrayFiltrada(apiDogsRaw);
    const nombreBuscado = apiDogs.filter(dog => {
        return dog.name === name;
    })

    const results = [...databaseDogs, ...nombreBuscado];
    
    if (!results.length) throw Error ("NO EXISTE LA RAZA DE PERRO BUSCADA");
    else return results; 
};

module.exports = getRazaByName;