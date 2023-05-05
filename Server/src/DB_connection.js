require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { usersModel, favoritesModel } = require('./models/index');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);


// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
usersModel(sequelize); 
//
favoritesModel(sequelize); 


// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });
// Funciones creadas automaticamente por Sequelize
// addUser(id)    addFavorite(id)      addUsers([ids])    addFavorites([ids])


module.exports = {
   ...sequelize.models, // es como decir {User, Favorite}
   conn: sequelize,
};
