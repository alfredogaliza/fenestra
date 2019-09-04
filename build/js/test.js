"use strict";

var _ = _interopRequireDefault(require("."));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./styles/scss/base.scss");

require("./styles/scss/theme.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = {
  icons: [{
    title: "New Window",
    window: {
      props: {
        title: "New Window"
      },
      template: function template() {
        return React.createElement("h1", null, "Hello, World!");
      }
    }
  }]
};

_reactDom["default"].render(React.createElement(_["default"], {
  data: data
}), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpY29ucyIsInRpdGxlIiwid2luZG93IiwicHJvcHMiLCJ0ZW1wbGF0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRztBQUNUQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUNKQyxJQUFBQSxLQUFLLEVBQUUsWUFESDtBQUVKQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFFBQUFBLEtBQUssRUFBRTtBQURKLE9BREg7QUFJSkcsTUFBQUEsUUFBUSxFQUFFO0FBQUEsZUFBTSxnREFBTjtBQUFBO0FBSk47QUFGSixHQUFEO0FBREUsQ0FBYjs7QUFZQUMscUJBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsWUFBRDtBQUFVLEVBQUEsSUFBSSxFQUFFUDtBQUFoQixFQUFoQixFQUEwQ1EsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQTFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlbmVzdHJhIGZyb20gXCIuXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuL3N0eWxlcy9zY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3Njc3MvdGhlbWUuc2Nzcyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgaWNvbnM6IFt7XG4gICAgICAgIHRpdGxlOiBcIk5ldyBXaW5kb3dcIixcbiAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBXaW5kb3dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoKSA9PiA8aDE+SGVsbG8sIFdvcmxkITwvaDE+XG4gICAgICAgIH1cbiAgICB9XVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEZlbmVzdHJhIGRhdGE9e2RhdGF9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7Il19