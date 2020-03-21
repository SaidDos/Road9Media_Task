import 'react-native';
import React from 'react';
import Button from '../buttons/button';

import renderer from 'react-test-renderer';

it('should renders correctly', () => {
  const tree = renderer.create(<Button buttonName={'test'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
