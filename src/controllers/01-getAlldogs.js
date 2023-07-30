const {Dog} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const arrayFiltrada = require("../Filtros/filtroarray");

const getAllDogs = async () => {
    const bddDogs = await Dog.findAll();
    const apiDogsRaw = (await axios.get(URL)).data;
    const apiDogs = arrayFiltrada(apiDogsRaw);

    return [...bddDogs, ...apiDogs];
};

module.exports = getAllDogs;