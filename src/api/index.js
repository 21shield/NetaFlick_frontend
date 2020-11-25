export const loadPopMovies = () => {
  return fetch(`http://localhost:3000/movies`).then((r) => r.json());
};
