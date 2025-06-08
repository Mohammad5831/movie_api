const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('movie', {
    title: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    year: {
        type: DataTypes.INTEGER,
    },
    director: {
        type: DataTypes.STRING,
    },
    plot: {
        type: DataTypes.TEXT,
    },
    imdb_rating: {
        type: DataTypes.FLOAT,
    },
}, {
    timestamps: true,
});

module.exports = Movie;