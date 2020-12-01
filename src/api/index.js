export const loadPopMovies = () => {
  return fetch(`http://localhost:3000/movies`).then((r) => r.json());
};

export const searchMovies = (searchTerm) => {
  return fetch(`http://localhost:3000/search/${searchTerm}`).then((r) =>
    r.json()
  );
};
