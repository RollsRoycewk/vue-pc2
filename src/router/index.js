import Vue from "vue";
import VueRouter from "vue-router";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

// 简写形式参考repace
/* VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果用户想处理失败,就处理
  if (onComplete || onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 不想处理,就给一个空数组
  return push.call(this, location, onComplete, () => {});
}; */

// 简写形式
VueRouter.prototype.push = function(location, onComplete, onAbort = () => {}) {
  return push.call(this, location, onComplete, onAbort);
};

VueRouter.prototype.replace = function(
  location,
  onComplete,
  onAbort = () => {}
) {
  return replace.call(this, location, onComplete, onAbort);
};

Vue.use(VueRouter);

import Home from "@views/Home";
import Login from "@views/Login";
import Register from "@views/Register";
import Search from "@views/Search";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      /* 
        当组件加载显示时,meta中的参数会传入到$route中
        当组件不加载显示时,meta中的参数不会传
      */
      meta: {
        isFooterHide: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHide: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchT?",
      component: Search,
    },
  ],
});
