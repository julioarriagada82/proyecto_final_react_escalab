import React, { createContext, useState, useEffect } from "react";
import { getDetailMovie, getPosterMovie } from "../services/movie/movie";
import { getCastingMovie } from "../services/casting/casting";

export const MovieDetailsContext = createContext();

const MovieDetailsContextProvider = ({ children }) => {
  const movie_id = window.location.pathname.split("/")[3];
  const [loadingDetailMovie, setLoadingDetailMovie] = useState(false);
  const [errorDetailMovie, setErrorDetailMovie] = useState("");
  const [detailMovie, setDetailMovie] = useState();

  const [loadingCastingMovie, setLoadingCastingMovie] = useState(false);
  const [errorCastingMovie, setErrorCastingMovie] = useState("");
  const [castingMovie, setCastingMovie] = useState();

  const [loadingImagesMovie, setLoadingImagesMovie] = useState(false);
  const [errorImagesMovie, setErrorImagesMovie] = useState("");
  const [imagesMovie, setImagesMovie] = useState();

  useEffect(() => fetchDetailMovieThunk(movie_id), [movie_id]);
  useEffect(() => fetchCastingMovieThunk(movie_id), [movie_id]);
  useEffect(() => fetchImagesMovieThunk(movie_id), [movie_id]);

  const fetchImagesMovieThunk = (movie_id) => {
    setLoadingImagesMovie(false);
    const fetchImagesMovieSuccess = (response) => {
      setLoadingImagesMovie(true);
      setErrorImagesMovie("");
      setImagesMovie(response.data.posters);
    };

    const fetchImagesMovieFailure = (response) => {
      setLoadingImagesMovie(false);
      setErrorImagesMovie(response);
    };

    return getPosterMovie(movie_id)
      .then(fetchImagesMovieSuccess)
      .catch(fetchImagesMovieFailure);
  };

  const fetchDetailMovieThunk = (movie_id) => {
    setLoadingDetailMovie(false);
    const fetchDetailMovieSuccess = (response) => {
      setLoadingDetailMovie(true);
      setErrorDetailMovie("");
      setDetailMovie(response.data);
    };

    const fetchDetailMovieFailure = (response) => {
      setLoadingDetailMovie(false);
      setErrorDetailMovie(response);
    };

    return getDetailMovie(movie_id)
      .then(fetchDetailMovieSuccess)
      .catch(fetchDetailMovieFailure);
  };

  const fetchCastingMovieThunk = (movie_id) => {
    setLoadingCastingMovie(false);

    const fetchCastingMovieSuccess = (response) => {
      setLoadingCastingMovie(true);
      setErrorCastingMovie("");
      setCastingMovie(response.data.credits.cast);
    };

    const fetchCastingMovieFailure = (response) => {
      setLoadingCastingMovie(false);
      setErrorCastingMovie(response);
    };

    return getCastingMovie(movie_id)
      .then(fetchCastingMovieSuccess)
      .catch(fetchCastingMovieFailure);
  };

  return (
    <MovieDetailsContext.Provider
      value={{
        loadingDetailMovie,
        loadingCastingMovie,
        loadingImagesMovie,
        errorDetailMovie,
        errorCastingMovie,
        errorImagesMovie,
        detailMovie,
        castingMovie,
        imagesMovie,
      }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
};

export default MovieDetailsContextProvider;
