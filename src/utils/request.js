export const path = 'http://120.77.239.205:6688';
// 正式
// export const path = ''
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(
    url,
    options = {
      expirys: true,
    },
    isLocalUrl
  ) {
    /**
     * Produce fingerprints based on url and parameters
     * Maybe url has the same parameters
     */
    const fingerprint = url + (options.body ? JSON.stringify(options.body) : '');
    const hashcode = hash
      .sha256()
      .update(fingerprint)
      .digest('hex');
  
    // 是否允许携带缓存请求
    const defaultOptions = {
      credentials: 'omit',
    };
    const newOptions = { ...defaultOptions, ...options };
    if (
      newOptions.method === 'POST' ||
      newOptions.method === 'PUT' ||
      newOptions.method === 'DELETE'
    ) {
      if (!(newOptions.body instanceof FormData)) {
        newOptions.headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          ...newOptions.headers,
        };
        newOptions.body = JSON.stringify(newOptions.body);
      } else {
        // newOptions.body is FormData
        newOptions.headers = {
          Accept: 'application/json',
          ...newOptions.headers,
        };
      }
    }
  
    // 请求是否走缓存
    // const expirys = options.expirys || 60;
    // options.expirys !== false, return the cache,
    // if (options.expirys !== false) {
    //   console.log('走了缓存')
    //   const cached = sessionStorage.getItem(hashcode);
    //   const whenCached = sessionStorage.getItem(`${hashcode}:timestamp`);
    //   if (cached !== null && whenCached !== null) {
    //     const age = (Date.now() - whenCached) / 1000;
    //     if (age < expirys) {
    //       const response = new Response(new Blob([cached]));
    //       return response.json();
    //     }
    //     sessionStorage.removeItem(hashcode);
    //     sessionStorage.removeItem(`${hashcode}:timestamp`);
    //   }
    // }
    const fetchUrl = isLocalUrl ? url : `${path}${url}`;
    return (
      fetch(fetchUrl, { ...newOptions })
        .then(checkStatus)
        // .then(response => cachedSave(response, hashcode))
        .then(response => {
          // DELETE and 204 do not return data by default
          // using .json will report an error.
          if (newOptions.method === 'DELETE' || response.status === 204) {
            return response.text();
          }
          // console.log(response);
          return response.json();
        })
        .catch(e => {
          console.log(e);
          const status = e.name;
          if (status === 401) {
            // @HACK
            /* eslint-disable no-underscore-dangle */
            window.g_app._store.dispatch({
              type: 'login/logout',
            });
            return;
          }
          // environment should not be used
          if (status === 403) {
            router.push('/exception/403');
            return;
          }
          if (status <= 504 && status >= 500) {
            // router.push('/exception/500');
            return;
          }
          if (status >= 404 && status < 422) {
            router.push('/exception/404');
          }
        })
    );
  }
  