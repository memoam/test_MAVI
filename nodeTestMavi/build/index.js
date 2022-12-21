"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-undef */

// Settings
_app["default"].set('port', process.env.PORT || 4000);

//Server
_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Server on port', _app["default"].get('port'));
});