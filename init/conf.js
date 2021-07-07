/*
 * @Date: 2021-07-07 15:03:06
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 17:09:08
 */
if (!window.znConf) {
  window.znConf = {
    isDevelopment: true,
    isIOS: undefined,
  };
}
window.znConf.isIOS = !!navigator.userAgent.match(
  /\(i[^;]+;( U;)? CPU.+Mac OS X/
);
