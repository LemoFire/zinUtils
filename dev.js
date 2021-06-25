/*
 * @Date: 2021-06-17 15:48:52
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-06-25 17:23:28
 */

/**
 * @description: 判断是否开发环境，支持 webpack vite
 */
const isDevelopment =
  import.meta.env.MODE === "development" ||
  process.env.NODE_ENV === "development";

/**
 * @description: 开发环境输出Log
 */
const log = (() => {
  if (isDevelopment) {
    return console.log;
  } else return () => {};
})();

/**
 * @description: 开发环境输出警告
 */
const logWarn = (() => {
  if (isDevelopment) {
    return console.warn;
  } else return () => {};
})();

/**
 * @description: 开发环境输出错误
 */
const logError = (() => {
  if (isDevelopment) {
    return console.error;
  } else return () => {};
})();
const dev = {
  log,
  logError,
  logWarn,
  isDevelopment,
};

export default dev;

// 开发环境测试环境跳转不同链接
// export const dJumpTo = (productionLink, developmentLink, type = 1) => {
//   let link;
//   const replace = (link) => {
//     window.location.replace(link);
//   };
//   isDevelopment ? (link = developmentLink) : (link = productionLink);
//   type == 1 ? (window.location.href = link) : replace(link);
// };
