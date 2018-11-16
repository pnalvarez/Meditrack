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
                    lineNumber: 52
                }
            }, _react2.default.createElement('div', { style: { alignContent: "center" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Menu Principal'), this.props.manager === this.state.account ? _react2.default.createElement('h2', { style: { color: "blue" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Manager') : null, _react2.default.createElement('h4', { style: { color: "gray", marginTop: "0px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Bem vindo, usu\xE1rio da carteira ', this.state.account), _react2.default.createElement(_InfoCards2.default, { address: this.state.account,
                funcao: this.state.funcao,
                capacity: this.state.capacity,
                balance: this.state.balance,
                currentWeight: this.state.currentWeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Dep\xF3sito', icon: 'play', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Recibos', icon: 'envelope', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: '\x1CSinistros', icon: 'bolt', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), this.props.manager === this.state.account ? _react2.default.createElement(_routes.Link, { route: '/wallets/walletsView', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Wallet', icon: 'address card', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }))) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Alertas', icon: 'exclamation triangle', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Produto', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(_routes.Link, { route: '/products/medicineList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Cat\xE1logo de Rem\xE9dios', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            })))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "2%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.userIsManager() ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_routes.Link, { route: '/wallets/createWallet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Wallet', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/createProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Medicamento', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })))) : null, this.state.funcao === "Productor" ? _react2.default.createElement(_routes.Link, { route: '/products/GenerateProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Gerar Produto', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }))) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Transferir Produto', icon: 'share', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var manager, func, medicine;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _supplychain2.default.methods.manager().call();

                            case 2:
                                manager = _context2.sent;
                                _context2.next = 5;
                                return _supplychain2.default.methods.getWalletFunction(manager).call();

                            case 5:
                                func = _context2.sent;
                                _context2.next = 8;
                                return _supplychain2.default.methods.getWalletMedicineQtd(manager, "id").call();

                            case 8:
                                medicine = _context2.sent;
                                return _context2.abrupt('return', { manager: manager, func: func, medicine: medicine });

                            case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51Iiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJJbmZvQ2FyZHMiLCJMaW5rIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN0YXRlIiwiYWNjb3VudCIsImZ1bmNhbyIsImNhcGFjaXR5IiwiY3VycmVudFdlaWdodCIsInNpbmlzdGVycyIsImJhbGFuY2UiLCJyZWNlaXZlcyIsIm1lZGljaW5lcyIsInByb2R1Y3RUcmFjZSIsInByb3BzIiwibWFuYWdlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImdldFdhbGxldEZ1bmN0aW9uIiwiY2FsbCIsImdldFdhbGxldFdlaWdodCIsImdldEJhbGFuY2VvZiIsImdldFdhbGxldEN1cnJlbnRXZWlnaHQiLCJnZXRQcm9kdWN0Q3JlYXRpb25UaW1lIiwiZGF0ZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImFsaWduQ29udGVudCIsImNvbG9yIiwibWFyZ2luVG9wIiwid2lkdGgiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b24iLCJ1c2VySXNNYW5hZ2VyIiwiZnVuYyIsImdldFdhbGxldE1lZGljaW5lUXRkIiwibWVkaWNpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFNLEFBQVE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7OztvTyxBQUVGO3FCQUFNLEFBQ08sQUFDVDtvQkFGRSxBQUVNLEFBQ1I7c0JBSEUsQUFHUSxBQUNWOzJCQUpFLEFBSWEsQUFDZjt1QkFMRSxBQUtTLEFB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QSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0Isc0JBQXFCLE1BQXJDLEFBQTBDLFNBQVEsV0FBbEQ7OEJBQUE7Z0NBM0JaLEFBQ0ksQUFFRyxBQW1CRyxBQUtFLEFBTWY7QUFOZTs7Ozs7Ozs7Ozs7Ozt1Q0FqRFUsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLFVBQXBCLEFBQThCLEE7O2lDQUE5QztBOzt1Q0FDYSxzQkFBQSxBQUFZLFFBQVosQUFBb0Isa0JBQXBCLEFBQXNDLFNBQVMsQSxBQUEvQzs7aUNBQWI7QTs7dUNBQ2lCLHNCQUFBLEFBQVksUUFBWixBQUFvQixxQkFBcEIsQUFBeUMsU0FBekMsQUFBa0QsTUFBbEQsQSxBQUF3RDs7aUNBQXpFO0E7a0VBQ0MsRUFBQyxTQUFELFNBQVUsTUFBVixNQUFnQixVQUFoQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdkJnQixBLEFBOEUvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9