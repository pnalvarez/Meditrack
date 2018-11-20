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

var _sinisterRow = require('../../components/sinisterRow');

var _sinisterRow2 = _interopRequireDefault(_sinisterRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/sinisters/viewSinisters.js?entry';


var viewSinisters = function (_Component) {
    (0, _inherits3.default)(viewSinisters, _Component);

    function viewSinisters() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, viewSinisters);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = viewSinisters.__proto__ || (0, _getPrototypeOf2.default)(viewSinisters)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            sinisters: [],
            sinistersQtd: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(viewSinisters, [{
        key: 'renderSinisters',
        value: function renderSinisters() {
            return this.state.sinisters.map(function (sinister) {
                return _react2.default.createElement(_sinisterRow2.default, { key: sinister.key,
                    uuid: sinister.uuid,
                    id: sinister.id,
                    name: sinister.name,
                    title: sinister.title,
                    description: sinister.description,
                    timestamp: sinister.timestamp,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts, account, sinistersQtd, sinisters, i, uuid, id, name;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;
                                account = accounts[0];
                                _context.next = 6;
                                return _supplychain2.default.methods.getSinistersQtd(account).call();

                            case 6:
                                sinistersQtd = _context.sent;
                                sinisters = [];

                                this.setState({ account: account, sinistersQtd: sinistersQtd });

                                i = 0;

                            case 10:
                                if (!(i < sinistersQtd)) {
                                    _context.next = 39;
                                    break;
                                }

                                _context.next = 13;
                                return _supplychain2.default.methods.getSinisterEnvolvedProduct(i, account).call();

                            case 13:
                                uuid = _context.sent;
                                _context.next = 16;
                                return _supplychain2.default.methods.getProductId(uuid).call();

                            case 16:
                                id = _context.sent;
                                _context.next = 19;
                                return _supplychain2.default.methods.getMedicineName(id).call();

                            case 19:
                                name = _context.sent;
                                _context.t0 = sinisters;
                                _context.t1 = i;
                                _context.t2 = uuid;
                                _context.t3 = id;
                                _context.t4 = name;
                                _context.next = 27;
                                return _supplychain2.default.methods.getSinisterTitle(i, account).call();

                            case 27:
                                _context.t5 = _context.sent;
                                _context.next = 30;
                                return _supplychain2.default.methods.getSinisterDescription(i, account).call();

                            case 30:
                                _context.t6 = _context.sent;
                                _context.next = 33;
                                return _supplychain2.default.methods.getSinisterTimestamp(i, account).call();

                            case 33:
                                _context.t7 = _context.sent;
                                _context.t8 = {
                                    key: _context.t1,
                                    uuid: _context.t2,
                                    id: _context.t3,
                                    name: _context.t4,
                                    title: _context.t5,
                                    description: _context.t6,
                                    timestamp: _context.t7
                                };

                                _context.t0.push.call(_context.t0, _context.t8);

                            case 36:
                                i++;
                                _context.next = 10;
                                break;

                            case 39:
                                this.setState({ sinisters: sinisters });

                            case 40:
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
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;
            var sinistersQtd = this.state.sinistersQtd;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, sinistersQtd, _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'UUID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Name'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Title'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#4C5D5D" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Timestamp'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, this.renderSinisters())));
        }
    }]);

    return viewSinisters;
}(_react.Component);

exports.default = viewSinisters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NpbmlzdGVycy92aWV3U2luaXN0ZXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwid2ViMyIsInN1cHBseWNoYWluIiwiVGFibGUiLCJTaW5pc3RlclJvdyIsInZpZXdTaW5pc3RlcnMiLCJzdGF0ZSIsImFjY291bnQiLCJzaW5pc3RlcnMiLCJzaW5pc3RlcnNRdGQiLCJtYXAiLCJzaW5pc3RlciIsImtleSIsInV1aWQiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGltZXN0YW1wIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRTaW5pc3RlcnNRdGQiLCJjYWxsIiwic2V0U3RhdGUiLCJpIiwiZ2V0U2luaXN0ZXJFbnZvbHZlZFByb2R1Y3QiLCJnZXRQcm9kdWN0SWQiLCJnZXRNZWRpY2luZU5hbWUiLCJnZXRTaW5pc3RlclRpdGxlIiwiZ2V0U2luaXN0ZXJEZXNjcmlwdGlvbiIsImdldFNpbmlzdGVyVGltZXN0YW1wIiwicHVzaCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiYmFja2dyb3VuZENvbG9yIiwicmVuZGVyU2luaXN0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFROztBQUNSLEFBQU8sQUFBaUI7Ozs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7OzhOLEFBRW5CO3FCQUFNLEFBQ08sQUFDVDt1QkFGRSxBQUVTLEFBQ1g7MEJBQWMsQSxBQUhaO0FBQUEsQUFDRjs7Ozs7MENBSWEsQUFDYjt3QkFDQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUssb0JBQVUsQUFDaEM7dUNBQ0ksQUFBQyx1Q0FBWSxLQUFLLFNBQWxCLEFBQTJCLEFBQ2Q7MEJBQU0sU0FEbkIsQUFDNEIsQUFDZjt3QkFBSSxTQUZqQixBQUUwQixBQUNiOzBCQUFNLFNBSG5CLEFBRzRCLEFBQ2Y7MkJBQU8sU0FKcEIsQUFJNkIsQUFDaEI7aUNBQWEsU0FMMUIsQUFLbUMsQUFDdEI7K0JBQVcsU0FOeEIsQUFNaUM7O2tDQU5qQztvQ0FESixBQUNJLEFBU1A7QUFUTztpQkFBQTtBQUhSLEFBQ0EsQUFZSCxhQVpHOzs7Ozs7Ozs7Ozs7dUNBY3dCLGNBQUEsQUFBSyxJQUFJLEEsQUFBVDs7aUNBQWpCO0Esb0RBQ0E7QSwwQ0FBVSxTLEFBQUEsQUFBUzs7dUNBQ0Usc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGdCQUFwQixBQUFvQyxTQUFwQyxBQUE2QyxBOztpQ0FBbEU7QSx3REFDRjtBLDRDQUFVLEFBRWQsQTs7cUNBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxTQUFVLGNBQXhCLEFBQWMsQUFFTjs7QSxvQ0FBRSxBOzs7c0NBQUUsSUFBRSxBOzs7Ozs7dUNBQ1Msc0JBQUEsQUFBWSxRQUFaLEFBQW9CLDJCQUFwQixBQUErQyxHQUEvQyxBQUFrRCxTQUFsRCxBQUEyRCxBOztpQ0FBeEU7QTs7dUNBQ1csc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGFBQXBCLEFBQWlDLE1BQWpDLEEsQUFBdUM7O2lDQUFsRDtBOzt1Q0FDYSxzQkFBQSxBQUFZLFFBQVosQUFBb0IsZ0JBQXBCLEFBQW9DLElBQXBDLEFBQXdDLEE7O2lDQUFyRDtBOzhDQUVOLEE7OEMsQUFDUzs4Q0FDQyxBOzhDLEFBQ0Y7OENBQ0UsQTs7dUNBQ08sc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGlCQUFwQixBQUFxQyxHQUFyQyxBQUF1QyxTLEFBQXZDLEFBQWdEOzs7Ozt1Q0FDMUMsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLHVCQUFwQixBQUEyQyxHQUEzQyxBQUE2QyxTQUE3QyxBLEFBQXNEOzs7Ozt1Q0FDeEQsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLHFCQUFwQixBQUF5QyxHQUF6QyxBQUEyQyxTQUEzQyxBQUFvRCxBOzs7OztBLGtEQUxyRTtBLG1EQUNBO0EsaURBQ0E7QSxtREFDQTtBLG9EQUNBO0EsMERBQ0E7QTtBQU5BOzs0Q0FETSxBOztpQ0FMYTtBOzs7O2lDQWUzQjtxQ0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFmLEFBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFVjtnQkFBQSxBQUNBLFNBREEsQUFDaUMsdUJBRGpDLEFBQ0E7Z0JBREEsQUFDUSxNQURSLEFBQ2lDLHVCQURqQyxBQUNRO2dCQURSLEFBQ2EsYUFEYixBQUNpQyx1QkFEakMsQUFDYTtnQkFEYixBQUN5QixPQUR6QixBQUNpQyx1QkFEakMsQUFDeUI7Z0JBRHpCLEFBRUEsZUFBZ0IsS0FGaEIsQUFFcUIsTUFGckIsQUFFQSxBQUNQOzttQ0FDRSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNLO0FBREw7QUFBQSxhQUFBLEVBQUEsQUFFSSw4QkFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSx1QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUpKLEFBSUksQUFDQSwwQkFBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQUxKLEFBS0ksQUFDQSxnQ0FBQyxjQUFELGNBQVksT0FBTyxFQUFDLGlCQUFwQixBQUFtQixBQUFrQjs4QkFBckM7Z0NBQUE7QUFBQTtlQVJaLEFBQ0ksQUFDSSxBQU1JLEFBR1IsZ0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTztBQURQO0FBQUEsb0JBZFYsQUFDRSxBQUVJLEFBV0ksQUFDTyxBQUFLLEFBS3ZCOzs7OztBQXRFd0MsQTs7a0JBQXRCLEEiLCJmaWxlIjoidmlld1NpbmlzdGVycy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9