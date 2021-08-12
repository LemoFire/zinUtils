/*
 * @Date: 2021-07-06 18:03:30
 * @LastEditors: LemoFire
 * @LastEditTime: 2021-08-12 14:27:23
 */

/**
 * @description: 通过控制 meta 标签，禁止移动端缩放
 */
const disableZoom = () => {
  const metaViewport = document
    .getElementsByTagName("head")[0]
    .querySelector("meta[name='viewport']");
  metaViewport.setAttribute(
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
  );
};

const preventElasticScrolling = (e) => {
  if (e._isScroller) return;
  e.preventDefault();
};

/**
 * @description: 禁用IOS回弹效果
 */
const disableElasticScrolling = () => {
  document.body.addEventListener("touchmove", preventElasticScrolling, {
    passive: false,
  });
};
/**
 * @description: 启用IOS回弹效果
 */
const enableElasticScrolling = () => {
  document.body.removeEventListener("touchmove", preventElasticScrolling);
};

/**
 * @description: 解决ios下软键盘输入后的位移
 * @param {string} inputEl 要操作输入框的CSS选择器
 * @example inputsRec("#input")
 */
const inputRec = (inputEl) => {
  if (window.znConf.isIOS) {
    const inputs = document.querySelector(inputEl);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("blur", () => {
        document.scrollingElement.scrollTop = 0;
      });
    }
  }
};

/**
 * @description: 解决ios下软键盘输入后的位移
 * @param {string} wrapEl 要操作输入框父元素的CSS选择器，将监听该元素下所有的input元素
 * @example inputsRec("#input-warp")
 */
const inputsRec = (wrapEl) => {
  if (window.znConf.window.znConf.isIOS) {
    const wrap = document.querySelector(wrapEl);
    const inputs = wrap.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("blur", () => {
        document.scrollingElement.scrollTop = 0;
      });
    }
  }
};

export {
  disableZoom,
  disableElasticScrolling,
  enableElasticScrolling,
  inputRec,
  inputsRec,
};
