/*
 * @Date: 2021-07-07 12:46:40
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 17:08:33
 */
import "./conf";

/**
 * @description: init config
 */

import mobile from "../mobile";
import dev from "../dev";

const vue3 = {
  install: (app) => {
    app.config.globalProperties.$mobile = mobile;
    app.config.globalProperties.$dev = dev;
  },
};

const vue2 = {
  install: (app) => {
    app.prototype.$mobile = mobile;
    app.prototype.$dev = dev;
  },
};

export { vue3, vue2 };
