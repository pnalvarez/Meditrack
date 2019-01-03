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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = require('semantic-ui-react');

var _walletDisplay = require('../../components/walletDisplay');

var _walletDisplay2 = _interopRequireDefault(_walletDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedroalvarez/Desktop/ProjetoFinal/pages/wallets/walletsView.js?entry';


var walletsView = function (_Component) {
  (0, _inherits3.default)(walletsView, _Component);

  function walletsView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, walletsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = walletsView.__proto__ || (0, _getPrototypeOf2.default)(walletsView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      account: '0x0',
      walletAdress: '0x0',
      loading: false,
      creationTime: '',
      f: '',
      medicinesTotal: '0',
      medicines: [],
      medicinesQtds: []
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var walletAdress, creationTime, date, creationTimeFormatted, f;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                walletAdress = _this.state.walletAdress;
                _context.next = 4;
                return _supplychain2.default.methods.getWalletCreationTime(walletAdress).call();

              case 4:
                creationTime = _context.sent;
                date = new Date(creationTime * 1000);
                creationTimeFormatted = date.toLocaleDateString("pt-BR");
                _context.next = 9;
                return _supplychain2.default.methods.getWalletFunction(walletAdress).call();

              case 9:
                f = _context.sent;

                _this.setState({ creationTimeFormatted: creationTimeFormatted, f: f });
                console.log("pressionou");

              case 12:
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

  (0, _createClass3.default)(walletsView, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts, medicinesTotal, medicines, medicinesQtds, i, medicineName, medicineQtd;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                _context2.next = 5;
                return _supplychain2.default.methods.getMedicineNamesTotal().call();

              case 5:
                medicinesTotal = _context2.sent;
                medicines = [];
                medicinesQtds = [];
                i = 0;

              case 9:
                if (!(i < medicinesTotal)) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 12;
                return _supplychain2.default.methods.medicineNames(i).call();

              case 12:
                medicineName = _context2.sent;

                medicines.push(medicineName);
                _context2.next = 16;
                return _supplychain2.default.methods.getWalletMedicineQtd(accounts[0], medicineName).call();

              case 16:
                medicineQtd = _context2.sent;

                medicinesQtds.push(medicineQtd);

              case 18:
                i++;
                _context2.next = 9;
                break;

              case 21:
                this.setState({ account: accounts[0], medicinesTotal: medicinesTotal, medicines: medicines, medicinesQtds: medicinesQtds });

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h2', { style: { color: "darkblue" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Search Wallet for Manager(', this.state.account, ')'), _react2.default.createElement('form', { onSubmit: this.onSubmit, className: 'ui form', style: { marginTop: "60px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('div', { className: 'field', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Insert a Wallet Address here: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
          _this3.setState({ walletAdress: e.target.value });
        }, name: 'wallet', placeholder: 'Wallet', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', className: 'ui primary button', style: { marginTop: "20px", marginLeft: "400px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Search'))), _react2.default.createElement(_walletDisplay2.default, { style: this.walletDisplayStyle,
        address: this.state.walletAdress,
        creationTime: this.state.creationTimeFormatted,
        f: this.state.f,
        medicinesTotal: this.state.medicinesTotal,
        medicines: this.state.medicines,
        medicinesQtds: this.state.medicinesQtds,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }));
    }
  }]);

  return walletsView;
}(_react.Component);

