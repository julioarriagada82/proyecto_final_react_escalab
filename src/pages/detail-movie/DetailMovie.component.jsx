import React, { Fragment, useContext } from "react";
import { MovieDetailsContext } from "./../../context/MovieDetailsContext";
import Loader from "../../components/common/loader/Loader.component";
import Details from "./../../components/movie/detail/Details.component";
import ErrorMessage from "../../components/common/error-message/ErrorMessage.component";

const DetailMovie = () => {
  const {
    loadingDetailMovie,
    loadingCastingMovie,
    loadingImagesMovie,
    errorDetailMovie,
    errorCastingMovie,
    detailMovie,
    castingMovie,
    imagesMovie
  } = useContext(MovieDetailsContext);

  return (
    <Fragment>
      {errorDetailMovie ? (
        <ErrorMessage />
      ) :
      loadingDetailMovie && detailMovie ? (
        <Fragment>
          <Details
            detailMovie={detailMovie}
            castingMovie={castingMovie}
            imagesMovie={imagesMovie}
            loadingCastingMovie={loadingCastingMovie}
            errorCastingMovie={errorCastingMovie}
            loadingImagesMovie={loadingImagesMovie}
          />
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default DetailMovie;