const arrayFiltrada = (arr) => {
    const mapeo = arr.map(elemento => {
        return {
            id: elemento.id,
            imagen: elemento.image,
            name: elemento.name,
            altura: elemento.height,
            peso: elemento.weight,
            años_de_vida: elemento.life_span,
            created: false,
        }
    })
    return mapeo;
}

module.exports = arrayFiltrada;