exports.default = walletsView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dhbGxldHMvd2FsbGV0c1ZpZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJ3ZWIzIiwic3VwcGx5Y2hhaW4iLCJCdXR0b24iLCJXYWxsZXREaXNwbGF5Iiwid2FsbGV0c1ZpZXciLCJzdGF0ZSIsImFjY291bnQiLCJ3YWxsZXRBZHJlc3MiLCJsb2FkaW5nIiwiY3JlYXRpb25UaW1lIiwiZiIsIm1lZGljaW5lc1RvdGFsIiwibWVkaWNpbmVzIiwibWVkaWNpbmVzUXRkcyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kcyIsImdldFdhbGxldENyZWF0aW9uVGltZSIsImNhbGwiLCJkYXRlIiwiRGF0ZSIsImNyZWF0aW9uVGltZUZvcm1hdHRlZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdldFdhbGxldEZ1bmN0aW9uIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldE1lZGljaW5lTmFtZXNUb3RhbCIsImkiLCJtZWRpY2luZU5hbWVzIiwibWVkaWNpbmVOYW1lIiwicHVzaCIsImdldFdhbGxldE1lZGljaW5lUXRkIiwibWVkaWNpbmVRdGQiLCJjb2xvciIsIm1hcmdpblRvcCIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsIndhbGxldERpc3BsYXlTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUTs7QUFDUixBQUFPLEFBQW1COzs7Ozs7Ozs7SSxBQUVMOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFFbkI7ZUFBTSxBQUNPLEFBQ1Q7b0JBRkUsQUFFWSxBQUNkO2VBSEUsQUFHTyxBQUNUO29CQUpFLEFBSVksQUFDZDtTQUxFLEFBS0MsQUFDSDtzQkFORSxBQU1jLEFBQ2hCO2lCQVBFLEFBT1MsQUFDWDtxQkFSRSxBQVFhLEE7QUFSYixBQUNGLGFBU0osQTsyRkFBVyxpQkFBQSxBQUFNLEdBQU47cUVBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7a0JBQUEsQUFBRSxBQUVJOztBQUhHLCtCQUdZLE1BQUEsQUFBSyxNQUhqQixBQUd1QjtnQ0FIdkI7dUJBSWtCLHNCQUFBLEFBQVksUUFBWixBQUFvQixzQkFBcEIsQUFBMEMsY0FKNUQsQUFJa0IsQUFBd0Q7O21CQUE3RTtBQUpHLHdDQUtIO0FBTEcsdUJBS0ksSUFBQSxBQUFJLEtBQUssZUFMYixBQUtJLEFBQXNCLEFBQzdCO0FBTkcsd0NBTXFCLEtBQUEsQUFBSyxtQkFOMUIsQUFNcUIsQUFBd0I7Z0NBTjdDO3VCQU9PLHNCQUFBLEFBQVksUUFBWixBQUFvQixrQkFBcEIsQUFBc0MsY0FQN0MsQUFPTyxBQUFvRDs7bUJBQTlEO0FBUEcsNkJBUVQ7O3NCQUFBLEFBQUssU0FBUyxFQUFDLHVCQUFELHVCQUF3QixHQUF0QyxBQUFjLEFBQ2Q7d0JBQUEsQUFBUSxJQVRDLEFBU1QsQUFBWTs7bUJBVEg7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVlnQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUExQjtBOzt1QkFDdUIsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLHdCQUFwQixBQUE0QyxBOzttQkFBbkU7QSwyQ0FDRjtBLDRCLEFBQVUsQUFDVjtBLGdDLEFBQWMsQUFFVjtBLG9CLEFBQUU7OztzQkFBRSxJQUFFLEE7Ozs7Ozt1QkFDZSxzQkFBQSxBQUFZLFFBQVosQUFBb0IsY0FBcEIsQUFBa0MsR0FBbEMsQUFBcUMsQTs7bUJBQTFEO0EseUNBQ047OzBCQUFBLEFBQVUsS0FBVixBQUFlOzt1QkFDVyxzQkFBQSxBQUFZLFFBQVosQUFBb0IscUJBQXFCLFNBQXpDLEFBQXlDLEFBQVMsSUFBbEQsQUFBc0QsYyxBQUF0RCxBQUFvRTs7bUJBQXhGO0Esd0NBQ047OzhCQUFBLEFBQWMsS0FBZCxBQUFtQjs7bUJBSlE7QTs7OzttQkFNN0I7cUJBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxTQUFWLEFBQVUsQUFBUyxJQUFJLGdCQUF2QixBQUF1QyxnQkFBZ0IsV0FBdkQsQUFBa0UsV0FBVyxlQUEzRixBQUFjLEFBQTRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRXJHO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLGtCQUNJLGNBQUEsUUFBSSxPQUFPLEVBQUMsT0FBWixBQUFXLEFBQVE7b0JBQW5CO3NCQUFBO0FBQUE7U0FBMkQsbUNBQUEsQUFBSyxNQUFoRSxBQUFzRSxTQUQxRSxBQUNJLEFBQ0Esc0JBQUEsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxXQUEvQixBQUF5QyxXQUFVLE9BQU8sRUFBQyxXQUEzRCxBQUEwRCxBQUFZO29CQUF0RTtzQkFBQSxBQUNNO0FBRE47eUJBQ00sY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREosQUFDSSxBQUNBLDRFQUFPLE1BQVAsQUFBWSxRQUFPLFVBQVUsa0JBQUEsQUFBQyxHQUFJLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxFQUFBLEFBQUUsT0FBL0IsQUFBYyxBQUF3QixBQUFRO0FBQWpGLFdBQW1GLE1BQW5GLEFBQXdGLFVBQVMsYUFBakcsQUFBNkc7b0JBQTdHO3NCQUZKLEFBRUksQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxNQUFyQyxBQUEwQyxVQUFTLFdBQW5ELEFBQTZELHFCQUFvQixPQUFPLEVBQUMsV0FBRCxBQUFZLFFBQVEsWUFBNUcsQUFBd0YsQUFBZ0M7b0JBQXhIO3NCQUFBO0FBQUE7U0FOZCxBQUVJLEFBQ00sQUFHSSxBQUdWLDZCQUFBLEFBQUMseUNBQWMsT0FBTyxLQUF0QixBQUEyQixBQUNaO2lCQUFTLEtBQUEsQUFBSyxNQUQ3QixBQUNtQyxBQUNwQjtzQkFBYyxLQUFBLEFBQUssTUFGbEMsQUFFd0MsQUFDekI7V0FBRyxLQUFBLEFBQUssTUFIdkIsQUFHNkIsQUFDZDt3QkFBZ0IsS0FBQSxBQUFLLE1BSnBDLEFBSTBDLEFBQzNCO21CQUFXLEtBQUEsQUFBSyxNQUwvQixBQUtxQyxBQUN0Qjt1QkFBZSxLQUFBLEFBQUssTUFObkMsQUFNeUM7O29CQU56QztzQkFWTixBQUNFLEFBU0ksQUFVUDtBQVZPOzs7Ozs7QUFoRCtCLEE7O2tCQUFwQixBIiwiZmlsZSI6IndhbGxldHNWaWV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyb2FsdmFyZXovRGVza3RvcC9Qcm9qZXRvRmluYWwifQ==