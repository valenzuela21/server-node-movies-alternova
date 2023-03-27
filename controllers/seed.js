const {response, request} = require('express');

const Movie = require('../models/movies');

const generateSeed = async (req = request, res = response) => {
    Movie.collection.drop();
    await Movie.create([
        {
            "name": "John Wick 4",
            "gender": "action",
            "type": "series",
            "visible": true,
            "image": "https://i0.wp.com/www.themoviedb.org/t/p/w220_and_h330_face/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
            "score": "1"
        },
        {
            "name": "Shazam",
            "gender": "action",
            "type": "movie",
            "visible": true,
            "image": "https://www.themoviedb.org/t/p/original/9mcdazJrMfL9oW3X3XaDkju22po.jpg",
            "score": "2"
        },
        {
            "name": "El Hombre Acero",
            "gender": "action",
            "type": "movie",
            "visible": true,
            "image": "https://www.themoviedb.org/t/p/original/5JW44QGgpEWx4aWXM0uVSi2xtrI.jpg",
            "score": "2"
        },
        {
            "name": "La Huesped Maldita",
            "gender": "terror",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//qOL4n3zzaCrA6hE9LD7NirvPm4V.jpg",
            "score": "5"
        },
        {
            "name": "El Gato con Botas: El último deseos",
            "gender": "fantasy",
            "type": "movie",
            "visible": true,
            "image": "https://i0.wp.com/www.themoviedb.org/t/p/w220_and_h330_face/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg",
            "score": "5"
        },
        {
            "name": "Ghost in the Shell: El alma de la máquina",
            "gender": "action",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//osl3XihWtMENspg6Elk128J65Jj.jpg",
            "score": "5"
        },
        {
            "name": "At Midnight",
            "gender": "romantic",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//k6E1f3XvTq0sa02nUykPCwFKsBx.jpg",
            "score": "5"
        },
        {
            "name": "Wonderland",
            "gender": "romantic",
            "type": "movie",
            "visible": true,
            "image": "https://i0.wp.com/www.themoviedb.org/t/p/w220_and_h330_face/x8MKyT7gOg8wvl5rb69V1HZNTzU.jpg",
            "score": "5"
        },
        {
            "name": "Tu casa o la mía",
            "gender": "romantic",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//a5xp3UCaIluSt0fpUQUiJ39EnM1.jpg",
            "score": "4"
        },
        {
            "name": "El lobo de Wall Street",
            "gender": "suspense",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//jTlIYjvS16XOpsfvYCTmtEHV10K.jpg",
            "score": "4"
        },
        {
            "name": "Los Croods",
            "gender": "fantasy",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//3X3qtBTgKt5mCB30RJwbIjgjzdw.jpg",
            "score": "4"
        },
        {
            "name": "Los Increibles 2",
            "gender": "fantasy",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//rebOnIOf2AYadW3TsvaPWeghKdG.jpg",
            "score": "4"
        },
        {
            "name": "Toy Story 2",
            "gender": "fantasy",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//8OTDKkJv2jXg5ZHKazFxBAttKkR.jpg",
            "score": "4"
        },
        {
            "name": "Más respeto que soy tu madre",
            "gender": "comedy",
            "type": "movie",
            "visible": true,
            "image": "https://image.tmdb.org/t/p/w300//zmfiG4vAPdII9XDY1smay5QuI1f.jpg",
            "score": "5"
        }
    ]);

    res.json({
        msg: "Insert list movies success fully"
    })
}

module.exports = {
    generateSeed
}