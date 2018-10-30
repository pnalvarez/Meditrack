"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/pedro.alvarez/Desktop/ProjetoFinal/components/SinisterTable.js";


var SinisterTable = function (_Component) {
  (0, _inherits3.default)(SinisterTable, _Component);

  function SinisterTable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SinisterTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SinisterTable.__proto__ || (0, _getPrototypeOf2.default)(SinisterTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sinisters: [{
        title: "Title1",
        description: "Description1",
        id: "id1",
        time: "time1"
      }, {
        title: "Title2",
        description: "Description2",
        id: "id2",
        time: "time2"
      }, {
        title: "Title3",
        description: "Description3",
        id: "id3",
        time: "time3"
      }, {
        title: "Title4",
        description: "Description4",
        id: "id4",
        time: "time4"
      }]
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SinisterTable, [{
    key: "dataTable",
    value: function dataTable() {
      return this.state.sinisters.map(function (sinister) {
        return _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement("td", { "data-label": "Title", __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, sinister.title), _react2.default.createElement("td", { "data-lable": "Description", __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, sinister.description), _react2.default.createElement("td", { "data-label": "Id", __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, sinister.id), _react2.default.createElement("td", { "data-label": "Time", __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, sinister.time));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("table", { className: "ui celled table", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("th", { style: { backgroundColor: "gold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Title"), _react2.default.createElement("th", { style: { backgroundColor: "darkcyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Description"), _react2.default.createElement("th", { style: { backgroundColor: "gold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Product Id"), _react2.default.createElement("th", { style: { backgroundColor: "darkcyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Time")), _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.dataTable())));
    }
  }]);

  return SinisterTable;
}(_react.Component);

exports.default = SinisterTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2luaXN0ZXJUYWJsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNpbmlzdGVyVGFibGUiLCJzdGF0ZSIsInNpbmlzdGVycyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpZCIsInRpbWUiLCJtYXAiLCJzaW5pc3RlciIsImJhY2tncm91bmRDb2xvciIsImRhdGFUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7Ozs7OzBOLEFBRUo7O2VBQ2UsQUFDRixBQUNQO3FCQUZTLEFBRUksQUFDYjtZQUhTLEFBR0wsQUFDSjtjQUpRLEFBQUMsQUFJSDtBQUpHLEFBQ1QsT0FEUTtlQU1WLEFBQ1MsQUFDUDtxQkFGRixBQUVlLEFBQ2I7WUFIRixBQUdNLEFBQ0o7Y0FWUSxBQU1WLEFBSVE7QUFKUixBQUNFO2VBS0YsQUFDUyxBQUNQO3FCQUZGLEFBRWUsQUFDYjtZQUhGLEFBR00sQUFDSjtjQWhCUSxBQVlWLEFBSVE7QUFKUixBQUNFO2VBS0YsQUFDUyxBQUNQO3FCQUZGLEFBRWUsQUFDYjtZQUhGLEFBR00sQUFDSjtjQXZCQSxBQUNRLEEsQUFrQlYsQUFJUTtBQUpSLEFBQ0U7QUFwQkEsQUFDRjs7Ozs7Z0NBMkJPLEFBQ1A7a0JBQ0ksQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG9CQUFVLEFBQ2pDOytCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsY0FBQSxRQUFJLGNBQUosQUFBZTtzQkFBZjt3QkFBQSxBQUF3QjtBQUF4QjtvQkFERixBQUNFLEFBQWlDLEFBQ2pDLHdCQUFBLGNBQUEsUUFBSSxjQUFKLEFBQWU7c0JBQWY7d0JBQUEsQUFBOEI7QUFBOUI7b0JBRkYsQUFFRSxBQUF1QyxBQUN2Qyw4QkFBQSxjQUFBLFFBQUksY0FBSixBQUFlO3NCQUFmO3dCQUFBLEFBQXFCO0FBQXJCO29CQUhGLEFBR0UsQUFBOEIsQUFDOUIscUJBQUEsY0FBQSxRQUFJLGNBQUosQUFBZTtzQkFBZjt3QkFBQSxBQUF1QjtBQUF2QjtvQkFMTixBQUNJLEFBSUUsQUFBZ0MsQUFHdkM7QUFWTCxBQUNJLEFBV1AsT0FYTzs7Ozs2QkFZQyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLE9BQUEsa0JBQ0ksY0FBQSxXQUFPLFdBQVAsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ007QUFETjt5QkFDTSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBLFFBQUksT0FBTyxFQUFDLGlCQUFaLEFBQVcsQUFBa0I7b0JBQTdCO3NCQUFBO0FBQUE7U0FESixBQUNJLEFBQ0EsMEJBQUEsY0FBQSxRQUFJLE9BQU8sRUFBQyxpQkFBWixBQUFXLEFBQWtCO29CQUE3QjtzQkFBQTtBQUFBO1NBRkosQUFFSSxBQUNBLGdDQUFBLGNBQUEsUUFBSSxPQUFPLEVBQUMsaUJBQVosQUFBVyxBQUFrQjtvQkFBN0I7c0JBQUE7QUFBQTtTQUhKLEFBR0ksQUFDQSwrQkFBQSxjQUFBLFFBQUksT0FBTyxFQUFDLGlCQUFaLEFBQVcsQUFBa0I7b0JBQTdCO3NCQUFBO0FBQUE7U0FMVixBQUNNLEFBSUksQUFFSiwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQVRaLEFBQ0UsQUFDSSxBQU9NLEFBQ0csQUFBSyxBQUtyQjs7Ozs7QUE1RHlCLEEsQUErRDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNpbmlzdGVyVGFibGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvLmFsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==