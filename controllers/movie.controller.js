const { findMovieByTitle, createdMovie } = require("../services/movie.service");
const { findMovieFromOmdb } = require("../utilities/movie.util");

const getMovie = async (req, res) => {
    const title = decodeURIComponent(req.params.title);

    try {
        // Check local database (acts as a cache)
        const cachedMovie = await findMovieByTitle(title);
        // If movie found in DB, return cached version
        if (cachedMovie) {
            return res.status(200).json({
                success: true,
                message: 'اطلاعات فیلم با موفقیت دریافت شد',
                movie: cachedMovie,
                cached: true,
            });
        };
        // Fetch movie info from OMDB API
        const response = await findMovieFromOmdb(title);
        const movieInfo = response.data;
        // If movie not found in OMDB, return 404
        if (movieInfo.Response === 'False') {
            return res.status(404).json({
                success: false,
                message: 'فیلم موردنظر پیدا نشد'
            });
        };
        // Store new movie data in the local database
        const newMovie = await createdMovie(movieInfo);

        // Return movie data from OMDB with cached set to false
        return res.status(200).json({
            success: true,
            message: 'اطلاعات فیلم با موفقیت دریافت شد',
            movie: newMovie,
            cached: false,
        });

    } catch (error) {
        // Handle any unexpected server errors
        return res.status(500).json({
            success: false,
            message: 'خطا در دریافت فیلم',
            error: error.message,
        });
    }
};

module.exports = {
    getMovie,
};