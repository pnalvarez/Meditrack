webpackHotUpdate(6,{

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _pages = __webpack_require__(1168);

var _pages2 = _interopRequireDefault(_pages);

var _supplychain = __webpack_require__(1142);

var _supplychain2 = _interopRequireDefault(_supplychain);

var _web = __webpack_require__(428);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/Blockcine/components/ProductRow.js';


var ProductRow = function (_Component) {
    (0, _inherits3.default)(ProductRow, _Component);

    function ProductRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dateString: ''
        }, _this.throwProductAway = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return _supplychain2.default.methods.throwAway(_this.props.uuid).send({ from: accounts[0] });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                    lineNumber: 46
                }
            }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, uuid), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, this.checkValidity(isValid)), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, dateString), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'See Path', icon: 'angle double right', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.throwProductAway, icon: 'trash', primary: true, style: { width: "90%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN1cHBseWNoYWluIiwid2ViMyIsIlByb2R1Y3RSb3ciLCJzdGF0ZSIsImRhdGVTdHJpbmciLCJ0aHJvd1Byb2R1Y3RBd2F5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ0aHJvd0F3YXkiLCJwcm9wcyIsInV1aWQiLCJzZW5kIiwiZnJvbSIsImluZGljYXRvciIsImRhdGUiLCJEYXRlIiwiY3JlYXRpb25UaW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2V0U3RhdGUiLCJSb3ciLCJDZWxsIiwiaWQiLCJuYW1lIiwiaXNWYWxpZCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9uIiwiY2hlY2tWYWxpZGl0eSIsIndpZHRoIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFPOztBQUNmLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVJOzs7Ozs7Ozs7Ozs7Ozs7d05BRW5CLEE7d0IsQUFBTSxBQUNVO0FBRFYsQUFDRixpQixBQVNKO2lHQUFtQixpQkFBQSxBQUFNLEdBQU47b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ2Y7a0NBRGUsQUFDZixBQUFFOztnREFEYTt1Q0FHUSxjQUFBLEFBQUssSUFIYixBQUdRLEFBQVM7O2lDQUExQjtBQUhTLG9EQUFBO2dEQUFBO3VDQUtULHNCQUFBLEFBQVksUUFBWixBQUFvQixVQUFVLE1BQUEsQUFB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedroalvarez/Desktop/Blockcine/components/ProductRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedroalvarez/Desktop/Blockcine/components/ProductRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi45ZGMyYWQxYmI0YjkzMjc4YjM3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Um93LmpzPzAwNmI4YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtUYWJsZSwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTdXBwbHljaGFpbkluZGV4IGZyb20gJy4uL3BhZ2VzJztcbmltcG9ydCBzdXBwbHljaGFpbiBmcm9tICcuLi9ldGhlcmV1bS9zdXBwbHljaGFpbidcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlPXtcbiAgICAgIGRhdGVTdHJpbmc6ICcnXG4gIH1cbiAgc3RhdGljIHByb3BUeXBlcz17XG4gICAgICB1dWlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgaXNWYWxpZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIGNyZWF0aW9uVGltZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH1cbiAgdGhyb3dQcm9kdWN0QXdheSA9IGFzeW5jIGU9PntcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgIFxuICAgICAgYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy50aHJvd0F3YXkodGhpcy5wcm9wcy51dWlkKVxuICAgICAgLnNlbmQoe2Zyb206IGFjY291bnRzWzBdfSlcbiAgfVxuICBjaGVja1ZhbGlkaXR5KGluZGljYXRvcil7XG4gICAgICBpZihpbmRpY2F0b3Ipe1xuICAgICAgICAgIHJldHVybiBcIlZhbGlkXCJcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuIFwiT3V0IG9mIHZhbGlkaXR5XCJcbiAgICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuY3JlYXRpb25UaW1lKjEwMDApXG4gICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJwdC1CUlwiKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0ZVN0cmluZ30pXG4gIH0gXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Um93LENlbGx9ID0gVGFibGVcbiAgICBjb25zdCB7dXVpZCwgaWQsIG5hbWUsIGlzVmFsaWQsIGNyZWF0aW9uVGltZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge2RhdGVTdHJpbmd9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8Um93PlxuICAgICAgICAgIDxDZWxsIHN0eWxlPXt7Ym9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGdyYXlcIiwgYm9yZGVyQm90dG9uOiBcIjFweCBzb2xpZCBncmF5XCJ9fT57dXVpZH08L0NlbGw+XG4gICAgICAgICAgPENlbGwgc3R5bGU9e3tib3JkZXJSaWdodDogXCIxcHggc29saWQgZ3JheVwiLCBib3JkZXJCb3R0b246IFwiMXB4IHNvbGlkIGdyYXlcIn19PntpZH08L0NlbGw+XG4gICAgICAgICAgPENlbGwgc3R5bGU9e3tib3JkZXJSaWdodDogXCIxcHggc29saWQgZ3JheVwiLCBib3JkZXJCb3R0b246IFwiMXB4IHNvbGlkIGdyYXlcIn19PntuYW1lfTwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbCBzdHlsZT17e2JvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBncmF5XCIsIGJvcmRlckJvdHRvbjogXCIxcHggc29saWQgZ3JheVwifX0+e3RoaXMuY2hlY2tWYWxpZGl0eShpc1ZhbGlkKX08L0NlbGw+XG4gICAgICAgICAgPENlbGwgc3R5bGU9e3tib3JkZXJSaWdodDogXCIxcHggc29saWQgZ3JheVwiLCBib3JkZXJCb3R0b246IFwiMXB4IHNvbGlkIGdyYXlcIn19PntkYXRlU3RyaW5nfTwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbCBzdHlsZT17e2JvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBncmF5XCIsIGJvcmRlckJvdHRvbjogXCIxcHggc29saWQgZ3JheVwifX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiU2VlIFBhdGhcIiBpY29uPVwiYW5nbGUgZG91YmxlIHJpZ2h0XCIgcHJpbWFyeSAvPlxuICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbCBzdHlsZT17e2JvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBncmF5XCIsIGJvcmRlckJvdHRvbjogXCIxcHggc29saWQgZ3JheVwifX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRocm93UHJvZHVjdEF3YXl9IGljb249XCJ0cmFzaFwiIHByaW1hcnkgc3R5bGU9e3t3aWR0aDogXCI5MCVcIn19Lz5cbiAgICAgICAgICA8L0NlbGw+XG4gICAgICA8L1Jvdz5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVNBO0FBQUE7QUFFQTtBQUZBO0FBS0E7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7Ozs7Ozs7O0FBMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==