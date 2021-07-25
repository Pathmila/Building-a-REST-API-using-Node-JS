const express = require("express");

const app = express();
const port = 3000;

//parse JSON using express
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

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
    }
];

//get the movie list in the form of JSON
app.get('/movie' , (req,res) => {
    res.json(movies)
})

//add a movie to the list
app.post('/movie', (req,res) => {
    const movie = req.body

    console.log(movie)
    movies.push(movie)
    res.send("Movie is added to the list");
})

//search for a movie from the database
app.get('/movie/:id', (req,res) => {
    const id = req.params.id
    
    for(let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return
        }
    }

    res.status(404).send("Movie not found")
})

//delete movie from the list
app.delete('/movie/:id' , (req,res) => {
    const id = req.params.id

    movies = movies.filter (movie => {
        if(movie.id !== id){
            return true;
        }
        return false;
    })
    res.send("Movie has been deleted")
})

//set the server to listen at port
app.listen(port, () => console.log(`Server listening at port ${port}`))