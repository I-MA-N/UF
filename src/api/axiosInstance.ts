import axios from 'axios';
import { GNewToken } from './common/PLogin';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

API.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('jwt');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common.Authorization;
    }
    return config;
  },

  error => Promise.reject(error)
);


API.interceptors.response.use(
  res => {
    return res
  },
  async err => {
    if (err.response.status === 401) {
      GNewToken()
        .then(async res => {
          sessionStorage.setItem('jwt', res.access)
        })
      // if (!isRefreshing) {
      //   isRefreshing = true;
      //   const res = await GNewToken();
      //   if (res.access) {
      //     sessionStorage.setItem('jwt', res.access)
      //     console.log(err);
      //     // isRefreshing = false;
      //     return API(err.config)
      //     // const orginialConfig = err.config;
      //     // orginialConfig.headers.Authorization = `Bearer ${res.access}`;
      //     // return axios(orginialConfig)
      //   }
      // }
    }


    return Promise.reject(err)
  }
)

export default API;