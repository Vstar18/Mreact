import {polyfill} from 'es6-promise';
import originFetch from 'isomorphic-fetch';
// import Promise from 'promise'
const Promise = require('promise');
import { message } from 'antd'
polyfill()

const status_map = {}

export default function fetch(url, options?,bool?) {
  if (status_map[url]) {
    // return Promise.reject('OVER_CLICK') // 处理连续点击的问题！
  }
  status_map[url] = true;
  return new Promise((resolve, reject) => {
    let u = bool ? '' : '/rsp-web';   //兼容 不同接口的不同路径
    originFetch( u + url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'same-origin',
      ...options,
      // body: JSON.stringify(data)
    }).then((res) => {
      return res.json()
    }).then((res) => {
      status_map[url] = false
      if (res.errorCode === 50000) {
        message.error('您没有操作权限！')
        setTimeout(()=>{
          window.location = `http://a.yiche.com/static_common-portal/login.html?redirect=${window.location.href}` //https://a.yiche.com/static_common-portal/login.html
        },3000)
        
      } else if (res.errorCode === 403 || res.errorCode === 404) {
        message.error('您没有操作权限！')
        setTimeout(()=>{
          window.location = `http://a.yiche.com/static_common-portal/login.html?redirect=${window.location.href}`;
        },3000)
        
        reject(res.errorCode)
      } else if (res.errorCode !== 0) {
        message.error(res.errorMsg)
        reject(res.errorCode)
      } else {
        resolve(res)
      }
    }).catch((e) => {
      status_map[url] = false
      message.error('服务端异常！')
      throw e
    })
  })
}

// import {encodeSearchParams} from "@utils/index";

// export function fetchPost(url, params, header) {
//     if (!header) {
//         header = {}
//     }

//     let formData = new FormData()
//     if (params) {
//         for (let key in params) {
//             // if ((typeof params[key]) === 'string') {
//             //     formData.append(key, encodeURI(params[key].toString()))
//             // } else {
//             formData.append(key, params[key])
//             // }
//         }
//     }

//     const request = fetch(url, {
//         method: 'POST',
//         body: formData,
//         mode: 'cors',
//         // credentials: 'include',
//         // cache: "force-cache",
//         headers: new Headers({
//             'Accept': 'application/json',
//             // "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//             ...header
//         })
//     })

//     return fetchResult(request)
// }
// export function fetchGet(url, params, header) {
//   if (!header) {
//       header = {}
//   }

//   if (params) {
//       let paramsArray = [];
//       //拼接参数
//       Object.keys(params).forEach(key =>
//           paramsArray.push(key + '=' + encodeURI(encodeSearchParams(params, key).toString())))

//       if (paramsArray.length > 0) {
//           if (url.search(/\?/) === -1) {
//               url += '?' + paramsArray.join('&')
//           } else {
//               url += '&' + paramsArray.join('&')
//           }
//       }
//   }

//   const request = fetch(url, {
//       method: 'GET',
//       mode: 'cors',
//       // credentials: 'include',
//       // cache: "force-cache",
//       headers: new Headers({
//           'Accept': 'application/json',
//           "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
//           ...header
//       })
//   })

//   return fetchResult(request)
// }
// /**
//  * 处理网络请求结果
//  * @param request
//  * @returns {*}
//  */
// function fetchResult(request) {
//   try {
//       return request.then(response => {
//           if (response.status == 200) {
//               return response;
//           } else {
//               throw response
//           }
//       }).catch(error => {
//           if (error.json) {
//               return error.json()
//           } else {
//               return Promise.reject('请求异常')
//           }
//       }).then(result => {
//           if (result.status == 200) {
//               let resultJson = result.json();
//               return resultJson;
//           } else {
            
//               if (result.exceptionInfo) {
//                   if (result.exceptionInfo.length > 30) {
//                       throw '接口请求异常'
//                   } else {
//                       throw result.exceptionInfo
//                   }
//               } else {
//                   throw result
//               }
//           }
//       }).then(result => {
//           console.log(result)
//           if (result.success) {
//               return result
//             } else {
//                 if (result.exceptionInfo) {
//                     if (result.exceptionInfo.length > 30) {
//                         throw '接口请求异常'
//                     } else {
//                         throw result.exceptionInfo
//                     }
//                 } else if (result.message) {
//                     if (result.message.length > 30) {
//                         throw '接口请求异常'
//                     } else {
//                         throw result.message
//                     }
//                 } else {
//                     throw result
//                 }
//             }
//         })
//     } catch (e) {
//         return Promise.reject('请求异常')
//     }

// }
