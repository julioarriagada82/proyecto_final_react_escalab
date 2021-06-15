import React from 'react';
import { Link } from "react-router-dom";
import Poster from "../../movie/images/poster/Poster.component";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const CollectionItem = ({ id, vote_average, poster_path, popularity, title }) => (

    <Grid item xs={12} sm={6} md={3}>
        <Link to={`/movie/details/${id}`} className="card-link" >
            <Paper className="paper">
                <h2>{title}</h2>
                <Poster poster_path={poster_path} title={title} />
                <ul>
                    <li>Votación: {vote_average}</li>
                    <li>Popularidad: {popularity}</li>
                </ul>
            </Paper>
        </Link>
    </Grid>
);

export default CollectionItem;