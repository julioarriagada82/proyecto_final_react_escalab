import React, { Fragment } from "react";
import Loader from "../../../common/loader/Loader.component";
import ErrorMessage from "../../../common/error-message/ErrorMessage.component";
import Poster from "../poster/Poster.component";

import Carousel from 'react-elastic-carousel'

import "./ImageGallery.styles.scss";


const ImageGallery = ({ loadingImagesMovie, imagesMovie }) => {
  return (
    <Fragment>
        {loadingImagesMovie && imagesMovie ? (
          imagesMovie.length ? (
            <Carousel itemsToShow={5}>
              {imagesMovie.map((images, index) => (
                    <Poster key={index} poster_path={images.file_path} title={images.file_path} />
                  ))}
            </Carousel>
          ) : (
            <ErrorMessage text="No hay imagenes disponibles para este titulo" />
          )
        ) : (
          <Loader />
        )}
    </Fragment>
  );
};

export default ImageGallery;
