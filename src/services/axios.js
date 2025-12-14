import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// axios.post(url, data, {headers: {

// }})

axiosClient.interceptors.request.use((req) => {
  const jwt = localStorage.getItem('jwt')
  const user_id = localStorage.getItem('user_id');
  // const sessionToken = localStorage.getItem('session-token')
  // const refresh_token = req.url.includes('user/auth/log_out/') || req.url.includes('user/auth/refresh_token/')
  //   ? localStorage.getItem('refresh-token')
  //   : undefined

  const headers = {
    //'origin': 'http://localhost:5000/',
    // 'Content-Type' : 'application/json',

    'Devicetype': 4,
    'Version': import.meta.env.VITE_VERSION,
    'Lang': 1,
    'Appid': import.meta.env.VITE_APP_ID,
    'Userid': user_id ? user_id : 0,
    ...(jwt && { 'Jwt': jwt })
    //   'Authorization': process.env.js.REACT_PUBLIC_AUTH_KEY,
    //   ...(refresh_token && {'refresh-token': refresh_token}),
    //   ...(token && {'access-token': token}),
    //   ...(sessionToken && {'session-token': sessionToken}),
  }

  req.headers = headers

  return req
}, (error) => Promise.reject(error))

export default axiosClient