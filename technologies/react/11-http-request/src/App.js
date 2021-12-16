import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovieHandler() {
    const response = await fetch("https://www.swapi.tech/api/films/");
    const data = await response.json();
    const transformedMovies = data.result.map((movie) => {
      return {
        id: movie.uid,
        title: movie.properties.title,
        openingText: movie.properties.opening_crawl,
        releaseDate: movie.properties.release_date,
      };
    });
    setMovies(transformedMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
