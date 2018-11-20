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

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/components/receiveRow.js';


var receiveRow = function (_Component) {
  (0, _inherits3.default)(receiveRow, _Component);

  function receiveRow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, receiveRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = receiveRow.__proto__ || (0, _getPrototypeOf2.default)(receiveRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dateString: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(receiveRow, [{
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
          timestamp = _props.timestamp,
          from = _props.from;
      var dateString = this.state.dateString;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, uuid), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, dateString), _react2.default.createElement(Cell, { style: { borderRight: "1px solid gray", borderBotton: "1px solid gray" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, from));
    }
  }]);

  return receiveRow;
}(_react.Component);

receiveRow.propTypes = {
  uuid: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  timestamp: _propTypes2.default.string.isRequired,
  from: _propTypes2.default.string.isRequired
};
exports.default = receiveRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVjZWl2ZVJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwicmVjZWl2ZVJvdyIsInN0YXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwicHJvcHMiLCJ0aW1lc3RhbXAiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzZXRTdGF0ZSIsIlJvdyIsIkNlbGwiLCJ1dWlkIiwiaWQiLCJuYW1lIiwiZnJvbSIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9uIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFPOztBQUNmLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7Ozs7O29OLEFBRW5CO2tCQUFNLEFBQ1UsQTtBQURWLEFBQ0Y7Ozs7O3dDQVNlLEFBQ2pCO1VBQU0sT0FBTyxJQUFBLEFBQUksS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLFlBQWpDLEFBQWEsQUFBOEIsQUFDM0M7VUFBTSxhQUFhLEtBQUEsQUFBSyxtQkFBeEIsQUFBbUIsQUFBd0IsQUFDM0M7V0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFmLEFBQWMsQUFDakI7Ozs7NkJBQ1U7VUFBQSxBQUNBLE1BREEsQUFDYSx1QkFEYixBQUNBO1VBREEsQUFDSyxPQURMLEFBQ2EsdUJBRGIsQUFDSzttQkFDMEIsS0FGL0IsQUFFb0M7VUFGcEMsQUFFQSxjQUZBLEFBRUE7VUFGQSxBQUVLLFlBRkwsQUFFSztVQUZMLEFBRVEsY0FGUixBQUVRO1VBRlIsQUFFYSxtQkFGYixBQUVhO1VBRmIsQUFFdUIsY0FGdkIsQUFFdUI7VUFGdkIsQUFHQSxhQUFjLEtBSGQsQUFHbUIsTUFIbkIsQUFHQSxBQUNQOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLGtCQUNLLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDO29CQUEzRDtzQkFBQSxBQUErRTtBQUEvRTtTQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4QztvQkFBM0Q7c0JBQUEsQUFBK0U7QUFBL0U7U0FGSixBQUVJLEFBQ0EscUJBQUMsY0FBRCxRQUFNLE9BQU8sRUFBQyxhQUFELEFBQWMsa0JBQWtCLGNBQTdDLEFBQWEsQUFBOEM7b0JBQTNEO3NCQUFBLEFBQStFO0FBQS9FO1NBSEosQUFHSSxBQUNBLHVCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLGtCQUFrQixjQUE3QyxBQUFhLEFBQThDO29CQUEzRDtzQkFBQSxBQUErRTtBQUEvRTtTQUpKLEFBSUksQUFDQSw2QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxrQkFBa0IsY0FBN0MsQUFBYSxBQUE4QztvQkFBM0Q7c0JBQUEsQUFBK0U7QUFBL0U7U0FOTixBQUNFLEFBS0ksQUFHUDs7Ozs7QUE5QnFDLEE7O0EsQUFBbkIsVyxBQUtaO1FBQ0csb0JBQUEsQUFBVSxPQURILEFBQ1UsQUFDdkI7TUFBTSxvQkFBQSxBQUFVLE9BRkgsQUFFVSxBQUN2QjtRQUFNLG9CQUFBLEFBQVUsT0FISCxBQUdVLEFBQ3ZCO2FBQVcsb0JBQUEsQUFBVSxPQUpSLEFBSWUsQUFDNUI7UUFBTSxvQkFBQSxBQUFVLE9BTEgsQUFLVSxBO0FBTFYsQUFDYjtrQkFOZSxBIiwiZmlsZSI6InJlY2VpdmVSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvLmFsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==