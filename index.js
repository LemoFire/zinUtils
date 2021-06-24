/*
 * @Date: 2021-06-24 14:09:19
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-06-24 20:27:37
 */
import dev from "./dev";
export default {
  install: (app) => {
    app.config.globalProperties.$dev = dev;
  },
};

export { default as dev } from "./dev";
