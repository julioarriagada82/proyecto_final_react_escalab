import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import MoviesContextProvider from "../context/MoviesContext";
import MovieDetailsContextProvider from "../context/MovieDetailsContext";

// Pages
import PopularMovie from "../containers/popular-movie/PopularMovie.component";
import DetailMovie from "../containers/detail-movie/DetailMovie.component";
import NotFound from "../pages/not-found/NotFound.component";

// Component
import Header from "../components/common/header/Header.component";
import Footer from "../components/common/footer/Footer.component";

import ErrorFallback from "../components/common/error-fallback/ErrorFallback.component";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <MoviesContextProvider>
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {}}
              >
                <PopularMovie />
              </ErrorBoundary>
            </MoviesContextProvider>
          </Route>
          <Route path="/movie/details/:id">
            <MovieDetailsContextProvider>
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {}}
              >
                <DetailMovie />
              </ErrorBoundary>
            </MovieDetailsContextProvider>
          </Route>
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
