/*
 * @Date: 2021-07-08 09:52:12
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-08 11:17:25
 */
import { hex_md5 } from "../encrypt/md5";

/**
 * @description: 取得浏览器指纹（不唯一，仅供参考）
 * @param {*}
 * @return {*} 十六进制 md5 加密后的信息
 */
const getFingerPrint = () => {
  let fingerPrint = "";
  const verificationItem = {
    navigator: [
      "platform",
      "userAgent",
      "appVersion",
      "cookieEnabled",
      "cpuClass",
      "hardwareConcurrency",
      "language"
    ],
    screen: ["availWidth", "availHeight", "colorDepth"],
    Date: ["getTimezoneOffset"]
  };
  Object.keys(verificationItem).map(item => {
    verificationItem[item].map(key => {
      fingerPrint += top[item][key];
    });
  });
  return hex_md5(fingerPrint);
};

export { getFingerPrint };
