webpackHotUpdate(5,{

/***/ 723:
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

var _layout = __webpack_require__(724);

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = __webpack_require__(475);

var _supplychain = __webpack_require__(1162);

var _supplychain2 = _interopRequireDefault(_supplychain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/trackProduct.js?entry';


var trackProduct = function (_Component) {
    (0, _inherits3.default)(trackProduct, _Component);

    function trackProduct() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, trackProduct);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = trackProduct.__proto__ || (0, _getPrototypeOf2.default)(trackProduct)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            uuid1: '',
            owner1: 'Result: ',
            uuid2: '',
            owner2: '',
            dateString: '',
            errorMessage1: '',
            errorMessage2: ''
        }, _this.onSubmitCurrentOwner = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var owner1;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                if (!(_this.state.uuid1 !== '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _this.setState({ errorMessage1: '' });
                                _context.next = 5;
                                return _supplychain2.default.methods.getProductOwner(_this.state.uuid1).call();

                            case 5:
                                owner1 = _context.sent;

                                _this.setState({ owner1: "Current Owner: " + owner1 });
                                console.log("submit");
                                _context.next = 12;
                                break;

                            case 10:
                                console.log("error");
                                _this.setState({ errorMessage1: "Needs Info" });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onSubmitTrack = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
                var dateString, date, owner2;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                e.preventDefault();

                                if (!(_this.state.uuid2 !== '' && _this.state.dateString !== 'Nan')) {
                                    _context2.next = 15;
                                    break;
                                }

                                dateString = _this.state.dateString;

                                console.log("date string", Date.parse(dateString));
                                date = Date.parse(dateString) / 1000;
                                _context2.prev = 5;
                                _context2.next = 8;
                                return _supplychain2.default.methods.trackProduct(_this.state.uuid2, date).call();

                            case 8:
                                owner2 = _context2.sent;

                                _this.setState({ owner2: 'Result: ' + owner2 });
                                _context2.next = 15;
                                break;

                            case 12:
                                _context2.prev = 12;
                                _context2.t0 = _context2['catch'](5);

                                _this.setState({ errorMessage2: _context2.t0.Message });

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[5, 12]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(trackProduct, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('h1', { style: { color: "green" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Track Product Screen'), _react2.default.createElement('div', { className: 'ui segments', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('div', { className: 'ui green inverted segment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Current Owner of'), _react2.default.createElement('form', { onSubmit: this.onSubmitCurrentOwner, className: 'ui form', style: { marginTop: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('div', { className: 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Product Unique ID'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ uuid1: e.target.value });
                }, name: 'uuid', placeholder: 'Product UUID', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', className: 'ui button', style: { marginTop: "20px", marginLeft: "400px", width: "20%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Track')), this.state.errorMessage1 !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Error'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, this.state.errorMessage1)) : null, _react2.default.createElement('h4', { style: { marginLeft: "60px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.state.owner1)), _react2.default.createElement('div', { className: 'ui blue inverted segment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Track Product on time:'), _react2.default.createElement('form', { onSubmit: this.onSubmitTrack, className: 'ui form', style: { marginTop: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('div', { className: 'two fields', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('div', { className: 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Product UUID'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ uuid2: e.target.value });
                }, placeholder: 'placeholder', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            })), _react2.default.createElement('div', { className: 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'Date'), _react2.default.createElement('input', { type: 'datetime-local', onChange: function onChange(e) {
                    _this3.setState({ dateString: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }))), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', className: 'ui button', style: { marginTop: "60px", marginLeft: "400px", width: "20%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'Track')), this.state.errorMessage2 !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, 'Error'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, this.state.errorMessage2)) : null, _react2.default.createElement('h4', { style: { marginLeft: "60px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, this.state.owner2))));
        }
    }]);

    return trackProduct;
}(_react.Component);

