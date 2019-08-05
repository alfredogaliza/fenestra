"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Props
 * load: (page: int, items: int, orderby: {}, callback: data => void) => void
 * doAction: (action: {...}, done: (bool) => void) => void
 */
var DataTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));
    _this.state = {
      rows: [],
      headers: [],
      page: 1,
      pages: 1,
      items: 10,
      total: 0,
      orderBy: []
    };
    return _this;
  }

  _createClass(DataTable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.load();
    }
  }, {
    key: "doAction",
    value: function doAction(action) {
      var _this2 = this;

      this.props.doAction(action, function (result) {
        return _this2.load(result);
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;

      var confirm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!confirm) return;
      this.props.load(this.state.page, this.state.items, this.state.orderBy, function (data) {
        _this3.setState(function (state) {
          return {
            rows: data.rows,
            headers: data.headers,
            total: data.total !== undefined ? data.total : 0,
            pages: data.total !== undefined ? Math.ceil(data.total / state.items) : 1
          };
        });
      });
      /**
       * Protocolo:
       * request = {
       *  page: int,
       *  items: int,
       *  orderBy: [{
       *      header: string
       *      dir: "ASC" | "DESC"
       *  }]
       * }
       * 
       * response = {
       *  total: int,
       *  headers: [string]
       *  rows: [{
       *      cells: [any],
       *      actions: [{
       *          icon: string,
       *          className: string,
       *          title: string,
       *          url: string,
       *          method: "POST" | "PUT" | "GET" | "DELETE",
       *          confirm: bool,
       *          window: {
       *              props: {
       *                  title: string,
       *                  style: {...},
       *              }
       *              template: string,
       *              templateProps: {...}
       *          }
       *      }]
       *  }]
       * }
       * 
       */
    }
  }, {
    key: "orderBy",
    value: function orderBy(header) {
      this.setState(function (state) {
        var orderBy = _toConsumableArray(state.orderBy);

        var sorter = orderBy.find(function (sorter) {
          return sorter.header === header;
        });

        if (sorter) {
          if (sorter.dir === "DESC") {
            return {
              page: 1,
              orderBy: orderBy.filter(function (item) {
                return item !== sorter;
              })
            };
          } else {
            return {
              page: 1,
              orderBy: orderBy.map(function (item) {
                return item === sorter ? _objectSpread({}, sorter, {
                  dir: "DESC"
                }) : item;
              })
            };
          }
        } else {
          return {
            page: 1,
            orderBy: [].concat(_toConsumableArray(orderBy), [{
              header: header,
              dir: "ASC"
            }])
          };
        }
      });
      this.load();
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      this.setState(function (state) {
        return {
          items: items,
          page: 1
        };
      });
      this.load();
    }
  }, {
    key: "goToPage",
    value: function goToPage(page) {
      this.setState(function (state) {
        return {
          page: page
        };
      });
      this.load();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var headers = this.state.headers.map(function (header, key) {
        var sorter = _this4.state.orderBy.find(function (sorter) {
          return sorter.header === header;
        });

        var sortButton = sorter ? sorter.dir === "ASC" ? _react["default"].createElement("i", {
          className: "fa fa-sort-up"
        }) : _react["default"].createElement("i", {
          className: "fa fa-sort-down"
        }) : null;
        return _react["default"].createElement("th", {
          className: "fenestra-datatable-header",
          key: key,
          onClick: function onClick() {
            return _this4.orderBy(header);
          }
        }, sortButton, "\xA0", header);
      });
      var rows = this.state.rows.map(function (row, key) {
        var cells = row.cells.map(function (cell, key) {
          return _react["default"].createElement("td", {
            key: key
          }, cell);
        });
        var actions = row.actions.map(function (action, key) {
          return _react["default"].createElement("button", {
            title: action.title,
            className: action.className,
            key: key,
            onClick: function onClick() {
              return _this4.doAction(action);
            }
          }, _react["default"].createElement("i", {
            className: action.icon
          }));
        });
        return _react["default"].createElement("tr", {
          key: key
        }, cells, _react["default"].createElement("td", {
          className: "fenestra-datatable-actions"
        }, actions));
      });
      var page = this.state.page;
      var pages = this.state.pages;
      var maxPages = 5;
      var pageMin = pages > maxPages ? page >= pages - maxPages / 2 ? pages - maxPages + 1 : Math.max(page - 2, 1) : 1;
      var pageMax = pages > maxPages ? page >= pages - maxPages / 2 ? pages : Math.max(page + 2, maxPages) : pages;
      var pageCount = pageMax - pageMin + 1;
      var pageButtons = new Array(pageCount).fill(null).map(function (item, key) {
        var index = pageMin + key;
        return _react["default"].createElement("li", {
          key: key,
          className: "page-item " + (page === index ? "active" : "")
        }, _react["default"].createElement("button", {
          className: "page-link",
          type: "button",
          onClick: function onClick() {
            return _this4.goToPage(index);
          }
        }, index));
      });

      var reloadButton = _react["default"].createElement("li", {
        className: "page-item"
      }, _react["default"].createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.load();
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-refresh"
      })));

      var startButton = page !== 0 ? _react["default"].createElement("li", {
        key: "5",
        className: "page-item " + (page === 1 ? "disabled" : "")
      }, _react["default"].createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(1);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-fast-backward"
      }))) : null;
      var prevButton = page !== 0 ? _react["default"].createElement("li", {
        key: "6",
        className: "page-item " + (page === 1 ? "disabled" : "")
      }, _react["default"].createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(page - 1);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-backward"
      }))) : null;
      var nextButton = pages !== 0 ? _react["default"].createElement("li", {
        key: "7",
        className: "page-item " + (page === pages ? "disabled" : "")
      }, _react["default"].createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(page + 1);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-forward"
      }))) : null;
      var endButton = pages !== 0 ? _react["default"].createElement("li", {
        key: "8",
        className: "page-item " + (page === pages ? "disabled" : "")
      }, _react["default"].createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(pages);
        }
      }, _react["default"].createElement("i", {
        className: "fa fa-fast-forward"
      }))) : null;
      var pageNavigation = this.state.items > 0 ? [startButton, prevButton, pageButtons, nextButton, endButton] : null;

      var navigation = _react["default"].createElement("nav", null, _react["default"].createElement("ul", {
        className: "pagination d-flex justify-content-end pagination-sm"
      }, reloadButton, _react["default"].createElement("li", {
        className: "page-item"
      }, _react["default"].createElement("select", {
        className: "page-link fenestra-select",
        value: this.state.items,
        onChange: function onChange(e) {
          return _this4.setItems(e.target.value);
        }
      }, _react["default"].createElement("option", {
        value: "10"
      }, "10 itens"), _react["default"].createElement("option", {
        value: "20"
      }, "20 itens"), _react["default"].createElement("option", {
        value: "50"
      }, "50 itens"), _react["default"].createElement("option", {
        value: "100"
      }, "100 itens"), _react["default"].createElement("option", {
        value: "0"
      }, "Todos"))), _react["default"].createElement("li", {
        className: "page-item disabled"
      }, _react["default"].createElement("span", {
        className: "page-link"
      }, "de ", (page - 1) * this.state.items + 1, " a ", this.state.items > 0 ? (page - 1) * this.state.items + this.state.rows.length : this.state.rows.length, " ", this.state.total ? "de " + this.state.total : "")), pageNavigation));

      return _react["default"].createElement("div", {
        className: "table-responsive"
      }, _react["default"].createElement("table", {
        className: "table table-sm table-hover table-striped"
      }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, headers, _react["default"].createElement("th", {
        className: "fenestra-datatable-actions"
      }, "A\xE7\xF5es"))), _react["default"].createElement("tbody", null, rows), _react["default"].createElement("tfoot", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        colSpan: this.state.headers.length + 1
      }, navigation)))));
    }
  }]);

  return DataTable;
}(_react["default"].Component);

