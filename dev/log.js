/*
 * @Date: 2021-07-07 14:19:26
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 17:07:55
 */
/**
 * @description: 开发环境输出日志
 */
const log = (() => {
  if (window.znConf.isDevelopment) {
    return console.log;
  } else return () => {};
})();

/**
 * @description: 开发环境输出警告
 */
const logWarn = (() => {
  if (window.znConf.isDevelopment) {
    return console.warn;
  } else return () => {};
})();

/**
 * @description: 开发环境输出错误
 */
const logError = (() => {
  if (window.znConf.isDevelopment) {
    return console.error;
  } else return () => {};
})();

export { log, logWarn, logError };
