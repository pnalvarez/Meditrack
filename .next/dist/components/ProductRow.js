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

var _semanticUiReact = require('semantic-ui-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pages = require('../pages');

var _pages2 = _interopRequireDefault(_pages);

var _supplychain = require('../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedronalvarez/Desktop/ProjetoFinal/components/ProductRow.js';


var ProductRow = function (_Component) {
    (0, _inherits3.default)(ProductRow, _Component);

    function ProductRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dateString: ''
        }, _this.throwProductAway = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return _supplychain2.default.methods.throwAway(_this.props.uuid).send({ from: accounts[0] });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductRow, [{
        key: 'checkValidity',
        value: function checkValidity(indicator) {
            if (indicator) {
                return "Valid";
            } else {
                return "Out of validity";
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var date = new Date(this.props.creationTime * 1000);
            var dateString = date.toLocaleDateString("pt-BR");
            this.setState({ dateString: dateString });
        }
    }, {
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                uuid = _props.uuid,
                id = _props.id,
                name = _props.name,
                isValid = _props.isValid,
                creationTime = _props.creationTime;
            var dateString = this.state.dateString;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, uuid), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, this.checkValidity(isValid)), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, dateString), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'See Path', icon: 'angle double right', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.throwProductAway, icon: 'trash', primary: true, style: { width: "90%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })));
        }
    }]);

    return ProductRow;
}(_react.Component);

ProductRow.propTypes = {
    uuid: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    isValid: _propTypes2.default.bool.isRequired,
    creationTime: _propTypes2.default.string.isRequired
};
exports.default = ProductRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwiU3VwcGx5Y2hhaW5JbmRleCIsInN1cHBseWNoYWluIiwid2ViMyIsIlByb2R1Y3RSb3ciLCJzdGF0ZSIsImRhdGVTdHJpbmciLCJ0aHJvd1Byb2R1Y3RBd2F5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ0aHJvd0F3YXkiLCJwcm9wcyIsInV1aWQiLCJzZW5kIiwiZnJvbSIsImluZGljYXRvciIsImRhdGUiLCJEYXRlIiwiY3JlYXRpb25UaW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2V0U3RhdGUiLCJSb3ciLCJDZWxsIiwiaWQiLCJuYW1lIiwiaXNWYWxpZCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9uIiwiY2hlY2tWYWxpZGl0eSIsIndpZHRoIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFPOztBQUNmLEFBQU87Ozs7QUFDUCxBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVJOzs7Ozs7Ozs7Ozs7Ozs7d05BRW5CLEE7d0IsQUFBTSxBQUNVO0FBRFYsQUFDRixpQixBQVNKO2lHQUFtQixpQkFBQSxBQUFNLEdBQU47b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ2Y7a0NBRGUsQUFDZixBQUFFOztnREFEYTt1Q0FHUSxjQUFBLEFBQUssSUFIYixBQUdRLEFBQVM7O2lDQUExQjtBQUhTLG9EQUFBO2dEQUFBO3VDQUtULHNCQUFBLEFBQVksUUFBWixBQUFvQixVQUFVLE1BQUEsQUFB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