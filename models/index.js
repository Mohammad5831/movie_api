const sequelize = require('../config/database');
const Movie = require('./movie.model');


module.exports = {
    sequelize,
    Movie,
};