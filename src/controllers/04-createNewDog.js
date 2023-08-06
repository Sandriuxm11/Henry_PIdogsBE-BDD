const {Dog} = require("../db");

const createNewDog = async ({imagen, name, altura, peso, años_de_vida, temperamento}) => {
    const newDog = await Dog.create({imagen, name, altura, peso, años_de_vida});
    await newDog.addTemperaments(temperamento);    
    return newDog;
};

module.exports = createNewDog;