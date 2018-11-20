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

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/sinisters/notifySinister.js?entry';


var notifySinister = function (_Component) {
  (0, _inherits3.default)(notifySinister, _Component);

  function notifySinister() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, notifySinister);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = notifySinister.__proto__ || (0, _getPrototypeOf2.default)(notifySinister)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      account: '0x0',
      title: '',
      description: '',
      uuid: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var _this$state, account, title, description, uuid;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });
                _this$state = _this.state, account = _this$state.account, title = _this$state.title, description = _this$state.description, uuid = _this$state.uuid;

                console.log(account);
                _context.prev = 4;
                _context.next = 7;
                return _supplychain2.default.methods.notifySinister(title, description, uuid).send({ from: account });

              case 7:
                _routes.Router.pushRoute('/');
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:
                _this.setState({ loading: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(notifySinister, [{
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
          lineNumber: 41
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Notify Sinister'), _react2.default.createElement('form', { onSubmit: this.onSubmit, className: 'ui form', style: { marginTop: "100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Title: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          _this3.setState({ title: e.target.value });
        }, name: 'title', placeholder: 'Insert a title for this sinister', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Description: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          _this3.setState({ description: e.target.value });
        }, name: 'description', placeholder: 'Insert a description', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Product: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          _this3.setState({ uuid: e.target.value });
        }, name: 'product', placeholder: 'Insert the product Unique ID', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Oops, there was an error!'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.state.errorMessage)) : null, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, content: 'Notify', type: 'submit', className: 'ui black button', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })));
    }
  }]);

  return notifySinister;
}(_react.Component);

exports.default = notifySinister;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NpbmlzdGVycy9ub3RpZnlTaW5pc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIndlYjMiLCJzdXBwbHljaGFpbiIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJSb3V0ZXIiLCJub3RpZnlTaW5pc3RlciIsInN0YXRlIiwiYWNjb3VudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1dWlkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtYXJnaW5Ub3AiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVBOzs7Ozs7Ozs7Ozs7Ozs7NE5BRW5CLEE7ZUFBTSxBQUNLLEFBQ1Q7YUFGSSxBQUVHLEFBQ1A7bUJBSEksQUFHUyxBQUNiO1lBSkksQUFJRSxBQUNOO29CQUxJLEFBS1UsQUFDZDtlLEFBTkksQUFNSztBQU5MLEFBQ0osYSxBQU9GOzJGQUFXLGlCQUFBLEFBQU0sR0FBTjtzREFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7a0JBQUEsQUFBRSxBQUVGOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUhyQixBQUdULEFBQWMsQUFBOEI7OEJBQ0EsTUFKbkMsQUFJd0MsT0FKeEMsQUFJRixzQkFKRSxBQUlGLFNBSkUsQUFJTyxvQkFKUCxBQUlPLE9BSlAsQUFJYywwQkFKZCxBQUljLGFBSmQsQUFJMkIsbUJBSjNCLEFBSTJCLEFBRXBDOzt3QkFBQSxBQUFRLElBTkMsQUFNVCxBQUFZO2dDQU5IO2dDQUFBO3VCQVNMLHNCQUFBLEFBQVksUUFBWixBQUFvQixlQUFwQixBQUFtQyxPQUFuQyxBQUF5QyxhQUF6QyxBQUFxRCxNQUFyRCxBQUNDLEtBQUssRUFBQyxNQVZGLEFBU0wsQUFDTSxBQUFPOzttQkFDYjsrQkFBQSxBQUFPLFVBWEYsQUFXTCxBQUFpQjtnQ0FYWjtBQUFBOzttQkFBQTtnQ0FBQTtnREFhUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWJ0QixBQWFQLEFBQWMsQUFBbUI7O21CQUVuQztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQWZOLEFBZVQsQUFBYyxBQUFVOzttQkFmZjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBa0JnQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBLHFDQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFTLFNBQXhCLEFBQWMsQUFBVSxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRTVCO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDRSxvQ0FBQSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQixVQUFVLFdBQS9CLEFBQXlDLFdBQVUsT0FBTyxFQUFDLFdBQTNELEFBQTBELEFBQVk7b0JBQXRFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLFNBQVEsT0FBTyxFQUFDLFdBQS9CLEFBQThCLEFBQVk7b0JBQTFDO3NCQUFBLEFBQ1E7QUFEUjt5QkFDUSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEUixBQUNRLEFBQ0EscURBQU8sTUFBUCxBQUFZLFFBQU8sVUFBVSxxQkFBRyxBQUFDO2lCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sRUFBQSxBQUFFLE9BQXhCLEFBQWMsQUFBaUIsQUFBUTtBQUF4RSxXQUEwRSxNQUExRSxBQUErRSxTQUFRLGFBQXZGLEFBQW1HO29CQUFuRztzQkFIVixBQUNFLEFBRVEsQUFFUjtBQUZROzJCQUVSLGNBQUEsU0FBSyxXQUFMLEFBQWUsU0FBUSxPQUFPLEVBQUMsV0FBL0IsQUFBOEIsQUFBVztvQkFBekM7c0JBQUEsQUFDUTtBQURSO3lCQUNRLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURSLEFBQ1EsQUFDQSwyREFBTyxNQUFQLEFBQVksUUFBTyxVQUFVLHFCQUFHLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsYUFBYSxFQUFBLEFBQUUsT0FBOUIsQUFBYyxBQUF1QixBQUFRO0FBQTlFLFdBQWdGLE1BQWhGLEFBQXFGLGVBQWMsYUFBbkcsQUFBK0c7b0JBQS9HO3NCQVBWLEFBS0UsQUFFUSxBQUVSO0FBRlE7MkJBRVIsY0FBQSxTQUFLLFdBQUwsQUFBZSxTQUFRLE9BQU8sRUFBQyxXQUEvQixBQUE4QixBQUFXO29CQUF6QztzQkFBQSxBQUNRO0FBRFI7eUJBQ1EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRFIsQUFDUSxBQUNBLHVEQUFPLE1BQVAsQUFBWSxRQUFPLFVBQVUscUJBQUcsQUFBQztpQkFBQSxBQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUEsQUFBRSxPQUF2QixBQUFjLEFBQWdCLEFBQVE7QUFBdkUsV0FBeUUsTUFBekUsQUFBOEUsV0FBVSxhQUF4RixBQUFvRztvQkFBcEc7c0JBWFYsQUFTRSxBQUVRLEFBRVI7QUFGUTs7O29CQUVSO3NCQWJGLEFBYUUsQUFDRztBQURIO0FBQUEsZUFDRyxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixxQkFDdkIsQUFBQywwQ0FBUSxVQUFUO29CQUFBO3NCQUFBLEFBQ0k7QUFESjtPQUFBLGtCQUNLLGNBQUQseUJBQUEsQUFBUzs7b0JBQVQ7c0JBQUE7QUFBQTtBQUFBLFNBREosQUFDSSxBQUNBLDhDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQUhsQixBQUNLLEFBRUksQUFBZSxpQkFqQjdCLEFBa0J1QixBQUNyQixzQkFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckMsQUFBNkMsVUFBUyxNQUF0RCxBQUEyRCxVQUFTLFdBQXBFLEFBQThFLG1CQUFrQixPQUFPLEVBQUMsV0FBeEcsQUFBdUcsQUFBWTtvQkFBbkg7c0JBdEJSLEFBQ0UsQUFFSSxBQW1CRSxBQUlUO0FBSlM7Ozs7OztBQXREZ0MsQTs7a0JBQXZCLEEiLCJmaWxlIjoibm90aWZ5U2luaXN0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvLmFsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==