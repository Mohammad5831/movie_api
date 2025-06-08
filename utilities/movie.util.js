const axios = require('axios');
require('dotenv').config();

const findMovieFromOmdb = async (title) => {
    const movie = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: process.env.OMDB_API_KEY,
            t: title,
        },
    });
    return movie;
};

module.exports = {
    findMovieFromOmdb,
}