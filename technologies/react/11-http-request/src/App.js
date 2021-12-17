import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  async function fetchMovieHandler() {
    setIsLoading(true);
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
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
