import axios from 'axios'
const ajax = axios.create({
  timeout: 10000,
  baseURL: ''
})

// 请求拦截处理
ajax.interceptors.request.use(
  (config) => {
    const { url, baseURL, data, params } = config
    console.log(`${url.startsWith('http') ? url : baseURL + url} 请求参数 =>`, data || params)
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

//响应拦截处理
ajax.interceptors.response.use(
  (response) => {
    const { data: respData, config } = response
    const { url, baseURL } = config
    console.log(`${url.startsWith('http') ? url : baseURL + url} 请求结果 =>`, respData)
    const { data } = respData
    return data
  },
  (error) => {
    console.log('请求响应错误 => ', error.response, error)
    alert(error.data)
    return Promise.reject(error)
  }
)

function requestToken(options) {
  const token = window.localStorage.getItem('token')
  const Authorization = 'Bearer ' + token

  return ajax({
    ...options,
    headers: { Authorization: Authorization }
  })
}

export default requestToken
