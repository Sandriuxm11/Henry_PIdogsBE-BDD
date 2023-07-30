const {Dog} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const getRazaByName = (name) => {
    return("NIY: ENCUENTRO LA INFO DE LOS PERROS CON EL NOMBRE: "+name);
};

module.exports = getRazaByName;