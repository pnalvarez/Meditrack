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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/GenerateProduct.js?entry';


var GenerateProduct = function (_Component) {
    (0, _inherits3.default)(GenerateProduct, _Component);

    function GenerateProduct() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, GenerateProduct);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GenerateProduct.__proto__ || (0, _getPrototypeOf2.default)(GenerateProduct)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            uuid: '',
            id: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var _this$state, uuid, id, account;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                _this$state = _this.state, uuid = _this$state.uuid, id = _this$state.id, account = _this$state.account;
                                _context.prev = 3;
                                _context.next = 6;
                                return _supplychain2.default.methods.medicineGenerate(uuid, id).send({ from: account });

                            case 6:
                                _routes.Router.pushRoute('/');
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                                _this.setState({ loading: false });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 9]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(GenerateProduct, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context2.sent;

                                this.setState({ account: accounts[0] });

                            case 4:
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
                    lineNumber: 39
                }
            }, _react2.default.createElement('h1', { style: { color: "green" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Productor Medicine Builder'), _react2.default.createElement('form', { onSubmit: this.onSubmit, className: 'ui form', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'UUID: '), _react2.default.createElement('input', { type: 'text', name: 'uuid', onChange: function onChange(e) {
                    return _this3.setState({ uuid: e.target.value });
                }, placeholder: 'Insert an Unique ID', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Medicine Id: '), _react2.default.createElement('input', { type: 'text', name: 'id', onChange: function onChange(e) {
                    return _this3.setState({ id: e.target.value });
                }, placeholder: 'ID of medicine on database', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            })), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Oops, there was an error!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.state.errorMessage)) : null, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', className: 'ui positive button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Create a Kind of Medicine for your Supplychain')));
        }
    }]);

    return GenerateProduct;
}(_react.Component);

exports.default = GenerateProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL0dlbmVyYXRlUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIndlYjMiLCJzdXBwbHljaGFpbiIsIk1lc3NhZ2UiLCJCdXR0b24iLCJSb3V0ZXIiLCJHZW5lcmF0ZVByb2R1Y3QiLCJzdGF0ZSIsImFjY291bnQiLCJ1dWlkIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJtZWRpY2luZUdlbmVyYXRlIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbG9yIiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVEsQUFDUixBQUFROztBQUNSLEFBQVEsQUFBYTs7Ozs7OztJLEFBRUE7Ozs7Ozs7Ozs7Ozs7OztrT0FFbkIsQTtxQkFBTSxBQUNPLEFBQ1Q7a0JBRkUsQUFFSSxBQUNOO2dCQUhFLEFBR0UsQUFDSjtxQkFKRSxBQUlPLEFBQ1Q7MEJBTEUsQUFLWSxBO0FBTFosQUFDRixpQkFNSixBO2lHQUFXLGlCQUFBLEFBQU0sR0FBTjsyQ0FBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7a0NBQUEsQUFBRSxBQUVGOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUh2QixBQUdQLEFBQWMsQUFBOEI7OENBQ2pCLE1BSnBCLEFBSXlCLE9BSnpCLEFBSUEsbUJBSkEsQUFJQSxNQUpBLEFBSUssaUJBSkwsQUFJSyxJQUpMLEFBSVMsc0JBSlQsQUFJUztnREFKVDtnREFBQTt1Q0FPTCxzQkFBQSxBQUFZLFFBQVosQUFBb0IsaUJBQXBCLEFBQXFDLE1BQXJDLEFBQTBDLElBQTFDLEFBQ0MsS0FBSyxFQUFDLE1BUkYsQUFPTCxBQUNNLEFBQU87O2lDQUNiOytDQUFBLEFBQU8sVUFURixBQVNMLEFBQWlCO2dEQVRaO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVdKOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBWHpCLEFBV0osQUFBYyxBQUFtQjs7aUNBRXBDO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBYlIsQUFhUCxBQUFjLEFBQVU7O2lDQWJqQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBZ0JnQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O2lDQUExQjtBLHFEQUNOOztxQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFTLFNBQXhCLEFBQWMsQUFBVSxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRTVCO3lCQUNQOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLGNBQUEsUUFBSSxPQUFPLEVBQUMsT0FBWixBQUFXLEFBQVE7OEJBQW5CO2dDQUFBO0FBQUE7ZUFEQSxBQUNBLEFBQ0EsK0NBQUEsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxXQUEvQixBQUF5Qzs4QkFBekM7Z0NBQUEsQUFDUTtBQURSOytCQUNRLGNBQUEsU0FBSyxXQUFMLEFBQWUsU0FBUSxPQUFPLEVBQUMsV0FBL0IsQUFBOEIsQUFBWTs4QkFBMUM7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxvREFBTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QixRQUFPLFVBQVUscUJBQUE7MkJBQUcsT0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUEsQUFBRSxPQUExQixBQUFHLEFBQWMsQUFBZ0I7QUFBMUUsbUJBQW1GLGFBQW5GLEFBQStGOzhCQUEvRjtnQ0FIWixBQUNRLEFBRUksQUFFSjtBQUZJO2lDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWUsU0FBUSxPQUFPLEVBQUMsV0FBL0IsQUFBOEIsQUFBWTs4QkFBMUM7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyREFBTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QixNQUFLLFVBQVUscUJBQUE7MkJBQUcsT0FBQSxBQUFLLFNBQVMsRUFBQyxJQUFJLEVBQUEsQUFBRSxPQUF4QixBQUFHLEFBQWMsQUFBYztBQUF0RSxtQkFBK0UsYUFBL0UsQUFBMkY7OEJBQTNGO2dDQVBaLEFBS1EsQUFFSSxBQUVIO0FBRkc7c0JBRUgsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIscUJBQ3pCLEFBQUMsMENBQVEsVUFBVDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHlCQUFBLEFBQVM7OzhCQUFUO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4Q0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BSGhCLEFBQ0csQUFFSSxBQUFlLGlCQVovQixBQWF5QixBQUNqQixzQkFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsTUFBckMsQUFBMEMsVUFBUyxXQUFuRCxBQUE2RDs4QkFBN0Q7Z0NBQUE7QUFBQTtlQWpCWixBQUNJLEFBRUEsQUFjUSxBQUliOzs7OztBQWxEMEMsQTs7a0JBQXhCLEEiLCJmaWxlIjoiR2VuZXJhdGVQcm9kdWN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyby5hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=