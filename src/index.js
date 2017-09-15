/* es6 modules and imports*/

import sayHello from './hello';
import $ from "jquery";

sayHello('World');
import getLoadMsg from "./loading";


// $('#inputs').hide();
// $(".container").text(`${getLoadMsg()}`);
/**
 * require style imports
 */
const getMovies = require('./getMovies.js');
const addMovie = require('./addMovie.js');
const deleteMovie = require('./deleteMovie.js');

document.getElementById('yes').addEventListener("click", function () {
    getMovies().then((movies) => {
        console.log('Here are all the movies: ');
        let movie = "";
        movies.forEach(({id, title, rating}) => {
            movie += (`<tr>
            <td>${id}</td>
            <td>${title}</td>
            <td>${rating}</td>
            <td><button class = 'delete'>Delete</button></td>

        </tr>`);
        });
$(".container").hide();

$("#movieTable").on('click','.delete',function(){
    let $button = $(this);
    deleteMovie({id:$button.parent().parent().children().first().html()}).then(function(){
        $button.parent().parent().remove();
    });
   //console.log($(this).parent().parent().children().first().html())
});

$(".movieContainer").removeClass("hidden");
        $("#movieTable").html('').append(movie);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
console.log("click listener")
});

document.getElementById('movieButton').addEventListener("click",function(e){
    e.preventDefault();
let title = $("#addMovie").val();
let rating = $("#addRating").val();
    addMovie({title,rating}).then((movie) =>{
        let movieName = (`<tr>
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td>${movie.rating}</td>
            <td><button class = 'delete'>Delete</button></td>
        </tr>`);
        $("#movieTable").append(movieName);
    })
});


    // $('#inputs').show();





