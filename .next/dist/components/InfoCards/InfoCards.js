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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/components/InfoCards/InfoCards.js';


var InfoCards = function (_Component) {
    (0, _inherits3.default)(InfoCards, _Component);

    function InfoCards() {
        (0, _classCallCheck3.default)(this, InfoCards);

        return (0, _possibleConstructorReturn3.default)(this, (InfoCards.__proto__ || (0, _getPrototypeOf2.default)(InfoCards)).apply(this, arguments));
    }

    (0, _createClass3.default)(InfoCards, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'ui cards', style: { marginTop: "5%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, 'Endere\xE7o'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('p', { style: { fontSize: "10px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, this.props.address)))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, 'Capacity'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, this.props.capacity))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Peso Atual'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, this.props.currentWeight))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Seu saldo'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _web2.default.utils.fromWei(this.props.balance, 'ether'), ' ether'))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Sua Funcao'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, this.props.funcao))));
        }
    }]);

    return InfoCards;
}(_react.Component);

exports.default = InfoCards;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mb0NhcmRzL0luZm9DYXJkcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJJbmZvQ2FyZHMiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsInByb3BzIiwiYWRkcmVzcyIsImNhcGFjaXR5IiwiY3VycmVudFdlaWdodCIsInV0aWxzIiwiZnJvbVdlaSIsImJhbGFuY2UiLCJmdW5jYW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFSTs7Ozs7Ozs7Ozs7aUNBQ1YsQUFDUDttQ0FDRSxjQUFBLFNBQUssV0FBTCxBQUFlLFlBQVcsT0FBTyxFQUFDLFdBQWxDLEFBQWlDLEFBQVk7OEJBQTdDO2dDQUFBLEFBQ0U7QUFERjthQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFHQSxnQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0c7QUFESDsrQkFDRyxjQUFBLE9BQUcsT0FBUyxFQUFDLFVBQWIsQUFBWSxBQUFXOzhCQUF2QjtnQ0FBQSxBQUNFO0FBREY7b0JBQ0UsQUFBSyxNQVJwQixBQUNFLEFBQ0ksQUFJSSxBQUNHLEFBQ2EsQUFLeEIsNkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUdBLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSztBQURMO29CQUNLLEFBQUssTUFuQnBCLEFBYUUsQUFDSSxBQUlJLEFBQ2dCLEFBSXhCLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFHQSwrQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0s7QUFETDtvQkFDSyxBQUFLLE1BN0JwQixBQXVCRSxBQUNJLEFBSUksQUFDZ0IsQUFJeEIsa0NBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUdBLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSztBQURMOzZCQUNLLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLFNBRG5DLEFBQ0ssQUFBdUMsVUF2Q3RELEFBaUNFLEFBQ0ksQUFJSSxBQUtSLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFHQSwrQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0s7QUFETDtvQkFDSyxBQUFLLE1BbER0QixBQUNFLEFBMkNFLEFBQ0ksQUFJSSxBQUNnQixBQU03Qjs7Ozs7QUExRG9DLEE7O2tCQUFsQixBIiwiZmlsZSI6IkluZm9DYXJkcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9