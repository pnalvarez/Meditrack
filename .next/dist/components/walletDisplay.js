'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _supplychain = require('../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/components/walletDisplay.js';


var walletDisplay = function (_Component) {
    (0, _inherits3.default)(walletDisplay, _Component);

    function walletDisplay() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, walletDisplay);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = walletDisplay.__proto__ || (0, _getPrototypeOf2.default)(walletDisplay)).call.apply(_ref, [this].concat(args))), _this), _this.walletDisplayStyle = {
            margin: "5em 0",
            marginLeft: "12em",
            width: "58%"
        }, _this.headerStyle = {
            marginLeft: "30%",
            color: "blue"
        }, _this.subHeaderStyle = {
            marginLeft: "20%"
        }, _this.state = {
            medicineNamesTotal: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(walletDisplay, [{
        key: 'medicineList',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', this.props.medicines.map(function (medicine) {
                                    return _react2.default.createElement('li', {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    }, medicine);
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function medicineList() {
                return _ref2.apply(this, arguments);
            }

            return medicineList;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'ui card', style: this.walletDisplayStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', { className: 'header', style: this.headerStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Found Wallet Information')), _react2.default.createElement('h4', { className: 'ui sub header', style: this.subHeaderStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Wallet'), _react2.default.createElement('div', { className: 'ui small feed', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', { className: 'content', style: { marginBottom: "30px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', { className: 'summary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('a', { style: { fontSize: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Address: '), ' ', this.props.address)), _react2.default.createElement('div', { className: 'content', style: { marginBottom: "30px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('div', { className: 'summary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('a', { style: { fontSize: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Creation Time: '), ' ', this.props.creationTime)), _react2.default.createElement('div', { className: 'content', style: { marginBottom: "30px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('div', { className: 'summary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('a', { style: { fontSize: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Fuction: '), ' ', this.props.f)), _react2.default.createElement('div', { className: 'content', style: { marginBottom: "30px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('div', { className: 'summary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('a', { style: { fontSize: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Medicines: '), _react2.default.createElement('ul', { style: { marginLeft: "15%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })))));
        }
    }]);

    return walletDisplay;
}(_react.Component);

walletDisplay.propTypes = {
    address: _propTypes2.default.string.isRequired,
    creationTime: _propTypes2.default.string.isRequired,
    f: _propTypes2.default.string.isRequired,
    medicinesTotal: _propTypes2.default.string.isRequired,
    medicines: _propTypes2.default.array.isRequired,
    medicinesQtds: _propTypes2.default.array.isRequired
};
exports.default = walletDisplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2FsbGV0RGlzcGxheS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN1cHBseWNoYWluIiwid2FsbGV0RGlzcGxheSIsIndhbGxldERpc3BsYXlTdHlsZSIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImhlYWRlclN0eWxlIiwiY29sb3IiLCJzdWJIZWFkZXJTdHlsZSIsInN0YXRlIiwibWVkaWNpbmVOYW1lc1RvdGFsIiwicHJvcHMiLCJtZWRpY2luZXMiLCJtYXAiLCJtZWRpY2luZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiYWRkcmVzcyIsImNyZWF0aW9uVGltZSIsImYiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibWVkaWNpbmVzVG90YWwiLCJhcnJheSIsIm1lZGljaW5lc1F0ZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUVILEE7Ozs7Ozs7Ozs7Ozs7OzhOLEFBVW5CO29CQUFtQixBQUNULEFBQ1I7d0JBRmlCLEFBRUwsQUFDWjttQkFIaUIsQSxBQUdWO0FBSFUsQUFDakIsaUIsQUFJRjt3QkFBWSxBQUNJLEFBQ1o7bUJBRlEsQSxBQUVEO0FBRkMsQUFDUixpQixBQUdKO3dCLEFBQWUsQUFDQztBQURELEFBQ1gsaUIsQUFFSjtnQ0FBTSxBQUNvQixBO0FBRHBCLEFBQ0E7Ozs7Ozs7Ozs7O3NFQUtJLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSyxvQkFBVSxBQUNwQzsyREFDQSxjQUFBOztzREFBQTt3REFBQSxBQUFLO0FBQUw7QUFBQSxxQ0FBQSxFQURBLEFBQ0EsQUFFSDtBQUpHLEEsaUNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FPRCxBQUNQO21DQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsV0FBVSxPQUFPLEtBQWhDLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUNFO0FBREY7YUFBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlLFVBQVMsT0FBTyxLQUEvQixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQUZOLEFBQ0UsQUFDSSxBQUVKLDhDQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWMsaUJBQWdCLE9BQU8sS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7ZUFKRixBQUlFLEFBQ0EsMkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxXQUFVLE9BQU8sRUFBQyxjQUFqQyxBQUFnQyxBQUFlOzhCQUEvQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE9BQU8sRUFBQyxVQUFYLEFBQVUsQUFBVzs4QkFBckI7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksY0FBNkMsVUFBQSxBQUFLLE1BSDlELEFBQ0ksQUFDSSxBQUM0RCxBQUdoRSwyQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLFdBQVUsT0FBTyxFQUFDLGNBQWpDLEFBQWdDLEFBQWU7OEJBQS9DO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsT0FBTyxFQUFDLFVBQVgsQUFBVSxBQUFXOzhCQUFyQjtnQ0FBQTtBQUFBO2VBREosQUFDSSxvQkFBbUQsVUFBQSxBQUFLLE1BUnBFLEFBTUksQUFDSSxBQUNrRSxBQUd0RSxnQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlLFdBQVUsT0FBTyxFQUFDLGNBQWpDLEFBQWdDLEFBQWU7OEJBQS9DO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsT0FBTyxFQUFDLFVBQVgsQUFBVSxBQUFXOzhCQUFyQjtnQ0FBQTtBQUFBO2VBREosQUFDSSxjQUE2QyxVQUFBLEFBQUssTUFiOUQsQUFXSSxBQUNJLEFBQzRELEFBR2hFLHFCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsV0FBVSxPQUFPLEVBQUMsY0FBakMsQUFBZ0MsQUFBZTs4QkFBL0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxPQUFPLEVBQUMsVUFBWCxBQUFVLEFBQVc7OEJBQXJCO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0Esc0RBQUksT0FBTyxFQUFDLFlBQVosQUFBVyxBQUFhOzhCQUF4QjtnQ0F6QmhCLEFBQ0UsQUFLRSxBQWdCSSxBQUNJLEFBRUksQUFRakI7QUFSaUI7Ozs7OztBLEFBN0R1Qjs7QUFBdEIsQSxjQUViLEE7YUFDTyxvQkFBQSxBQUFVLE9BRFAsQUFDYyxBQUMxQjtrQkFBYyxvQkFBQSxBQUFVLE9BRlosQUFFbUIsQUFDL0I7T0FBRyxvQkFBQSxBQUFVLE9BSEQsQUFHUSxBQUNwQjtvQkFBZ0Isb0JBQUEsQUFBVSxPQUpkLEFBSXFCLEFBQ2pDO2VBQVcsb0JBQUEsQUFBVSxNQUxULEFBS2UsQUFDM0I7bUJBQWUsb0JBQUEsQUFBVSxNQU5iLEFBTW1CLEE7QUFObkIsQUFDWjtrQkFIZSxBIiwiZmlsZSI6IndhbGxldERpc3BsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9