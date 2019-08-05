"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        var sortButton = sorter ? sorter.dir === "ASC" ? _react.default.createElement("i", {
          className: "fa fa-sort-up"
        }) : _react.default.createElement("i", {
          className: "fa fa-sort-down"
        }) : null;
        return _react.default.createElement("th", {
          className: "fenestra-datatable-header",
          key: key,
          onClick: function onClick() {
            return _this4.orderBy(header);
          }
        }, sortButton, "\xA0", header);
      });
      var rows = this.state.rows.map(function (row, key) {
        var cells = row.cells.map(function (cell, key) {
          return _react.default.createElement("td", {
            key: key
          }, cell);
        });
        var actions = row.actions.map(function (action, key) {
          return _react.default.createElement("button", {
            title: action.title,
            className: action.className,
            key: key,
            onClick: function onClick() {
              return _this4.doAction(action);
            }
          }, _react.default.createElement("i", {
            className: action.icon
          }));
        });
        return _react.default.createElement("tr", {
          key: key
        }, cells, _react.default.createElement("td", {
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
        return _react.default.createElement("li", {
          key: key,
          className: "page-item " + (page === index ? "active" : "")
        }, _react.default.createElement("button", {
          className: "page-link",
          type: "button",
          onClick: function onClick() {
            return _this4.goToPage(index);
          }
        }, index));
      });

      var reloadButton = _react.default.createElement("li", {
        className: "page-item"
      }, _react.default.createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.load();
        }
      }, _react.default.createElement("i", {
        className: "fa fa-refresh"
      })));

      var startButton = page !== 0 ? _react.default.createElement("li", {
        key: "5",
        className: "page-item " + (page === 1 ? "disabled" : "")
      }, _react.default.createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(1);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-fast-backward"
      }))) : null;
      var prevButton = page !== 0 ? _react.default.createElement("li", {
        key: "6",
        className: "page-item " + (page === 1 ? "disabled" : "")
      }, _react.default.createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(page - 1);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-backward"
      }))) : null;
      var nextButton = pages !== 0 ? _react.default.createElement("li", {
        key: "7",
        className: "page-item " + (page === pages ? "disabled" : "")
      }, _react.default.createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(page + 1);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-forward"
      }))) : null;
      var endButton = pages !== 0 ? _react.default.createElement("li", {
        key: "8",
        className: "page-item " + (page === pages ? "disabled" : "")
      }, _react.default.createElement("button", {
        className: "page-link",
        type: "button",
        onClick: function onClick() {
          return _this4.goToPage(pages);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-fast-forward"
      }))) : null;
      var pageNavigation = this.state.items > 0 ? [startButton, prevButton, pageButtons, nextButton, endButton] : null;

      var navigation = _react.default.createElement("nav", null, _react.default.createElement("ul", {
        className: "pagination d-flex justify-content-end pagination-sm"
      }, reloadButton, _react.default.createElement("li", {
        className: "page-item"
      }, _react.default.createElement("select", {
        className: "page-link fenestra-select",
        value: this.state.items,
        onChange: function onChange(e) {
          return _this4.setItems(e.target.value);
        }
      }, _react.default.createElement("option", {
        value: "10"
      }, "10 itens"), _react.default.createElement("option", {
        value: "20"
      }, "20 itens"), _react.default.createElement("option", {
        value: "50"
      }, "50 itens"), _react.default.createElement("option", {
        value: "100"
      }, "100 itens"), _react.default.createElement("option", {
        value: "0"
      }, "Todos"))), _react.default.createElement("li", {
        className: "page-item disabled"
      }, _react.default.createElement("span", {
        className: "page-link"
      }, "de ", (page - 1) * this.state.items + 1, " a ", this.state.items > 0 ? (page - 1) * this.state.items + this.state.rows.length : this.state.rows.length, " ", this.state.total ? "de " + this.state.total : "")), pageNavigation));

      return _react.default.createElement("div", {
        className: "table-responsive"
      }, _react.default.createElement("table", {
        className: "table table-sm table-hover table-striped"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, headers, _react.default.createElement("th", {
        className: "fenestra-datatable-actions"
      }, "A\xE7\xF5es"))), _react.default.createElement("tbody", null, rows), _react.default.createElement("tfoot", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
        colSpan: this.state.headers.length + 1
      }, navigation)))));
    }
  }]);

  return DataTable;
}(_react.default.Component);

