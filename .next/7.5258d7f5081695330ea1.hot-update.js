webpackHotUpdate(7,{

/***/ 1190:
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

var _layout = __webpack_require__(1144);

var _layout2 = _interopRequireDefault(_layout);

var _web = __webpack_require__(428);

var _web2 = _interopRequireDefault(_web);

var _supplychain = __webpack_require__(1142);

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = __webpack_require__(491);

var _sinisterRow = __webpack_require__(1191);

var _sinisterRow2 = _interopRequireDefault(_sinisterRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/pages/sinisters/viewSinisters.js?entry';


var viewSinisters = function (_Component) {
    (0, _inherits3.default)(viewSinisters, _Component);

    function viewSinisters() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, viewSinisters);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = viewSinisters.__proto__ || (0, _getPrototypeOf2.default)(viewSinisters)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            sinisters: [],
            sinistersQtd: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(viewSinisters, [{
        key: 'renderSinisters',
        value: function renderSinisters() {
            return this.state.sinisters.map(function (sinister) {
                return _react2.default.createElement(_sinisterRow2.default, { key: sinister.key,
                    uuid: sinister.uuid,
                    id: sinister.id,
                    name: sinister.name,
                    title: sinister.title,
                    description: sinister.description,
                    timestamp: sinister.timestamp,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts, account, sinistersQtd, sinisters, i, uuid, id, name;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;
                                account = accounts[0];
                                _context.next = 6;
                                return _supplychain2.default.methods.getSinistersQtd(account).call();

                            case 6:
                                sinistersQtd = _context.sent;
                                sinisters = [];

                                this.setState({ account: account, sinistersQtd: sinistersQtd });

                                i = 0;

                            case 10:
                                if (!(i < sinistersQtd)) {
                                    _context.next = 39;
                                    break;
                                }

                                _context.next = 13;
                                return _supplychain2.default.methods.getSinisterEnvolvedProduct(i, account).call();

                            case 13:
                                uuid = _context.sent;
                                _context.next = 16;
                                return _supplychain2.default.methods.getProductId(uuid).call();

                            case 16:
                                id = _context.sent;
                                _context.next = 19;
                                return _supplychain2.default.methods.getMedicineName(id).call();

                            case 19:
                                name = _context.sent;
                                _context.t0 = sinisters;
                                _context.t1 = i;
                                _context.t2 = uuid;
                                _context.t3 = id;
                                _context.t4 = name;
                                _context.next = 27;
                                return _supplychain2.default.methods.getSinisterTitle(i, account).call();

                            case 27:
                                _context.t5 = _context.sent;
                                _context.next = 30;
                                return _supplychain2.default.methods.getSinisterDescription(i, account).call();

                            case 30:
                                _context.t6 = _context.sent;
                                _context.next = 33;
                                return _supplychain2.default.methods.getSinisterTimestamp(i, account).call();

                            case 33:
                                _context.t7 = _context.sent;
                                _context.t8 = {
                                    key: _context.t1,
                                    uuid: _context.t2,
                                    id: _context.t3,
                                    name: _context.t4,
                                    title: _context.t5,
                                    description: _context.t6,
                                    timestamp: _context.t7
                                };

                                _context.t0.push.call(_context.t0, _context.t8);

                            case 36:
                                i++;
                                _context.next = 10;
                                break;

                            case 39:
                                this.setState({ sinisters: sinisters });

                            case 40:
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
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;
            var sinistersQtd = this.state.sinistersQtd;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'UUID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Name'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Title'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Timestamp'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderSinisters())));
        }
    }]);

    return viewSinisters;
}(_react.Component);

exports.default = viewSinisters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NpbmlzdGVycy92aWV3U2luaXN0ZXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwid2ViMyIsInN1cHBseWNoYWluIiwiVGFibGUiLCJTaW5pc3RlclJvdyIsInZpZXdTaW5pc3RlcnMiLCJzdGF0ZSIsImFjY291bnQiLCJzaW5pc3RlcnMiLCJzaW5pc3RlcnNRdGQiLCJtYXAiLCJzaW5pc3RlciIsImtleSIsInV1aWQiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGltZXN0YW1wIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRTaW5pc3RlcnNRdGQiLCJjYWxsIiwic2V0U3RhdGUiLCJpIiwiZ2V0U2luaXN0ZXJFbnZvbHZlZFByb2R1Y3QiLCJnZXRQcm9kdWN0SWQiLCJnZXRNZWRpY2luZU5hbWUiLCJnZXRTaW5pc3RlclRpdGxlIiwiZ2V0U2luaXN0ZXJEZXNjcmlwdGlvbiIsImdldFNpbmlzdGVyVGltZXN0YW1wIiwicHVzaCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiYmFja2dyb3VuZENvbG9yIiwicmVuZGVyU2luaXN0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFROztBQUNSLEFBQU8sQUFBaUI7Ozs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7OzhOQUVuQixBO3FCQUFNLEFBQ08sQUFDVDt1QkFGRSxBQUVTLEFBQ1g7MEJBSEUsQUFHWSxBO0FBSFosQUFDRjs7Ozs7MENBSWEsQUFDYjt3QkFDQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUssb0JBQVUsQUFDaEM7dUNBQ0ksQUFBQyx1Q0FBWSxLQUFLLFNBQWxCLEFBQTJCLEFBQ2Q7MEJBQU0sU0FEbkIsQUFDNEIsQUFDZjt3QkFBSSxTQUZqQixBQUUwQixBQUNiOzBCQUFNLFNBSG5CLEFBRzRCLEFBQ2Y7MkJBQU8sU0FKcEIsQUFJNkIsQUFDaEI7aUNBQWEsU0FMMUIsQUFLbUMsQUFDdEI7K0JBQVcsU0FOeEIsQUFNaUM7O2tDQU5qQztvQ0FESixBQUNJLEFBU1A7QUFUTztpQkFBQTtBQUhSLEFBQ0EsQUFZSCxhQVpHOzs7Ozs7Ozs7Ozs7dUNBY3dCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7aUNBQTFCO0Esb0RBQ0E7QSwwQ0FBVSxTQUFBLEEsQUFBUzs7dUNBQ0Usc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGdCQUFwQixBQUFvQyxTQUFwQyxBQUE2QyxBOztpQ0FBbEU7QSx3REFDRjtBLDRDQUVKLEEsQUFGYzs7cUNBRWQsQUFBSyxTQUFTLEVBQUMsU0FBRCxTQUFVLGNBQXhCLEFBQWMsQUFFTjs7QSxvQyxBQUFFOzs7c0NBQUUsSUFBRSxBOzs7Ozs7dUNBQ1Msc0JBQUEsQUFBWSxRQUFaLEFBQW9CLDJCQUFwQixBQUErQyxHQUEvQyxBQUFrRCxTQUFTLEEsQUFBM0Q7O2lDQUFiO0E7O3VDQUNXLHNCQUFBLEFBQVksUUFBWixBQUFvQixhQUFwQixBQUFpQyxNLEFBQWpDLEFBQXVDOztpQ0FBbEQ7QTs7dUNBQ2Esc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGdCQUFwQixBQUFvQyxJQUFwQyxBQUF3QyxBOztpQ0FBckQ7QTs4Q0FFTixBOzhDQUNTLEE7OEMsQUFDQzs4QyxBQUNGOzhDQUNFLEE7O3VDQUNPLHNCQUFBLEFBQVksUUFBWixBQUFvQixpQkFBcEIsQUFBcUMsR0FBckMsQUFBdUMsU0FBdkMsQUFBZ0QsQTs7Ozs7dUNBQzFDLHNCQUFBLEFBQVksUUFBWixBQUFvQix1QkFBcEIsQUFBMkMsR0FBM0MsQUFBNkMsU0FBN0MsQUFBc0QsQTs7Ozs7dUNBQ3hELHNCQUFBLEFBQVksUUFBWixBQUFvQixxQkFBcEIsQUFBeUMsR0FBekMsQUFBMkMsU0FBM0MsQUFBb0QsQTs7Ozs7QSxrREFMckU7QSxtREFDQTtBLGlEQUNBO0EsbURBQ0E7QSxvREFDQTtBLDBEQUNBO0E7QUFOQTs7NEMsQUFETTs7aUNBTGE7QTs7OztpQ0FlM0I7cUNBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRVY7Z0JBQUEsQUFDQSxTQURBLEFBQ2lDLHVCQURqQyxBQUNBO2dCQURBLEFBQ1EsTUFEUixBQUNpQyx1QkFEakMsQUFDUTtnQkFEUixBQUNhLGFBRGIsQUFDaUMsdUJBRGpDLEFBQ2E7Z0JBRGIsQUFDeUIsT0FEekIsQUFDaUMsdUJBRGpDLEFBQ3lCO2dCQUR6QixBQUVBLGVBQWdCLEtBRmhCLEFBRXFCLE1BRnJCLEFBRUEsQUFDUDs7bUNBQ0UsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSx1QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUpKLEFBSUksQUFDQSwwQkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUxKLEFBS0ksQUFDQSxnQ0FBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQVJaLEFBQ0ksQUFDSSxBQU1JLEFBR1IsZ0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTztBQURQO0FBQUEsb0JBYlYsQUFDRSxBQUNJLEFBV0ksQUFDTyxBQUFLLEFBS3ZCOzs7OztBQXJFd0MsQTs7a0JBQXRCLEEiLCJmaWxlIjoidmlld1NpbmlzdGVycy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm9hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedroalvarez/Desktop/ProjetoFinal/pages/sinisters/viewSinisters.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedroalvarez/Desktop/ProjetoFinal/pages/sinisters/viewSinisters.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sinisters/viewSinisters")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41MjU4ZDdmNTA4MTY5NTMzMGVhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2luaXN0ZXJzL3ZpZXdTaW5pc3RlcnMuanM/NzA4NWJjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcbmltcG9ydCBzdXBwbHljaGFpbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9zdXBwbHljaGFpbidcbmltcG9ydCB7VGFibGV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFNpbmlzdGVyUm93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2luaXN0ZXJSb3cnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHZpZXdTaW5pc3RlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlPXtcbiAgICAgIGFjY291bnQ6ICcweDAnLFxuICAgICAgc2luaXN0ZXJzOiBbXSxcbiAgICAgIHNpbmlzdGVyc1F0ZDogJydcbiAgfVxuICByZW5kZXJTaW5pc3RlcnMoKXtcbiAgICAgIHJldHVybihcbiAgICAgIHRoaXMuc3RhdGUuc2luaXN0ZXJzLm1hcCgoc2luaXN0ZXI9PntcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxTaW5pc3RlclJvdyBrZXk9e3NpbmlzdGVyLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ9e3NpbmlzdGVyLnV1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17c2luaXN0ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzaW5pc3Rlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NpbmlzdGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3NpbmlzdGVyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wPXtzaW5pc3Rlci50aW1lc3RhbXB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgfSkpKVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXG4gICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdXG4gICAgICAgY29uc3Qgc2luaXN0ZXJzUXRkID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRTaW5pc3RlcnNRdGQoYWNjb3VudCkuY2FsbCgpXG4gICAgICAgbGV0IHNpbmlzdGVycz1bXVxuXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7YWNjb3VudCwgc2luaXN0ZXJzUXRkfSlcblxuICAgICAgIGZvcihsZXQgaT0wO2k8c2luaXN0ZXJzUXRkO2krKyl7XG4gICAgICAgICAgIGNvbnN0IHV1aWQgPSBhd2FpdCBzdXBwbHljaGFpbi5tZXRob2RzLmdldFNpbmlzdGVyRW52b2x2ZWRQcm9kdWN0KGksIGFjY291bnQpLmNhbGwoKVxuICAgICAgICAgICBjb25zdCBpZCA9IGF3YWl0IHN1cHBseWNoYWluLm1ldGhvZHMuZ2V0UHJvZHVjdElkKHV1aWQpLmNhbGwoKVxuICAgICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgc3VwcGx5Y2hhaW4ubWV0aG9kcy5nZXRNZWRpY2luZU5hbWUoaWQpLmNhbGwoKVxuXG4gICAgICAgICAgIHNpbmlzdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgdGl0bGU6IGF3YWl0IHN1cHBseWNoYWluLm1ldGhvZHMuZ2V0U2luaXN0ZXJUaXRsZShpLGFjY291bnQpLmNhbGwoKSxcbiAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhd2FpdCBzdXBwbHljaGFpbi5tZXRob2RzLmdldFNpbmlzdGVyRGVzY3JpcHRpb24oaSxhY2NvdW50KS5jYWxsKCksXG4gICAgICAgICAgICAgICB0aW1lc3RhbXA6IGF3YWl0IHN1cHBseWNoYWluLm1ldGhvZHMuZ2V0U2luaXN0ZXJUaW1lc3RhbXAoaSxhY2NvdW50KS5jYWxsKCksXG4gICAgICAgICAgIH0pXG4gICAgICAgfVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3NpbmlzdGVyc30pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keX0gPSBUYWJsZVxuICAgIGNvbnN0IHtzaW5pc3RlcnNRdGR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzRDNUQ1RFwifX0+VVVJRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjNEM1RDVEXCJ9fT5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjNEM1RDVEXCJ9fT5OYW1lPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM0QzVENURcIn19PlRpdGxlPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM0QzVENURcIn19PkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM0QzVENURcIn19PlRpbWVzdGFtcDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNpbmlzdGVycygpfVxuICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc2luaXN0ZXJzL3ZpZXdTaW5pc3RlcnMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOztBQUZBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQVNBO0FBVEE7QUFBQTtBQVVBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFFQTtBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7O0FBT0E7QUFDQTs7OztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBOzs7O0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBQ0E7OztBQVBBOzs7OztBQWVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9