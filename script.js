key = bea1bb5e;

let movieName = document.querySelector('#movie-name');
let searchButton = document.querySelector('#search-button');
let result = document.querySelector('#result-container');

// function to retrieve information from movie api using user input

let getMovie = () =>{
  let userMovieName = movieName.value;
  let url = `https://www.omdbapi.com/?t=${userMovieName}&apikey=${key}`;

  if (userMovieName.length <= 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a movie name</h3>`;
  }
  else {
    fetch(url)
  }
}