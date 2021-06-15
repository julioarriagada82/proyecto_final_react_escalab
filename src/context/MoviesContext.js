import React, { createContext, useState, useEffect } from "react";
import { getPopularMovie, getMovieByGenre } from "../services/movie/movie";
import { getGenreMovie } from "../services/genre/genre";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  //Popular movies
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [errorMovies, setErrorMovies] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);

  //Genres
  const [loadingGenres, setLoadingGenres] = useState(false);
  const [errorGenres, setErrorGenres] = useState("");
  const [genres, setGenres] = useState([]);

  //Genre movie
  const [genreMovies, setGenreMovies] = useState([]);

  const [currentGenre, setCurrentGenre] = useState("");

  //Life Cycle
  useEffect(() => fetchPopularMovieThunk(), []);
  useEffect(() => fetchGenreThunk(), []);

  const fetchGenreThunk = () => {
    setLoadingGenres(true);

    const fetchGenreSuccess = (response) => {
      setLoadingGenres(false);
      setErrorGenres("");
      setGenres(response.data.genres);
    };

    const fetchGenreFailure = (response) => {
      setLoadingGenres(true);
      setErrorGenres(response);
    };

    return getGenreMovie().then(fetchGenreSuccess).catch(fetchGenreFailure);
  };

  const fetchPopularMovieThunk = () => {
    setLoadingMovies(true);
    const fetchPopularMovieSuccess = (response) => {
      setLoadingMovies(false);
      setErrorMovies("");
      setPopularMovies(response.data.results);
    };

    const fetchPopularMovieFailure = (response) => {
      setLoadingMovies(true);
      setErrorMovies(response);
    };

    return getPopularMovie()
      .then(fetchPopularMovieSuccess)
      .catch(fetchPopularMovieFailure);
  };

  const fetchMovieByGenreThunk = (genreId) => {
    setLoadingMovies(true);

    const fetchMovieByGenreSuccess = (response) => {
      setLoadingMovies(false);
      setErrorMovies("");
      setGenreMovies(response.data.results);
    };

    const fetchMovieByGenreFailure = (response) => {
      setLoadingMovies(false);
      setErrorMovies(response);
    };

    return getMovieByGenre(genreId)
      .then(fetchMovieByGenreSuccess)
      .catch(fetchMovieByGenreFailure);
  };

  const getMovieByGenreId = (genreId) => {
    if (genreId && genreId !== currentGenre) {
      setCurrentGenre(genreId);
      fetchMovieByGenreThunk(genreId);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        errorGenres,
        errorMovies,
        loadingGenres,
        loadingMovies,
        genres,
        popularMovies,
        genreMovies,
        currentGenre,
        getMovieByGenreId,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
