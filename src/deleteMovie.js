const deleteMovie = (movie) => {
    return fetch('/api/movies/'+movie.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(movie)
    })
        .then(response => response.json());
};

module.exports = deleteMovie;