var _default = DataTable;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGFUYWJsZS5qc3giXSwibmFtZXMiOlsiRGF0YVRhYmxlIiwicHJvcHMiLCJzdGF0ZSIsInJvd3MiLCJoZWFkZXJzIiwicGFnZSIsInBhZ2VzIiwiaXRlbXMiLCJ0b3RhbCIsIm9yZGVyQnkiLCJsb2FkIiwiYWN0aW9uIiwiZG9BY3Rpb24iLCJyZXN1bHQiLCJjb25maXJtIiwiZGF0YSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwiTWF0aCIsImNlaWwiLCJoZWFkZXIiLCJzb3J0ZXIiLCJmaW5kIiwiZGlyIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImtleSIsInNvcnRCdXR0b24iLCJyb3ciLCJjZWxscyIsImNlbGwiLCJhY3Rpb25zIiwidGl0bGUiLCJjbGFzc05hbWUiLCJpY29uIiwibWF4UGFnZXMiLCJwYWdlTWluIiwibWF4IiwicGFnZU1heCIsInBhZ2VDb3VudCIsInBhZ2VCdXR0b25zIiwiQXJyYXkiLCJmaWxsIiwiaW5kZXgiLCJnb1RvUGFnZSIsInJlbG9hZEJ1dHRvbiIsInN0YXJ0QnV0dG9uIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJlbmRCdXR0b24iLCJwYWdlTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJlIiwic2V0SXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxTOzs7OztBQUVGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWYsbUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsSUFBSSxFQUFFLEVBREc7QUFFVEMsTUFBQUEsT0FBTyxFQUFFLEVBRkE7QUFHVEMsTUFBQUEsSUFBSSxFQUFFLENBSEc7QUFJVEMsTUFBQUEsS0FBSyxFQUFFLENBSkU7QUFLVEMs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cG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogUHJvcHNcbiAqIGxvYWQ6IChwYWdlOiBpbnQsIGl0ZW1zOiBpbnQsIG9yZGVyYnk6IHt9LCBjYWxsYmFjazogZGF0YSA9PiB2b2lkKSA9PiB2b2lkXG4gKiBkb0FjdGlvbjogKGFjdGlvbjogey4uLn0sIGRvbmU6IChib29sKSA9PiB2b2lkKSA9PiB2b2lkXG4gKi9cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm93czogW10sXG4gICAgICAgICAgICBoZWFkZXJzOiBbXSxcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwYWdlczogMSxcbiAgICAgICAgICAgIGl0ZW1zOiAxMCxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgb3JkZXJCeTogW11cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIGRvQWN0aW9uKGFjdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLmRvQWN0aW9uKGFjdGlvbiwgcmVzdWx0ID0+IHRoaXMubG9hZChyZXN1bHQpKTtcbiAgICB9XG5cbiAgICBsb2FkKGNvbmZpcm0gPSB0cnVlKSB7XG5cbiAgICAgICAgaWYgKCFjb25maXJtKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub3JkZXJCeSxcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogZGF0YS5yb3dzLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBkYXRhLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiAoZGF0YS50b3RhbCAhPT0gdW5kZWZpbmVkKSA/IGRhdGEudG90YWwgOiAwLFxuICAgICAgICAgICAgICAgICAgICBwYWdlczogKGRhdGEudG90YWwgIT09IHVuZGVmaW5lZCkgPyBNYXRoLmNlaWwoZGF0YS50b3RhbCAvIHN0YXRlLml0ZW1zKSA6IDFcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3RvY29sbzpcbiAgICAgICAgICogcmVxdWVzdCA9IHtcbiAgICAgICAgICogIHBhZ2U6IGludCxcbiAgICAgICAgICogIGl0ZW1zOiBpbnQsXG4gICAgICAgICAqICBvcmRlckJ5OiBbe1xuICAgICAgICAgKiAgICAgIGhlYWRlcjogc3RyaW5nXG4gICAgICAgICAqICAgICAgZGlyOiBcIkFTQ1wiIHwgXCJERVNDXCJcbiAgICAgICAgICogIH1dXG4gICAgICAgICAqIH1cbiAgICAgICAgICogXG4gICAgICAgICAqIHJlc3BvbnNlID0ge1xuICAgICAgICAgKiAgdG90YWw6IGludCxcbiAgICAgICAgICogIGhlYWRlcnM6IFtzdHJpbmddXG4gICAgICAgICAqICByb3dzOiBbe1xuICAgICAgICAgKiAgICAgIGNlbGxzOiBbYW55XSxcbiAgICAgICAgICogICAgICBhY3Rpb25zOiBbe1xuICAgICAgICAgKiAgICAgICAgICBpY29uOiBzdHJpbmcsXG4gICAgICAgICAqICAgICAgICAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICAgICAgICAgKiAgICAgICAgICB0aXRsZTogc3RyaW5nLFxuICAgICAgICAgKiAgICAgICAgICB1cmw6IHN0cmluZyxcbiAgICAgICAgICogICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIkdFVFwiIHwgXCJERUxFVEVcIixcbiAgICAgICAgICogICAgICAgICAgY29uZmlybTogYm9vbCxcbiAgICAgICAgICogICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAqICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgc3R5bGU6IHsuLi59LFxuICAgICAgICAgKiAgICAgICAgICAgICAgfVxuICAgICAgICAgKiAgICAgICAgICAgICAgdGVtcGxhdGU6IHN0cmluZyxcbiAgICAgICAgICogICAgICAgICAgICAgIHRlbXBsYXRlUHJvcHM6IHsuLi59XG4gICAgICAgICAqICAgICAgICAgIH1cbiAgICAgICAgICogICAgICB9XVxuICAgICAgICAgKiAgfV1cbiAgICAgICAgICogfVxuICAgICAgICAgKiBcbiAgICAgICAgICovXG4gICAgfVxuXG4gICAgb3JkZXJCeShoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmRlckJ5ID0gWy4uLnN0YXRlLm9yZGVyQnldO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyID0gb3JkZXJCeS5maW5kKHNvcnRlciA9PiBzb3J0ZXIuaGVhZGVyID09PSBoZWFkZXIpO1xuICAgICAgICAgICAgaWYgKHNvcnRlcikge1xuICAgICAgICAgICAgICAgIGlmIChzb3J0ZXIuZGlyID09PSBcIkRFU0NcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6IG9yZGVyQnkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gc29ydGVyKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiBvcmRlckJ5Lm1hcChpdGVtID0+IChpdGVtID09PSBzb3J0ZXIpID8geyAuLi5zb3J0ZXIsIGRpcjogXCJERVNDXCIgfSA6IGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vcmRlckJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IFwiQVNDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICBzZXRJdGVtcyhpdGVtcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IGl0ZW1zLCBwYWdlOiAxIH0pKTtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgZ29Ub1BhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IHBhZ2UgfSkpO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLnN0YXRlLmhlYWRlcnMubWFwKChoZWFkZXIsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyID0gdGhpcy5zdGF0ZS5vcmRlckJ5LmZpbmQoc29ydGVyID0+IHNvcnRlci5oZWFkZXIgPT09IGhlYWRlcik7XG4gICAgICAgICAgICBjb25zdCBzb3J0QnV0dG9uID0gc29ydGVyID8gKFxuICAgICAgICAgICAgICAgIChzb3J0ZXIuZGlyID09PSBcIkFTQ1wiKSA/XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnQtdXBcIj48L2k+IDpcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc29ydC1kb3duXCI+PC9pPlxuICAgICAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZlbmVzdHJhLWRhdGF0YWJsZS1oZWFkZXJcIiBrZXk9e2tleX0gb25DbGljaz17KCkgPT4gdGhpcy5vcmRlckJ5KGhlYWRlcil9PlxuICAgICAgICAgICAgICAgICAgICB7c29ydEJ1dHRvbn0mbmJzcDt7aGVhZGVyfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnN0YXRlLnJvd3MubWFwKChyb3csIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSByb3cuY2VsbHMubWFwKChjZWxsLCBrZXkpID0+XG4gICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fT57Y2VsbH08L3RkPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSByb3cuYWN0aW9ucy5tYXAoKGFjdGlvbiwga2V5KSA9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9e2FjdGlvbi50aXRsZX0gY2xhc3NOYW1lPXthY3Rpb24uY2xhc3NOYW1lfSBrZXk9e2tleX0gb25DbGljaz17KCkgPT4gdGhpcy5kb0FjdGlvbihhY3Rpb24pfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXthY3Rpb24uaWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICB7Y2VsbHN9XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmZW5lc3RyYS1kYXRhdGFibGUtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnN0YXRlLnBhZ2U7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5zdGF0ZS5wYWdlcztcbiAgICAgICAgY29uc3QgbWF4UGFnZXMgPSA1O1xuXG4gICAgICAgIGNvbnN0IHBhZ2VNaW4gPSAocGFnZXMgPiBtYXhQYWdlcykgPyAoKHBhZ2UgPj0gcGFnZXMgLSBtYXhQYWdlcyAvIDIpID8gcGFnZXMgLSBtYXhQYWdlcyArIDEgOiBNYXRoLm1heChwYWdlIC0gMiwgMSkpIDogMTtcbiAgICAgICAgY29uc3QgcGFnZU1heCA9IChwYWdlcyA+IG1heFBhZ2VzKSA/ICgocGFnZSA+PSBwYWdlcyAtIG1heFBhZ2VzIC8gMikgPyBwYWdlcyA6IE1hdGgubWF4KHBhZ2UgKyAyLCBtYXhQYWdlcykpIDogcGFnZXM7XG5cbiAgICAgICAgY29uc3QgcGFnZUNvdW50ID0gcGFnZU1heCAtIHBhZ2VNaW4gKyAxO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VCdXR0b25zID0gbmV3IEFycmF5KHBhZ2VDb3VudCkuZmlsbChudWxsKS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYWdlTWluICsga2V5O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT17XCJwYWdlLWl0ZW0gXCIgKyAoKHBhZ2UgPT09IGluZGV4KSA/IFwiYWN0aXZlXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlbG9hZEJ1dHRvbiA9XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5sb2FkKCl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yZWZyZXNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT47XG5cbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSAocGFnZSAhPT0gMCkgPyAoXG4gICAgICAgICAgICA8bGkga2V5PVwiNVwiIGNsYXNzTmFtZT17XCJwYWdlLWl0ZW0gXCIgKyAoKHBhZ2UgPT09IDEpID8gXCJkaXNhYmxlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UoMSl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYXN0LWJhY2t3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgcHJldkJ1dHRvbiA9IChwYWdlICE9PSAwKSA/IChcbiAgICAgICAgICAgIDxsaSBrZXk9XCI2XCIgY2xhc3NOYW1lPXtcInBhZ2UtaXRlbSBcIiArICgocGFnZSA9PT0gMSkgPyBcImRpc2FibGVkXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5nb1RvUGFnZShwYWdlIC0gMSl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYWNrd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSAocGFnZXMgIT09IDApID8gKFxuICAgICAgICAgICAgPGxpIGtleT1cIjdcIiBjbGFzc05hbWU9e1wicGFnZS1pdGVtIFwiICsgKChwYWdlID09PSBwYWdlcykgPyBcImRpc2FibGVkXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5nb1RvUGFnZShwYWdlICsgMSl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mb3J3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgZW5kQnV0dG9uID0gKHBhZ2VzICE9PSAwKSA/IChcbiAgICAgICAgICAgIDxsaSBrZXk9XCI4XCIgY2xhc3NOYW1lPXtcInBhZ2UtaXRlbSBcIiArICgocGFnZSA9PT0gcGFnZXMpID8gXCJkaXNhYmxlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UocGFnZXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFzdC1mb3J3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgcGFnZU5hdmlnYXRpb24gPSAodGhpcy5zdGF0ZS5pdGVtcyA+IDApID9cbiAgICAgICAgICAgIFtzdGFydEJ1dHRvbiwgcHJldkJ1dHRvbiwgcGFnZUJ1dHRvbnMsIG5leHRCdXR0b24sIGVuZEJ1dHRvbl1cbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKFxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwYWdpbmF0aW9uLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZWxvYWRCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicGFnZS1saW5rIGZlbmVzdHJhLXNlbGVjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1zfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldEl0ZW1zKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTAgaXRlbnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMCBpdGVuczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwIGl0ZW5zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMCBpdGVuczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+VG9kb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtIGRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZSB7KHBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUuaXRlbXMgKyAxfSBhIHsodGhpcy5zdGF0ZS5pdGVtcyA+IDApID8gKHBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUuaXRlbXMgKyB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoIDogdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aH0ge3RoaXMuc3RhdGUudG90YWwgPyBcImRlIFwiICsgdGhpcy5zdGF0ZS50b3RhbCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1ob3ZlciB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGF0YXRhYmxlLWFjdGlvbnNcIj5Bw6fDtWVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMuc3RhdGUuaGVhZGVycy5sZW5ndGggKyAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlOyJdfQ==