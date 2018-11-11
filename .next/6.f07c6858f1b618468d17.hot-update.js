webpackHotUpdate(6,{

/***/ 1143:
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

var _layout = __webpack_require__(1139);

var _layout2 = _interopRequireDefault(_layout);

var _web = __webpack_require__(475);

var _web2 = _interopRequireDefault(_web);

var _supplychain = __webpack_require__(1137);

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = __webpack_require__(491);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/createWallet.js?entry';


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
            maxWeight: '',
            funcao: '',
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _context.prev = 1;
                                _context.next = 4;
                                return _supplychain2.default.methods.createWallet(_this.state.walletAddress, _this.state.maxWeight, _this.state.funcao).send({ from: _this.state.account });

                            case 4:
                                _context.next = 9;
                                break;

                            case 6:
                                _context.prev = 6;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 6]]);
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
                    lineNumber: 36
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, this.state.account, '(manager) adicionando nova wallet'), _react2.default.createElement('form', { className: 'ui form', onSubmit: this.onSubmit, style: { marginTop: "60px" }, error: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('div', { className: 'field', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Address: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ walletAddress: e.target.value });
                }, name: 'address', placeholder: 'Insert Ethereum Wallet Address', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, ' Max Weight'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ maxWeight: e.target.value });
                }, name: 'id', placeholder: 'ID of medicine on database', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement('select', { onChange: function onChange(e) {
                    _this3.setState({ funcao: e.target.value });
                }, className: 'ui dropdown', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('option', { value: 'Productor', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Productor'), _react2.default.createElement('option', { value: 'Stock', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Stock'), _react2.default.createElement('option', { value: 'Transport', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Transport'), _react2.default.createElement('option', { value: 'CirurgicCenter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Cirurgic Center'), _react2.default.createElement('option', { value: 'Seller', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Seller'), _react2.default.createElement('option', { value: 'Buyer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Buyer')), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Oops, there was an error!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.state.errorMessage)) : null, _react2.default.createElement('button', { type: 'submit', className: 'ui positive button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Create a Kind of Medicine for your Supplychain')));
        }
    }]);

    return createWallet;
}(_react.Component);

