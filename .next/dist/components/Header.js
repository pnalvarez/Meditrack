'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/Blockcine/components/Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',

        // static async getInitialProps(){

        //     const accounts = await web3.eth.getAccounts();
        //     const manager = await supplychain.methods.manager().call();
        //     return {accounts, manager};
        // }

        value: function render() {

            return _react2.default.createElement(_semanticUiReact.Menu, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'Blockcine')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'Products')), _react2.default.createElement(_routes.Link, { route: '/createWallet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, '+Wallet'))));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIndlYjMiLCJMaW5rIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVE7O0FBQ1IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7YUFFRjs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7OztpQ0FFUSxBQUVKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0U7QUFERjsrQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFGTixBQUNJLEFBQ0UsQUFFRiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQUZSLEFBQ0ksQUFDSSxBQUVKLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFWaEIsQUFDSSxBQUlJLEFBSUksQUFDSSxBQUtuQjs7Ozs7QUExQmdCLEEsQUE2QnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm9hbHZhcmV6L0Rlc2t0b3AvQmxvY2tjaW5lIn0=