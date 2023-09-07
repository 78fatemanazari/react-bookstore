import React from 'react';
import { useSelector } from 'react-redux';
import BookStoreComponent from './BookStoreComponent';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map((book) => (
        <BookStoreComponent key={book.item_id} book={book} />
      ))}
      <hr />
    </div>
  );
};

export default BookList;
