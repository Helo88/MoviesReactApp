import axios from "axios";
import store from "../store/index"

// import { setLoading } from './../store/actions/loading';

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
 
  function (config) {
    console.log("Interceptor request", config);
   console.log("current lang from interceptor ",store.getState().currentLang.lang)
   
    config.params = {
        ...config.params,
        api_key:"21ddddf500f95cd948a2fcf4e257d88d",
        language:store.getState().currentLang.lang
    };
    config.headers = {
      ...config.headers,
    //   access_token  : 'da23sd5asd4as21d3as2d1'
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("Interceptor response", response);
    // store.dispatch(setLoading(false))
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Interceptor error", error);
    return Promise.reject(error);
  }
);