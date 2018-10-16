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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _supplychain = require('../ethereum/supplychain.js');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/index.js?entry';


var SupplychainIndex = function (_Component) {
    (0, _inherits3.default)(SupplychainIndex, _Component);

    function SupplychainIndex() {
        (0, _classCallCheck3.default)(this, SupplychainIndex);

        return (0, _possibleConstructorReturn3.default)(this, (SupplychainIndex.__proto__ || (0, _getPrototypeOf2.default)(SupplychainIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(SupplychainIndex, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, this.props.manager), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, this.props.func)), _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Button example', icon: 'add circle', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, this.props.accounts[0]), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, '2'))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var manager, func, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _supplychain2.default.methods.manager().call();

                            case 2:
                                manager = _context.sent;
                                _context.next = 5;
                                return _supplychain2.default.methods.getWalletFunction(manager).call();

                            case 5:
                                func = _context.sent;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;
                                return _context.abrupt('return', { manager: manager, func: func, accounts: accounts });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return SupplychainIndex;
}(_react.Component);

exports.default = SupplychainIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkNhcmQiLCJCdXR0b24iLCJNZW51Iiwic3VwcGx5Y2hhaW4iLCJMYXlvdXQiLCJTdXBwbHljaGFpbkluZGV4IiwicHJvcHMiLCJtYW5hZ2VyIiwiZnVuYyIsImFjY291bnRzIiwibWV0aG9kcyIsImNhbGwiLCJnZXRXYWxsZXRGdW5jdGlvbiIsImV0aCIsImdldEFjY291bnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBTSxBQUFROztBQUN0QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7aUNBVU0sQUFFSjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNEO0FBREM7QUFBQSwrQkFDRCxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BRFIsQUFDRCxBQUFlLEFBQ2YsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUhaLEFBQ0ksQUFFRCxBQUFlLEFBRWpCLHdCQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixTQUFRLFNBQXhCLEFBQWdDLGtCQUFpQixNQUFqRCxBQUFzRCxjQUFhLFNBQW5FOzhCQUFBO2dDQUxELEFBS0MsQUFDQztBQUREO2dDQUNDLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFBTCxBQUFXLFNBRHBCLEFBQ0ksQUFBSyxBQUFvQixBQUN6QixxQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFWZCxBQUNJLEFBTUUsQUFDSSxBQUVJLEFBT2pCOzs7Ozs7Ozs7Ozs7dUNBekJ5QixzQkFBQSxBQUFZLFFBQVosQUFBb0IsVUFBcEIsQUFBOEIsQTs7aUNBQTlDO0E7O3VDQUNhLHNCQUFBLEFBQVksUUFBWixBQUFvQixrQkFBcEIsQUFBc0MsU0FBdEMsQUFBK0MsQTs7aUNBQTVEO0E7O3VDQUNpQixjQUFBLEFBQUssSUFBSSxBLEFBQVQ7O2lDQUFqQjtBO2lFQUNDLEVBQUMsU0FBRCxTQUFVLE1BQVYsTUFBZ0IsVUFBaEIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBnQixBLEFBZ0MvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9