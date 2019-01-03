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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/pages/wallets/createWallet.js?entry';


var createWallet = function (_Component) {
    (0, _inherits3.default)(createWallet, _Component);

    function createWallet() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, createWallet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createWallet.__proto__ || (0, _getPrototypeOf2.default)(createWallet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            walletAddress: '0x0',
            funcao: 'Productor',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _supplychain2.default.methods.createWallet(_this.state.walletAddress, _this.state.funcao).send({ from: _this.state.account });

                            case 5:
                                _routes.Router.pushRoute('/');
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 11:
                                _this.setState({ loading: false });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 8]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(createWallet, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var accounts, account;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context2.sent;
                                account = accounts[0];

                                this.setState({ account: account });

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, this.state.account !== '0x0' ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, this.state.account, '(manager) adicionando nova wallet'), _react2.default.createElement('form', { className: 'ui form', onSubmit: this.onSubmit, style: { marginTop: "60px" }, error: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', { className: 'field', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Address: '), _react2.default.createElement('div', { className: 'ui left icon input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ walletAddress: e.target.value });
                }, name: 'address', placeholder: 'Insert Ethereum Wallet Address', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement('i', { className: 'tags icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }))), _react2.default.createElement('div', { className: 'field', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Function: '), _react2.default.createElement('div', { className: 'ui left icon input', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('select', { onChange: function onChange(e) {
                    _this3.setState({ funcao: e.target.value });
                }, className: 'ui dropdown', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('option', { value: 'Productor', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Productor'), _react2.default.createElement('option', { value: 'Stock', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Stock'), _react2.default.createElement('option', { value: 'Transport', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Transport'), _react2.default.createElement('option', { value: 'CirurgicCenter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Cirurgic Center'), _react2.default.createElement('option', { value: 'Seller', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Seller'), _react2.default.createElement('option', { value: 'Buyer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Buyer')))), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Oops, there was an error!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, this.state.errorMessage)) : null, _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', className: 'ui positive button', loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Create a Kind of Medicine for your Supplychain'))) : _react2.default.createElement('div', { className: 'ui active dimmer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('div', { className: 'ui loader', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            })));
        }
    }]);

    return createWallet;
}(_react.Component);

exports.default = createWallet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dhbGxldHMvY3JlYXRlV2FsbGV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwid2ViMyIsInN1cHBseWNoYWluIiwiTWVzc2FnZSIsIkJ1dHRvbiIsIlJvdXRlciIsImNyZWF0ZVdhbGxldCIsInN0YXRlIiwiYWNjb3VudCIsIndhbGxldEFkZHJlc3MiLCJmdW5jYW8iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVEsQUFDUixBQUFROztBQUNSLEFBQVEsQUFBYTs7Ozs7OztJLEFBRUE7Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUVuQjtxQkFBUSxBQUNLLEFBQ1Q7MkJBRkksQUFFVyxBQUNmO29CQUhJLEFBR0ksQUFDUjswQkFKSSxBQUlVLEFBQ2Q7cUJBTEksQUFLSyxBO0FBTEwsQUFDSixpQkFPSixBO2lHQUFXLGlCQUFBLEFBQU0sR0FBTjs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtrQ0FBQSxBQUFFLEFBRUY7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBSHZCLEFBR1AsQUFBYyxBQUE4QjtnREFIckM7Z0RBQUE7dUNBS0Qsc0JBQUEsQUFBWSxRQUFaLEFBQ2EsYUFBYSxNQUFBLEFBQUssTUFEL0IsQUFDcUMsZUFBYyxNQUFBLEFBQUssTUFEeEQsQUFDOEQsUUFE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ZDtnQ0FBQTtBQUFBO2VBakJoQixBQVFRLEFBRUksQUFDQSxBQU1JLEFBSVIsa0JBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIscUJBQ3hCLEFBQUMsMENBQVEsVUFBVDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHlCQUFBLEFBQVM7OzhCQUFUO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4Q0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BSGpCLEFBQ0ksQUFFSSxBQUFlLGlCQXhCL0IsQUF5QnlCLEFBQ2pCLHNCQUFBLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0Msc0JBQXFCLFNBQVMsS0FBQSxBQUFLLE1BQW5FLEFBQXlFOzhCQUF6RTtnQ0FBQTtBQUFBO2VBN0JDLEFBQ1QsQUFFQSxBQTBCUSxzRUFFQyxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0Q7QUFEQzthQUFBLHlDQUNJLFdBQUwsQUFBZTs4QkFBZjtnQ0FqQ1osQUFDSSxBQStCUyxBQUNELEFBSWI7QUFKYTs7Ozs7O0FBaEUwQixBOztrQkFBckIsQSIsImZpbGUiOiJjcmVhdGVXYWxsZXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9