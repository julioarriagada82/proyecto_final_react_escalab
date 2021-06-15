import { useState } from "react";
import axios from "axios";
import { genreMovieGet } from '../constants/url';
import { useLocalStorage } from "./useLocalStorage";

const useGetGenres = () => {
  const [genres, setGenres] = useLocalStorage("genres", "");
  const [loadingGenre, setLoadingGenre] = useState(false);
  const [errorGenre, setErrorGenre] = useState(false);

  async function getGenres() {
    try {
      const response = await axios.get(
        genreMovieGet
      );
      const result = response.data.genres;
      setGenres(result);
      setLoadingGenre(false);
      setErrorGenre(false);
    } catch (error) {
      setLoadingGenre(false);
      setErrorGenre(error);
    }
  }
  
  return { genres, loadingGenre, errorGenre, getGenres };
};

export default useGetGenres;
