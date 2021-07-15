/*
 * @Date: 2021-06-21 11:51:53
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-07-15 11:38:47
 */

/**
 * @description: 非空检查
 * @param {array | object | string} content
 * @return {boolean} 空返回 true
 */
const isNull = content => {
  if (Array.isArray(content) && content.length == 0) {
    return true;
  } else if (typeof content == "object" && Object.keys(content).length == 0) {
    return true;
  }
  if (content == "" || content == undefined || content == null) {
    return true;
  }
  return false;
};

/**
 * @description: 检查对象内的内容是否有空，当检查的是对象时可使用函数生成器返回为空的 Key。适用于表单提交时的非空检查。
 * @param {array | object} testBuffer 待测试数据
 * @param {boolean} useGenerator 使用函数生成器
 * @return {boolean} 有空则返回false 无空返回true;使用函数生成器时，使用checkNull().next()可获取空值的 Key
 * @example 
    let checkBuffer = {
        workOrderTitle: workOrderTitle.value,
        content: content.value,
        startTime: effectiveTime.value[0],
        endTime: effectiveTime.value[1],
    };
    const ckDic = {
        workOrderTitle: "工单标题",
        content: "内容",
        startTime: "开始时间",
        endTime: "结束时间",
    };
    const ck = hasNull(checkBuffer, true);
    if (!ck.next().value) {
    context.parent.$message({
        message: ckDic[ck.next().value] + "不能为空",
        type: "warning",
    });
    return false;
    }
 */
function* hasNull(testBuffer, useGenerator = false) {
  if (Array.isArray(testBuffer)) {
    testBuffer.map(item => {
      if (isNull(item)) {
        return false;
      }
    });
  } else if (typeof testBuffer == "object") {
    if (testBuffer === null) {
      return false;
    }
    for (let key in testBuffer) {
      if (isNull(testBuffer[key])) {
        if (useGenerator) {
          yield false;
          return key;
        } else {
          return false;
        }
      }
    }
  } else if (typeof testBuffer === "string") {
    return !isNull(testBuffer);
  } else {
    return false;
  }
  return true;
}

/**
 * @description: 检查数据是否是对象，默认不包括数组
 * @param {*} checkBuffer
 * @param {boolen} includeArray 是否包括数组
 * @return {boolean}
 */
const isObject = (checkBuffer, includeArray = false) => {
  let isObj = typeof checkBuffer == "object" && checkBuffer != null;
  !includeArray ? (isObj = isObj && !Array.isArray(checkBuffer)) : false;
  if (isObj) {
    return true;
  }
  return false;
};

/**
 * @description: 正确的手机号检测
 * @param {string} phone 手机号
 * @return {boolean}
 */
const isPhone = phone => {
  if (phone == "" || !/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};

export { isNull, hasNull, isObject, isPhone };