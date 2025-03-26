import Axios from "axios"
import { API_HOST, API_PROTOCOL } from "../configs/variables"

const AxiosInstance = Axios.create({
  baseURL: `${API_PROTOCOL}://${API_HOST}`,
  timeout: 10000,
})

AxiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token")
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    return config
  },
  (error) => Promise.reject(error)
)

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    let result = error.response.data.status + error.response.data.message

    // if (typeof error.response.data === "object" && error.response.data.code) {
    //   console.log(error.response.data)
    // }

    return Promise.reject(result)

  }
)

export default AxiosInstance
