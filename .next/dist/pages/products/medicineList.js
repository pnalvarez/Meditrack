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

var _routes = require('../../routes');

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _MedicineRow = require('../../components/MedicineRow/MedicineRow');

var _MedicineRow2 = _interopRequireDefault(_MedicineRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/medicineList.js?entry';


var medicineList = function (_Component) {
  (0, _inherits3.default)(medicineList, _Component);

  function medicineList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, medicineList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = medicineList.__proto__ || (0, _getPrototypeOf2.default)(medicineList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      medicines: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(medicineList, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'renderMedicines',
    value: function renderMedicines() {
      return this.props.medicines.map(function (medicine) {
        return _react2.default.createElement(_MedicineRow2.default, { key: medicine.key, id: medicine.id, name: medicine.name, description: medicine.description, value: medicine.value, weight: medicine.weight, validity: medicine.validity, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;
      var _props = this.props,
          medicines = _props.medicines,
          medicinesTotal = _props.medicinesTotal;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.props.id, _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(HeaderCell, { style: { border: "1px solid gray", backgroundColor: "darkcyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, { style: { border: "1px solid gray", backgroundColor: "gold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Name'), _react2.default.createElement(HeaderCell, { style: { border: "1px solid gray", backgroundColor: "darkcyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, { style: { border: "1px solid gray", backgroundColor: "gold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Weight'), _react2.default.createElement(HeaderCell, { style: { border: "1px solid gray", backgroundColor: "darkcyan" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Value'), _react2.default.createElement(HeaderCell, { style: { border: "1px solid gray", backgroundColor: "gold" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Validity'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.renderMedicines())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var medicinesTotal, medicines, i, id;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _supplychain2.default.methods.getMedicineNamesTotal().call();

              case 2:
                medicinesTotal = _context2.sent;
                medicines = [];
                // const medicineNames = await Promise.all(
                //   Array(parseInt(medicinesTotal)).fill().map((element, index)=>{
                //     return supplychain.methods.get
                //   })
                // )

                i = 0;

              case 5:
                if (!(i < medicinesTotal)) {
                  _context2.next = 32;
                  break;
                }

                _context2.next = 8;
                return _supplychain2.default.methods.medicineNames(i).call();

              case 8:
                id = _context2.sent;
                _context2.t0 = medicines;
                _context2.t1 = i;
                _context2.t2 = id;
                _context2.next = 14;
                return _supplychain2.default.methods.getMedicineName(id).call();

              case 14:
                _context2.t3 = _context2.sent;
                _context2.next = 17;
                return _supplychain2.default.methods.getMedicineDescription(id).call();

              case 17:
                _context2.t4 = _context2.sent;
                _context2.next = 20;
                return _supplychain2.default.methods.getMedicineWeight(id).call();

              case 20:
                _context2.t5 = _context2.sent;
                _context2.next = 23;
                return _supplychain2.default.methods.getMedicineValue(id).call();

              case 23:
                _context2.t6 = _context2.sent;
                _context2.next = 26;
                return _supplychain2.default.methods.getMedicineValidity(id).call();

              case 26:
                _context2.t7 = _context2.sent;
                _context2.t8 = {
                  key: _context2.t1,
                  id: _context2.t2,
                  name: _context2.t3,
                  description: _context2.t4,
                  weight: _context2.t5,
                  value: _context2.t6,
                  validity: _context2.t7
                };

                _context2.t0.push.call(_context2.t0, _context2.t8);

              case 29:
                i++;
                _context2.next = 5;
                break;

              case 32:
                return _context2.abrupt('return', { medicinesTotal: medicinesTotal, medicines: medicines });

              case 33:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return medicineList;
}(_react.Component);

exports.default = medicineList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL21lZGljaW5lTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsInN1cHBseWNoYWluIiwiTWVkaWNpbmVSb3ciLCJtZWRpY2luZUxpc3QiLCJzdGF0ZSIsIm1lZGljaW5lcyIsInByb3BzIiwibWFwIiwibWVkaWNpbmUiLCJrZXkiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwid2VpZ2h0IiwidmFsaWRpdHkiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1lZGljaW5lc1RvdGFsIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmVuZGVyTWVkaWNpbmVzIiwibWV0aG9kcyIsImdldE1lZGljaW5lTmFtZXNUb3RhbCIsImNhbGwiLCJpIiwibWVkaWNpbmVOYW1lcyIsImdldE1lZGljaW5lTmFtZSIsImdldE1lZGljaW5lRGVzY3JpcHRpb24iLCJnZXRNZWRpY2luZVdlaWdodCIsImdldE1lZGljaW5lVmFsdWUiLCJnZXRNZWRpY2luZVZhbGlkaXR5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFpQjs7Ozs7Ozs7O0ksQUFFSDs7Ozs7Ozs7Ozs7Ozs7d04sQUFFbkI7aUIsQUFBTSxBQUNTO0FBRFQsQUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBMkJhLEFBQ2I7a0JBQ0UsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFLLG9CQUFVLEFBQ2hDOytCQUNFLEFBQUMsdUNBQVksS0FBSyxTQUFsQixBQUEyQixLQUFLLElBQUksU0FBcEMsQUFBNkMsSUFBSSxNQUFNLFNBQXZELEFBQWdFLE1BQU0sYUFBYSxTQUFuRixBQUE0RixhQUFhLE9BQU8sU0FBaEgsQUFBeUgsT0FBTyxRQUFRLFNBQXhJLEFBQWlKLFFBQVEsVUFBVSxTQUFuSyxBQUE0SztzQkFBNUs7d0JBREYsQUFDRSxBQUVMO0FBRks7U0FBQTtBQUhSLEFBQ0UsQUFNTCxPQU5LOzs7OzZCQU9HO1VBQUEsQUFDQSxTQURBLEFBQ2lDLHVCQURqQyxBQUNBO1VBREEsQUFDUSxNQURSLEFBQ2lDLHVCQURqQyxBQUNRO1VBRFIsQUFDYSxhQURiLEFBQ2lDLHVCQURqQyxBQUNhO1VBRGIsQUFDeUIsT0FEekIsQUFDaUMsdUJBRGpDLEFBQ3lCO21CQUNJLEtBRjdCLEFBRWtDO1VBRmxDLEFBRUEsbUJBRkEsQUFFQTtVQUZBLEFBRVcsd0JBRlgsQUFFVyxBQUNsQjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSztBQURMO0FBQUEsT0FBQSxPQUNLLEFBQUssTUFEVixBQUNnQixBQUNaLG9CQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsY0FBWSxPQUFPLEVBQUMsUUFBRCxBQUFTLGtCQUFrQixpQkFBOUMsQUFBbUIsQUFBNEM7b0JBQS9EO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxRQUFELEFBQVMsa0JBQWtCLGlCQUE5QyxBQUFtQixBQUE0QztvQkFBL0Q7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLFFBQUQsQUFBUyxrQkFBa0IsaUJBQTlDLEFBQW1CLEFBQTRDO29CQUEvRDtzQkFBQTtBQUFBO1NBSEYsQUFHRSxBQUNBLGdDQUFDLGNBQUQsY0FBWSxPQUFPLEVBQUMsUUFBRCxBQUFTLGtCQUFrQixpQkFBOUMsQUFBbUIsQUFBNEM7b0JBQS9EO3NCQUFBO0FBQUE7U0FKRixBQUlFLEFBQ0EsMkJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxRQUFELEFBQVMsa0JBQWtCLGlCQUE5QyxBQUFtQixBQUE0QztvQkFBL0Q7c0JBQUE7QUFBQTtTQUxGLEFBS0UsQUFDQSwwQkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLFFBQUQsQUFBUyxrQkFBa0IsaUJBQTlDLEFBQW1CLEFBQTRDO29CQUEvRDtzQkFBQTtBQUFBO1NBUk4sQUFDRSxBQUNFLEFBTUUsQUFHSiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNLO0FBREw7QUFBQSxjQWRSLEFBQ0UsQUFFSSxBQVdFLEFBQ0ssQUFBSyxBQUtuQjs7Ozs7Ozs7Ozs7O3VCQXhEZ0Msc0JBQUEsQUFBWSxRQUFaLEFBQW9CLHdCQUFwQixBQUE0QyxBOzttQkFBbkU7QSwyQ0FDRjtBLDRCQUFZLEFBQ2hCLEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNROztBLG9CLEFBQUk7OztzQkFBRyxJQUFJLEE7Ozs7Ozt1QkFDRixzQkFBQSxBQUFZLFFBQVosQUFBb0IsY0FBcEIsQUFBa0MsRyxBQUFsQyxBQUFxQzs7bUJBQWhEO0E7K0JBQ0gsQTsrQkFDVSxBOytCQUNELEE7O3VCQUNRLHNCQUFBLEFBQVksUUFBWixBQUFvQixnQkFBcEIsQUFBb0MsSUFBcEMsQUFBd0MsQTs7Ozs7dUJBQ2pDLHNCQUFBLEFBQVksUUFBWixBQUFvQix1QkFBcEIsQUFBMkMsSUFBSSxBLEFBQS9DOzs7Ozt1QkFDTCxzQkFBQSxBQUFZLFFBQVosQUFBb0Isa0JBQXBCLEFBQXNDLElBQXRDLEEsQUFBMEM7Ozs7O3VCQUMzQyxzQkFBQSxBQUFZLFFBQVosQUFBb0IsaUJBQXBCLEFBQXFDLElBQXJDLEFBQXlDLEE7Ozs7O3VCQUN0QyxzQkFBQSxBQUFZLFFBQVosQUFBb0Isb0JBQXBCLEFBQXdDLElBQXhDLEFBQTRDLEE7Ozs7O0EsaUNBTDVEO0EsZ0NBQ0E7QSxrQ0FDQTtBLHlDQUNBO0Esb0NBQ0E7QSxtQ0FDQTtBO0FBTkE7OzZCLEFBREs7O21CQUZzQjtBOzs7OztrREFZNUIsRUFBQyxnQkFBRCxnQkFBaUIsVyxBQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCNkIsQTs7a0JBQXJCLEEiLCJmaWxlIjoibWVkaWNpbmVMaXN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyby5hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=