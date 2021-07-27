/**
 * @description: 防抖
 * @param {*}
 * @return {*}
 */
const debounce = (func, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 * @description: 获取URL参数
 * @param {string} paramName
 * @return {string|null}
 */
const getParam = (paramName) => {
  const reg = new RegExp("(^|&|\\?)" + paramName + "=([^&#]*)", "i");
  const r = location.href.match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
export { debounce, getParam };
