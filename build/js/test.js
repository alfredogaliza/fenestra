"use strict";

var _ = _interopRequireDefault(require("."));

var _reactDom = _interopRequireDefault(require("react-dom"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpY29ucyIsInRpdGxlIiwid2luZG93IiwicHJvcHMiLCJ0ZW1wbGF0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRztBQUNUQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUNKQyxJQUFBQSxLQUFLLEVBQUUsWUFESDtBQUVKQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFFBQUFBLEtBQUssRUFBRTtBQURKLE9BREg7QUFJSkcsTUFBQUEsUUFBUSxFQUFFO0FBQUEsZUFBTSxnREFBTjtBQUFBO0FBSk47QUFGSixHQUFEO0FBREUsQ0FBYjs7QUFZQUMscUJBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsWUFBRDtBQUFVLEVBQUEsSUFBSSxFQUFFUDtBQUFoQixFQUFoQixFQUEwQ1EsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQTFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlbmVzdHJhIGZyb20gXCIuXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgZGF0YSA9IHtcbiAgICBpY29uczogW3tcbiAgICAgICAgdGl0bGU6IFwiTmV3IFdpbmRvd1wiLFxuICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFdpbmRvd1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICgpID0+IDxoMT5IZWxsbywgV29ybGQhPC9oMT5cbiAgICAgICAgfVxuICAgIH1dXG59XG5cblJlYWN0RE9NLnJlbmRlcig8RmVuZXN0cmEgZGF0YT17ZGF0YX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiXX0=