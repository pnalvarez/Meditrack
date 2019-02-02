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

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedronalvarez/Desktop/ProjetoFinal/components/sinisterRow.js';


var sinisterRow = function (_Component) {
    (0, _inherits3.default)(sinisterRow, _Component);

    function sinisterRow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, sinisterRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = sinisterRow.__proto__ || (0, _getPrototypeOf2.default)(sinisterRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dateString: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(sinisterRow, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var date = new Date(this.props.timestamp * 1000);
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
                title = _props.title,
                description = _props.description;
            var dateString = this.state.dateString;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, uuid), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, title), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, description), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, dateString));
        }
    }]);

    return sinisterRow;
}(_react.Component);

sinisterRow.propTypes = {
    uuid: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    timestamp: _propTypes2.default.string.isRequired
};
exports.default = sinisterRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2luaXN0ZXJSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIlByb3BUeXBlcyIsIkxheW91dCIsInNpbmlzdGVyUm93Iiwic3RhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJwcm9wcyIsInRpbWVzdGFtcCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNldFN0YXRlIiwiUm93IiwiQ2VsbCIsInV1aWQiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b24iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU87O0FBQ2YsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRUUsQTs7Ozs7Ozs7Ozs7Ozs7ME5BRW5CLEE7d0JBQU0sQUFDVSxBO0FBRFYsQUFDRjs7Ozs7NENBVWUsQUFDZjtnQkFBTSxPQUFPLElBQUEsQUFBSSxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBakMsQUFBYSxBQUE4QixBQUMzQztnQkFBTSxhQUFhLEtBQUEsQUFBSyxtQkFBeEIsQUFBbUIsQUFBd0IsQUFDM0M7aUJBQUEsQUFBSyxTQUFTLEVBQUMsWUFBZixBQUFjLEFBQ2pCOzs7O2lDQUNRO2dCQUFBLEFBQ0UsTUFERixBQUNlLHVCQURmLEFBQ0U7Z0JBREYsQUFDTyxPQURQLEFBQ2UsdUJBRGYsQUFDTzt5QkFDNkIsS0FGcEMsQUFFeUM7Z0JBRnpDLEFBRUUsY0FGRixBQUVFO2dCQUZGLEFBRU8sWUFGUCxBQUVPO2dCQUZQLEFBRVUsY0FGVixBQUVVO2dCQUZWLEFBRWUsZUFGZixBQUVlO2dCQUZmLEFBRXFCLHFCQUZyQixBQUVxQjtnQkFGckIsQUFHRSxhQUFjLEtBSGhCLEFBR3FCLE1BSHJCLEFBR0UsQUFDVDs7bUNBQ0csY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4Qzs4QkFBM0Q7Z0NBQUEsQUFBK0U7QUFBL0U7ZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRCxRQUFNLE9BQU8sRUFBQyxhQUFELEFBQWMsa0JBQWtCLGNBQTdDLEFBQWEsQUFBOEM7OEJBQTNEO2dDQUFBLEFBQStFO0FBQS9FO2VBRkosQUFFSSxBQUNBLHFCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtlQUhKLEFBR0ksQUFDQSx1QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4Qzs4QkFBM0Q7Z0NBQUEsQUFBK0U7QUFBL0U7ZUFKSixBQUlJLEFBQ0Esd0JBQUMsY0FBRCxRQUFNLE9BQU8sRUFBQyxhQUFELEFBQWMsa0JBQWtCLGNBQTdDLEFBQWEsQUFBOEM7OEJBQTNEO2dDQUFBLEFBQStFO0FBQS9FO2VBTEosQUFLSSxBQUNBLDhCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDOzhCQUEzRDtnQ0FBQSxBQUErRTtBQUEvRTtlQVBOLEFBQ0UsQUFNSSxBQUdQOzs7OztBQWhDc0MsQTs7QSxBQUFwQixZLEFBS1o7VUFDRyxvQkFBQSxBQUFVLE9BREgsQUFDVSxBQUN2QjtRQUFJLG9CQUFBLEFBQVUsT0FGRCxBQUVRLEFBQ3JCO1VBQU0sb0JBQUEsQUFBVSxPQUhILEFBR1UsQUFDdkI7V0FBTyxvQkFBQSxBQUFVLE9BSkosQUFJVyxBQUN4QjtpQkFBYSxvQkFBQSxBQUFVLE9BTFYsQUFLaUIsQUFDOUI7ZUFBVyxvQkFBQSxBQUFVLE9BTlIsQUFNZSxBO0FBTmYsQUFDYjtrQkFOZSxBIiwiZmlsZSI6InNpbmlzdGVyUm93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyb25hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=