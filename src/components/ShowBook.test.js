import React from 'react';
import { shallow } from 'enzyme';
import ShowBook from './ShowBook';

it('return all books when length is above 3', () => {
  const ShowBoo = shallow(<ShowBook books={[{}, {}, {}, {}]} />);
  expect(ShowBoo.containsMatchingElement([{}, {}, {}, {}])).toEqual(true);
});