var _default = DataTable;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGFUYWJsZS5qc3giXSwibmFtZXMiOlsiRGF0YVRhYmxlIiwicHJvcHMiLCJzdGF0ZSIsInJvd3MiLCJoZWFkZXJzIiwicGFnZSIsInBhZ2VzIiwiaXRlbXMiLCJ0b3RhbCIsIm9yZGVyQnkiLCJsb2FkIiwiYWN0aW9uIiwiZG9BY3Rpb24iLCJyZXN1bHQiLCJjb25maXJtIiwiZGF0YSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwiTWF0aCIsImNlaWwiLCJoZWFkZXIiLCJzb3J0ZXIiLCJmaW5kIiwiZGlyIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImtleSIsInNvcnRCdXR0b24iLCJyb3ciLCJjZWxscyIsImNlbGwiLCJhY3Rpb25zIiwidGl0bGUiLCJjbGFzc05hbWUiLCJpY29uIiwibWF4UGFnZXMiLCJwYWdlTWluIiwibWF4IiwicGFnZU1heCIsInBhZ2VDb3VudCIsInBhZ2VCdXR0b25zIiwiQXJyYXkiLCJmaWxsIiwiaW5kZXgiLCJnb1RvUGFnZSIsInJlbG9hZEJ1dHRvbiIsInN0YXJ0QnV0dG9uIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJlbmRCdXR0b24iLCJwYWdlTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJlIiwic2V0SXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxTOzs7OztBQUVGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWYsbUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsSUFBSSxFQUFFLEVBREc7QUFFVEMsTUFBQUEsT0FBTyxFQUFFLEVBRkE7QUFHVEMsTUFBQUEsSUFBSSxFQUFFLENBSEc7QUFJVEMsTUFBQUEsS0FBSyxFQUFFLENBSkU7QUFLVEMs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b3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBQcm9wc1xuICogbG9hZDogKHBhZ2U6IGludCwgaXRlbXM6IGludCwgb3JkZXJieToge30sIGNhbGxiYWNrOiBkYXRhID0+IHZvaWQpID0+IHZvaWRcbiAqIGRvQWN0aW9uOiAoYWN0aW9uOiB7Li4ufSwgZG9uZTogKGJvb2wpID0+IHZvaWQpID0+IHZvaWRcbiAqL1xuY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgIGhlYWRlcnM6IFtdLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIHBhZ2VzOiAxLFxuICAgICAgICAgICAgaXRlbXM6IDEwLFxuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBvcmRlckJ5OiBbXVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZG9BY3Rpb24oYWN0aW9uLCByZXN1bHQgPT4gdGhpcy5sb2FkKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIGxvYWQoY29uZmlybSA9IHRydWUpIHtcblxuICAgICAgICBpZiAoIWNvbmZpcm0pIHJldHVybjtcblxuICAgICAgICB0aGlzLnByb3BzLmxvYWQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLml0ZW1zLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcmRlckJ5LFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBkYXRhLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGRhdGEuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IChkYXRhLnRvdGFsICE9PSB1bmRlZmluZWQpID8gZGF0YS50b3RhbCA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzOiAoZGF0YS50b3RhbCAhPT0gdW5kZWZpbmVkKSA/IE1hdGguY2VpbChkYXRhLnRvdGFsIC8gc3RhdGUuaXRlbXMpIDogMVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdG9jb2xvOlxuICAgICAgICAgKiByZXF1ZXN0ID0ge1xuICAgICAgICAgKiAgcGFnZTogaW50LFxuICAgICAgICAgKiAgaXRlbXM6IGludCxcbiAgICAgICAgICogIG9yZGVyQnk6IFt7XG4gICAgICAgICAqICAgICAgaGVhZGVyOiBzdHJpbmdcbiAgICAgICAgICogICAgICBkaXI6IFwiQVNDXCIgfCBcIkRFU0NcIlxuICAgICAgICAgKiAgfV1cbiAgICAgICAgICogfVxuICAgICAgICAgKiBcbiAgICAgICAgICogcmVzcG9uc2UgPSB7XG4gICAgICAgICAqICB0b3RhbDogaW50LFxuICAgICAgICAgKiAgaGVhZGVyczogW3N0cmluZ11cbiAgICAgICAgICogIHJvd3M6IFt7XG4gICAgICAgICAqICAgICAgY2VsbHM6IFthbnldLFxuICAgICAgICAgKiAgICAgIGFjdGlvbnM6IFt7XG4gICAgICAgICAqICAgICAgICAgIGljb246IHN0cmluZyxcbiAgICAgICAgICogICAgICAgICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgICAgICAqICAgICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgICAqICAgICAgICAgIHVybDogc3RyaW5nLFxuICAgICAgICAgKiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiR0VUXCIgfCBcIkRFTEVURVwiLFxuICAgICAgICAgKiAgICAgICAgICBjb25maXJtOiBib29sLFxuICAgICAgICAgKiAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICogICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICBzdHlsZTogey4uLn0sXG4gICAgICAgICAqICAgICAgICAgICAgICB9XG4gICAgICAgICAqICAgICAgICAgICAgICB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgICAgICAgKiAgICAgICAgICAgICAgdGVtcGxhdGVQcm9wczogey4uLn1cbiAgICAgICAgICogICAgICAgICAgfVxuICAgICAgICAgKiAgICAgIH1dXG4gICAgICAgICAqICB9XVxuICAgICAgICAgKiB9XG4gICAgICAgICAqIFxuICAgICAgICAgKi9cbiAgICB9XG5cbiAgICBvcmRlckJ5KGhlYWRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyQnkgPSBbLi4uc3RhdGUub3JkZXJCeV07XG4gICAgICAgICAgICBjb25zdCBzb3J0ZXIgPSBvcmRlckJ5LmZpbmQoc29ydGVyID0+IHNvcnRlci5oZWFkZXIgPT09IGhlYWRlcik7XG4gICAgICAgICAgICBpZiAoc29ydGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlci5kaXIgPT09IFwiREVTQ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogb3JkZXJCeS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBzb3J0ZXIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6IG9yZGVyQnkubWFwKGl0ZW0gPT4gKGl0ZW0gPT09IHNvcnRlcikgPyB7IC4uLnNvcnRlciwgZGlyOiBcIkRFU0NcIiB9IDogaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9yZGVyQnksXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogXCJBU0NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgaXRlbXMsIHBhZ2U6IDEgfSkpO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICBnb1RvUGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgcGFnZSB9KSk7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuc3RhdGUuaGVhZGVycy5tYXAoKGhlYWRlciwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZXIgPSB0aGlzLnN0YXRlLm9yZGVyQnkuZmluZChzb3J0ZXIgPT4gc29ydGVyLmhlYWRlciA9PT0gaGVhZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCdXR0b24gPSBzb3J0ZXIgPyAoXG4gICAgICAgICAgICAgICAgKHNvcnRlci5kaXIgPT09IFwiQVNDXCIpID9cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc29ydC11cFwiPjwvaT4gOlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0LWRvd25cIj48L2k+XG4gICAgICAgICAgICApIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZmVuZXN0cmEtZGF0YXRhYmxlLWhlYWRlclwiIGtleT17a2V5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLm9yZGVyQnkoaGVhZGVyKX0+XG4gICAgICAgICAgICAgICAgICAgIHtzb3J0QnV0dG9ufSZuYnNwO3toZWFkZXJ9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuc3RhdGUucm93cy5tYXAoKHJvdywga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHJvdy5jZWxscy5tYXAoKGNlbGwsIGtleSkgPT5cbiAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXl9PntjZWxsfTwvdGQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IHJvdy5hY3Rpb25zLm1hcCgoYWN0aW9uLCBrZXkpID0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17YWN0aW9uLnRpdGxlfSBjbGFzc05hbWU9e2FjdGlvbi5jbGFzc05hbWV9IGtleT17a2V5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvQWN0aW9uKGFjdGlvbil9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2FjdGlvbi5pY29ufT48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIHtjZWxsc31cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZlbmVzdHJhLWRhdGF0YWJsZS1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuc3RhdGUucGFnZTtcbiAgICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLnN0YXRlLnBhZ2VzO1xuICAgICAgICBjb25zdCBtYXhQYWdlcyA9IDU7XG5cbiAgICAgICAgY29uc3QgcGFnZU1pbiA9IChwYWdlcyA+IG1heFBhZ2VzKSA/ICgocGFnZSA+PSBwYWdlcyAtIG1heFBhZ2VzIC8gMikgPyBwYWdlcyAtIG1heFBhZ2VzICsgMSA6IE1hdGgubWF4KHBhZ2UgLSAyLCAxKSkgOiAxO1xuICAgICAgICBjb25zdCBwYWdlTWF4ID0gKHBhZ2VzID4gbWF4UGFnZXMpID8gKChwYWdlID49IHBhZ2VzIC0gbWF4UGFnZXMgLyAyKSA/IHBhZ2VzIDogTWF0aC5tYXgocGFnZSArIDIsIG1heFBhZ2VzKSkgOiBwYWdlcztcblxuICAgICAgICBjb25zdCBwYWdlQ291bnQgPSBwYWdlTWF4IC0gcGFnZU1pbiArIDE7XG5cbiAgICAgICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBuZXcgQXJyYXkocGFnZUNvdW50KS5maWxsKG51bGwpLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhZ2VNaW4gKyBrZXk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPXtcInBhZ2UtaXRlbSBcIiArICgocGFnZSA9PT0gaW5kZXgpID8gXCJhY3RpdmVcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5nb1RvUGFnZShpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVsb2FkQnV0dG9uID1cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvYWQoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJlZnJlc2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPjtcblxuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IChwYWdlICE9PSAwKSA/IChcbiAgICAgICAgICAgIDxsaSBrZXk9XCI1XCIgY2xhc3NOYW1lPXtcInBhZ2UtaXRlbSBcIiArICgocGFnZSA9PT0gMSkgPyBcImRpc2FibGVkXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5nb1RvUGFnZSgxKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZhc3QtYmFja3dhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBjb25zdCBwcmV2QnV0dG9uID0gKHBhZ2UgIT09IDApID8gKFxuICAgICAgICAgICAgPGxpIGtleT1cIjZcIiBjbGFzc05hbWU9e1wicGFnZS1pdGVtIFwiICsgKChwYWdlID09PSAxKSA/IFwiZGlzYWJsZWRcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmdvVG9QYWdlKHBhZ2UgLSAxKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhY2t3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IChwYWdlcyAhPT0gMCkgPyAoXG4gICAgICAgICAgICA8bGkga2V5PVwiN1wiIGNsYXNzTmFtZT17XCJwYWdlLWl0ZW0gXCIgKyAoKHBhZ2UgPT09IHBhZ2VzKSA/IFwiZGlzYWJsZWRcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmdvVG9QYWdlKHBhZ2UgKyAxKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZvcndhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBjb25zdCBlbmRCdXR0b24gPSAocGFnZXMgIT09IDApID8gKFxuICAgICAgICAgICAgPGxpIGtleT1cIjhcIiBjbGFzc05hbWU9e1wicGFnZS1pdGVtIFwiICsgKChwYWdlID09PSBwYWdlcykgPyBcImRpc2FibGVkXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5nb1RvUGFnZShwYWdlcyl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYXN0LWZvcndhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBjb25zdCBwYWdlTmF2aWdhdGlvbiA9ICh0aGlzLnN0YXRlLml0ZW1zID4gMCkgP1xuICAgICAgICAgICAgW3N0YXJ0QnV0dG9uLCBwcmV2QnV0dG9uLCBwYWdlQnV0dG9ucywgbmV4dEJ1dHRvbiwgZW5kQnV0dG9uXVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSAoXG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHBhZ2luYXRpb24tc21cIj5cbiAgICAgICAgICAgICAgICAgICAge3JlbG9hZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwYWdlLWxpbmsgZmVuZXN0cmEtc2VsZWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbXN9IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0SXRlbXMoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMCBpdGVuczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPjIwIGl0ZW5zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTAgaXRlbnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwXCI+MTAwIGl0ZW5zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5Ub2Rvczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW0gZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlIHsocGFnZSAtIDEpICogdGhpcy5zdGF0ZS5pdGVtcyArIDF9IGEgeyh0aGlzLnN0YXRlLml0ZW1zID4gMCkgPyAocGFnZSAtIDEpICogdGhpcy5zdGF0ZS5pdGVtcyArIHRoaXMuc3RhdGUucm93cy5sZW5ndGggOiB0aGlzLnN0YXRlLnJvd3MubGVuZ3RofSB7dGhpcy5zdGF0ZS50b3RhbCA/IFwiZGUgXCIgKyB0aGlzLnN0YXRlLnRvdGFsIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAge3BhZ2VOYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmZW5lc3RyYS1kYXRhdGFibGUtYWN0aW9uc1wiPkHDp8O1ZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17dGhpcy5zdGF0ZS5oZWFkZXJzLmxlbmd0aCArIDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7Il19