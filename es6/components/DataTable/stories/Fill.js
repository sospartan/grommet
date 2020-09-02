function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes'; // Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js

import { columns, data } from './data';
var pinnedColumns = columns.map(function (c) {
  return _extends({}, c);
});
pinnedColumns[0].pin = true;

var Example = function Example() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet,
    full: true
  }, /*#__PURE__*/React.createElement(Box, {
    fill: "vertical"
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: pinnedColumns,
    data: data,
    step: 10,
    fill: true,
    pin: true,
    background: {
      header: {
        color: 'background-front',
        opacity: 'strong'
      },
      footer: {
        color: 'background-front',
        opacity: 'strong'
      },
      pinned: {
        color: 'background-front',
        opacity: 'strong'
      }
    }
  })));
};

storiesOf('DataTable', module).add('Fill and Pin', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});