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

document.getElementById('yes').addEventListener("click", function () {
    getMovies().then((movies) => {
        console.log('Here are all the movies: ');
        let movie = "";
        movies.forEach(({title, rating, id}) => {
            movie += (`<tr>
            <td>${title}</td>
            <td>${rating}</td>
            <td>${id}</td>
        </tr>`);
        });
$(".movieContainer").removeClass("hidden");
        $("#movieTable").html('').append(movie);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
console.log("click listener")
});



    // $('#inputs').show();





