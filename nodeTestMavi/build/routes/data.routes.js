"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authJwt = require("../middlewares/authJwt.js");
var _data = require("../controllers/data.controllers");
var router = (0, _express.Router)();
router.get([_authJwt.verifyToken], _data.getData);
router.get('/:dataId', [_authJwt.verifyToken], _data.getDataByID);
router.post('/', [_authJwt.verifyToken], _data.createData);
router.put('/:dataId', [_authJwt.verifyToken], _data.updateDataByID);
router["delete"]('/:dataId', [_authJwt.verifyToken], _data.deleteDataByID);
var _default = router;
exports["default"] = _default;