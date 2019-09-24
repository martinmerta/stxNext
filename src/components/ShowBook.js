import { useState, useEffect } from 'react';
const ShowBook = ({ books }) => {
  const [content, setMoreContent] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return setMoreContent(true);
      }
    });
    return () =>
      window.removeEventListener('scroll', () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight
        ) {
          return setMoreContent(true);
        }
      });
  }, []);
  if (!content && books.length > 3) {
    return books.slice(0, 2);
  } else {
    return books;
  }
};

export default ShowBook;
