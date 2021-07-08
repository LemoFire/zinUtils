/*
 * @Date: 2021-07-07 12:46:40
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-08 11:37:31
 */
import "./conf";

/**
 * @description: init config
 */

import mobile from "../mobile";
import encrypt from "../encrypt";
import auth from "../auth";
import dev from "../dev";

const vue3 = {
  install: app => {
    app.config.globalProperties.$mobile = mobile;
    app.config.globalProperties.$encrypt = encrypt;
    app.config.globalProperties.$auth = auth;
    app.config.globalProperties.$dev = dev;
  }
};

const vue2 = {
  install: app => {
    app.prototype.$mobile = mobile;
    app.prototype.$encrypt = encrypt;
    app.prototype.$auth = auth;
    app.prototype.$dev = dev;
  }
};

export { vue3, vue2 };
