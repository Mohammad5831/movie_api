const { Movie } = require("../models")

const findMovieByTitle = async (title) => {
    const movie = await Movie.findOne({
        where: {title},
    });
    return movie;
};

const createdMovie = async(data) => {
    const movie = await Movie.create({
        title: data.Title,
        year: parseInt(data.Year),
        director: data.Director,
        plot: data.Plot,
        imdb_rating: parseFloat(data.imdbRating),
    });
    return movie;
};

module.exports = {
    findMovieByTitle,
    createdMovie,
};