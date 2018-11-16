webpackHotUpdate(6,{

/***/ 1166:
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

var _web = __webpack_require__(467);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(476);

var _supplychain = __webpack_require__(1162);

var _supplychain2 = _interopRequireDefault(_supplychain);

var _layout = __webpack_require__(724);

var _layout2 = _interopRequireDefault(_layout);

var _InfoCards = __webpack_require__(1167);

var _InfoCards2 = _interopRequireDefault(_InfoCards);

var _routes = __webpack_require__(1143);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jMmVmODNmZTU5NGE3MjcyOThlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/M2VmMjE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7Q2FyZCwgQnV0dG9uLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgc3VwcGx5Y2hhaW4gZnJvbSAnLi4vZXRoZXJldW0vc3VwcGx5Y2hhaW4uanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgSW5mb0NhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvSW5mb0NhcmRzL0luZm9DYXJkcydcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJ1xuXG5jbGFzcyBTdXBwbHljaGFpbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgc3RhdGU9e1xuICAgICAgICBhY2NvdW50OiAnMHgwJyxcbiAgICAgICAgZnVuY2FvOiAnJyxcbiAgICAgICAgY2FwYWNpdHk6ICcnLFxuICAgICAgICBjdXJyZW50V2VpZ2h0OiAnJyxcbiAgICAgICAgc2luaXN0ZXJzOiAnJyxcbiAgICAgICAgYmFsYW5jZTogJycsXG4gICAgICAgIHJlY2VpdmVzOiAnJyxcbiAgICAgICAgbWVkaWNpbmVzOiBbXSxcbiAgICAgICAgcHJvZHVjdFRyYWNlOiAnJ1xuICAgIH1cblxuICAgIHVzZXJJc01hbmFnZXIoKXtcbiAgICAgICAgcmV0dXJuKHRoaXMucHJvcHMubWFuYWdlciA9PT0gdGhpcy5zdGF0ZS5hY2NvdW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcblxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5tYW5hZ2VyKCkuY2FsbCgpO1xuICAgICAgICBjb25zdCBmdW5jID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRGdW5jdGlvbihtYW5hZ2VyKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1lZGljaW5lID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRNZWRpY2luZVF0ZChtYW5hZ2VyLCBcImlkXCIpLmNhbGwoKTtcbiAgICAgICAgcmV0dXJuIHttYW5hZ2VyLCBmdW5jLCBtZWRpY2luZX07XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsIGFjY291bnRzKTtcbiAgICAgICAgY29uc3QgZnVuY2FvID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRGdW5jdGlvbihhY2NvdW50c1swXSkuY2FsbCgpXG4gICAgICAgIGNvbnN0IGNhcGFjaXR5ID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRXZWlnaHQoYWNjb3VudHNbMF0pLmNhbGwoKVxuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRCYWxhbmNlb2YoYWNjb3VudHNbMF0pLmNhbGwoKVxuICAgICAgICBjb25zdCBjdXJyZW50V2VpZ2h0ID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRXYWxsZXRDdXJyZW50V2VpZ2h0KGFjY291bnRzWzBdKS5jYWxsKClcbiAgICAgICAgY29uc3QgcHJvZHVjdFRyYWNlID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRQcm9kdWN0Q3JlYXRpb25UaW1lKFwidXVpZDBcIikuY2FsbCgpXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwcm9kdWN0VHJhY2UqMTAwMClcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IHRyYWNlXCIsZGF0ZSlcbiAgICAgICAgLy8gY29uc3QgbWVkaWNpbmVzID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5tZWRpY2luZU5hbWVzKCkuY2FsbCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnQ6IGFjY291bnRzWzBdLCBmdW5jYW86IGZ1bmNhbywgY2FwYWNpdHk6IGNhcGFjaXR5LCBiYWxhbmNlOiBiYWxhbmNlLCBjdXJyZW50V2VpZ2h0OiBjdXJyZW50V2VpZ2h0LCBwcm9kdWN0VHJhY2U6IHByb2R1Y3RUcmFjZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgIHsvKiA8aDE+e3RoaXMuc3RhdGUubWVkaWNpbmVzfTwvaDE+ICovfVxuICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2FsaWduQ29udGVudDogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgPGgxPk1lbnUgUHJpbmNpcGFsPC9oMT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1hbmFnZXIgPT09IHRoaXMuc3RhdGUuYWNjb3VudCA/IDxoMiBzdHlsZT17e2NvbG9yOiBcImJsdWVcIn19Pk1hbmFnZXI8L2gyPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGUgPSB7e2NvbG9yOiBcImdyYXlcIiwgbWFyZ2luVG9wOiBcIjBweFwifX0+QmVtIHZpbmRvLCB1c3XDoXJpbyBkYSBjYXJ0ZWlyYSB7dGhpcy5zdGF0ZS5hY2NvdW50fTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8SW5mb0NhcmRzIGFkZHJlc3MgPSB7dGhpcy5zdGF0ZS5hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jYW8gPSB7dGhpcy5zdGF0ZS5mdW5jYW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5ID0ge3RoaXMuc3RhdGUuY2FwYWNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgPSB7dGhpcy5zdGF0ZS5iYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2VpZ2h0ID0ge3RoaXMuc3RhdGUuY3VycmVudFdlaWdodH0vPiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCBmbG9hdD1cInJpZ2h0XCIgdmVydGljYWwgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNiVcIiwgd2lkdGg6IFwiMjUlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiRGVww7NzaXRvXCIgIGljb249XCJwbGF5XCIgcHJpbWFyeSBzdHlsZT17e2JvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW5Cb3R0b246IFwiM3B4XCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlJlY2lib3NcIiBpY29uPVwiZW52ZWxvcGVcIiBwcmltYXJ5IHN0eWxlPXt7Ym9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbkJvdHRvbjogXCIzcHhcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiXHUwMDFjU2luaXN0cm9zXCIgaWNvbj1cImJvbHRcIiBwcmltYXJ5IHN0eWxlPXt7Ym9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbkJvdHRvbjogXCIzcHhcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWFuYWdlciA9PT0gdGhpcy5zdGF0ZS5hY2NvdW50ID8gPExpbmsgcm91dGU9XCIvd2FsbGV0cy93YWxsZXRzVmlld1wiPjxhPjxCdXR0b24gY29udGVudD1cIlBlc3F1aXNhciBXYWxsZXRcIiBpY29uPVwiYWRkcmVzcyBjYXJkXCIgcHJpbWFyeSBzdHlsZT17e2JvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW5Cb3R0b246IFwiM3B4XCJ9fS8+PC9hPjwvTGluaz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJBbGVydGFzXCIgaWNvbj1cImV4Y2xhbWF0aW9uIHRyaWFuZ2xlXCIgcHJpbWFyeSBzdHlsZT17e2JvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW5Cb3R0b246IFwiM3B4XCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlBlc3F1aXNhciBQcm9kdXRvXCIgaWNvbj1cIlwiIHByaW1hcnkvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9wcm9kdWN0cy9tZWRpY2luZUxpc3RcIj48YT48QnV0dG9uIGNvbnRlbnQ9XCJDYXTDoWxvZ28gZGUgUmVtw6lkaW9zXCIgaWNvbj1cIlwiIHByaW1hcnkvPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGZsb2F0PVwicmlnaHRcIiB2ZXJ0aWNhbCBzdHlsZT17e21hcmdpblRvcDogXCIyJVwiLCB3aWR0aDogXCIyNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy51c2VySXNNYW5hZ2VyKCkgPyA8ZGl2PjxMaW5rIHJvdXRlPVwiL3dhbGxldHMvY3JlYXRlV2FsbGV0XCI+PGE+PEJ1dHRvbiBjb250ZW50PVwiQ3JpYXIgV2FsbGV0XCIgaWNvbj1cImFkZCBjaXJjbGVcIiBzZWNvbmRhcnkvPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvZHVjdHMvY3JlYXRlUHJvZHVjdFwiPjxhPjxCdXR0b24gY29udGVudD1cIkNyaWFyIE1lZGljYW1lbnRvXCIgaWNvbj1cImFkZCBjaXJjbGVcIiBzZWNvbmRhcnkvPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZnVuY2FvID09PSBcIlByb2R1Y3RvclwiPyA8TGluayByb3V0ZT1cIi9wcm9kdWN0cy9HZW5lcmF0ZVByb2R1Y3RcIj48YT48QnV0dG9uIGNvbnRlbnQ9XCJHZXJhciBQcm9kdXRvXCIgaWNvbj1cImFkZCBjaXJjbGVcIiBzZWNvbmRhcnkvPjwvYT48L0xpbms+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiVHJhbnNmZXJpciBQcm9kdXRvXCIgaWNvbj1cInNoYXJlXCIgc2Vjb25kYXJ5Lz4gICBcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdXBwbHljaGFpbkluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7Ozs7O0FBWUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFOQTs7Ozs7Ozs7Ozs7OztBQWpEQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=