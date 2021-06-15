import {
  axiosInstance,
  INTERNAL_SERVER_ERROR,
  SERVICE_UNAVAILABLE_STATUS,
  SERVICE_UNAVAILABLE_MESSAGE,
  API_KEY,
} from "..";

const handlesSuccessfulResponse = (response) => {
  return response;
};

const itHasAResponse = (error) => {
  return error.response !== undefined;
};

const handlesError = (error) => {
  if (itHasAResponse(error)) {
    if (error.response.status === SERVICE_UNAVAILABLE_STATUS) {
      return Promise.reject(SERVICE_UNAVAILABLE_MESSAGE);
    }
  }
  return Promise.reject(INTERNAL_SERVER_ERROR);
};

export const getPopularMovie = (page = 1) => {
  return axiosInstance
    .get(`/movie/top_rated?language=es&api_key=${API_KEY}&page=${page}`)
    .then((response) => handlesSuccessfulResponse(response))
    .catch((error) => handlesError(error));
};

export const getMovieByGenre = (id) => {
  return axiosInstance
    .get(`/discover/movie?with_genres=${id}&language=es&api_key=${API_KEY}`)
    .then((response) => handlesSuccessfulResponse(response))
    .catch((error) => handlesError(error));
};

export const getDetailMovie = (id) => {
  return axiosInstance
    .get(`/movie/${id}?api_key=${API_KEY}&language=es`)
    .then((response) => handlesSuccessfulResponse(response))
    .catch((error) => handlesError(error));
};

export const getPosterMovie = (id) => {
  return axiosInstance
    .get(
      `/movie/${id}/images?api_key=${API_KEY}&language=es&include_image_language=en,null`
    )
    .then((response) => handlesSuccessfulResponse(response))
    .catch((error) => handlesError(error));
};
