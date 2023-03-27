const {response} = require('express');

const Movie = require('../models/movies');

const typeSearch = async(term = '', res = response) =>{
    const regex =  new RegExp(term, 'i');
    const resp =  await  Movie.find({type: regex, visible: true});

    res.json({
        results: resp
    });
}


const genderSearch =  async(term = '', res = response) => {
    const regex =  new RegExp(term, 'i');
    const resp =  await  Movie.find({gender: regex, visible: true});

    res.json({
        results: resp
    });
}


const nameSearch = async(term = '', res = response) => {
    const regex =  new RegExp(term, 'i');
    const resp =  await  Movie.find({name: { $regex: regex }, visible: true});

    res.json({
        results: resp
    });
}


const search = (req, res = response) => {
    const {action, term} = req.params;

   switch (action){
       case 'type':
           typeSearch(term, res);
           break;
       case 'gender':
           genderSearch(term,res);
           break;
       case 'name':
            nameSearch(term, res);
           break;
       default:
           res.status(500).json({msg: 'Not found'})
   }



}

module.exports = {
    search
}