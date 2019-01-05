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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/components/MedicineRow/MedicineRow.js';


var MedicineRow = function (_Component) {
  (0, _inherits3.default)(MedicineRow, _Component);

  function MedicineRow() {
    (0, _classCallCheck3.default)(this, MedicineRow);

    return (0, _possibleConstructorReturn3.default)(this, (MedicineRow.__proto__ || (0, _getPrototypeOf2.default)(MedicineRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(MedicineRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          description = _props.description,
          value = _props.value,
          validity = _props.validity;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(Cell, { style: { borderRight: "1px solid black", borderBotton: "1px solid black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, id), _react2.default.createElement(Cell, { style: { borderRight: "1px solid black", borderBotton: "1px solid black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, name), _react2.default.createElement(Cell, { style: { borderRight: "1px solid black", borderBotton: "1px solid black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, description), _react2.default.createElement(Cell, { style: { borderRight: "1px solid black", borderBotton: "1px solid black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, value), _react2.default.createElement(Cell, { style: { borderRight: "1px solid black", borderBotton: "1px solid black" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, validity));
    }
  }]);

  return MedicineRow;
}(_react.Component);

exports.default = MedicineRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVkaWNpbmVSb3cvTWVkaWNpbmVSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIk1lZGljaW5lUm93IiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInZhbGlkaXR5IiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVE7Ozs7Ozs7SSxBQUVhOzs7Ozs7Ozs7Ozs2QkFDVjtVQUFBLEFBQ0EsTUFEQSxBQUNhLHVCQURiLEFBQ0E7VUFEQSxBQUNLLE9BREwsQUFDYSx1QkFEYixBQUNLO21CQUNxQyxLQUYxQyxBQUUrQztVQUYvQyxBQUVBLFlBRkEsQUFFQTtVQUZBLEFBRUksY0FGSixBQUVJO1VBRkosQUFFVSxxQkFGVixBQUVVO1VBRlYsQUFFdUIsZUFGdkIsQUFFdUI7VUFGdkIsQUFFOEIsa0JBRjlCLEFBRThCLEFBQ3JDOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLGtCQUNLLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLG1CQUFtQixjQUE5QyxBQUFhLEFBQStDO29CQUE1RDtzQkFBQSxBQUFpRjtBQUFqRjtTQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxtQkFBbUIsY0FBOUMsQUFBYSxBQUErQztvQkFBNUQ7c0JBQUEsQUFBaUY7QUFBakY7U0FGSixBQUVJLEFBQ0EsdUJBQUMsY0FBRCxRQUFNLE9BQU8sRUFBQyxhQUFELEFBQWMsbUJBQW1CLGNBQTlDLEFBQWEsQUFBK0M7b0JBQTVEO3NCQUFBLEFBQWlGO0FBQWpGO1NBSEosQUFHSSxBQUNBLDhCQUFDLGNBQUQsUUFBTSxPQUFPLEVBQUMsYUFBRCxBQUFjLG1CQUFtQixjQUE5QyxBQUFhLEFBQStDO29CQUE1RDtzQkFBQSxBQUFpRjtBQUFqRjtTQUpKLEFBSUksQUFDQSx3QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGFBQUQsQUFBYyxtQkFBbUIsY0FBOUMsQUFBYSxBQUErQztvQkFBNUQ7c0JBQUEsQUFBaUY7QUFBakY7U0FOTixBQUNFLEFBS0ksQUFHUDs7Ozs7QUFic0MsQTs7a0JBQXBCLEEiLCJmaWxlIjoiTWVkaWNpbmVSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9