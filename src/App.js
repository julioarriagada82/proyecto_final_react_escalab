import React from "react";
import { Switch, Route } from "react-router-dom";

import MoviesContextProvider from "./context/MoviesContext";
import MovieDetailsContextProvider from "./context/MovieDetailsContext";

// Pages
import HomePopularMovie from "./pages/popular-movie/HomePopularMovie.component";
import DetailMovie from "./pages/detail-movie/DetailMovie.component";

// Component
import Header from "./components/common/header/Header.component";
import Footer from "./components/common/footer/Footer.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <MoviesContextProvider>
              <HomePopularMovie />
            </MoviesContextProvider>
          </Route>
          <Route path="/movie/details/:id">
            <MovieDetailsContextProvider>
              <DetailMovie />
            </MovieDetailsContextProvider>
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
