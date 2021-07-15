/*
 * @Date: 2021-07-07 12:46:40
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-15 09:48:12
 */
import "./conf";

/**
 * @description: init config
 */

import common from "../common";
import mobile from "../mobile";
import check from "../check";
import time from "../time";
import filter from "../filter";
import encrypt from "../encrypt";
import auth from "../auth";
import dev from "../dev";

const vue3 = {
  install: app => {
    app.config.globalProperties.$common = common;
    app.config.globalProperties.$mobile = mobile;
    app.config.globalProperties.$check = check;
    app.config.globalProperties.$time = time;
    app.config.globalProperties.$filter = filter;
    app.config.globalProperties.$encrypt = encrypt;
    app.config.globalProperties.$auth = auth;
    app.config.globalProperties.$dev = dev;
  }
};

const vue2 = {
  install: app => {
    app.prototype.$common = common;
    app.prototype.$mobile = mobile;
    app.prototype.$check = check;
    app.prototype.$time = time;
    app.prototype.$filter = filter;
    app.prototype.$encrypt = encrypt;
    app.prototype.$auth = auth;
    app.prototype.$dev = dev;
  }
};

export { vue3, vue2 };
