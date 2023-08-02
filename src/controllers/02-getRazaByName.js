const getAllDogs = require ("./01-getAlldogs");

const getRazaByName = async (name) => {
    const allDogs = await getAllDogs();

    const filteredName = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));

    if (!filteredName.length) throw Error ("NO EXISTE LA RAZA DE PERRO BUSCADA");
    else return filteredName;
};

module.exports = getRazaByName;