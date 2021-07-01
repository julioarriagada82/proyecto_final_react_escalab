import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import Loader from "../../../common/loader/Loader.component";
import ErrorMessage from "../../../common/error-message/ErrorMessage.component";
import Casting from "../Casting.component";

import Carousel from 'react-elastic-carousel'

const CastingMovie = ({ loadingCastingMovie, castingMovie }) => {

  return (
    <Fragment>
        {loadingCastingMovie && castingMovie ? (
          castingMovie.length ? (
            <Carousel itemsToShow={5} className='carrusel'>
              {castingMovie.map((casting) => (
                <Casting key={casting.id} data={casting} />
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

export default CastingMovie;

CastingMovie.propTypes = {
  loadingCastingMovie: PropTypes.bool.isRequired,
};