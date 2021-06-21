/*
 * @Date: 2021-06-17 15:48:52
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-06-21 14:07:06
 */

/**
 * @description: 判断是否开发环境，支持 webpack vite
 */
export const isDevelopment =
  process.env.NODE_ENV === "development" ||
  import.meta.env.MODE === "development";

/**
 * @description: 仅开发环境输出Log
 */
export const dLog = (() => {
  if (isDevelopment) {
    return console.log;
  } else return () => {};
})();

// 开发环境测试环境跳转不同链接
// export const dJumpTo = (productionLink, developmentLink, type = 1) => {
//   let link;
//   const replace = (link) => {
//     window.location.replace(link);
//   };
//   isDevelopment ? (link = developmentLink) : (link = productionLink);
//   type == 1 ? (window.location.href = link) : replace(link);
// };
