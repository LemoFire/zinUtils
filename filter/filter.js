/*
 * @Date: 2021-07-14 18:06:36
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-15 11:46:55
 */
import { isNull } from "../check/check";

/**
 * @description: 字符串长度限制
 * @param {string} content 要处理的数据
 * @param {number} length 要限制的字符串长度
 * @return {*} 处理后的content，不符合条件原样返回
 */
const limitLen = (content, length) => {
  if (!isNull(isNull) && content.length && content.length > length) {
    return content.slice(0, length);
  }
  return content;
};

/**
 * @description: 去掉字符串中除数字之外的其它字符
 * @param {*} content 格式化内容
 * @return {*}
 */
const parseNum = content => {
  return content.replace(/[^\d]/g, "");
};

export { limitLen, parseNum };
