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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _supplychain = require('../../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _ProductRow = require('../../components/ProductRow');

var _ProductRow2 = _interopRequireDefault(_ProductRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/products/deposit.js?entry';


var deposit = function (_Component) {
    (0, _inherits3.default)(deposit, _Component);

    function deposit() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, deposit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = deposit.__proto__ || (0, _getPrototypeOf2.default)(deposit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            products: [],
            productsTotal: '',
            account: '0x0'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(deposit, [{
        key: 'renderProducts',
        value: function renderProducts() {
            return this.state.products.map(function (product) {
                return _react2.default.createElement(_ProductRow2.default, { key: product.key,
                    uuid: product.uuid,
                    id: product.id,
                    name: product.name,
                    isValid: product.isValid,
                    creationTime: product.creationTime,
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
                var productsTotal, products, accounts, i, product, hasProduct, id, name;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _supplychain2.default.methods.getAllProductsTotal().call();

                            case 2:
                                productsTotal = _context.sent;
                                products = [];
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;

                                this.setState({ account: accounts[0] });
                                console.log("account", this.state.account);

                                i = 0;

                            case 10:
                                if (!(i < productsTotal)) {
                                    _context.next = 44;
                                    break;
                                }

                                _context.next = 13;
                                return _supplychain2.default.methods.allProducts(i).call();

                            case 13:
                                product = _context.sent;
                                _context.next = 16;
                                return _supplychain2.default.methods.walletHasProduct(accounts[0], product).call();

                            case 16:
                                hasProduct = _context.sent;
                                _context.next = 19;
                                return _supplychain2.default.methods.getProductId(product).call();

                            case 19:
                                id = _context.sent;
                                _context.next = 22;
                                return _supplychain2.default.methods.getMedicineName(id).call();

                            case 22:
                                name = _context.sent;

                                if (!hasProduct) {
                                    _context.next = 41;
                                    break;
                                }

                                _context.t0 = products;
                                _context.t1 = i;
                                _context.t2 = product;
                                _context.t3 = id;
                                _context.t4 = name;
                                _context.next = 31;
                                return _supplychain2.default.methods.getProductOwner(product).call();

                            case 31:
                                _context.t5 = _context.sent;
                                _context.next = 34;
                                return _supplychain2.default.methods.getProductValid(product).call();

                            case 34:
                                _context.t6 = _context.sent;
                                _context.next = 37;
                                return _supplychain2.default.methods.getProductCreationTime(product).call();

                            case 37:
                                _context.t7 = _context.sent;
                                _context.t8 = {
                                    key: _context.t1,
                                    uuid: _context.t2,
                                    id: _context.t3,
                                    name: _context.t4,
                                    owner: _context.t5,
                                    isValid: _context.t6,
                                    creationTime: _context.t7
                                };

                                _context.t0.push.call(_context.t0, _context.t8);

                                console.log("products", products);

                            case 41:
                                i++;
                                _context.next = 10;
                                break;

                            case 44:
                                this.setState({ productsTotal: productsTotal, products: products });

                            case 45:
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
                productsTotal = _state.productsTotal,
                products = _state.products;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, productsTotal), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#8FE4DF" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'UUID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#8FE4DF" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#8FE4DF" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Name'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#8FE4DF" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Validity'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#8FE4DF" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Timestamp'), _react2.default.createElement(HeaderCell, { style: { backgroundColor: "#3F51B5", color: "white" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Path'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, this.renderProducts())));
        }
    }]);

    return deposit;
}(_react.Component);

exports.default = deposit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL2RlcG9zaXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwic3VwcGx5Y2hhaW4iLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJQcm9kdWN0Um93IiwiZGVwb3NpdCIsInN0YXRlIiwicHJvZHVjdHMiLCJwcm9kdWN0c1RvdGFsIiwiYWNjb3VudCIsIm1hcCIsInByb2R1Y3QiLCJrZXkiLCJ1dWlkIiwiaWQiLCJuYW1lIiwiaXNWYWxpZCIsImNyZWF0aW9uVGltZSIsIm1ldGhvZHMiLCJnZXRBbGxQcm9kdWN0c1RvdGFsIiwiY2FsbCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwiYWxsUHJvZHVjdHMiLCJ3YWxsZXRIYXNQcm9kdWN0IiwiaGFzUHJvZHVjdCIsImdldFByb2R1Y3RJZCIsImdldE1lZGljaW5lTmFtZSIsImdldFByb2R1Y3RPd25lciIsImdldFByb2R1Y3RWYWxpZCIsImdldFByb2R1Y3RDcmVhdGlvblRpbWUiLCJvd25lciIsInB1c2giLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicmVuZGVyUHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVGOzs7Ozs7Ozs7Ozs7OztrTixBQUVuQjtzQkFBTSxBQUNRLEFBQ1Y7MkJBRkUsQUFFYSxBQUNmO3FCQUhFLEFBR08sQTtBQUhQLEFBQ0Y7Ozs7O3lDQUlZLEFBQ2I7d0JBQ0csQUFBSyxNQUFM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RCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFISixBQUdJLEFBQ0EseUJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0EsNkJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBcEIsQUFBbUIsQUFBa0I7OEJBQXJDO2dDQUFBO0FBQUE7ZUFMSixBQUtJLEFBQ0EsOEJBQUMsY0FBRCxjQUFZLE9BQU8sRUFBQyxpQkFBRCxBQUFrQixXQUFXLE9BQWhELEFBQW1CLEFBQW9DOzhCQUF2RDtnQ0FBQTtBQUFBO2VBUlosQUFDSSxBQUNJLEFBTUksQUFHUiwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxvQkFkVixBQUNFLEFBRUksQUFXSSxBQUNJLEFBQUssQUFLcEI7Ozs7O0FBeEVrQyxBOztrQkFBaEIsQSIsImZpbGUiOiJkZXBvc2l0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyby5hbHZhcmV6L0Rlc2t0b3AvUHJvamV0b0ZpbmFsIn0=