const {response, request} = require('express');
const Movie = require('../models/movies');
const getMoviesALL = async (req = request, res = response) => {
    const query = {visible: true};
    const [total, movies] = await Promise.all([
        Movie.countDocuments(query),
        Movie.find(query)
    ]);
    res.json({
        total,
        movies
    });
}

const getMoviesDetail = async (req = request, res = response) => {
    const movie = await Movie.findById(req.params.id);
    res.json({
        movie
    });
}



const postMovie =  async(req = request, res = response) => {
    try{
        const {name, gender, type, visible, score, image} = req.body;
        const movie =  new Movie({name, gender, type, visible, score, image});
        await  movie.save();
        res.json({
            movie
        })
    }catch (error){
        console.log(error);
        res.status(500).json({
            msg: 'Error in insert movie'
        })
    }

}

const updatePoint = async (req = request, res = response) => {
    const {id} = req.params;
    console.log(id);
}

const movieHighlights = async (req = request, res = response) => {
    const {banner} = req.body;
    let io = req.app.get('socketIO');
        io.emit('send-movie-first', banner);
    res.json({
        msg: "New banner of sockets.IO"
    })
}



module.exports = {
    getMoviesALL,
    postMovie,
    updatePoint,
    getMoviesDetail,
    movieHighlights
}