exports.default = trackProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL3RyYWNrUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsInN1cHBseWNoYWluIiwiTWVzc2FnZSIsInRyYWNrUHJvZHVjdCIsInN0YXRlIiwiYWNjb3VudCIsInV1aWQxIiwib3duZXIxIiwidXVpZDIiLCJvd25lcjIiLCJkYXRlU3RyaW5nIiwiZXJyb3JNZXNzYWdlMSIsImVycm9yTWVzc2FnZTIiLCJvblN1Ym1pdEN1cnJlbnRPd25lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibWV0aG9kcyIsImdldFByb2R1Y3RPd25lciIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRUcmFjayIsIkRhdGUiLCJwYXJzZSIsImRhdGUiLCJjb2xvciIsIm1hcmdpblRvcCIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFROztBQUNSLEFBQU8sQUFBaUIsQUFDeEIsQUFBUTs7Ozs7Ozs7O0ksQUFFYTs7Ozs7Ozs7Ozs7Ozs7OzROLEFBRW5CO3FCQUFNLEFBQ08sQUFDVDttQkFGRSxBQUVLLEFBQ1A7b0JBSEUsQUFHTSxBQUNSO21CQUpFLEFBSUssQUFDUDtvQkFMRSxBQUtNLEFBQ1I7d0JBTkUsQUFNVSxBQUNaOzJCQVBFLEFBT2EsQUFDZjsyQkFSRSxBQVFhLEE7QUFSYixBQUNGLGlCLEFBVUo7aUdBQXVCLGlCQUFBLEFBQU0sR0FBTjtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDckI7a0NBRHFCLEFBQ3JCLEFBQUU7O3NDQUVDLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFITyxBQUdHLEtBSEg7b0RBQUE7QUFBQTtBQUlyQjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMs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OzJCQUFBLEFBQUssU0FBUyxFQUFDLFlBQVksRUFBQSxBQUFFLE9BQTdCLEFBQWMsQUFBc0IsQUFBUTtBQUF2Rjs4QkFBQTtnQ0FSWixBQUNJLEFBS0ksQUFFSSxBQUdSO0FBSFE7a0NBR1IsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxXQUF0QixBQUFnQyxhQUFZLE9BQU8sRUFBQyxXQUFELEFBQVksUUFBUSxZQUFwQixBQUFnQyxTQUFTLE9BQTVGLEFBQW1ELEFBQWdEOzhCQUFuRztnQ0FBQTtBQUFBO2VBYlosQUFFUSxBQVdJLEFBR0EsZ0JBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIscUJBQ3pCLEFBQUMsMENBQVEsVUFBVDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHlCQUFBLEFBQVM7OzhCQUFUO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BSGpCLEFBQ0ksQUFFSSxBQUFlLGtCQW5CbkMsQUFxQmtCLEFBRVYsc0JBQUEsY0FBQSxRQUFJLE9BQU8sRUFBQyxZQUFaLEFBQVcsQUFBYTs4QkFBeEI7Z0NBQUEsQUFBa0M7QUFBbEM7b0JBQWtDLEFBQUssTUE3Q3ZELEFBQ0UsQUFFSSxBQW1CRSxBQXVCUSxBQUE2QyxBQUs5RDs7Ozs7QUFoR3VDLEE7O2tCQUFyQixBIiwiZmlsZSI6InRyYWNrUHJvZHVjdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/trackProduct.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/trackProduct.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/products/trackProduct")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zNWQwN2JhYzdkNjUxNDc2ZmRlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdHMvdHJhY2tQcm9kdWN0LmpzPzlkYzMzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgc3VwcGx5Y2hhaW4gZnJvbSAnLi4vLi4vZXRoZXJldW0vc3VwcGx5Y2hhaW4nXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0cmFja1Byb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlPXtcbiAgICAgIGFjY291bnQ6ICcweDAnLFxuICAgICAgdXVpZDE6ICcnLFxuICAgICAgb3duZXIxOiAnUmVzdWx0OiAnLFxuICAgICAgdXVpZDI6ICcnLFxuICAgICAgb3duZXIyOiAnJyxcbiAgICAgIGRhdGVTdHJpbmc6ICcnLFxuICAgICAgZXJyb3JNZXNzYWdlMTogJycsXG4gICAgICBlcnJvck1lc3NhZ2UyOiAnJ1xuICB9XG5cbiAgb25TdWJtaXRDdXJyZW50T3duZXIgPSBhc3luYyBlPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgaWYodGhpcy5zdGF0ZS51dWlkMSAhPT0gJycpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTE6ICcnfSlcbiAgICBjb25zdCBvd25lcjEgPSBhd2FpdCBzdXBwbHljaGFpbi5tZXRob2RzLmdldFByb2R1Y3RPd25lcih0aGlzLnN0YXRlLnV1aWQxKS5jYWxsKClcbiAgICB0aGlzLnNldFN0YXRlKHtvd25lcjE6IFwiQ3VycmVudCBPd25lcjogXCIrb3duZXIxfSlcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTE6IFwiTmVlZHMgSW5mb1wifSlcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdFRyYWNrID0gYXN5bmMgZT0+e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGlmKHRoaXMuc3RhdGUudXVpZDIgIT09ICcnICYmIHRoaXMuc3RhdGUuZGF0ZVN0cmluZyAhPT0gJ05hbicpe1xuICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLmRhdGVTdHJpbmdcbiAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgc3RyaW5nXCIsIERhdGUucGFyc2UoZGF0ZVN0cmluZykpXG4gICAgICAgY29uc3QgZGF0ZSA9IERhdGUucGFyc2UoZGF0ZVN0cmluZykgLyAxMDAwXG4gICAgICAgXG4gICAgICAgdHJ5e1xuICAgICAgIGNvbnN0IG93bmVyMiA9IGF3YWl0IHN1cHBseWNoYWluLm1ldGhvZHMudHJhY2tQcm9kdWN0KHRoaXMuc3RhdGUudXVpZDIsIGRhdGUpLmNhbGwoKVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe293bmVyMjogJ1Jlc3VsdDogJytvd25lcjJ9KVxuICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlMjogZXJyLk1lc3NhZ2V9KVxuICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0+VHJhY2sgUHJvZHVjdCBTY3JlZW48L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZ3JlZW4gaW52ZXJ0ZWQgc2VnbWVudFwiPlxuICAgICAgICAgICAgICAgIDxoMz5DdXJyZW50IE93bmVyIG9mPC9oMz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEN1cnJlbnRPd25lcn0gY2xhc3NOYW1lPVwidWkgZm9ybVwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjQwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBVbmlxdWUgSUQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2U9Pnt0aGlzLnNldFN0YXRlKHt1dWlkMTogZS50YXJnZXQudmFsdWV9KX19IG5hbWU9XCJ1dWlkXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IFVVSURcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBtYXJnaW5MZWZ0OiBcIjQwMHB4XCIsIHdpZHRoOiBcIjIwJVwifX0+VHJhY2s8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMSAhPT0gJycgPyBcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgbmVnYXRpdmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZS5IZWFkZXI+RXJyb3I8L01lc3NhZ2UuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luTGVmdDogXCI2MHB4XCJ9fT57dGhpcy5zdGF0ZS5vd25lcjF9PC9oND4gICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYmx1ZSBpbnZlcnRlZCBzZWdtZW50XCI+XG4gICAgICAgICAgICAgICAgPGgzPlRyYWNrIFByb2R1Y3Qgb24gdGltZTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdFRyYWNrfSBjbGFzc05hbWU9XCJ1aSBmb3JtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNDBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3byBmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IFVVSUQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZT0+e3RoaXMuc2V0U3RhdGUoe3V1aWQyOiBlLnRhcmdldC52YWx1ZX0pfX0gcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIG9uQ2hhbmdlPXtlPT57dGhpcy5zZXRTdGF0ZSh7ZGF0ZVN0cmluZzogZS50YXJnZXQudmFsdWV9KX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNjBweFwiLCBtYXJnaW5MZWZ0OiBcIjQwMHB4XCIsIHdpZHRoOiBcIjIwJVwifX0+VHJhY2s8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTIgIT09ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBuZWdhdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPkVycm9yPC9NZXNzYWdlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbkxlZnQ6IFwiNjBweFwifX0+e3RoaXMuc3RhdGUub3duZXIyfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcHJvZHVjdHMvdHJhY2tQcm9kdWN0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUlBO0FBQ0E7QUFMQTtBQUNBO0FBSUE7QUFMQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFUQTtBQUNBO0FBU0E7QUFWQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==