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

var _jsxFileName = "/Users/pedro.alvarez/Desktop/ProjetoFinal/components/ReceiveTable.js";


var ReceiveTable = function (_Component) {
  (0, _inherits3.default)(ReceiveTable, _Component);

  function ReceiveTable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ReceiveTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReceiveTable.__proto__ || (0, _getPrototypeOf2.default)(ReceiveTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      receives: [{
        uuid: "UUID1",
        id: "ID1",
        time: "time1",
        from: "from1",
        to: "to1"
      }, {
        uuid: "UUID2",
        id: "ID2",
        time: "time2",
        from: "from2",
        to: "to2"
      }, {
        uuid: "UUID3",
        id: "ID3",
        time: "time3",
        from: "from3",
        to: "to3"
      }, {
        uuid: "UUID4",
        id: "ID4",
        time: "time4",
        from: "from4",
        to: "to4"
      }]
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ReceiveTable, [{
    key: "dataTable",
    value: function dataTable() {
      return this.state.receives.map(function (receive) {
        return _react2.default.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _react2.default.createElement("td", { "data-label": "UUID", __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, receive.uuid), _react2.default.createElement("td", { "data-lable": "ID", __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, receive.id), _react2.default.createElement("td", { "data-label": "Time", __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, receive.time), _react2.default.createElement("td", { "data-label": "From", __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, receive.from), _react2.default.createElement("td", { "data-label": "To", __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, receive.to));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement("table", { className: "ui celled table", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("th", { style: { backgroundColor: "darkgreen" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Product ID"), _react2.default.createElement("th", { style: { backgroundColor: "darkblue" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Medicine ID"), _react2.default.createElement("th", { style: { backgroundColor: "darkgreen" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Time"), _react2.default.createElement("th", { style: { backgroundColor: "darkblue" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Origin"), _react2.default.createElement("th", { style: { backgroundColor: "darkgreen" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Destiny")), _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, this.dataTable())));
    }
  }]);

  return ReceiveTable;
}(_react.Component);

exports.default = ReceiveTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVjZWl2ZVRhYmxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVjZWl2ZVRhYmxlIiwic3RhdGUiLCJyZWNlaXZlcyIsInV1aWQiLCJpZCIsInRpbWUiLCJmcm9tIiwidG8iLCJtYXAiLCJyZWNlaXZlIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YVRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7Ozs7d04sQUFFSjs7Y0FDYyxBQUNGLEFBQ047WUFGUSxBQUVKLEFBQ0o7Y0FIUSxBQUdGLEFBQ047Y0FKUSxBQUlGLEFBQ047WUFMTyxBQUFDLEFBS0o7QUFMSSxBQUNSLE9BRE87Y0FPVCxBQUNRLEFBQ047WUFGRixBQUVNLEFBQ0o7Y0FIRixBQUdRLEFBQ047Y0FKRixBQUlRLEFBQ047WUFaTyxBQU9ULEFBS007QUFMTixBQUNFO2NBTUYsQUFDUSxBQUNOO1lBRkYsQUFFTSxBQUNKO2NBSEYsQUFHUSxBQUNOO2NBSkYsQUFJUSxBQUNOO1lBbkJPLEFBY1QsQUFLTTtBQUxOLEFBQ0U7Y0FNRixBQUNRLEFBQ047WUFGRixBQUVNLEFBQ0o7Y0FIRixBQUdRLEFBQ047Y0FKRixBQUlRLEFBQ047WUEzQkEsQUFDTyxBQXFCVCxBLEFBS007QUFMTixBQUNFO0FBdkJBLEFBQ0Y7Ozs7O2dDQStCTyxBQUNQO2tCQUNJLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxtQkFBUyxBQUMvQjsrQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUEsUUFBSSxjQUFKLEFBQWU7c0JBQWY7d0JBQUEsQUFBdUI7QUFBdkI7bUJBREYsQUFDRSxBQUErQixBQUMvQix1QkFBQSxjQUFBLFFBQUksY0FBSixBQUFlO3NCQUFmO3dCQUFBLEFBQXFCO0FBQXJCO21CQUZGLEFBRUUsQUFBNkIsQUFDN0IscUJBQUEsY0FBQSxRQUFJLGNBQUosQUFBZTtzQkFBZjt3QkFBQSxBQUF1QjtBQUF2QjttQkFIRixBQUdFLEFBQStCLEFBQy9CLHVCQUFBLGNBQUEsUUFBSSxjQUFKLEFBQWU7c0JBQWY7d0JBQUEsQUFBdUI7QUFBdkI7bUJBSkYsQUFJRSxBQUErQixBQUMvQix1QkFBQSxjQUFBLFFBQUksY0FBSixBQUFlO3NCQUFmO3dCQUFBLEFBQXFCO0FBQXJCO21CQU5OLEFBQ0ksQUFLRSxBQUE2QixBQUdwQztBQVhMLEFBQ0ksQUFZUCxPQVpPOzs7OzZCQWFDLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBLFdBQU8sV0FBUCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDTTtBQUROO3lCQUNNLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLGNBQUEsUUFBSSxPQUFPLEVBQUMsaUJBQVosQUFBVyxBQUFrQjtvQkFBN0I7c0JBQUE7QUFBQTtTQURKLEFBQ0ksQUFDQSwrQkFBQSxjQUFBLFFBQUksT0FBTyxFQUFDLGlCQUFaLEFBQVcsQUFBa0I7b0JBQTdCO3NCQUFBO0FBQUE7U0FGSixBQUVJLEFBQ0EsZ0NBQUEsY0FBQSxRQUFJLE9BQU8sRUFBQyxpQkFBWixBQUFXLEFBQWtCO29CQUE3QjtzQkFBQTtBQUFBO1NBSEosQUFHSSxBQUNBLHlCQUFBLGNBQUEsUUFBSSxPQUFPLEVBQUMsaUJBQVosQUFBVyxBQUFrQjtvQkFBN0I7c0JBQUE7QUFBQTtTQUpKLEFBSUksQUFDQSwyQkFBQSxjQUFBLFFBQUksT0FBTyxFQUFDLGlCQUFaLEFBQVcsQUFBa0I7b0JBQTdCO3NCQUFBO0FBQUE7U0FOVixBQUNNLEFBS0ksQUFFSiw2QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQVZaLEFBQ0UsQUFDSSxBQVFNLEFBQ0csQUFBSyxBQUtyQjs7Ozs7QUFsRXdCLEEsQUFxRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlY2VpdmVUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9