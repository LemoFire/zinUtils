/*
 * @Date: 2021-07-07 15:03:06
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-08 10:54:02
 */
if (!window.znConf) {
  window.znConf = {
    isDevelopment: true,
    isIOS: undefined,
    isAndroid: undefined
  };
}
const UA = navigator.userAgent;
window.znConf.isIOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
window.znConf.isAndroid =
  UA.indexOf("Android") > -1 || UA.indexOf("Linux") > -1;
