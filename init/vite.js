/*
 * @Date: 2021-07-07 14:23:56
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 16:36:49
 */

import "./conf";

/**
 * @description: 判断是否开发环境
 */
window.znConf.isDevelopment = import.meta.env.MODE === "development";
