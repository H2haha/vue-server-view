import axios from 'axios'
// import router from './router/index'

/**
 * http
 * @type {number}
 */
// 访问超时配置
axios.defaults.timeout = 40000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-login-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// http request拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response) {
      return response
    }
  },
  error => {
    if (error.response) {
      return error
    }
    return Promise.reject(error.response)
  }
)

export default axios
