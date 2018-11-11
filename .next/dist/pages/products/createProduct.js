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

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/createProduct.js?entry';


var createProduct = function (_Component) {
    (0, _inherits3.default)(createProduct, _Component);

    function createProduct() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, createProduct);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createProduct.__proto__ || (0, _getPrototypeOf2.default)(createProduct)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            id: '',
            name: '',
            description: '',
            weight: '',
            value: '',
            validity: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _supplychain2.default.methods.medicineCreate(_this.state.id, _this.state.name, _this.state.description, _this.state.weight, _this.state.value, _this.state.validity).send({
                                    from: _this.state.account
                                });

                            case 5:
                                _routes.Router.pushRoute('/');
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 11:
                                _this.setState({ loading: false });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 8]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(createProduct, [{
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
                    lineNumber: 47
                }
            }, _react2.default.createElement('h1', { style: { color: "darkcyan" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Create Product for Manager(', this.state.account, ')'), _react2.default.createElement('form', { onSubmit: this.onSubmit, className: 'ui form', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('div', { className: 'field', style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Id: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ id: e.target.value });
                }, name: 'id', placeholder: 'ID', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Name'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ name: e.target.value });
                }, name: 'name', placeholder: 'Name', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Description'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ description: e.target.value });
                }, name: 'description', placeholder: 'Description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Weight'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ weight: e.target.value });
                }, name: 'weight', placeholder: 'Weight', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Value'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ value: e.target.value });
                }, name: 'value', placeholder: 'Value', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "20px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Validity'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ validity: e.target.value });
                }, name: 'validity', placeholder: 'Validity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Oops, there was an error!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, this.state.errorMessage)) : null, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', className: 'ui positive button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Create a Kind of Medicine for your Supplychain')));
        }
    }]);

    return createProduct;
}(_react.Component);

exports.default = createProduct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL2NyZWF0ZVByb2R1Y3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJzdXBwbHljaGFpbiIsIndlYjMiLCJNZXNzYWdlIiwiQnV0dG9uIiwiUm91dGVyIiwiY3JlYXRlUHJvZHVjdCIsInN0YXRlIiwiYWNjb3VudCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwid2VpZ2h0IiwidmFsdWUiLCJ2YWxpZGl0eSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibWV0aG9kcyIsIm1lZGljaW5lQ3JlYXRlIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbG9yIiwibWFyZ2luVG9wIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQ1IsQUFBUTs7QUFDUixBQUFRLEFBQWE7Ozs7Ozs7SUFFQSxBOzs7Ozs7Ozs7Ozs7Ozs7OE4sQUFFbkI7cUJBQU0sQUFDTyxBQUNUO2dCQUZFLEFBRUUsQUFDSjtrQkFIRSxBQUdJLEFBQ047eUJBSkUsQUFJVyxBQUNiO29CQUxFLEFBS00sQUFDUjttQkFORSxBQU1LLEFBQ1A7c0JBUEUsQUFPUSxBQUNWOzBCQVJFLEFBUVksQUFDZDtxQkFURSxBQVNPLEE7QUFUUCxBQUNGLGlCQVVKLEE7aUdBQVcsaUJBQUEsQUFBTSxHQUFOOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO2tDQUFBLEFBQUUsQUFFRjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FIdkIsQUFHUCxBQUFjLEFBQThC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LEFBQ0M7QUFERDtBQUFBLHFCQUNDLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLHFCQUN6QixBQUFDLDBDQUFRLFVBQVQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCx5QkFBQSxBQUFTOzs4QkFBVDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUhoQixBQUNHLEFBRUksQUFBZSxpQkE3QjNCLEFBOEJxQixBQUNqQixzQkFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsTUFBckMsQUFBMEMsVUFBUyxXQUFuRCxBQUE2RDs4QkFBN0Q7Z0NBQUE7QUFBQTtlQWxDWixBQUNJLEFBRUksQUErQkksQUFJYjs7Ozs7QUEzRXdDLEE7O2tCQUF0QixBIiwiZmlsZSI6ImNyZWF0ZVByb2R1Y3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvLmFsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==