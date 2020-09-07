"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("../pages/Home/home.vue"));

var _search = _interopRequireDefault(require("../pages/Search/search.vue"));

var _order = _interopRequireDefault(require("../pages/Order/order.vue"));

var _profile = _interopRequireDefault(require("../pages/Profile/profile.vue"));

var _login = _interopRequireDefault(require("../pages/Login/login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
路由器对象模块
 */
// 声明使用插件
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  // 所有路由
  routes: [{
    path: '/home',
    component: _home["default"],
    // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
    meta: {
      showFooter: true
    }
  }, {
    path: '/search',
    component: _search["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    component: _order["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/profile',
    component: _profile["default"],
    meta: {
      showFooter: true
    }
  }, {
    path: '/login',
    component: _login["default"]
  }, {
    path: '/',
    redirect: '/home'
  }]
});

exports["default"] = _default;