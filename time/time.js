/*
 * @Date: 2021-07-14 17:37:09
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-15 14:09:20
 */

/**
 * @description: 暂停函数
 * @param {*} ms 毫秒
 * @return {*}
 */
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export { sleep };
