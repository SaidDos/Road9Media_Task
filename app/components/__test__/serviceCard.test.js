import 'react-native';
import React from 'react';
import ServiceCard from '../cards/serviceCard';

import renderer from 'react-test-renderer';

it('should renders correctly and generating a snapShot', () => {
  let service = {
    id: 1,
    name: 'someName',
    image: 'someImage',
    review: {overAllRating: 5},
  };
  const tree = renderer.create(<ServiceCard service={service} />).toJSON();
  expect(tree).toMatchSnapshot();
});
