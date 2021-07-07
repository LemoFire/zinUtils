/*
 * @Date: 2021-06-24 14:09:19
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 17:03:04
 */
import "./init/conf";
import mobile from "./mobile";
import dev from "./dev";

const def = {
  mobile,
  dev,
};

export default def;
export { default as mobile } from "./mobile";
export { default as dev } from "./dev";
