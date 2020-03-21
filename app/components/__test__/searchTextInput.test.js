/* eslint-disable no-alert */
import 'react-native';
import React from 'react';
import SearchTextInput from '../textInputs/searchTextInput';

import renderer from 'react-test-renderer';

it('should renders correctly and generating a snapShot', () => {
  const onchangeText = text => {
    alert(text);
  };
  const tree = renderer
    .create(<SearchTextInput onchangeText={onchangeText} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
