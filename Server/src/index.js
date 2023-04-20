const http = require('http');
const { getCharById } = require('./controllers/getCharById');

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    // Se utiliza para que el front se pueda conectar con el back

    const id = req.url.split('/').at(-1);

    if(req.url.includes('/rickandmorty/character')) {
        getCharById(res, +id);
    }
})
.listen(3001, 'localhost');






// if(req.url.includes('/rickandmorty/character')) {
//     const id = req.url.split('/').at(-1);
//     // Obtenemos el id de la URL.
//     // Al ser una URL, id será un String.
//     const characterFound = data.find((character) => character.id === +id)
//     // Hacemos una busqueda del id que queremos, y con el +id lo pasamos a Number.

//     return res
//     .writeHead(200, {"Content-type": "application/json"})
//     .end(JSON.stringify(characterFound));
//     // JSON.stringify convierte un valor de JavaScript en una cadena JSON.
// }

// const http = require('http');
// const { getCharById } = require("./Controllers/getChardByld")
// // const data = require('./Utils/data')

// http
// .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1)

//     //     // Buscar id dentro de un objeto
//         // const characterFound = data.find((character) => {
//         //     return character.id === +id
//         // })
//     //     res
//     //     .writeHead(200, {"Content-type": "application/json"})
//     //     .end(JSON.stringify(characterFound))
//     // }
//     if(req.url.includes('/rickandmorty/character')){
//         getCharById(res, +id)
//     }
// })
// .listen(3001, "localhost")