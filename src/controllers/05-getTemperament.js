const {Temperament} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const arrayFiltrada = require("../Filtros/filtroarray");

// Obtiene todos los temperamentos existentes.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const getAllTemp = async () => {

    const apiDogsRaw = (await axios.get(URL)).data;
    const apiDogs = arrayFiltrada(apiDogsRaw);

    let temperamentosAllDogs = apiDogs.map(dog => dog.temperamento).map(dog => dog?.split(', '));

    let temperamentos = [...new Set(temperamentosAllDogs.flat())];
    
    temperamentos.forEach(temp => {
        if (temp){
        Temperament.findOrCreate({
            where: {
                name: temp,
            }
        })}
    })

    return await Temperament.findAll();
};

module.exports = getAllTemp;