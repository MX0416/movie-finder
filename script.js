let key = "bea1bb5e";

let movieName = document.querySelector('#movie-name');
let searchButton = document.querySelector('#search-button');
let result = document.querySelector('#result-container');

// function to retrieve information from movie api using user input

let getMovie = () =>{
  let userMovieName = movieName.value;
  let url = `https://www.omdbapi.com/?t=${userMovieName}&apikey=${key}`;

  // if the input bar is empty, then display error message
  if (userMovieName.length <= 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a movie name</h3>`;
  }
  // if the input bar is not empty, check database for movie
  else {
    fetch(url).then((resp) => resp.json()).then((data) =>{
      // if the movie exists in the database, then pull the info and display
      if (data.Response == 'True') {
        console.log(data)
        result.innerHTML = `
          <div class="info">
            <img src=${data.Poster} class="poster">
            <div>
              <h2>${data.Title}</h2>
              <div class="rating">
                <img src="star-icon.svg">
                <h4>${data.imdbRating}</h4>
              </div>
              <div class="details">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
              </div>
              <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
            </div>
          </div>
          <h3>Plot:</h3>
          <p>${data.Plot}</p>
          <h3>Cast:</h3>
          <p>${data.Actors}</p>
        `;
      }

      // if the movie couldn't be found in the database, then display error message
      else {
        result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
      }
    })

      // function to catch errors
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};

searchButton.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);