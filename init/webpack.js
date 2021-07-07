/*
 * @Date: 2021-07-07 14:24:14
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 16:36:08
 */

import "./conf";

/**
 * @description: 判断是否开发环境
 */
window.znConf.isDevelopment = process.env.NODE_ENV === "development";
