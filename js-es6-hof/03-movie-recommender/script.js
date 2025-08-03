// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...

const topRatedMovies = movies.filter(movie => movie.rating >= 8);
const movieDescriptions = movies.map(movie => `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`);
const movieListHeader = document.createElement("h2");
movieListHeader.textContent = "Top Rated Movies (Rating ≥ 8)";
document.body.appendChild(movieListHeader);

topRatedMovies.forEach(movie => {
  const p = document.createElement("p");
  p.textContent = `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`;
  document.body.appendChild(p);
});


function recommend(movie, minRating = 8) {
  return movie.rating >= minRating;
}

const recommendedMovies = movies.filter(movie => recommend(movie));

const recommendedHeader = document.createElement("h2");
recommendedHeader.textContent = "Recommended Movies";
document.body.appendChild(recommendedHeader);

recommendedMovies.forEach(movie => {
  const p = document.createElement("p");
  p.textContent = `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`;
  document.body.appendChild(p);
});