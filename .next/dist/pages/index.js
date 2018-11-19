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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _supplychain = require('../ethereum/supplychain.js');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _InfoCards = require('../components/InfoCards/InfoCards');

var _InfoCards2 = _interopRequireDefault(_InfoCards);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/index.js?entry';


var SupplychainIndex = function (_Component) {
    (0, _inherits3.default)(SupplychainIndex, _Component);

    function SupplychainIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SupplychainIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SupplychainIndex.__proto__ || (0, _getPrototypeOf2.default)(SupplychainIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            funcao: '',
            capacity: '',
            currentWeight: '',
            sinisters: '',
            balance: '',
            receives: '',
            medicines: [],
            productTrace: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SupplychainIndex, [{
        key: 'userIsManager',
        value: function userIsManager() {
            return this.props.manager === this.state.account;
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts, funcao, capacity, balance, currentWeight, productTrace, date;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;

                                console.log("accounts", accounts);
                                _context.next = 6;
                                return _supplychain2.default.methods.getWalletFunction(accounts[0]).call();

                            case 6:
                                funcao = _context.sent;
                                _context.next = 9;
                                return _supplychain2.default.methods.getWalletWeight(accounts[0]).call();

                            case 9:
                                capacity = _context.sent;
                                _context.next = 12;
                                return _supplychain2.default.methods.getBalanceof(accounts[0]).call();

                            case 12:
                                balance = _context.sent;
                                _context.next = 15;
                                return _supplychain2.default.methods.getWalletCurrentWeight(accounts[0]).call();

                            case 15:
                                currentWeight = _context.sent;
                                _context.next = 18;
                                return _supplychain2.default.methods.getProductCreationTime("uuid0").call();

                            case 18:
                                productTrace = _context.sent;
                                date = new Date(productTrace * 1000);

                                console.log("product trace", date);
                                // const medicines = await supplychain.methods.medicineNames().call()
                                this.setState({ account: accounts[0], funcao: funcao, capacity: capacity, balance: balance, currentWeight: currentWeight, productTrace: productTrace });

                            case 22:
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

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('div', { style: { alignContent: "center" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Menu Principal'), this.props.manager === this.state.account ? _react2.default.createElement('h2', { style: { color: "blue" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Manager') : null, _react2.default.createElement('h4', { style: { color: "gray", marginTop: "0px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Bem vindo, usu\xE1rio da carteira ', this.state.account), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'A cadeia de suprimentos foi criada no dia ', this.props.begin), _react2.default.createElement(_InfoCards2.default, { address: this.state.account,
                funcao: this.state.funcao,
                capacity: this.state.capacity,
                balance: this.state.balance,
                currentWeight: this.state.currentWeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Dep\xF3sito', icon: 'play', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Recibos', icon: 'envelope', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: '\x1CSinistros', icon: 'bolt', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), this.props.manager === this.state.account ? _react2.default.createElement(_routes.Link, { route: '/wallets/walletsView', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Wallet', icon: 'address card', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }))) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Alertas', icon: 'exclamation triangle', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_routes.Link, { route: '/products/trackProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Rastrear Produto', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/medicineList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Cat\xE1logo de Rem\xE9dios', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            })))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "2%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, this.userIsManager() ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_routes.Link, { route: '/wallets/createWallet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Wallet', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/createProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Medicamento', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            })))) : null, this.state.funcao === "Productor" ? _react2.default.createElement(_routes.Link, { route: '/products/GenerateProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Gerar Produto', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }))) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Transferir Produto', icon: 'share', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var manager, timestamp, date, begin, func, medicine;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _supplychain2.default.methods.manager().call();

                            case 2:
                                manager = _context2.sent;
                                _context2.next = 5;
                                return _supplychain2.default.methods.begin().call();

                            case 5:
                                timestamp = _context2.sent;
                                date = new Date(timestamp * 1000);
                                begin = date;
                                _context2.next = 10;
                                return _supplychain2.default.methods.getWalletFunction(manager).call();

                            case 10:
                                func = _context2.sent;
                                _context2.next = 13;
                                return _supplychain2.default.methods.getWalletMedicineQtd(manager, "id").call();

                            case 13:
                                medicine = _context2.sent;
                                return _context2.abrupt('return', { manager: manager, func: func, medicine: medicine, begin: begin });

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return SupplychainIndex;
}(_react.Component);

exports.default = SupplychainIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51Iiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJJbmZvQ2FyZHMiLCJMaW5rIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN0YXRlIiwiYWNjb3VudCIsImZ1bmNhbyIsImNhcGFjaXR5IiwiY3VycmVudFdlaWdodCIsInNpbmlzdGVycyIsImJhbGFuY2UiLCJyZWNlaXZlcyIsIm1lZGljaW5lcyIsInByb2R1Y3RUcmFjZSIsInByb3BzIiwibWFuYWdlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImdldFdhbGxldEZ1bmN0aW9uIiwiY2FsbCIsImdldFdhbGxldFdlaWdodCIsImdldEJhbGFuY2VvZiIsImdldFdhbGxldEN1cnJlbnRXZWlnaHQiLCJnZXRQcm9kdWN0Q3JlYXRpb25UaW1lIiwiZGF0ZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImFsaWduQ29udGVudCIsImNvbG9yIiwibWFyZ2luVG9wIiwiYmVnaW4iLCJ3aWR0aCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbiIsInVzZXJJc01hbmFnZXIiLCJ0aW1lc3RhbXAiLCJmdW5jIiwiZ2V0V2FsbGV0TWVkaWNpbmVRdGQiLCJtZWRpY2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBUTs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7Ozs7O29PQUVGLEE7cUJBQU0sQUFDTyxBQUNUO29CQUZFLEFBRU0sQUFDUjtzQkFIRSxBQUdRLEFBQ1Y7MkJBSkUsQUFJ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QUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUF3QztBQUF4QzthQUFBLGtCQUF3QyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFHO0FBQUg7QUFBQSwrQkFBRyxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsaUJBQWdCLE1BQWhDLEFBQXFDLGNBQWEsV0FBbEQ7OEJBQUE7Z0NBQTlFLEFBQW1DLEFBQXdDLEFBQUc7QUFBQTttQkFKakYsQUFJNEosQUFDMUosc0JBQUEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLHNCQUFxQixNQUFyQyxBQUEwQyxTQUFRLFdBQWxEOzhCQUFBO2dDQTVCWixBQUNJLEFBRUcsQUFvQkcsQUFLRSxBQU1mO0FBTmU7Ozs7Ozs7Ozs7Ozs7dUNBckRVLHNCQUFBLEFBQVksUUFBWixBQUFvQixVQUFwQixBQUE4QixBOztpQ0FBOUM7QTs7dUNBQ2tCLHNCQUFBLEFBQVksUUFBWixBQUFvQixRQUFRLEEsQUFBNUI7O2lDQUFsQjtBLHNEQUNBO0EsdUNBQU8sSUFBQSxBQUFJLEtBQUssWUFBVCxBQUNQLEEsQUFEMEI7QSx3QyxBQUNsQjs7dUNBQ0ssc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFwQixBQUFzQyxTQUF0QyxBLEFBQStDOztpQ0FBNUQ7QTs7dUNBQ2lCLHNCQUFBLEFBQVksUUFBWixBQUFvQixxQkFBcEIsQUFBeUMsU0FBekMsQUFBa0QsTUFBbEQsQUFBd0QsQTs7aUNBQXpFO0E7a0VBQ0MsRUFBQyxTQUFELFNBQVUsTUFBVixNQUFnQixVQUFoQixVQUEwQixPQUExQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUJnQixBLEFBa0YvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9