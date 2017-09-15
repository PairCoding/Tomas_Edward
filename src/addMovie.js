const addMovie = (movie) => {
    return fetch('/api/movies',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
      body:JSON.stringify(movie)
    })
        .then(response => response.json());
};

module.exports = addMovie;