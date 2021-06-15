import React from "react";
import Grid from "@material-ui/core/Grid";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionList = ({ movies }) => (
      <Grid container spacing={3} justify="center">
        {movies.map(({ id, ...otherCollectionProps }) => (
              <CollectionItem key={id} {...otherCollectionProps} id={id} />
            ))}
      </Grid>
);

export default CollectionList;