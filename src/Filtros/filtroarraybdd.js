const enlinea = require("./temperamentosEnlinea");

const filtroArrayBdd = async (arr) => {
    const mapeo = await arr.map(elemento => {
        return {
            id: elemento.id,
            imagen: elemento.imagen,
            name: elemento.name, 
            altura: elemento.altura,
            peso: elemento.peso,
            años_de_vida: elemento.años_de_vida,
            temperamento: elemento.Temperaments,
            created: elemento.created,
        }
    })
    return mapeo;
}

module.exports = filtroArrayBdd;