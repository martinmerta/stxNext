import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';
it('contains div with children', () => {
  const book = shallow(<Book />);
  expect(
    book.containsMatchingElement([
      <div className='book'>
        <h1 className='book-title'></h1>
        <img className='book-Img' />
        <p className='book-desc'></p>
      </div>
    ])
  ).toEqual(true);
});
