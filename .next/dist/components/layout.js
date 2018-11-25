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

var _semanticUiReact = require('semantic-ui-react');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/Blockcine/components/layout.js';


var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Layout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Layout, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;

                                this.setState({ account: accounts[0] });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            })), _react2.default.createElement('div', { style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), this.state.account !== '0x0' ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, this.props.children) : _react2.default.createElement('div', { className: 'ui active dimmer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('div', { className: 'ui loader', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }))));
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiSGVhZCIsIndlYjMiLCJMYXlvdXQiLCJzdGF0ZSIsImFjY291bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJtYXJnaW5Ub3AiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVE7O0FBQ1IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztJQUVJLEE7Ozs7Ozs7Ozs7Ozs7O2dOLEFBRW5CO3FCQUFNLEFBQ08sQTtBQURQLEFBQ0Y7Ozs7Ozs7Ozs7Ozs7dUNBR3VCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7aUNBQTFCO0Esb0RBQ047O3FDQUFBLEFBQUssU0FBUyxFQUFDLFNBQVMsU0FBeEIsQUFBYyxBQUFVLEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFN0IsQUFDTjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHVEQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FGUixBQUNJLEFBQ0ksQUFHSjtBQUhJO2lDQUdKLGNBQUEsU0FBSyxPQUFPLEVBQUMsV0FBYixBQUFZLEFBQVk7OEJBQXhCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FESixBQUNJLEFBQ0M7QUFERDtBQUFBLHFCQUNDLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsd0JBQ3hCLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0M7QUFERDtBQUFBLGFBQUEsT0FDQyxBQUFLLE1BRkwsQUFDRCxBQUNZLDRCQUFrQixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQzlCO0FBRDhCO2FBQUEseUNBQ3pCLFdBQUwsQUFBZTs4QkFBZjtnQ0FYWixBQUNJLEFBS0ksQUFJa0MsQUFDOUIsQUFNYjtBQU5hOzs7Ozs7QUFyQm9CLEE7O2tCQUFmLEEiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyb2FsdmFyZXovRGVza3RvcC9CbG9ja2NpbmUifQ==