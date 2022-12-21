"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var dataSchema = new _mongoose.Schema({
  title: String,
  backgroundColor: String,
  start: Date,
  end: Date,
  user: String
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('Data', dataSchema);
exports["default"] = _default;