const express = require("express")

const app = express()
const port = 3000

let movies = [
    {
        id: '1',
        title: 'Harry Potter',
        director: '	Chris Columbus',
        release_year: '2001'
    },
    {
        id: '2',
        title: 'how to train your dragon',
        director: 'Chris Sanders',
        release_year: '2010'
    },
];

//get the movie list in the form of JSON
