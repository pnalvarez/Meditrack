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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/components/InfoCards/InfoCards.js';


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
                    lineNumber: 16
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Ethereum Address'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('p', { style: { fontSize: "11px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, this.props.address)))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Your Balance'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _web2.default.utils.fromWei(this.props.balance, 'ether'), ' ether'))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Your Function on the Supply Chain'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, this.props.funcao))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Number of Sinisters'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, this.props.sinisters))), _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Wallet Created at:'), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.props.creationTime))));
        }
    }]);

    return InfoCards;
}(_react.Component);

InfoCards.propTypes = {
    address: _propTypes2.default.string.isRequired,
    balance: _propTypes2.default.string.isRequired,
    funcao: _propTypes2.default.string.isRequired,
    sinisters: _propTypes2.default.string.isRequired,
    creationTime: _propTypes2.default.string.isRequired
};
exports.default = InfoCards;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mb0NhcmRzL0luZm9DYXJkcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJQcm9wVHlwZXMiLCJJbmZvQ2FyZHMiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsInByb3BzIiwiYWRkcmVzcyIsInV0aWxzIiwiZnJvbVdlaSIsImJhbGFuY2UiLCJmdW5jYW8iLCJzaW5pc3RlcnMiLCJjcmVhdGlvblRpbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7aUNBU1YsQUFDUDttQ0FDRSxjQUFBLFNBQUssV0FBTCxBQUFlLFlBQVcsT0FBTyxFQUFDLFdBQWxDLEFBQWlDLEFBQVk7OEJBQTdDO2dDQUFBLEFBQ0U7QUFERjthQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFHQSxxQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0c7QUFESDsrQkFDRyxjQUFBLE9BQUcsT0FBUyxFQUFDLFVBQWIsQUFBWSxBQUFXOzhCQUF2QjtnQ0FBQSxBQUNFO0FBREY7b0JBQ0UsQUFBSyxNQVJwQixBQUNFLEFBQ0ksQUFJSSxBQUNHLEFBQ2EsQUFLeEIsNkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUdBLGlDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSztBQURMOzZCQUNLLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLFNBRG5DLEFBQ0ssQUFBdUMsVUFuQnRELEFBYUUsQUFDSSxBQUlJLEFBS1IsNkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUdBLHNEQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSztBQURMO29CQUNLLEFBQUssTUE3QnBCLEFBdUJFLEFBQ0ksQUFJSSxBQUNnQixBQUl4QiwyQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBR0Esd0NBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNLO0FBREw7b0JBQ0ssQUFBSyxNQXZDcEIsQUFpQ0UsQUFDSSxBQUlJLEFBQ2dCLEFBSXhCLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFHQSx1Q0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0s7QUFETDtvQkFDSyxBQUFLLE1BbER0QixBQUNFLEFBMkNFLEFBQ0ksQUFJSSxBQUNnQixBQU03Qjs7Ozs7QSxBQWxFb0M7O0EsQUFBbEIsVUFFWixBO2FBQ00sb0JBQUEsQUFBVSxPQUROLEFBQ2EsQUFDMUI7YUFBUyxvQkFBQSxBQUFVLE9BRk4sQUFFYSxBQUMxQjtZQUFRLG9CQUFBLEFBQVUsT0FITCxBQUdZLEFBQ3pCO2VBQVcsb0JBQUEsQUFBVSxPQUpSLEFBSWUsQUFDNUI7a0JBQWMsb0JBQUEsQUFBVSxPQUxYLEFBS2tCLEE7QUFMbEIsQUFDYjtrQkFIZSxBIiwiZmlsZSI6IkluZm9DYXJkcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm9hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=