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

var _jsxFileName = '/Users/pedronalvarez/Desktop/ProjetoFinal/pages/index.js';


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
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { style: { height: '40%', width: '40%', marginLeft: '26%' }, src: '../static/MeditrackImage.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement('h1', { style: { marginTop: '50px', marginLeft: '40%', marginBotton: '100px', fontFamily: 'Comic Sans MS' }, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51IiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJzdXBwbHljaGFpbiIsIkxheW91dCIsIkluZm9DYXJkcyIsIkxpbmsiLCJTdXBwbHljaGFpbkluZGV4Iiwic3RhdGUiLCJhY2NvdW50IiwiZnVuY2FvIiwic2luaXN0ZXJzIiwiY3JlYXRpb25UaW1lIiwiYmFsYW5jZSIsInJlY2VpdmVzIiwibWVkaWNpbmVzIiwicHJvZHVjdFRyYWNlIiwicHJvcHMiLCJtYW5hZ2VyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiZ2V0V2FsbGV0RnVuY3Rpb24iLCJjYWxsIiwiZ2V0QmFsYW5jZW9mIiwiZ2V0UHJvZHVjdENyZWF0aW9uVGltZSIsImRhdGUiLCJEYXRlIiwiZ2V0U2luaXN0ZXJzUXRkIiwiZ2V0V2FsbGV0Q3JlYXRpb25UaW1lIiwidGltZXN0YW1wIiwiY3JlYXRpb25UaW1lRm9ybWF0dGVkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2V0U3RhdGUiLCJhbGlnbkNvbnRlbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b24iLCJmb250RmFtaWx5IiwiY29sb3IiLCJiZWdpbiIsImJvcmRlciIsInVzZXJJc01hbmFnZXIiLCJmdW5jIiwiZ2V0V2FsbGV0TWVkaWNpbmVRdGQiLCJtZWRpY2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBUSxBQUFNLEFBQVc7O0FBQ3ZDLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFR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QUFBUyxrQkFBa0IsY0FBOUYsQUFBbUUsQUFBeUM7OEJBQTVHO2dDQUE5RyxBQUFrRSxBQUF5QyxBQUFHO0FBQUE7bUJBTm5ILEFBTXNQLEFBQ2pQLFdBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQiwwQkFBVSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUF3QztBQUF4QzthQUFBLGtCQUF3QyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFHO0FBQUg7QUFBQSwrQkFBRyxBQUFDLHlDQUFPLFNBQVIsQUFBZ0Isc0JBQXFCLE1BQXJDLEFBQTBDLGVBQWMsV0FBeEQsTUFBa0UsT0FBTyxFQUFDLFFBQUQsQUFBUyxrQkFBa0IsY0FBcEcsQUFBeUUsQUFBeUM7OEJBQWxIO2dDQUEzRSxBQUFnQyxBQUF3QyxBQUFHO0FBQUE7bUJBcEJ0RixBQUNFLEFBV0UsQUFDRSxBQU95TixBQUk3Tix5QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLE9BQU0sT0FBTyxFQUFDLFdBQUQsQUFBWSxRQUFRLFlBQWhELEFBQTRCLEFBQWdDOzhCQUE1RDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBUSxTQUFRLE1BQTFCLEFBQStCOzhCQUEvQjtnQ0FBQSxBQUEyRztBQUEzRzsrQkFBMkcsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLFNBQWpCLEFBQXlCOzhCQUF6QjtnQ0F2QzNILEFBQ0ksQUFDRyxBQVlHLEFBd0JFLEFBQ0ksQUFBMkcsQUFPOUg7QUFQOEg7Ozs7Ozs7Ozs7Ozs7dUNBbkVyRyxzQkFBQSxBQUFZLFFBQVosQUFBb0IsVUFBcEIsQUFBOEIsQTs7aUNBQTlDO0E7O3VDQUNrQixzQkFBQSxBQUFZLFFBQVosQUFBb0IsUUFBcEIsQUFBNEIsQTs7aUNBQTlDO0Esc0RBQ0E7QSx1Q0FBTyxJQUFBLEFBQUksS0FBSyxZQUFVLEEsQUFBbkIsQUFDUDtBLHdDQUFRLEtBQUEsQUFBSyxtQixBQUFMLEFBQXdCOzt1Q0FDbkIsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFwQixBQUFzQyxTQUF0QyxBQUErQyxBOztpQ0FBNUQ7QTs7dUNBQ2lCLHNCQUFBLEFBQVksUUFBWixBQUFvQixxQkFBcEIsQUFBeUMsU0FBekMsQUFBa0QsTUFBbEQsQSxBQUF3RDs7aUNBQXpFO0E7a0VBQ0MsRUFBQyxTQUFELFNBQVUsTUFBVixNQUFnQixVQUFoQixVQUEwQixPQUExQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekJnQixBLEFBZ0cvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm9uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9