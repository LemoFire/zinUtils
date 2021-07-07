/*
 * @Date: 2021-05-31 19:49:02
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-07 16:48:37
 */

import { isNull } from "./checker";

/**
 * @description: 取整
 * @param {number | string} content 要转换的数据
 * @param {number} type 1: parseInt 2: 向上取整 3: 向下取整
 * @return {number | false} number，type选错返回false
 */
export const letInt = (content, type = 1) => {
  switch (type) {
    case 1:
      return parseInt(content);
    case 2:
      return Math.ceil(content);
    case 3:
      return Math.floor(content);
    default:
      return false;
  }
};

/**
 * @description: 字符串长度限制
 * @param {string} content 要处理的数据
 * @param {number} length 要限制的字符串长度
 * @return {*} 处理后的content，不符合条件原样返回
 */
export const lenLimit = (content, length) => {
  if (!isNull(isNull) && content.length && content.length > length) {
    return content.slice(0, length);
  }
  return content;
};

/**
 * @description: 正确的手机号检测
 * @param {string} phone 手机号
 * @return {boolean}
 */
export const phoneCheck = (phone) => {
  if (phone == "" || !/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};

/**
 * @description: 去掉字符串中除数字之外的其它字符
 * @param {*} content 格式化内容
 * @return {*}
 */
export const phoneTrim = (content) => {
  return content.replace(/[^\d]/g, "");
};

/**
 * @description: 字符串连接
 * @param {array | object | string} testBuffer 待连接对象
 * @param {string} str
 * @param {number} mode 1: str+字段 2: 字段+str
 * @return {array | object | string | null | false} output ,传入为空返回null, 其他情况返回false
 */
export const stringLink = (testBuffer, str, mode = 1) => {
  let output;
  const newField = (field) => {
    let output;
    if (mode == 1) {
      output = str + field;
    } else if (mode == 2) {
      output = field + str;
    }
    return output;
  };
  if (Array.isArray(testBuffer)) {
    output = [];
    testBuffer.map((field) => {
      output.push(newField(field));
    });
  } else if (typeof testBuffer == "object") {
    if (testBuffer === null) {
      return null;
    }
    output = {};
    for (let key in testBuffer) {
      output[key] = newField(testBuffer[key]);
    }
  } else if (typeof testBuffer == "string" || typeof testBuffer == "number") {
    output = newField(testBuffer + "");
  } else {
    return false;
  }

  return output;
};

/**
 * @description: 数组字符串截取
 * @param {array} arr 输入数组
 * @param {number} step 截取长度
 * @return {*}
 */
export const stringCutting = (arr, step) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substr(step);
  }
};

/**
 * @description: 检查数据是否是对象，默认不包括数组
 * @param {*} checkBuffer
 * @param {boolen} includeArray 是否包括数组
 * @return {boolean}
 */
export const isObject = (checkBuffer, includeArray = false) => {
  let isObj = typeof checkBuffer == "object" && checkBuffer != null;
  !includeArray ? (isObj = isObj && !Array.isArray(checkBuffer)) : false;
  if (isObj) {
    return true;
  }
  return false;
};

/**
 * @description: 深度遍历，检查到对象或者数组则执行函数
 * @param {*} checkBuffer
 * @param {Function} fun 待执行待函数
 */
export const depthTraversal = (checkBuffer, fun) => {
  if (isObject(checkBuffer, true)) {
    fun(checkBuffer);
    for (let key in checkBuffer) {
      depthTraversal(checkBuffer[key], fun);
    }
  }
};
