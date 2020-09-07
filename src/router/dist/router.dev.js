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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//声明使用
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routers: [{
    path: '/home',
    component: _home["default"]
  }, {
    path: '/search',
    component: _search["default"]
  }, {
    path: '/order',
    component: _order["default"]
  }, {
    path: '/profile',
    component: _profile["default"]
  }, {
    path: '/',
    redirect: 'home'
  }]
});

exports["default"] = _default;