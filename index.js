/*
 * @Date: 2021-06-24 14:09:19
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-08 11:38:30
 */
import "./init/conf";
import mobile from "./mobile";
import encrypt from "./encrypt";
import auth from "./auth";
import dev from "./dev";

const def = {
  mobile,
  encrypt,
  auth,
  dev
};

export default def;
export { default as mobile } from "./mobile";
export { default as encrypt } from "./encrypt";
export { default as auth } from "./auth";
export { default as dev } from "./dev";
