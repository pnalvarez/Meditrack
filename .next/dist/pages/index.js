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
            receives: ''
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
                var accounts, funcao, capacity, balance, currentWeight;
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

                                this.setState({ account: accounts[0], funcao: funcao, capacity: capacity, balance: balance, currentWeight: currentWeight });

                            case 17:
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
                    lineNumber: 45
                }
            }, this.state.account !== '0x0' ? _react2.default.createElement('div', { style: { alignContent: "center" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Menu Principal'), this.props.manager === this.state.account ? _react2.default.createElement('h2', { style: { color: "blue" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Manager') : null, _react2.default.createElement('h4', { style: { color: "gray", marginTop: "0px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Bem vindo, usu\xE1rio da carteira ', this.state.account), _react2.default.createElement(_InfoCards2.default, { address: this.state.account,
                funcao: this.state.funcao,
                capacity: this.state.capacity,
                balance: this.state.balance,
                currentWeight: this.state.currentWeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Dep\xF3sito', icon: 'play', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Recibos', icon: 'envelope', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: '\x1CSinistros', icon: 'bolt', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), this.props.manager === this.state.account ? _react2.default.createElement(_semanticUiReact.Button, { content: 'Wallets', icon: 'address card', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Alertas', icon: 'exclamation triangle', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Produto', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "2%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, this.userIsManager() ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Wallet', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Medicamento', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })) : null, this.state.funcao === "Productor" ? _react2.default.createElement(_semanticUiReact.Button, { content: 'Gerar Produto', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Transferir Produto', icon: 'share', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }))) : _react2.default.createElement('div', { className: 'ui active dimmer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('div', { className: 'ui loader', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51Iiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJJbmZvQ2FyZHMiLCJTdXBwbHljaGFpbkluZGV4Iiwic3RhdGUiLCJhY2NvdW50IiwiZnVuY2FvIiwiY2FwYWNpdHkiLCJjdXJyZW50V2VpZ2h0Iiwic2luaXN0ZXJzIiwiYmFsYW5jZSIsInJlY2VpdmVzIiwicHJvcHMiLCJtYW5hZ2VyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiZ2V0V2FsbGV0RnVuY3Rpb24iLCJjYWxsIiwiZ2V0V2FsbGV0V2VpZ2h0IiwiZ2V0QmFsYW5jZW9mIiwiZ2V0V2FsbGV0Q3VycmVudFdlaWdodCIsInNldFN0YXRlIiwiYWxpZ25Db250ZW50IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbiIsInVzZXJJc01hbmFnZXIiLCJmdW5jIiwiZ2V0V2FsbGV0TWVkaWNpbmVRdGQiLCJtZWRpY2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBUTs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFlOzs7Ozs7Ozs7SUFFaEIsQTs7Ozs7Ozs7Ozs7Ozs7b09BRUYsQTtxQkFBTSxBQUNPLEFBQ1Q7b0JBRkUsQUFFTSxBQUNSO3NCQUhFLEFBR1EsQUFDVjsyQkFKRSxBQUlhLEFBQ2Y7dUJBTEUsQUFLUyxBQUNYO3FCQU5FLEFBTU8sQUFDVDtzQixBQVBFLEFBT1E7QUFQUixBQUNGOzs7Ozt3Q0FTVyxBQUNYO21CQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBWSxL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QUFBbUM7QUFBQTthQUFBLElBSnRDLEFBSXNHLEFBQ3BHLHNCQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixzQkFBcUIsTUFBckMsQUFBMEMsU0FBUSxXQUFsRDs4QkFBQTtnQ0F4Qk4sQUFDQyxBQWtCRyxBQUtFO0FBQUE7bUNBSU4sY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNFO0FBREY7YUFBQSx5Q0FDTyxXQUFMLEFBQWU7OEJBQWY7Z0NBL0JSLEFBQ0ksQUE2QkUsQUFDRSxBQU9YO0FBUFc7Ozs7Ozs7Ozs7Ozs7dUNBakRjLHNCQUFBLEFBQVksUUFBWixBQUFvQixVQUFwQixBQUE4QixBOztpQ0FBOUM7QTs7dUNBQ2Esc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFwQixBQUFzQyxTQUF0QyxBQUErQyxBOztpQ0FBNUQ7QTs7dUNBQ2lCLHNCQUFBLEFBQVksUUFBWixBQUFvQixxQkFBcEIsQUFBeUMsU0FBekMsQUFBa0QsTUFBTSxBLEFBQXhEOztpQ0FBakI7QTtrRUFDQyxFQUFDLFNBQUQsU0FBVSxNQUFWLE1BQWdCLFVBQWhCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFyQmdCLEEsQUE2RS9COztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyby5hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=