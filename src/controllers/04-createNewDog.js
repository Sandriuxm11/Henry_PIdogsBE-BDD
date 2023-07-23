const {Dog} = require("../db");

const createNewDog = async (imagen, name, altura, peso, años_de_vida) => {
    const newDog = await Dog.create({imagen, name, altura, peso, años_de_vida});
    return newDog;
};

module.exports = createNewDog;