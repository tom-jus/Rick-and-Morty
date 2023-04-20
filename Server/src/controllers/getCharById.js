const axios = require("axios");

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({name, gender, species, origin, image, status}) => {
        const character = {
            id, // id viene por parametro por eso no hacemos destructuring
            name,
            gender,
            species,
            origin,
            image,
            status
        }
    
        return res
                .writeHead(200, {"Content-type": "application/json"})
                .end(JSON.stringify(character))
    })
    .catch(error => {
        return res
            .writeHead(500, {"Content-type": "text/plain"})
            .end(error.message) // Si llega a haber un error, mostrame el message del error 500
    })
}


module.exports = {
    getCharById
};
 





















module.export = {
    getCharById
}