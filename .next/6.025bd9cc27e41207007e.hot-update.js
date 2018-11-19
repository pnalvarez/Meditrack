webpackHotUpdate(6,{

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(491);

var _propTypes = __webpack_require__(55);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/components/ProductRow.js';


var ProductRow = function (_Component) {
    (0, _inherits3.default)(ProductRow, _Component);

    function ProductRow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dateString: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductRow, [{
        key: 'checkValidity',
        value: function checkValidity(indicator) {
            if (indicator) {
                return "Valid";
            } else {
                return "Out of validity";
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var date = new Date(this.props.creationTime * 1000);
            var dateString = date.toLocaleDateString("pt-BR");
            this.setState({ dateString: dateString });
        }
    }, {
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                uuid = _props.uuid,
                id = _props.id,
                name = _props.name,
                isValid = _props.isValid,
                creationTime = _props.creationTime;
            var dateString = this.state.dateString;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, uuid), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.checkValidity(isValid)), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, dateString), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'See Path', icon: 'angle double right', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })));
        }
    }]);

    return ProductRow;
}(_react.Component);

ProductRow.propTypes = {
    uuid: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    isValid: _propTypes2.default.bool.isRequired,
    creationTime: _propTypes2.default.string.isRequired
};
exports.default = ProductRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwiUHJvZHVjdFJvdyIsInN0YXRlIiwiZGF0ZVN0cmluZyIsImluZGljYXRvciIsImRhdGUiLCJEYXRlIiwicHJvcHMiLCJjcmVhdGlvblRpbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzZXRTdGF0ZSIsIlJvdyIsIkNlbGwiLCJ1dWlkIiwiaWQiLCJuYW1lIiwiaXNWYWxpZCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9uIiwiY2hlY2tWYWxpZGl0eSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU87O0FBQ2YsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFbkI7d0IsQUFBTSxBQUNVO0FBRFYsQUFDRjs7Ozs7c0MsQUFTVSxXQUFVLEFBQ3BCO2dCQUFBLEFBQUcsV0FBVSxBQUNUO3VCQUFBLEFBQU8sQUFDVjtBQUZELG1CQUdJLEFBQ0E7dUJBQUEsQUFBTyxBQUNWO0FBQ0o7Ozs7NENBQ2tCLEFBQ2Y7Z0JBQU0sT0FBTyxJQUFBLEFBQUksS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWpDLEFBQWEsQUFBaUMsQUFDOUM7Z0JBQU0sYUFBYSxLQUFBLEFBQUssbUJBQXhCLEFBQW1CLEFBQXdCLEFBQzNDO2lCQUFBLEFBQUssU0FBUyxFQUFDLFlBQWYsQUFBYyxBQUNqQjs7OztpQ0FDUTtnQkFBQSxBQUNBLE1BREEsQUFDWSx1QkFEWixBQUNBO2dCQURBLEFBQ0ksT0FESixBQUNZLHVCQURaLEFBQ0k7eUJBQ3FDLEtBRnpDLEFBRThDO2dCQUY5QyxBQUVBLGNBRkEsQUFFQTtnQkFGQSxBQUVNLFlBRk4sQUFFTTtnQkFGTixBQUVVLGNBRlYsQUFFVTtnQkFGVixBQUVnQixpQkFGaEIsQUFFZ0I7Z0JBRmhCLEFBRXlCLHNCQUZ6QixBQUV5QjtnQkFGekIsQUFHQSxhQUFjLEtBSGQsQUFHbUIsTUFIbkIsQUFHQSxBQUNQOzttQ0FDRyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNLLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4Qzs4QkFBM0Q7Z0NBQUEsQUFBK0U7QUFBL0U7ZUFGSixBQUVJLEFBQ0EscUJBQUMsY0FBRCxRQUFNLE9BQU8sRUFBQyxhQUFELEFBQWMsa0JBQWtCLGNBQTdDLEFBQWEsQUFBOEM7OEJBQTNEO2dDQUFBLEFBQStFO0FBQS9FO2VBSEosQUFHSSxBQUNBLHVCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtvQkFBK0UsQUFBSyxjQUp4RixBQUlJLEFBQStFLEFBQW1CLEFBQ2xHLDJCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtlQUxKLEFBS0ksQUFDQSw2QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4Qzs4QkFBM0Q7Z0NBQUEsQUFDTTtBQUROOytCQUNNLEFBQUMseUNBQU8sU0FBUixBQUFnQixZQUFXLE1BQTNCLEFBQWdDLHNCQUFxQixTQUFyRDs4QkFBQTtnQ0FSWixBQUNFLEFBTUksQUFDTSxBQUliO0FBSmE7Ozs7OztBQXJDd0IsQTs7QSxBQUFuQixXQUtaLEE7VUFDRyxvQkFBQSxBQUFVLE9BREgsQUFDVSxBQUN2QjtRQUFJLG9CQUFBLEFBQVUsT0FGRCxBQUVRLEFBQ3JCO1VBQU0sb0JBQUEsQUFBVSxPQUhILEFBR1UsQUFDdkI7YUFBUyxvQkFBQSxBQUFVLEtBSk4sQUFJVyxBQUN4QjtrQkFBYyxvQkFBQSxBQUFVLE9BTFgsQUFLa0IsQTtBQUxsQixBQUNiO2tCQU5lLEEiLCJmaWxlIjoiUHJvZHVjdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedro.alvarez/Desktop/ProjetoFinal/components/ProductRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedro.alvarez/Desktop/ProjetoFinal/components/ProductRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wMjViZDljYzI3ZTQxMjA3MDA3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Um93LmpzPzI2OGUxNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtUYWJsZSwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGU9e1xuICAgICAgZGF0ZVN0cmluZzogJydcbiAgfVxuICBzdGF0aWMgcHJvcFR5cGVzPXtcbiAgICAgIHV1aWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBpc1ZhbGlkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgY3JlYXRpb25UaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfVxuICBjaGVja1ZhbGlkaXR5KGluZGljYXRvcil7XG4gICAgICBpZihpbmRpY2F0b3Ipe1xuICAgICAgICAgIHJldHVybiBcIlZhbGlkXCJcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuIFwiT3V0IG9mIHZhbGlkaXR5XCJcbiAgICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuY3JlYXRpb25UaW1lKjEwMDApXG4gICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJwdC1CUlwiKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0ZVN0cmluZ30pXG4gIH0gXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Um93LENlbGx9ID0gVGFibGVcbiAgICBjb25zdCB7dXVpZCwgaWQsIG5hbWUsIGlzVmFsaWQsIGNyZWF0aW9uVGltZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge2RhdGVTdHJpbmd9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8Um93PlxuICAgICAgICAgIDxDZWxsIHN0eWxlPXt7Ym9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGdyYXlcIiwgYm9yZGVyQm90dG9uOiBcIjFweCBzb2xpZCBncmF5XCJ9fT57dXVpZH08L0NlbGw+XG4gICAgICAgICAgPENlbGwgc3R5bGU9e3tib3JkZXJSaWdodDogXCIxcHggc29saWQgZ3JheVwiLCBib3JkZXJCb3R0b246IFwiMXB4IHNvbGlkIGdyYXlcIn19PntpZH08L0NlbGw+XG4gICAgICAgICAgPENlbGwgc3R5bGU9e3tib3JkZXJSaWdodDogXCIxcHggc29saWQgZ3JheVwiLCBib3JkZXJCb3R0b246IFwiMXB4IHNvbGlkIGdyYXlcIn19PntuYW1lfTwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbCBzdHlsZT17e2JvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBncmF5XCIsIGJvcmRlckJvdHRvbjogXCIxcHggc29saWQgZ3JheVwifX0+e3RoaXMuY2hlY2tWYWxpZGl0eShpc1ZhbGlkKX08L0NlbGw+XG4gICAgICAgICAgPENlbGwgc3R5bGU9e3tib3JkZXJSaWdodDogXCIxcHggc29saWQgZ3JheVwiLCBib3JkZXJCb3R0b246IFwiMXB4IHNvbGlkIGdyYXlcIn19PntkYXRlU3RyaW5nfTwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbCBzdHlsZT17e2JvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBncmF5XCIsIGJvcmRlckJvdHRvbjogXCIxcHggc29saWQgZ3JheVwifX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiU2VlIFBhdGhcIiBpY29uPVwiYW5nbGUgZG91YmxlIHJpZ2h0XCIgcHJpbWFyeSAvPlxuICAgICAgICAgIDwvQ2VsbD5cbiAgICAgIDwvUm93PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcm9kdWN0Um93LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7QUFVQTtBQUFBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7Ozs7Ozs7O0FBL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==