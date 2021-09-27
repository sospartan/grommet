var _excluded = ["a11yTitle", "color", "name", "onChange", "onFocus", "onBlur", "value"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useState } from 'react';
import { FormContext } from '../Form/FormContext';
import { StyledRangeInput } from './StyledRangeInput';
import { RangeInputPropTypes } from './propTypes';
var RangeInput = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      color = _ref.color,
      name = _ref.name,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      valueProp = _ref.value,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var formContext = useContext(FormContext);

  var _formContext$useFormI = formContext.useFormInput({
    name: name,
    value: valueProp
  }),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1];

  var _useState = useState(),
      focus = _useState[0],
      setFocus = _useState[1];

  return /*#__PURE__*/React.createElement(StyledRangeInput, _extends({
    "aria-label": a11yTitle,
    ref: ref,
    name: name,
    focus: focus,
    value: value
  }, rest, {
    color: color,
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: function onChange(event) {
      setValue(event.target.value);
      if (_onChange) _onChange(event);
    },
    type: "range"
  }));
});
RangeInput.displayName = 'RangeInput';
RangeInput.propTypes = RangeInputPropTypes;
export { RangeInput };