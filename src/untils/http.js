import axios from 'axios'
 
 
//2、添加请求拦截器：每次发送请求就会调用此拦截器，添加认证token
axios.interceptors.request.use(
  config => {
    //发送请求前添加认证token，
    config.headers.Authorization = sessionStorage.getItem('token')
    return config
  },
  err => {
    return Promise.reject(err)
  });
 
// 3、响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
        console.log("响应状态码不是200");
      return Promise.reject(error.response);
    }
);
export function getRequest(url){
    return new Promise((resolve, reject)=>{
            axios.get(
                url
            ).then(res=>{
                return resolve(res);
            }).catch(err =>{
                return reject(err);
            })
    })
}
export function postRequest(options){
    return new Promise((resolve, reject)=>{
        axios.post({
            url:options.url,
            data:options.data ||""
        }).then(res=>{
            return resolve(res);
        }).catch(err =>{
            return reject(err);
        })
    })
}
