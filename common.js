/**
 * @description: 防抖
 * @param {*}
 * @return {*}
 */
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * @description: 暂停函数
 * @param {*} ms 毫秒
 * @return {*}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @description: axios 下载函数
 * @param {string} apiLink 下载请求的api连接
 * @param {object} opts axios配置
 * @param {string} fileName
 * @example     
    let link = "/download";
    const res = download(url.get, link, { params: { fileName } }, fileName);
    return res.data;
 */
export const download = async (axiosMethods, apiLink, opts, fileName) => {
  let response = await axiosMethods(apiLink, {
    ...opts,
    responseType: "blob",
  });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
};
