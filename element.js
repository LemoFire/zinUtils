/*
 * @Date: 2021-05-31 19:48:25
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-06-21 17:35:07
 */

// el-tree
/**
 * @description: 简易获取选中的节点，如果节点全选则返回父节点的值
 * @param {*} el ref获取的dom对象
 * @return {*}
 */
export const getSimpleCheckedNodes = (el) => {
  const checkedNodes = [];
  const traverse = function (node) {
    const childNodes = node.root ? node.root.childNodes : node.childNodes;
    childNodes.forEach((child) => {
      if (child.checked) {
        checkedNodes.push(child.data);
      }
      if (child.indeterminate) {
        traverse(child);
      }
    });
  };
  traverse(el.store);
  return checkedNodes;
};

// el-upload
/**
 * @description:上传文件大小检测
 * @param {*} file
 * @param {string} allowExtType
 * @param {*} size
 * @return {boolean}
 */
export const fileUploadCheck = (file, allowExtType, size) => {
  const currentExtName = file.name.substring(file.name.lastIndexOf(".") + 1);
  const extension = currentExtName === allowExtType;
  const isLimit = file.size / 1024 / 1024 < size;
  if (!extension) {
    return false;
  }
  return isLimit;
};

// el-checkbox
/**
 * @description: 多选框反选，反选选项需要在第一位
 * @param {array} arr
 * @param {*} keyword
 * @return {array | false}
 */
export const inverse = (arr, keyword) => {
  arr.indexOf(keyword) != -1 && arr.length > 1
    ? arr[arr.length - 1] == keyword
      ? arr.splice(0, arr.length - 1)
      : arr.splice(arr.indexOf(keyword), 1)
    : false;
  return arr;
};
