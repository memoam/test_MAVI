"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authController = require("../controllers/auth.controller.js");
var _verifySignup = require("../middlewares/verifySignup.js");
var router = (0, _express.Router)();
router.post('/signin', _authController.signIn);
router.post('/signup', _verifySignup.checkExistingUser, _authController.signUp);
var _default = router;
exports["default"] = _default;