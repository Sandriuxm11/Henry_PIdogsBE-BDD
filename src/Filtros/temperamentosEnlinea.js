const enlinea = (array) => {
    let newArr = [];

    array.forEach(element => {
        newArr.push(Object.values(element));
    });

    // for (i=0; i<=array.length; i++){
    //     newArr.push(Object.values(array[i]));
    // }

    // array.map(elemento => Object.values({elemento}).toString()) //.join(", "));

    return newArr.join(", ");
};

module.exports = enlinea;