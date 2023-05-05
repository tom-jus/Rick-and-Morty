const { server } = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3001;


// Crear server con DB
server.listen(PORT, async () => {
    console.log(`Server raised in port: http://localhost:${PORT}`);
    await conn.sync({ force: true });
  });



// Crear server
// server.listen(PORT, () => {
//     console.log(`Server raised in port: ${PORT}`);
//  });