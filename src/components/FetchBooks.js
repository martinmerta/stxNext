import React, { useState, useEffect } from 'react';
import Book from './Book';
import ShowBook from './ShowBook';
const FetchBooks = ({ searchBy, inputValue }) => {
  const [books, setBooks] = useState([]);
  const [readyBooks, setreadyBooks] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBy}:${inputValue}`,
      {
        signal: controller.signal,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': 'POST, GET',
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(`${res.status} Sorry something gone wrong.. ;(`);
        }
      })
      .then(jsonData => {
        setBooks(jsonData.items);
      })
      .catch(err => {
        return new Error(err.message);
      });
    return () => controller.abort();
  }, [searchBy, inputValue]);
  useEffect(() => {
    let keyCounter = 0;
    if (books !== undefined) {
      const booksToShow = books.map(book => {
        keyCounter++;
        const { title, description } = book.volumeInfo;
        const img = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : null;
        return (
          <Book
            title={title}
            img={img}
            description={description}
            key={title + keyCounter}
          />
        );
      });
      if (booksToShow !== undefined) {
        return setreadyBooks(booksToShow);
      }
    } else {
      return setreadyBooks(
        <Book
          title={'Upps.. Smomething gone wrong..'}
          description={'Please try again'}
        />
      );
    }
  }, [books]);
  return <ShowBook books={readyBooks} />;
};

export default FetchBooks;
