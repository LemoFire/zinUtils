/*
 * @Date: 2021-06-17 19:09:04
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-06-21 14:09:53
 */

/**
 * @description: 解决ios下键盘回弹后，导致页面下方空白的问题
 * @param {*}
 * @return {*}
 */
export function keyboardRebound() {
  document.body.addEventListener("touchend", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}
