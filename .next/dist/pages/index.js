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
                var accounts, funcao, balance, productTrace, date;
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
                                return _supplychain2.default.methods.getBalanceof(accounts[0]).call();

                            case 9:
                                balance = _context.sent;
                                _context.next = 12;
                                return _supplychain2.default.methods.getProductCreationTime("uuid0").call();

                            case 12:
                                productTrace = _context.sent;
                                date = new Date(productTrace * 1000);

                                console.log("product trace", date);
                                // const medicines = await supplychain.methods.medicineNames().call()
                                this.setState({ account: accounts[0], funcao: funcao, balance: balance, productTrace: productTrace });

                            case 16:
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
                    lineNumber: 51
                }
            }, _react2.default.createElement('div', { style: { alignContent: "center" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Menu Principal'), this.props.manager === this.state.account ? _react2.default.createElement('h2', { style: { color: "blue" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Manager') : null, _react2.default.createElement('h4', { style: { color: "gray", marginTop: "0px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Bem vindo, usu\xE1rio da carteira ', this.state.account), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'A cadeia de suprimentos foi criada no dia ', this.props.begin), _react2.default.createElement(_InfoCards2.default, { address: this.state.account,
                funcao: this.state.funcao,
                balance: this.state.balance,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_routes.Link, { route: '/products/deposit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Dep\xF3sito', icon: 'play', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }))), _react2.default.createElement(_semanticUiReact.Button, { content: 'Recibos', icon: 'envelope', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: '\x1CSinistros', icon: 'bolt', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }), this.props.manager === this.state.account ? _react2.default.createElement(_routes.Link, { route: '/wallets/walletsView', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Wallet', icon: 'address card', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }))) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Alertas', icon: 'exclamation triangle', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }), _react2.default.createElement(_routes.Link, { route: '/products/trackProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Rastrear Produto', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/medicineList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Cat\xE1logo de Rem\xE9dios', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            })))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "2%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, this.userIsManager() ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_routes.Link, { route: '/wallets/createWallet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Wallet', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/createProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Medicamento', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            })))) : null, this.state.funcao === "Productor" ? _react2.default.createElement(_routes.Link, { route: '/products/GenerateProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Gerar Produto', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }))) : null, _react2.default.createElement(_routes.Link, { route: '/products/transferMedicine', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Transferir Produto', icon: 'share', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }))))));
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
                                begin = date.toLocaleDateString("pt-BR");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51Iiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJJbmZvQ2FyZHMiLCJMaW5rIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN0YXRlIiwiYWNjb3VudCIsImZ1bmNhbyIsInNpbmlzdGVycyIsImJhbGFuY2UiLCJyZWNlaXZlcyIsIm1lZGljaW5lcyIsInByb2R1Y3RUcmFjZSIsInByb3BzIiwibWFuYWdlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImdldFdhbGxldEZ1bmN0aW9uIiwiY2FsbCIsImdldEJhbGFuY2VvZiIsImdldFByb2R1Y3RDcmVhdGlvblRpbWUiLCJkYXRlIiwiRGF0ZSIsInNldFN0YXRlIiwiYWxpZ25Db250ZW50IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJiZWdpbiIsIndpZHRoIiwiYm9yZGVyIiwibWFyZ2luQm90dG9uIiwidXNlcklzTWFuYWdlciIsInRpbWVzdGFtcCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZ1bmMiLCJnZXRXYWxsZXRNZWRpY2luZVF0ZCIsIm1lZGljaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBTSxBQUFROztBQUN0QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUSxBQUFXOzs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7Ozs7b09BRUYsQTtxQkFBTSxBQUNPLEFBQ1Q7b0JBRkUsQUFFTSxBQUNSO3VCQUhFLEFBR1MsQUFDWDtxQkFKRSxBQUlPLEFBQ1Q7c0JBTEUsQUFLUSxBQUNWO3VCQU5FLEFBTVMsQUFDWDswQkFQRSxBLEFB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QSxBQUF5QztBQUF6QzsrQkFBeUMsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBRztBQUFIO0FBQUEsK0JBQUcsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLHNCQUFxQixNQUFyQyxBQUEwQyxTQUFRLFdBQWxEOzhCQUFBO2dDQTNCeEQsQUFDSSxBQUVHLEFBbUJHLEFBS0UsQUFBeUMsQUFBRyxBQU0zRDtBQU4yRDs7Ozs7Ozs7Ozs7Ozt1Q0FsRGxDLHNCQUFBLEFBQVksUUFBWixBQUFvQixVQUFwQixBQUE4QixBOztpQ0FBOUM7QTs7dUNBQ2tCLHNCQUFBLEFBQVksUUFBWixBQUFvQixRQUFwQixBQUE0QixBOztpQ0FBOUM7QSxzREFDQTtBLHVDQUFPLElBQUEsQUFBSSxLQUFLLFlBQVQsQUFBbUIsQUFDMUIsQTtBLHdDQUFRLEtBQUEsQUFBSyxtQkFBTCxBLEFBQXdCOzt1Q0FDbkIsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFwQixBQUFzQyxTQUFTLEEsQUFBL0M7O2lDQUFiO0E7O3VDQUNpQixzQkFBQSxBQUFZLFFBQVosQUFBb0IscUJBQXBCLEFBQXlDLFNBQXpDLEFBQWtELE1BQWxELEEsQUFBd0Q7O2lDQUF6RTtBO2tFQUNDLEVBQUMsU0FBRCxTQUFVLE1BQVYsTUFBZ0IsVUFBaEIsVUFBMEIsTyxBQUExQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhCZ0IsQSxBQTZFL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvLmFsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==