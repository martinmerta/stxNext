import React from 'react';
const Book = ({ title, img, description }) => {
  const shortenedDesc = description
    ? `${description.substring(0, 200)}...`
    : 'There is no description for this book';
  return (
    <div className='book'>
      <h1 className='book-title'>{title}</h1>
      <img className='book-Img' src={`${img}`} alt={title} />
      <p className='book-desc'>{shortenedDesc}</p>
    </div>
  );
};

export default Book;
