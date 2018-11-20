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

var _routes = require('../../routes');

var _receiveRow = require('../../components/receiveRow');

var _receiveRow2 = _interopRequireDefault(_receiveRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/receives/viewReceives.js?entry';


var viewReceives = function (_Component) {
    (0, _inherits3.default)(viewReceives, _Component);

    function viewReceives() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, viewReceives);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = viewReceives.__proto__ || (0, _getPrototypeOf2.default)(viewReceives)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            receivesQtd: '',
            account: '0x0',
            receives: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(viewReceives, [{
        key: 'renderReceives',
        value: function renderReceives() {
            return this.state.receives.map(function (receive) {
                return _react2.default.createElement(_receiveRow2.default, { key: receive.key,
                    uuid: receive.uuid,
                    id: receive.id,
                    name: receive.name,
                    timestamp: receive.timestamp,
                    from: receive.from,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts, receivesQtd, receives, i, id, name;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;
                                _context.next = 5;
                                return _supplychain2.default.methods.getReceivesQtd(accounts[0]).call();

                            case 5:
                                receivesQtd = _context.sent;
                                receives = [];

                                this.setState({ account: accounts[0], receivesQtd: receivesQtd });

                                i = 0;

                            case 9:
                                if (!(i < receivesQtd)) {
                                    _context.next = 35;
                                    break;
                                }

                                _context.next = 12;
                                return _supplychain2.default.methods.getReceiveMedicine(i, accounts[0]).call();

                            case 12:
                                id = _context.sent;
                                _context.next = 15;
                                return _supplychain2.default.methods.getMedicineName(id).call();

                            case 15:
                                name = _context.sent;

                                console.log("name", name);

                                _context.t0 = receives;
                                _context.t1 = i;
                                _context.next = 21;
                                return _supplychain2.default.methods.getReceiveProduct(i, accounts[0]).call();

                            case 21:
                                _context.t2 = _context.sent;
                                _context.t3 = id;
                                _context.t4 = name;
                                _context.next = 26;
                                return _supplychain2.default.methods.getReceiveTimestamp(i, accounts[0]).call();

                            case 26:
                                _context.t5 = _context.sent;
                                _context.next = 29;
                                return _supplychain2.default.methods.getReceiveFrom(i, accounts[0]).call();

                            case 29:
                                _context.t6 = _context.sent;
                                _context.t7 = {
                                    key: _context.t1,
                                    uuid: _context.t2,
                                    id: _context.t3,
                                    name: _context.t4,
                                    timestamp: _context.t5,
                                    from: _context.t6
                                };

                                _context.t0.push.call(_context.t0, _context.t7);

                            case 32:
                                i++;
                                _context.next = 9;
                                break;

                            case 35:
                                this.setState({ receives: receives });

                            case 36:
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
            var _state = this.state,
                account = _state.account,
                receives = _state.receives,
                receivesQtd = _state.receivesQtd;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, receivesQtd, _react2.default.createElement(_semanticUiReact.Table, {
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
            }, _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#BCBB3E" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'UUID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#BCBB3E" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#BCBB3E" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Name'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#BCBB3E" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Timestamp'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#BCBB3E" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'From'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderReceives())));
        }
    }]);

    return viewReceives;
}(_react.Component);

exports.default = viewReceives;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY2VpdmVzL3ZpZXdSZWNlaXZlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIndlYjMiLCJzdXBwbHljaGFpbiIsIkJ1dHRvbiIsIlRhYmxlIiwiVGFiIiwiTGluayIsIlJlY2VpdmVSb3ciLCJ2aWV3UmVjZWl2ZXMiLCJzdGF0ZSIsInJlY2VpdmVzUXRkIiwiYWNjb3VudCIsInJlY2VpdmVzIiwibWFwIiwicmVjZWl2ZSIsImtleSIsInV1aWQiLCJpZCIsIm5hbWUiLCJ0aW1lc3RhbXAiLCJmcm9tIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRSZWNlaXZlc1F0ZCIsImNhbGwiLCJzZXRTdGF0ZSIsImkiLCJnZXRSZWNlaXZlTWVkaWNpbmUiLCJnZXRNZWRpY2luZU5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmVjZWl2ZVByb2R1Y3QiLCJnZXRSZWNlaXZlVGltZXN0YW1wIiwiZ2V0UmVjZWl2ZUZyb20iLCJwdXNoIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW5kZXJSZWNlaXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFRLEFBQU87O0FBQ3ZCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0lBRUYsQTs7Ozs7Ozs7Ozs7Ozs7NE5BRW5CLEE7eUJBQU0sQUFDVyxBQUNiO3FCQUZFLEFBRU8sQUFDVDtzQkFIRSxBQUdRLEE7QUFIUixBQUNGOzs7Ozt5Q0FJWSxBQUNaO3dCQUNJLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSyxtQkFBUyxBQUM5Qjt1Q0FDSSxBQUFDLHNDQUFXLEtBQUssUUFBakIsQUFBeUIsQUFDYjswQkFBTSxRQURsQixBQUMwQixBQUNkO3dCQUFJLFFBRmhCLEFBRXdCLEFBQ1o7MEJBQU0sUUFIbEIsQUFHMEIsQUFDZDsrQkFBVyxRQUp2QixBQUkrQixBQUNuQjswQkFBTSxRQUxsQixBQUswQjs7a0NBTDFCO29DQURKLEFBQ0ksQUFRUDtBQVJPO2lCQUFBO0FBSFosQUFDSSxBQVlQLGFBWk87Ozs7Ozs7Ozs7Ozt1Q0FlbUIsY0FBQSxBQUFLLElBQUwsQUFBUyxBOztpQ0FBMUI7QTs7dUNBQ29CLHNCQUFBLEFBQVksUUFBWixBQUFvQixlQUFlLFNBQW5DLEFBQW1DLEFBQVMsSUFBNUMsQUFBZ0QsQTs7aUNBQXBFO0EsdURBQ0Y7QSwyQ0FDSixBLEFBRGE7O3FDQUNiLEFBQUssU0FBUyxFQUFDLFNBQVMsU0FBVixBQUFVLEFBQVMsSUFBSSxhQUFyQyxBQUFjLEFBQW9DLEFBRTFDOztBLG9DQUFFLEE7OztzQ0FBRSxJQUFFLEE7Ozs7Ozt1Q0FFTyxzQkFBQSxBQUFZLFFBQVosQUFBb0IsbUJBQXBCLEFBQXVDLEdBQUUsU0FBekMsQUFBeUMsQUFBUyxJQUFsRCxBLEFBQXNEOztpQ0FBakU7QTs7dUNBQ2Esc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGdCQUFwQixBQUFvQyxJQUFwQyxBQUF3QyxBOztpQ0FBckQ7QSxnREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksUUFBWixBQUFtQjs7OENBRW5CLEE7OENBQ1MsQTs7dUNBQ08sc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGtCQUFwQixBQUFzQyxHQUFFLFNBQXhDLEFBQXdDLEFBQVMsSUFBakQsQUFBcUQsQTs7Ozs4QyxBQUM3RDs4QyxBQUNFOzt1Q0FDVyxzQkFBQSxBQUFZLFFBQVosQUFBb0Isb0JBQXBCLEFBQXdDLEdBQUUsU0FBMUMsQUFBMEMsQUFBUyxJQUFuRCxBLEFBQXVEOzs7Ozt1Q0FDNUQsc0JBQUEsQUFBWSxRQUFaLEFBQW9CLGVBQXBCLEFBQW1DLEdBQUUsU0FBckMsQUFBcUMsQUFBUyxJLEFBQTlDLEFBQWtEOzs7OztBLGtEQUo5RDtBLG1EQUNBO0EsaURBQ0E7QSxtREFDQTtBLHdEQUNBO0E7QUFMQTs7NENBREssQTs7aUNBTmE7QTs7OztpQ0FlMUI7cUNBQUEsQUFBSyxTQUFTLEVBQUMsVUFBZixBQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRVQ7Z0JBQUEsQUFDQSxTQURBLEFBQ2lDLHVCQURqQyxBQUNBO2dCQURBLEFBQ1EsTUFEUixBQUNpQyx1QkFEakMsQUFDUTtnQkFEUixBQUNhLGFBRGIsQUFDaUMsdUJBRGpDLEFBQ2E7Z0JBRGIsQUFDeUIsT0FEekIsQUFDaUMsdUJBRGpDLEFBQ3lCO3lCQUNTLEtBRmxDLEFBRXVDO2dCQUZ2QyxBQUVBLGlCQUZBLEFBRUE7Z0JBRkEsQUFFUyxrQkFGVCxBQUVTO2dCQUZULEFBRW1CLHFCQUZuQixBQUVtQixBQUMxQjs7bUNBQ0UsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSztBQURMO0FBQUEsYUFBQSxFQUFBLEFBRUksNkJBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EseUJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0EsdUJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFISixBQUdJLEFBQ0EseUJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0EsOEJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFQWixBQUNJLEFBQ0ksQUFLSSxBQUdSLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLG9CQWJWLEFBQ0UsQUFFSSxBQVVJLEFBQ0ksQUFBSyxBQUtwQjs7Ozs7QUFwRXVDLEE7O2tCQUFyQixBIiwiZmlsZSI6InZpZXdSZWNlaXZlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9