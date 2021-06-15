import { axiosInstance, 
    INTERNAL_SERVER_ERROR, 
    SERVICE_UNAVAILABLE_STATUS, 
    SERVICE_UNAVAILABLE_MESSAGE,  
    API_KEY } from '..'

const handlesSuccessfulResponse = response => {
  return response
}

const itHasAResponse = error => {
  return error.response !== undefined
}

const handlesError = error => {
  if (itHasAResponse(error)) {
    if (error.response.status === SERVICE_UNAVAILABLE_STATUS) {
      return Promise.reject(SERVICE_UNAVAILABLE_MESSAGE)
    }
  }
  return Promise.reject(INTERNAL_SERVER_ERROR)
}
export const getGenreMovie = () => {
  return axiosInstance
    .get(`/genre/movie/list?language=es&api_key=${API_KEY}`)
    .then(response => handlesSuccessfulResponse(response))
    .catch(error => handlesError(error))
}