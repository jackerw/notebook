/*
  工具类
 */

/**
 * * returnPromise
 * * request 请求完成全部返回前台自定义
 * * 参数 { response:object}
 * @returns Promise
 */
export function returnPromise(response) {
  return new Promise((resolve, reject) => {
    if (response && response.statusCode && response.statusCode === 200) {
      resolve(response);
    } else {
      reject(response);
    }
  });
}