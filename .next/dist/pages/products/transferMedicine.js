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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/pages/products/transferMedicine.js?entry';


var transferMedicine = function (_Component) {
  (0, _inherits3.default)(transferMedicine, _Component);

  function transferMedicine() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, transferMedicine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = transferMedicine.__proto__ || (0, _getPrototypeOf2.default)(transferMedicine)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      account: '0x0',
      uuid: '',
      toAddress: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var _this$state, uuid, toAddress, account;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.setState({ errorMessage: '', loading: true });
                _this$state = _this.state, uuid = _this$state.uuid, toAddress = _this$state.toAddress, account = _this$state.account;
                _context.prev = 3;
                _context.next = 6;
                return _supplychain2.default.methods.transfer(uuid, toAddress).send({ from: account });

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

  (0, _createClass3.default)(transferMedicine, [{
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
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Transfer Medicine'), _react2.default.createElement('form', { onSubmit: this.onSubmit, className: 'ui form', style: { marginTop: "100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Medicine Unique ID: '), _react2.default.createElement('div', { className: 'ui left icon input', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          return _this3.setState({ uuid: e.target.value });
        }, name: 'uuid', placeholder: 'Insert an Unique ID of a product that you have', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('i', { className: 'tags icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))), _react2.default.createElement('div', { className: 'field', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'To Address: '), _react2.default.createElement('div', { className: 'ui left icon input', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          _this3.setState({ toAddress: e.target.value });
        }, name: 'uuid', placeholder: 'Insert a compatible address to receive this product', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement('i', { className: 'users icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }))), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Oops, there was an error!'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.state.errorMessage)) : null, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', className: 'ui teal button', style: { marginTop: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Transfer to this address')));
    }
  }]);

  return transferMedicine;
}(_react.Component);

exports.default = transferMedicine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL3RyYW5zZmVyTWVkaWNpbmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwid2ViMyIsInN1cHBseWNoYWluIiwiUm91dGVyIiwidHJhbnNmZXJNZWRpY2luZSIsInN0YXRlIiwiYWNjb3VudCIsInV1aWQiLCJ0b0FkZHJlc3MiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJ0cmFuc2ZlciIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtYXJnaW5Ub3AiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFROztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Z09BRW5CLEE7ZUFBTSxBQUNLLEFBQ1Q7WUFGSSxBQUVFLEFBQ047aUJBSEksQUFHTyxBQUNYO29CQUpJLEFBSVUsQUFDZDtlQUxJLEFBS0ssQTtBQUxMLEFBQ0osYSxBQU1GOzJGQUFXLGlCQUFBLEFBQU0sR0FBTjswQ0FBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7a0JBQUEsQUFBRSxBQUVGOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFELEFBQWUsSUFBSSxTQUh4QixBQUdULEFBQWMsQUFBNEI7OEJBQ1AsTUFKMUIsQUFJK0IsT0FKL0IsQUFJRixtQkFKRSxBQUlGLE1BSkUsQUFJSSx3QkFKSixBQUlJLFdBSkosQUFJZSxzQkFKZixBQUllO2dDQUpmO2dDQUFBO3VCQU9ELHNCQUFBLEFBQVksUUFBWixBQUFvQixTQUFwQixBQUE2QixNQUE3QixBQUFrQyxXQUFsQyxBQUNMLEtBQUssRUFBQyxNQVJBLEFBT0QsQUFDQSxBQUFPOzttQkFDYjsrQkFBQSxBQUFPLFVBVEEsQUFTUCxBQUFpQjtnQ0FUVjtBQUFBOzttQkFBQTtnQ0FBQTtnREFXTDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQVh4QixBQVdMLEFBQWMsQUFBbUI7O21CQUVqQztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQWJWLEFBYUwsQUFBYyxBQUFVOzttQkFibkI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWdCZ0IsY0FBQSxBQUFLLEksQUFBTCxBQUFTOzttQkFBMUI7QSxxQ0FDTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxTQUF4QixBQUFjLEFBQVUsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUU1QjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBQ0Esc0NBQUEsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxXQUEvQixBQUF5QyxXQUFVLE9BQU8sRUFBQyxXQUEzRCxBQUEwRCxBQUFZO29CQUF0RTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxTQUFRLE9BQU8sRUFBQyxXQUEvQixBQUE4QixBQUFZO29CQUExQztzQkFBQSxBQUNRO0FBRFI7eUJBQ1EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRFIsQUFDUSxBQUNBLHlDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO2tEQUNTLE1BQVAsQUFBWSxRQUFPLFVBQVUscUJBQUE7aUJBQUcsT0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUEsQUFBRSxPQUExQixBQUFHLEFBQWMsQUFBZ0I7QUFBOUQsV0FBdUUsTUFBdkUsQUFBNEUsUUFBTyxhQUFuRixBQUErRjtvQkFBL0Y7c0JBREYsQUFDRSxBQUNBO0FBREE7K0NBQ0csV0FBSCxBQUFhO29CQUFiO3NCQUxaLEFBQ0UsQUFFUSxBQUVFLEFBR1Y7QUFIVTs0QkFHVixjQUFBLFNBQUssV0FBTCxBQUFlLFNBQVEsT0FBTyxFQUFDLFdBQS9CLEFBQThCLEFBQVc7b0JBQXpDO3NCQUFBLEFBQ1E7QUFEUjt5QkFDUSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEUixBQUNRLEFBQ0EsaUNBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7a0RBQ1MsTUFBUCxBQUFZLFFBQU8sVUFBVSxxQkFBRyxBQUFDO2lCQUFBLEFBQUssU0FBUyxFQUFDLFdBQVcsRUFBQSxBQUFFLE9BQTVCLEFBQWMsQUFBcUIsQUFBUTtBQUE1RSxXQUE4RSxNQUE5RSxBQUFtRixRQUFPLGFBQTFGLEFBQXNHO29CQUF0RztzQkFERixBQUNFLEFBQ0E7QUFEQTsrQ0FDRyxXQUFILEFBQWE7b0JBQWI7c0JBWlosQUFRRSxBQUVRLEFBRUUsQUFHVjtBQUhVOzs7b0JBR1Y7c0JBZkYsQUFlRSxBQUNDO0FBREQ7QUFBQSxlQUNDLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLHFCQUNyQixBQUFDLDBDQUFRLFVBQVQ7b0JBQUE7c0JBQUEsQUFDSTtBQURKO09BQUEsa0JBQ0ssY0FBRCx5QkFBQSxBQUFTOztvQkFBVDtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBQ0EsOENBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsY0FBSSxBQUFLLE1BSHBCLEFBQ08sQUFFSSxBQUFlLGlCQW5CN0IsQUFvQnVCLEFBQ3JCLHNCQUFBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxNQUFyQyxBQUEwQyxVQUFTLFdBQW5ELEFBQTZELGtCQUFpQixPQUFPLEVBQUMsV0FBdEYsQUFBcUYsQUFBWTtvQkFBakc7c0JBQUE7QUFBQTtTQXhCUixBQUNFLEFBRUksQUFxQkUsQUFJVDs7Ozs7QUF6RDJDLEE7O2tCQUF6QixBIiwiZmlsZSI6InRyYW5zZmVyTWVkaWNpbmUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9