import React, { Fragment, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Grid from "@material-ui/core/Grid";
import GenreMovie from "../../components/common/genre-movie/GenreMovie.component";

import ErrorMessage from "../../components/common/error-message/ErrorMessage.component";
import Loader from "../../components/common/loader/Loader.component";

import CollectionList from "../../components/collection/collection-list/CollectionList.component";

const HomePopularMovie = () => {
  const {
    popularMovies,
    genres,
    genreMovies,
    getMovieByGenreId,
    currentGenre,
    errorMovies,
    loadingMovies,
  } = useContext(MoviesContext);

  const applyFilter = (genreId) => {
    getMovieByGenreId(genreId);
  };

  return (
    <Fragment>
      <div className="root">
        <Grid container spacing={3} justify="center">
          <GenreMovie
            getData={genres}
            onSelect={applyFilter}
            selected={currentGenre}
          />
        </Grid>
      </div>
      {loadingMovies ? (
        <Loader />
      ) : errorMovies ? (
        <ErrorMessage />
      ) : (
        <CollectionList
          movies={genreMovies.length > 0 ? genreMovies : popularMovies}
        />
      )}
    </Fragment>
  );
};

export default HomePopularMovie;