exports.default = createWallet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZVdhbGxldC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIndlYjMiLCJzdXBwbHljaGFpbiIsIk1lc3NhZ2UiLCJjcmVhdGVXYWxsZXQiLCJzdGF0ZSIsImFjY291bnQiLCJ3YWxsZXRBZGRyZXNzIiwibWF4V2VpZ2h0IiwiZnVuY2FvIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVE7Ozs7Ozs7SSxBQUVhOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFFbkI7cUJBQVEsQUFDSyxBQUNUOzJCQUZJLEFBRVcsQUFDZjt1QkFISSxBQUdPLEFBQ1g7b0JBSkksQUFJSSxBQUNSOzBCQUxJLEFBS1UsQTtBQUxWLEFBQ0osaUIsQUFPSjtpR0FBVyxpQkFBQSxBQUFNLEdBQU47OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7a0NBRE8sQUFDUCxBQUFFOztnREFESztnREFBQTt1Q0FJRCxzQkFBQSxBQUFZLFFBQVosQUFDYSxhQUFhLE1BQUEsQUFBSyxNQUQvQixBQUNxQyxlQUFjLE1BQUEsQUFBSyxNQUR4RCxBQUM4RCxXQUFVLE1BQUEsQUFBSyxNQUQ3RSxBQUNtRixRQURuRixBQUVhLEtBQUssRUFBQyxNQUFNLE1BQUEsQUFBSyxNQU43QixBQUlELEFBRWtCLEFBQWtCOztpQ0FObkM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBUUw7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFSeEIsQUFRTCxBQUFjLEFBQW1COztpQ0FSNUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQWFnQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O2lDQUExQjtBLHFEQUNBO0EsMENBQVUsU0FBQSxBLEFBQVMsQUFDekI7O3FDQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVUO3lCQUNQOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFBVixBQUFnQixTQURoQixBQUNBLEFBQ0Esc0RBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsV0FBVSxVQUFVLEtBQXBDLEFBQXlDLFVBQVUsT0FBTyxFQUFDLFdBQTNELEFBQTBELEFBQVksVUFBUyxPQUEvRTs4QkFBQTtnQ0FBQSxBQUNRO0FBRFI7K0JBQ1EsY0FBQSxTQUFLLFdBQUwsQUFBZSxTQUFRLE9BQU8sRUFBQyxjQUEvQixBQUE4QixBQUFlOzhCQUE3QztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVEQUFPLE1BQVAsQUFBWSxRQUFPLFVBQVUsa0JBQUEsQUFBQyxHQUFJLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsZUFBZSxFQUFBLEFBQUUsT0FBaEMsQUFBYyxBQUF5QixBQUFRO0FBQWxGLG1CQUFvRixNQUFwRixBQUF5RixXQUFVLGFBQW5HLEFBQStHOzhCQUEvRztnQ0FIWixBQUNRLEFBRUksQUFFSjtBQUZJO2lDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWUsU0FBUSxPQUFPLEVBQUMsY0FBL0IsQUFBOEIsQUFBZTs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5REFBTyxNQUFQLEFBQVksUUFBTyxVQUFVLGtCQUFBLEFBQUMsR0FBSSxBQUFDOzJCQUFBLEFBQUssU0FBUyxFQUFDLFdBQVcsRUFBQSxBQUFFLE9BQTVCLEFBQWMsQUFBcUIsQUFBUTtBQUE5RSxtQkFBZ0YsTUFBaEYsQUFBcUYsTUFBSyxhQUExRixBQUFzRzs4QkFBdEc7Z0NBUFosQUFLUSxBQUVJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFlBQVEsVUFBVSxrQkFBQSxBQUFDLEdBQUksQUFBQzsyQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFRLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQVE7QUFBaEUsbUJBQWtFLFdBQWxFLEFBQTRFLGVBQWMsT0FBTyxFQUFDLGNBQWxHLEFBQWlHLEFBQWU7OEJBQWhIO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsOEJBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBRkosQUFFSSxBQUNBLDBCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSw4QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0Esb0NBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBTEosQUFLSSxBQUNBLDJCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQWZaLEFBU1EsQUFNSSxBQUVKLGdCQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLHFCQUN4QixBQUFDLDBDQUFRLFVBQVQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCx5QkFBQSxBQUFTOzs4QkFBVDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUhqQixBQUNJLEFBRUksQUFBZSxpQkFwQi9CLEFBcUJ5QixBQUNqQixzQkFBQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0M7OEJBQWhDO2dDQUFBO0FBQUE7ZUF6QlosQUFDSSxBQUVBLEFBc0JRLEFBSWI7Ozs7O0FBekR1QyxBOztrQkFBckIsQSIsImZpbGUiOiJjcmVhdGVXYWxsZXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvLmFsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/createWallet.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/createWallet.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/createWallet")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mMDdjNjg1OGYxYjYxODQ2OGQxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlV2FsbGV0LmpzPzM0ZGRhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXG5pbXBvcnQgc3VwcGx5Y2hhaW4gZnJvbSAnLi4vZXRoZXJldW0vc3VwcGx5Y2hhaW4nXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVXYWxsZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgICAgYWNjb3VudDogJzB4MCcsXG4gICAgICB3YWxsZXRBZGRyZXNzOiAnMHgwJyxcbiAgICAgIG1heFdlaWdodDogJycsXG4gICAgICBmdW5jYW86ICcnLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJ1xuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyBlID0+e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIHRyeXtcbiAgICAgIGF3YWl0IHN1cHBseWNoYWluLm1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVXYWxsZXQodGhpcy5zdGF0ZS53YWxsZXRBZGRyZXNzLHRoaXMuc3RhdGUubWF4V2VpZ2h0LHRoaXMuc3RhdGUuZnVuY2FvKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe2Zyb206IHRoaXMuc3RhdGUuYWNjb3VudH0pXG4gICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pXG4gICAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnR9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+e3RoaXMuc3RhdGUuYWNjb3VudH0obWFuYWdlcikgYWRpY2lvbmFuZG8gbm92YSB3YWxsZXQ8L2gzPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjYwcHhcIn19IGVycm9yPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI0MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3M6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9Pnt0aGlzLnNldFN0YXRlKHt3YWxsZXRBZGRyZXNzOiBlLnRhcmdldC52YWx1ZX0pfX0gbmFtZT1cImFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkluc2VydCBFdGhlcmV1bSBXYWxsZXQgQWRkcmVzc1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjQwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IE1heCBXZWlnaHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpPT57dGhpcy5zZXRTdGF0ZSh7bWF4V2VpZ2h0OiBlLnRhcmdldC52YWx1ZX0pfX0gbmFtZT1cImlkXCIgcGxhY2Vob2xkZXI9XCJJRCBvZiBtZWRpY2luZSBvbiBkYXRhYmFzZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpPT57dGhpcy5zZXRTdGF0ZSh7ZnVuY2FvOiBlLnRhcmdldC52YWx1ZX0pfX0gY2xhc3NOYW1lPVwidWkgZHJvcGRvd25cIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI0MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByb2R1Y3RvclwiPlByb2R1Y3Rvcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RvY2tcIj5TdG9jazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+VHJhbnNwb3J0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaXJ1cmdpY0NlbnRlclwiPkNpcnVyZ2ljIENlbnRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VsbGVyXCI+U2VsbGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCdXllclwiPkJ1eWVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAhPT0gJycgPyBcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgbmVnYXRpdmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZS5IZWFkZXI+T29wcywgdGhlcmUgd2FzIGFuIGVycm9yITwvTWVzc2FnZS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ1aSBwb3NpdGl2ZSBidXR0b25cIj5DcmVhdGUgYSBLaW5kIG9mIE1lZGljaW5lIGZvciB5b3VyIFN1cHBseWNoYWluPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jcmVhdGVXYWxsZXQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9