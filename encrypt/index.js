/*
 * @Date: 2021-07-08 10:19:37
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-08 10:59:42
 */
import {
  hex_md5,
  b64_md5,
  any_md5,
  hex_hmac_md5,
  b64_hmac_md5,
  any_hmac_md5
} from "./md5";

const encrypt = {
  md5: {
    hex: hex_md5,
    base64: b64_md5,
    any: any_md5
  },
  hmacmd5: {
    hex: hex_hmac_md5,
    base64: b64_hmac_md5,
    any: any_hmac_md5
  }
};

export default encrypt;
