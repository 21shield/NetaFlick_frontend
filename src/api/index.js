export const loadPopMovies = () => {
  return fetch(`http://localhost:3000/movies`).then((r) => r.json());
};

export const searchMovies = (searchTerm) => {
  return fetch(`http://localhost:3000/search/${searchTerm}`).then((r) =>
    r.json()
  );
};

export const updateMovie = (movId, val) => {
  console.log(movId, val);
  return fetch(`http://localhost:3000/movies/updateMovie`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: movId,
      value: val,
    }),
  }).then((r) => {
    r.json();
  });
};
