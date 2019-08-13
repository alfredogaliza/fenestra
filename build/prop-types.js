"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appPropTypes = exports.taskbarPropTypes = exports.windowStatePropTypes = exports.iconPropTypes = exports.windowPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var windowPropTypes = _propTypes.default.shape({
  props: _propTypes.default.shape({
    style: _propTypes.default.object
  }),
  template: _propTypes.default.elementType,
  templateProps: _propTypes.default.object
});

exports.windowPropTypes = windowPropTypes;

var iconPropTypes = _propTypes.default.shape({
  icon: _propTypes.default.string,
  title: _propTypes.default.string,
  window: windowPropTypes
});

exports.iconPropTypes = iconPropTypes;

var windowStatePropTypes = _propTypes.default.shape({
  key: _propTypes.default.number,
  props: _propTypes.default.shape({
    style: _propTypes.default.object
  }),
  component: _propTypes.default.elementType,
  content: _propTypes.default.element
});

exports.windowStatePropTypes = windowStatePropTypes;
var taskbarPropTypes = {
  windows: _propTypes.default.arrayOf(windowStatePropTypes),
  activate: _propTypes.default.func
};
exports.taskbarPropTypes = taskbarPropTypes;
var appPropTypes = {
  data: _propTypes.default.shape({
    windows: _propTypes.default.arrayOf(windowPropTypes),
    icons: _propTypes.default.arrayOf(iconPropTypes)
  })
};
exports.appPropTypes = appPropTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wLXR5cGVzLmpzIl0sIm5hbWVzIjpbIndpbmRvd1Byb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwicHJvcHMiLCJzdHlsZSIsIm9iamVjdCIsInRlbXBsYXRlIiwiZWxlbWVudFR5cGUiLCJ0ZW1wbGF0ZVByb3BzIiwiaWNvblByb3BUeXBlcyIsImljb24iLCJzdHJpbmciLCJ0aXRsZSIsIndpbmRvdyIsIndpbmRvd1N0YXRlUHJvcFR5cGVzIiwia2V5IiwibnVtYmVyIiwiY29tcG9uZW50IiwiY29udGVudCIsImVsZW1lbnQiLCJ0YXNrYmFyUHJvcFR5cGVzIiwid2luZG93cyIsImFycmF5T2YiLCJhY3RpdmF0ZSIsImZ1bmMiLCJhcHBQcm9wVHlwZXMiLCJkYXRhIiwiaWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLElBQU1BLGVBQWUsR0FBR0MsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDM0NDLEVBQUFBLEtBQUssRUFBRUYsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDbkJFLElBQUFBLEtBQUssRUFBRUgsbUJBQVVJO0FBREUsR0FBaEIsQ0FEb0M7QUFJM0NDLEVBQUFBLFFBQVEsRUFBRUwsbUJBQVVNLFdBSnVCO0FBSzNDQyxFQUFBQSxhQUFhLEVBQUVQLG1CQUFVSTtBQUxrQixDQUFoQixDQUF4Qjs7OztBQVFBLElBQU1JLGFBQWEsR0FBR1IsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDekNRLEVBQUFBLElBQUksRUFBRVQsbUJBQVVVLE1BRHlCO0FBRXpDQyxFQUFBQSxLQUFLLEVBQUVYLG1CQUFVVSxNQUZ3QjtBQUd6Q0UsRUFBQUEsTUFBTSxFQUFFYjtBQUhpQyxDQUFoQixDQUF0Qjs7OztBQU1BLElBQU1jLG9CQUFvQixHQUFHYixtQkFBVUMsS0FBVixDQUFnQjtBQUNoRGEsRUFBQUEsR0FBRyxFQUFFZCxtQkFBVWUsTUFEaUM7QUFFaERiLEVBQUFBLEtBQUssRUFBRUYsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDbkJFLElBQUFBLEtBQUssRUFBRUgsbUJBQVVJO0FBREUsR0FBaEIsQ0FGeUM7QUFLaERZLEVBQUFBLFNBQVMsRUFBRWhCLG1CQUFVTSxXQUwyQjtBQU1oRFcsRUFBQUEsT0FBTyxFQUFFakIsbUJBQVVrQjtBQU42QixDQUFoQixDQUE3Qjs7O0FBU0EsSUFBTUMsZ0JBQWdCLEdBQUc7QUFDNUJDLEVBQUFBLE9BQU8sRUFBRXBCLG1CQUFVcUIsT0FBVixDQUFrQlIsb0JBQWxCLENBRG1CO0FBRTVCUyxFQUFBQSxRQUFRLEVBQUV0QixtQkFBVXVCO0FBRlEsQ0FBekI7O0FBS0EsSUFBTUMsWUFBWSxHQUFHO0FBQ3hCQyxFQUFBQSxJQUFJLEVBQUV6QixtQkFBVUMsS0FBVixDQUFnQjtBQUNsQm1CLElBQUFBLE9BQU8sRUFBRXBCLG1CQUFVcUIsT0FBVixDQUNMdEIsZUFESyxDQURTO0FBSWxCMkIsSUFBQUEsS0FBSyxFQUFFMUIsbUJBQVVxQixPQUFWLENBQ0hiLGFBREc7QUFKVyxHQUFoQjtBQURrQixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB3aW5kb3dQcm9wVHlwZXMgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pLFxuICAgIHRlbXBsYXRlOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gICAgdGVtcGxhdGVQcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSk7XG5cbmV4cG9ydCBjb25zdCBpY29uUHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdpbmRvdzogd2luZG93UHJvcFR5cGVzICAgXG59KTtcblxuZXhwb3J0IGNvbnN0IHdpbmRvd1N0YXRlUHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBrZXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSksXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gICAgY29udGVudDogUHJvcFR5cGVzLmVsZW1lbnRcbn0pO1xuXG5leHBvcnQgY29uc3QgdGFza2JhclByb3BUeXBlcyA9IHtcbiAgICB3aW5kb3dzOiBQcm9wVHlwZXMuYXJyYXlPZih3aW5kb3dTdGF0ZVByb3BUeXBlcyksXG4gICAgYWN0aXZhdGU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgY29uc3QgYXBwUHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHdpbmRvd3M6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICAgICAgd2luZG93UHJvcFR5cGVzXG4gICAgICAgICksXG4gICAgICAgIGljb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgICAgIGljb25Qcm9wVHlwZXNcbiAgICAgICAgKVxuICAgIH0pXG59Il19