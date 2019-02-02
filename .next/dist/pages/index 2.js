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

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/pages/index.js?entry';


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
            creationTime: '',
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
                var accounts, funcao, balance, productTrace, date, sinisters, timestamp, creationTime, creationTimeFormatted;
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
                                _context.next = 16;
                                return _supplychain2.default.methods.getSinistersQtd(accounts[0]).call();

                            case 16:
                                sinisters = _context.sent;
                                _context.next = 19;
                                return _supplychain2.default.methods.getWalletCreationTime(accounts[0]).call();

                            case 19:
                                timestamp = _context.sent;
                                creationTime = new Date(timestamp * 1000);
                                creationTimeFormatted = creationTime.toLocaleDateString("pt-BR");

                                console.log("product trace", date);
                                // const medicines = await supplychain.methods.medicineNames().call()
                                this.setState({ account: accounts[0], funcao: funcao, balance: balance, productTrace: productTrace, sinisters: sinisters, creationTime: creationTimeFormatted });

                            case 24:
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
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', { style: { alignContent: "center" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Menu Principal'), this.props.manager === this.state.account ? _react2.default.createElement('h2', { style: { color: "blue" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Manager') : null, _react2.default.createElement('h4', { style: { color: "gray", marginTop: "0px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Bem vindo, usu\xE1rio da carteira ', this.state.account), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'A cadeia de suprimentos foi criada no dia ', this.props.begin), _react2.default.createElement(_InfoCards2.default, { address: this.state.account,
                funcao: this.state.funcao,
                balance: this.state.balance,
                sinisters: this.state.sinisters,
                creationTime: this.state.creationTime,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('div', { className: 'ui two column grid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('div', { className: 'column', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "50%", height: "50%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_routes.Link, { route: '/products/deposit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { dataContent: 'Add users to your feed', content: 'Dep\xF3sito', icon: 'play', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }))), this.state.funcao !== "Productor" ? _react2.default.createElement(_routes.Link, { route: '/receives/viewReceives', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Recibos', icon: 'envelope', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }))) : null, this.state.funcao !== "Buyer" ? _react2.default.createElement(_routes.Link, { route: '/sinisters/viewSinisters', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: '\x1CSinistros', icon: 'bolt', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }))) : null, this.props.manager === this.state.account ? _react2.default.createElement(_routes.Link, { route: '/wallets/walletsView', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Wallet', icon: 'address card', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }))) : null, _react2.default.createElement(_routes.Link, { route: '/products/trackProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Rastrear Produto', icon: '', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/medicineList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Cat\xE1logo de Rem\xE9dios', icon: '', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }))))), _react2.default.createElement('div', { className: 'column', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "50%", height: "100%", marginLeft: "5%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, this.userIsManager() ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_routes.Link, { route: '/wallets/createWallet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Wallet', icon: 'add circle', secondary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/createProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Medicamento', icon: 'add circle', secondary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            })))) : null, this.state.funcao === "Productor" ? _react2.default.createElement(_routes.Link, { route: '/products/GenerateProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Gerar Produto', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }))) : null, this.state.funcao === "Buyer" ? _react2.default.createElement(_routes.Link, { route: '/buy/buyMedicine', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Comprar Produto', icon: 'cart arrow down', secondary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }))) : null, this.state.funcao !== "Buyer" && this.state.funcao !== "Seller" ? _react2.default.createElement(_routes.Link, { route: '/products/transferMedicine', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Transferir Produto', icon: 'share', secondary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }))) : null, this.state.funcao !== "Buyer" ? _react2.default.createElement(_routes.Link, { route: '/sinisters/notifySinister', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Notificar Sinistro', icon: 'exclamation', secondary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }))) : null))), _react2.default.createElement('div', { className: 'row', style: { marginTop: "50px", marginLeft: "10px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('a', { style: { width: "30%" }, href: 'https://github.com/pnalvarez/Contrato-Meditrack/blob/master/Meditrack.sol', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { positive: true, content: 'Contrato Supplychain', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51IiwiQ29udGFpbmVyIiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJJbmZvQ2FyZHMiLCJMaW5rIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN0YXRlIiwiYWNjb3VudCIsImZ1bmNhbyIsInNpbmlzdGVycyIsImNyZWF0aW9uVGltZSIsImJhbGFuY2UiLCJyZWNlaXZlcyIsIm1lZGljaW5lcyIsInByb2R1Y3RUcmFjZSIsInByb3BzIiwibWFuYWdlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImdldFdhbGxldEZ1bmN0aW9uIiwiY2FsbCIsImdldEJhbGFuY2VvZiIsImdldFByb2R1Y3RDcmVhdGlvblRpbWUiLCJkYXRlIiwiRGF0ZSIsImdldFNpbmlzdGVyc1F0ZCIsImdldFdhbGxldENyZWF0aW9uVGltZSIsInRpbWVzdGFtcCIsImNyZWF0aW9uVGltZUZvcm1hdHRlZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNldFN0YXRlIiwiYWxpZ25Db250ZW50IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJiZWdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luQm90dG9uIiwibWFyZ2luTGVmdCIsInVzZXJJc01hbmFnZXIiLCJmdW5jIiwiZ2V0V2FsbGV0TWVkaWNpbmVRdGQiLCJtZWRpY2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBUSxBQUFNOztBQUM1QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUSxBQUFXOzs7Ozs7O0lBRWIsQTs7Ozs7Ozs7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