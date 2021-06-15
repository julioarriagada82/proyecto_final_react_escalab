const BASE_URL = 'https://api.themoviedb.org/3';

export const API_KEY = '73097bdebe8f71e33eb75198e674a8d5';

const popular_movies = `/movie/top_rated?language=es&api_key=${API_KEY}`
const genre_movies = `/genre/movie/list?language=es&api_key=${API_KEY}`


export const popularMoviesGet = () => `${ BASE_URL }${ popular_movies }`;
export const genreMovieGet = () => `${ BASE_URL }${ genre_movies }`;