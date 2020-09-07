"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
入口JS
 */
new _vue["default"]({
  el: '#app',
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"] //使用上vue-router

});