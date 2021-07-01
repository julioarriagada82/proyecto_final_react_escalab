import React, { Suspense, lazy } from "react";

import Loader from "../../components/common/loader/Loader.component";

const DetailMovie = lazy(() =>
  import("../../pages/detail-movie/DetailMovie.component")
);

const PopularMovie = () => (
    <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
        <DetailMovie />
    </Suspense>    
);

export default PopularMovie;