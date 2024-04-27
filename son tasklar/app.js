let movie = prompt("Movie name: ").toLowerCase();

fetch(
    `https://freetestapi.com/api/v1/movies`
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let searchedMovies = data.filter(item => item.title.toLowerCase().includes(movie))
    if (searchedMovies.length > 0) {
        console.log(searchedMovies);
    } else {
      console.log('film tapılmadı.');
    }
  })

  