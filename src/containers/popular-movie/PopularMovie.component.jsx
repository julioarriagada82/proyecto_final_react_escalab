import React, { Suspense, lazy } from "react";

import Loader from "../../components/common/loader/Loader.component";

const HomePopularMovie = lazy(() =>
  import("../../pages/popular-movie/HomePopularMovie.component")
);


const PopularMovie = () => (
    <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
        <HomePopularMovie />
    </Suspense>
);

export default PopularMovie;
