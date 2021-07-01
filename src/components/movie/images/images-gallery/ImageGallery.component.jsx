import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import Loader from "../../../common/loader/Loader.component";
import ErrorMessage from "../../../common/error-message/ErrorMessage.component";
import Poster from "../poster/Poster.component";

import Carousel from 'react-elastic-carousel'

import '../../../../assets/styles/components/ImageGallery.styles.scss';


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

ImageGallery.propTypes = {
  imagesMovie: PropTypes.arrayOf(PropTypes.object),
};
