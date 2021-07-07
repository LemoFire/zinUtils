/*
 * @Date: 2021-06-17 15:48:52
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 14:24:36
 */

import { log, logWarn, logError } from "./log";

const dev = {
  log,
  logError,
  logWarn,
};

export default dev;

// 开发环境测试环境跳转不同链接
// export const dJumpTo = (productionLink, developmentLink, type = 1) => {
//   let link;
//   const replace = (link) => {
//     window.location.replace(link);
//   };
//   window.isDevelopment ? (link = developmentLink) : (link = productionLink);
//   type == 1 ? (window.location.href = link) : replace(link);
// };
