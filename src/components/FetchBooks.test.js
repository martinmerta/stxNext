import React from 'react';
import { shallow } from 'enzyme';
import FetchBooks from './FetchBooks';
import ShowBook from './ShowBook';
it('includes FetchBooks', () => {
  const app = shallow(<FetchBooks />);
  expect(app.containsMatchingElement(<ShowBook />)).toEqual(true);
});
