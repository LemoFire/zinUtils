/*
 * @Date: 2021-07-07 15:03:06
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-13 17:20:28
 */
if (!window.znConf) {
  window.znConf = {
    isDevelopment: true,
    isIOS: undefined,
    isIPad: undefined,
    isAndroid: undefined,
    isPC: undefined
  };
}
const UA = navigator.userAgent;
window.znConf.isIOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
window.znConf.isIPad = UA.indexOf("iPad") > -1;
window.znConf.isAndroid = UA.indexOf("Android") > -1;
window.znConf.isPC =
  UA.indexOf("Macintosh") > -1 ||
  UA.indexOf("Windows") > -1 ||
  (window.znConf.isAndroid == false && UA.indexOf("Linux") > -1);
