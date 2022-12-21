"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _helmet = _interopRequireDefault(require("helmet"));
var _package = _interopRequireDefault(require("../package.json"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _data = _interopRequireDefault(require("./routes/data.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Routes

var app = (0, _express["default"])();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);
app.set('pkg', _package["default"]); // project data

// Middlewares
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

// Routes
app.get('/', function (req, res) {
  var _app$get = app.get('pkg'),
    name = _app$get.name,
    version = _app$get.version,
    description = _app$get.description,
    author = _app$get.author;
  res.json({
    name: name,
    version: version,
    description: description,
    author: author
  });
});
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/calendar', _data["default"]);
var _default = app;
exports["default"] = _default;