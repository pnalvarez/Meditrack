webpackHotUpdate(5,{

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _web = __webpack_require__(443);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(491);

var _supplychain = __webpack_require__(1142);

var _supplychain2 = _interopRequireDefault(_supplychain);

var _layout = __webpack_require__(1144);

var _layout2 = _interopRequireDefault(_layout);

var _InfoCards = __webpack_require__(1164);

var _InfoCards2 = _interopRequireDefault(_InfoCards);

var _routes = __webpack_require__(718);

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
            medicines: []
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

                                // const medicines = await supplychain.methods.medicineNames().call()
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
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', { style: { alignContent: "center" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Menu Principal'), this.props.manager === this.state.account ? _react2.default.createElement('h2', { style: { color: "blue" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Manager') : null, _react2.default.createElement('h4', { style: { color: "gray", marginTop: "0px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Bem vindo, usu\xE1rio da carteira ', this.state.account), _react2.default.createElement(_InfoCards2.default, { address: this.state.account,
                funcao: this.state.funcao,
                capacity: this.state.capacity,
                balance: this.state.balance,
                currentWeight: this.state.currentWeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "6%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Dep\xF3sito', icon: 'play', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Recibos', icon: 'envelope', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: '\x1CSinistros', icon: 'bolt', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), this.props.manager === this.state.account ? _react2.default.createElement(_semanticUiReact.Button, { content: 'Wallets', icon: 'address card', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Alertas', icon: 'exclamation triangle', primary: true, style: { border: "1px solid gray", marginBotton: "3px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Pesquisar Produto', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Cat\xE1logo de Rem\xE9dios', icon: '', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement(_semanticUiReact.Button.Group, { float: 'right', vertical: true, style: { marginTop: "2%", width: "25%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, this.userIsManager() ? _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_routes.Link, { route: '/wallets/createWallet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Wallet', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/products/createProduct', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Criar Medicamento', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })))) : null, this.state.funcao === "Productor" ? _react2.default.createElement(_semanticUiReact.Button, { content: 'Gerar Produto', icon: 'add circle', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }) : null, _react2.default.createElement(_semanticUiReact.Button, { content: 'Transferir Produto', icon: 'share', secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51Iiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJJbmZvQ2FyZHMiLCJMaW5rIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN0YXRlIiwiYWNjb3VudCIsImZ1bmNhbyIsImNhcGFjaXR5IiwiY3VycmVudFdlaWdodCIsInNpbmlzdGVycyIsImJhbGFuY2UiLCJyZWNlaXZlcyIsIm1lZGljaW5lcyIsInByb3BzIiwibWFuYWdlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImdldFdhbGxldEZ1bmN0aW9uIiwiY2FsbCIsImdldFdhbGxldFdlaWdodCIsImdldEJhbGFuY2VvZiIsImdldFdhbGxldEN1cnJlbnRXZWlnaHQiLCJzZXRTdGF0ZSIsImFsaWduQ29udGVudCIsImNvbG9yIiwibWFyZ2luVG9wIiwid2lkdGgiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b24iLCJ1c2VySXNNYW5hZ2VyIiwiZnVuYyIsImdldFdhbGxldE1lZGljaW5lUXRkIiwibWVkaWNpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFNLEFBQVE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7OztvTyxBQUVGO3FCQUFNLEFBQ08sQUFDVDtvQkFGRSxBQUVNLEFBQ1I7c0JBSEUsQUFHUSxBQUNWOzJCQUpFLEFBSWEsQUFDZjt1QkFMRSxBQUtTLEFBQ1g7cUJBTkUsQUFNTyxBQUNUO3NCQVBFLEFBT1EsQUFDVjt1QkFBVyxBLEFBUlQ7QUFBQSxBQUNGOzs7Ozt3Q0FVVyxBQUNYO21CQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBWSxLQUFBLEFBQUssTUFBbkMsQUFBeUMsQUFDNUM7Ozs7Ozs7Ozs7Ozt1Q0FXMEIsY0FBQSxBQUFLLElBQUwsQUFBUyxBOztpQ0FBMUI7QSxvREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksWUFBWixBQUF3Qjs7dUNBQ0gsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFrQixTQUF0QyxBQUFzQyxBQUFTLElBQS9DLEFBQW1ELEE7O2lDQUFsRTtBOzt1Q0FDaUIsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGdCQUFnQixTQUFwQyxBQUFvQyxBQUFTLElBQTdDLEFBQWlELEE7O2lDQUFsRTtBOzt1Q0FDZ0Isc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGFBQWEsU0FBakMsQUFBaUMsQUFBUyxJQUFJLEEsQUFBOUM7O2lDQUFoQjtBOzt1Q0FDc0Isc0JBQUEsQUFBWSxRQUFaLEFBQW9CLHVCQUF1QixTQUEzQyxBQUEyQyxBQUFTLElBQUksQSxBQUF4RDs7aUNBQXRCO0EseURBQ047O0FBQ0E7cUNBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxTQUFWLEFBQVUsQUFBUyxJQUFJLFFBQXZCLEFBQStCLFFBQVEsVUFBdkMsQUFBaUQsVUFBVSxTQUEzRCxBQUFvRSxTQUFTLGVBQTNGLEFBQWMsQUFBNEY7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHdEcsQUFFSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFFRztBQUZIO0FBQUEsYUFBQSxrQkFFRyxjQUFBLFNBQUssT0FBTyxFQUFDLGNBQWIsQUFBWSxBQUFlOzhCQUEzQjtnQ0FBQSxBQUNHO0FBREg7K0JBQ0csY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREgsQUFDRyxBQUNDLHdCQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksS0FBQSxBQUFLLE1BQTVCLEFBQWtDLDBCQUFVLGNBQUEsUUFBSSxPQUFPLEVBQUMsT0FBWixBQUFXLEFBQVE7OEJBQW5CO2dDQUFBO0FBQUE7YUFBQSxFQUE1QyxBQUE0QyxhQUZoRCxBQUUyRixBQUN4RixzQkFBQSxjQUFBLFFBQUksT0FBUyxFQUFDLE9BQUQsQUFBUSxRQUFRLFdBQTdCLEFBQWEsQUFBMkI7OEJBQXhDO2dDQUFBO0FBQUE7ZUFBZ0YsMkNBQUEsQUFBSyxNQUh4RixBQUdHLEFBQTJGLEFBQzNGLDBCQUFBLEFBQUMscUNBQVUsU0FBVyxLQUFBLEFBQUssTUFBM0IsQUFBaUMsQUFDdEI7d0JBQVUsS0FBQSxBQUFLLE1BRDFCLEFBQ2dDLEFBQ3JCOzBCQUFZLEtBQUEsQUFBSyxNQUY1QixBQUVrQyxBQUN2Qjt5QkFBVyxLQUFBLEFBQUssTUFIM0IsQUFHaUMsQUFDdEI7K0JBQWlCLEtBQUEsQUFBSyxNQUpqQyxBQUl1Qzs4QkFKdkM7Z0NBSkgsQUFJRyxBQUtBO0FBTEE7Z0NBS0MsY0FBRCx3QkFBQSxBQUFRLFNBQU0sT0FBZCxBQUFvQixTQUFRLFVBQTVCLE1BQXFDLE9BQU8sRUFBQyxXQUFELEFBQVksTUFBTSxPQUE5RCxBQUE0QyxBQUF5Qjs4QkFBckU7Z0NBQUEsQUFDRTtBQURGOytCQUNFLEFBQUMseUNBQU8sU0FBUixBQUFnQixlQUFZLE1BQTVCLEFBQWlDLFFBQU8sU0FBeEMsTUFBZ0QsT0FBTyxFQUFDLFFBQUQsQUFBUyxrQkFBa0IsY0FBbEYsQUFBdUQsQUFBeUM7OEJBQWhHO2dDQURGLEFBQ0UsQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixBQUFnQixXQUFVLE1BQTFCLEFBQStCLFlBQVcsU0FBMUMsTUFBa0QsT0FBTyxFQUFDLFFBQUQsQUFBUyxrQkFBa0IsY0FBcEYsQUFBeUQsQUFBeUM7OEJBQWxHO2dDQUZGLEFBRUUsQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixBQUFnQixpQkFBYSxNQUE3QixBQUFrQyxRQUFPLFNBQXpDLE1BQWlELE9BQU8sRUFBQyxRQUFELEFBQVMsa0JBQWtCLGNBQW5GLEFBQXdELEFBQXlDOzhCQUFqRztnQ0FIRixBQUdFLEFBQ0M7QUFERDtxQkFDQyxBQUFLLE1BQUwsQUFBVyxZQUFZLEtBQUEsQUFBSyxNQUE1QixBQUFrQywwQkFBVSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsV0FBVSxNQUExQixBQUErQixnQkFBZSxTQUE5QyxNQUFzRCxPQUFPLEVBQUMsUUFBRCxBQUFTLGtCQUFrQixjQUF4RixBQUE2RCxBQUF5Qzs4QkFBdEc7Z0NBQTVDLEFBQTRDO0FBQUE7YUFBQSxJQUovQyxBQUlpSyxBQUMvSixzQkFBQSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsV0FBVSxNQUExQixBQUErQix3QkFBdUIsU0FBdEQsTUFBOEQsT0FBTyxFQUFDLFFBQUQsQUFBUyxrQkFBa0IsY0FBaEcsQUFBcUUsQUFBeUM7OEJBQTlHO2dDQUxGLEFBS0UsQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixBQUFnQixxQkFBb0IsTUFBcEMsQUFBeUMsSUFBRyxTQUE1Qzs4QkFBQTtnQ0FORixBQU1FLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsOEJBQXVCLE1BQXZDLEFBQTRDLElBQUcsU0FBL0M7OEJBQUE7Z0NBaEJMLEFBU0csQUFPRSxBQUVGO0FBRkU7Ozs4QkFFRjtnQ0FsQkgsQUFrQkcsQUFDQTtBQURBO0FBQUEsZ0NBQ0MsY0FBRCx3QkFBQSxBQUFRLFNBQU0sT0FBZCxBQUFvQixTQUFRLFVBQTVCLE1BQXFDLE9BQU8sRUFBQyxXQUFELEFBQVksTUFBTSxPQUE5RCxBQUE0QyxBQUF5Qjs4QkFBckU7Z0NBQUEsQUFDRztBQURIO29CQUNHLEFBQUssa0NBQWtCLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLGFBQUEsa0JBQUssQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFBb0M7QUFBcEM7K0JBQW9DLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLEFBQUMseUNBQU8sU0FBUixBQUFnQixnQkFBZSxNQUEvQixBQUFvQyxjQUFhLFdBQWpEOzhCQUFBO2dDQUE1QyxBQUFLLEFBQW9DLEFBQUcsQUFDdkM7QUFEdUM7a0NBQ3ZDLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQXNDO0FBQXRDOytCQUFzQyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFHO0FBQUg7QUFBQSwrQkFBRyxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IscUJBQW9CLE1BQXBDLEFBQXlDLGNBQWEsV0FBdEQ7OEJBQUE7Z0NBRHJFLEFBQXVCLEFBQ0ssQUFBc0MsQUFBRztBQUFBO29CQUZ4RSxBQUd3QyxBQUNyQyxXQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsOEJBQWEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLGlCQUFnQixNQUFoQyxBQUFxQyxjQUFhLFdBQWxEOzhCQUFBO2dDQUFuQyxBQUFtQztBQUFBO2FBQUEsSUFKdEMsQUFJc0csQUFDcEcsc0JBQUEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLHNCQUFxQixNQUFyQyxBQUEwQyxTQUFRLFdBQWxEOzhCQUFBO2dDQTNCWixBQUNJLEFBRUcsQUFtQkcsQUFLRSxBQU1mO0FBTmU7Ozs7Ozs7Ozs7Ozs7dUNBOUNVLHNCQUFBLEFBQVksUUFBWixBQUFvQixVQUFwQixBLEFBQThCOztpQ0FBOUM7QTs7dUNBQ2Esc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFwQixBQUFzQyxTQUF0QyxBQUErQyxBOztpQ0FBNUQ7QTs7dUNBQ2lCLHNCQUFBLEFBQVksUUFBWixBQUFvQixxQkFBcEIsQUFBeUMsU0FBekMsQUFBa0QsTUFBbEQsQUFBd0QsQTs7aUNBQXpFO0E7a0VBQ0MsRUFBQyxTQUFELFNBQVUsTUFBVixNQUFnQixVQUFoQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdEJnQixBLEFBMEUvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42YTQwNzA4MzZiMzM5NjE0MjU0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/N2ZlMmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7Q2FyZCwgQnV0dG9uLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgc3VwcGx5Y2hhaW4gZnJvbSAnLi4vZXRoZXJldW0vc3VwcGx5Y2hhaW4uanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgSW5mb0NhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvSW5mb0NhcmRzL0luZm9DYXJkcydcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJ1xuXG5jbGFzcyBTdXBwbHljaGFpbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgc3RhdGU9e1xuICAgICAgICBhY2NvdW50OiAnMHgwJyxcbiAgICAgICAgZnVuY2FvOiAnJyxcbiAgICAgICAgY2FwYWNpdHk6ICcnLFxuICAgICAgICBjdXJyZW50V2VpZ2h0OiAnJyxcbiAgICAgICAgc2luaXN0ZXJzOiAnJyxcbiAgICAgICAgYmFsYW5jZTogJycsXG4gICAgICAgIHJlY2VpdmVzOiAnJyxcbiAgICAgICAgbWVkaWNpbmVzOiBbXVxuICAgIH1cblxuICAgIHVzZXJJc01hbmFnZXIoKXtcbiAgICAgICAgcmV0dXJuKHRoaXMucHJvcHMubWFuYWdlciA9PT0gdGhpcy5zdGF0ZS5hY2NvdW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcblxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5tYW5hZ2VyKCkuY2FsbCgpO1xuICAgICAgICBjb25zdCBmdW5jID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRGdW5jdGlvbihtYW5hZ2VyKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1lZGljaW5lID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRNZWRpY2luZVF0ZChtYW5hZ2VyLCBcImlkXCIpLmNhbGwoKTtcbiAgICAgICAgcmV0dXJuIHttYW5hZ2VyLCBmdW5jLCBtZWRpY2luZX07XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsIGFjY291bnRzKTtcbiAgICAgICAgY29uc3QgZnVuY2FvID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRGdW5jdGlvbihhY2NvdW50c1swXSkuY2FsbCgpXG4gICAgICAgIGNvbnN0IGNhcGFjaXR5ID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRXZWlnaHQoYWNjb3VudHNbMF0pLmNhbGwoKVxuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRCYWxhbmNlb2YoYWNjb3VudHNbMF0pLmNhbGwoKVxuICAgICAgICBjb25zdCBjdXJyZW50V2VpZ2h0ID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRDdXJyZW50V2VpZ2h0KGFjY291bnRzWzBdKS5jYWxsKClcbiAgICAgICAgLy8gY29uc3QgbWVkaWNpbmVzID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5tZWRpY2luZU5hbWVzKCkuY2FsbCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnQ6IGFjY291bnRzWzBdLCBmdW5jYW86IGZ1bmNhbywgY2FwYWNpdHk6IGNhcGFjaXR5LCBiYWxhbmNlOiBiYWxhbmNlLCBjdXJyZW50V2VpZ2h0OiBjdXJyZW50V2VpZ2h0fSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgey8qIDxoMT57dGhpcy5zdGF0ZS5tZWRpY2luZXN9PC9oMT4gKi99XG4gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YWxpZ25Db250ZW50OiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICA8aDE+TWVudSBQcmluY2lwYWw8L2gxPlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWFuYWdlciA9PT0gdGhpcy5zdGF0ZS5hY2NvdW50ID8gPGgyIHN0eWxlPXt7Y29sb3I6IFwiYmx1ZVwifX0+TWFuYWdlcjwvaDI+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZSA9IHt7Y29sb3I6IFwiZ3JheVwiLCBtYXJnaW5Ub3A6IFwiMHB4XCJ9fT5CZW0gdmluZG8sIHVzdcOhcmlvIGRhIGNhcnRlaXJhIHt0aGlzLnN0YXRlLmFjY291bnR9PC9oND5cbiAgICAgICAgICAgICAgICAgIDxJbmZvQ2FyZHMgYWRkcmVzcyA9IHt0aGlzLnN0YXRlLmFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmNhbyA9IHt0aGlzLnN0YXRlLmZ1bmNhb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHkgPSB7dGhpcy5zdGF0ZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSA9IHt0aGlzLnN0YXRlLmJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXZWlnaHQgPSB7dGhpcy5zdGF0ZS5jdXJyZW50V2VpZ2h0fS8+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGZsb2F0PVwicmlnaHRcIiB2ZXJ0aWNhbCBzdHlsZT17e21hcmdpblRvcDogXCI2JVwiLCB3aWR0aDogXCIyNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJEZXDDs3NpdG9cIiAgaWNvbj1cInBsYXlcIiBwcmltYXJ5IHN0eWxlPXt7Ym9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbkJvdHRvbjogXCIzcHhcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUmVjaWJvc1wiIGljb249XCJlbnZlbG9wZVwiIHByaW1hcnkgc3R5bGU9e3tib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luQm90dG9uOiBcIjNweFwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJcdTAwMWNTaW5pc3Ryb3NcIiBpY29uPVwiYm9sdFwiIHByaW1hcnkgc3R5bGU9e3tib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luQm90dG9uOiBcIjNweFwifX0vPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tYW5hZ2VyID09PSB0aGlzLnN0YXRlLmFjY291bnQgPyA8QnV0dG9uIGNvbnRlbnQ9XCJXYWxsZXRzXCIgaWNvbj1cImFkZHJlc3MgY2FyZFwiIHByaW1hcnkgc3R5bGU9e3tib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luQm90dG9uOiBcIjNweFwifX0vPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkFsZXJ0YXNcIiBpY29uPVwiZXhjbGFtYXRpb24gdHJpYW5nbGVcIiBwcmltYXJ5IHN0eWxlPXt7Ym9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbkJvdHRvbjogXCIzcHhcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUGVzcXVpc2FyIFByb2R1dG9cIiBpY29uPVwiXCIgcHJpbWFyeS8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkNhdMOhbG9nbyBkZSBSZW3DqWRpb3NcIiBpY29uPVwiXCIgcHJpbWFyeS8+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGZsb2F0PVwicmlnaHRcIiB2ZXJ0aWNhbCBzdHlsZT17e21hcmdpblRvcDogXCIyJVwiLCB3aWR0aDogXCIyNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy51c2VySXNNYW5hZ2VyKCkgPyA8ZGl2PjxMaW5rIHJvdXRlPVwiL3dhbGxldHMvY3JlYXRlV2FsbGV0XCI+PGE+PEJ1dHRvbiBjb250ZW50PVwiQ3JpYXIgV2FsbGV0XCIgaWNvbj1cImFkZCBjaXJjbGVcIiBzZWNvbmRhcnkvPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvZHVjdHMvY3JlYXRlUHJvZHVjdFwiPjxhPjxCdXR0b24gY29udGVudD1cIkNyaWFyIE1lZGljYW1lbnRvXCIgaWNvbj1cImFkZCBjaXJjbGVcIiBzZWNvbmRhcnkvPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZnVuY2FvID09PSBcIlByb2R1Y3RvclwiPyA8QnV0dG9uIGNvbnRlbnQ9XCJHZXJhciBQcm9kdXRvXCIgaWNvbj1cImFkZCBjaXJjbGVcIiBzZWNvbmRhcnkvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlRyYW5zZmVyaXIgUHJvZHV0b1wiIGljb249XCJzaGFyZVwiIHNlY29uZGFyeS8+ICAgXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHBseWNoYWluSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7Ozs7O0FBV0E7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFOQTs7Ozs7Ozs7Ozs7OztBQTlDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=