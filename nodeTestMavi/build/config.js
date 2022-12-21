"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.ADMIN_USERNAME = exports.ADMIN_PASSWORD = exports.ADMIN_EMAIL = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var SECRET = process.env.SECRET;
exports.SECRET = SECRET;
var ADMIN_EMAIL = process.env.ADMIN_EMAIL;
exports.ADMIN_EMAIL = ADMIN_EMAIL;
var ADMIN_USERNAME = process.env.ADMIN_USERNAME;
exports.ADMIN_USERNAME = ADMIN_USERNAME;
var ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
exports.ADMIN_PASSWORD = ADMIN_PASSWORD;