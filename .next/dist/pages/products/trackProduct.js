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

var _semanticUiReact = require('semantic-ui-react');

var _supplychain = require('../../ethereum/supplychain');

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