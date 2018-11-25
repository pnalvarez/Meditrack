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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/Blockcine/components/ProductRow.js';


var ProductRow = function (_Component) {
    (0, _inherits3.default)(ProductRow, _Component);

    function ProductRow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductRow.__proto__ || (0, _getPrototypeOf2.default)(ProductRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dateString: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                    lineNumber: 35
                }
            }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, uuid), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.checkValidity(isValid)), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, dateString), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'See Path', icon: 'angle double right', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwiUHJvZHVjdFJvdyIsInN0YXRlIiwiZGF0ZVN0cmluZyIsImluZGljYXRvciIsImRhdGUiLCJEYXRlIiwicHJvcHMiLCJjcmVhdGlvblRpbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzZXRTdGF0ZSIsIlJvdyIsIkNlbGwiLCJ1dWlkIiwiaWQiLCJuYW1lIiwiaXNWYWxpZCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9uIiwiY2hlY2tWYWxpZGl0eSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU87O0FBQ2YsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFbkI7d0IsQUFBTSxBQUNVO0FBRFYsQUFDRjs7Ozs7c0MsQUFTVSxXQUFVLEFBQ3BCO2dCQUFBLEFBQUcsV0FBVSxBQUNUO3VCQUFBLEFBQU8sQUFDVjtBQUZELG1CQUdJLEFBQ0E7dUJBQUEsQUFBTyxBQUNWO0FBQ0o7Ozs7NENBQ2tCLEFBQ2Y7Z0JBQU0sT0FBTyxJQUFBLEFBQUksS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWpDLEFBQWEsQUFBaUMsQUFDOUM7Z0JBQU0sYUFBYSxLQUFBLEFBQUssbUJBQXhCLEFBQW1CLEFBQXdCLEFBQzNDO2lCQUFBLEFBQUssU0FBUyxFQUFDLFlBQWYsQUFBYyxBQUNqQjs7OztpQ0FDUTtnQkFBQSxBQUNBLE1BREEsQUFDWSx1QkFEWixBQUNBO2dCQURBLEFBQ0ksT0FESixBQUNZLHVCQURaLEFBQ0k7eUJBQ3FDLEtBRnpDLEFBRThDO2dCQUY5QyxBQUVBLGNBRkEsQUFFQTtnQkFGQSxBQUVNLFlBRk4sQUFFTTtnQkFGTixBQUVVLGNBRlYsQUFFVTtnQkFGVixBQUVnQixpQkFGaEIsQUFFZ0I7Z0JBRmhCLEFBRXlCLHNCQUZ6QixBQUV5QjtnQkFGekIsQUFHQSxhQUFjLEtBSGQsQUFHbUIsTUFIbkIsQUFHQSxBQUNQOzttQ0FDRyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNLLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4Qzs4QkFBM0Q7Z0NBQUEsQUFBK0U7QUFBL0U7ZUFGSixBQUVJLEFBQ0EscUJBQUMsY0FBRCxRQUFNLE9BQU8sRUFBQyxhQUFELEFBQWMsa0JBQWtCLGNBQTdDLEFBQWEsQUFBOEM7OEJBQTNEO2dDQUFBLEFBQStFO0FBQS9FO2VBSEosQUFHSSxBQUNBLHVCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtvQkFBK0UsQUFBSyxjQUp4RixBQUlJLEFBQStFLEFBQW1CLEFBQ2xHLDJCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtlQUxKLEFBS0ksQUFDQSw2QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4Qzs4QkFBM0Q7Z0NBQUEsQUFDTTtBQUROOytCQUNNLEFBQUMseUNBQU8sU0FBUixBQUFnQixZQUFXLE1BQTNCLEFBQWdDLHNCQUFxQixTQUFyRDs4QkFBQTtnQ0FSWixBQUNFLEFBTUksQUFDTSxBQUliO0FBSmE7Ozs7OztBQXJDd0IsQTs7QSxBQUFuQixXQUtaLEE7VUFDRyxvQkFBQSxBQUFVLE9BREgsQUFDVSxBQUN2QjtRQUFJLG9CQUFBLEFBQVUsT0FGRCxBQUVRLEFBQ3JCO1VBQU0sb0JBQUEsQUFBVSxPQUhILEFBR1UsQUFDdkI7YUFBUyxvQkFBQSxBQUFVLEtBSk4sQUFJVyxBQUN4QjtrQkFBYyxvQkFBQSxBQUFVLE9BTFgsQUFLa0IsQTtBQUxsQixBQUNiO2tCQU5lLEEiLCJmaWxlIjoiUHJvZHVjdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm9hbHZhcmV6L0Rlc2t0b3AvQmxvY2tjaW5lIn0=