/*
 * @Date: 2021-07-07 14:19:26
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-23 15:09:42
 */
/**
 * @description: 开发环境输出日志
 */
const log = (...vars) => {
  if (window.znConf.isDevelopment) {
    console.log(...vars);
  }
};

/**
 * @description: 开发环境输出警告
 */
const logWarn = (...vars) => {
  if (window.znConf.isDevelopment) {
    console.warn(...vars);
  }
};

/**
 * @description: 开发环境输出错误
 */
const logError = (...vars) => {
  if (window.znConf.isDevelopment) {
    console.error(...vars);
  }
};

export { log, logWarn, logError };
