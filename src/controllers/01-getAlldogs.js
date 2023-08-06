const {Dog, Temperament} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const arrayFiltrada = require("../Filtros/filtroarray");
const filtroArrayBdd = require("../Filtros/filtroarraybdd");

const getAllDogs = async () => {
    const bddDogsRaw = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    const bddDogs = await filtroArrayBdd(bddDogsRaw);
    const apiDogsRaw = (await axios.get(URL)).data;
    const apiDogs = arrayFiltrada(apiDogsRaw);

    return [...bddDogs, ...apiDogs];
};

module.exports = getAllDogs;