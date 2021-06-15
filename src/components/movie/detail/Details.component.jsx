import React, { Fragment } from "react";
import parse from "html-react-parser";
import moment from 'moment';
import Grid from "@material-ui/core/Grid";
import TextList from "../../common/lists/TextList.component";
import LabelTitle from "../../common/label-title/LabelTitle.component";
import Label from "../../common/label/Label.component";
import Poster from "../../movie/images/poster/Poster.component";
import ImageGallery from "../../movie/images/images-gallery/ImageGallery.component";
import CastingMovie from "../casting/casting-movie/CastingMovie.component";
import "./Details.styles.scss";

const Details = ({
    detailMovie,
    loadingImagesMovie,
    imagesMovie,
    loadingCastingMovie,
    castingMovie,
}) => {
  const {
    title,
    popularity,
    poster_path,
    release_date,
    revenue,
    runtime,
    budget,
    genres,
    vote_average,
    vote_count,
    production_companies,
    production_countries,
    spoken_languages,
    overview
  } = detailMovie;

  return (
    <Fragment>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={8} md={8}>
          <h1 className="gdetails__title">{title}</h1>
          <p className="gdetails__released">
            <span className="font-weight-bold">Original Release:</span> {release_date
                  ? moment(release_date).format('MMMM D, YYYY')
                  : 'N/A'}
          </p>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} className="poster">
              <Poster poster_path={poster_path} title={title} />
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
              <TextList title="Production Companies" items={production_companies} />
              <TextList title="Production Country" production_countries items={production_countries} />
              <TextList title="Languaje" spoken_languages items={spoken_languages} />
              <TextList title="Genre/s" items={genres} />
              <LabelTitle text="Revenue" />
              <Label text={revenue === 0 || !revenue
                  ? 'N/A'
                  : `$${Number(revenue).toLocaleString()}`} />
            </Grid>
            <Grid item xs={12} sm={6}  md={4}>
              <LabelTitle text="Rating" />
              <Label text={`${vote_average * 10}%`} />
              <LabelTitle text="Votes" />
              <Label text={vote_count} />
              <LabelTitle text="Popularity" />
              <Label text={popularity} />
              <LabelTitle text="Budget" />
              <Label text={budget === 0 || !budget
                ? 'N/A'
                : `$${Number(budget).toLocaleString()}`} />
              <LabelTitle text="Running Time" />
              <Label text={runtime === 0 || !runtime
                  ? 'N/A'
                  : `${runtime} mins`} />
            </Grid>
          </Grid>
          <LabelTitle text="Description" />
          <div className="gdetails__description">{parse(overview)}</div>
        </Grid>
      </Grid>
      <Grid container spacing={1} justify="center">
        <CastingMovie loadingCastingMovie={loadingCastingMovie} castingMovie={castingMovie} />
      </Grid>
      <Grid container spacing={1} justify="center">
        <ImageGallery loadingImagesMovie={loadingImagesMovie} imagesMovie={imagesMovie} />
      </Grid>
    </Fragment>
  );
};

export default Details;
