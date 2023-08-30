import React from 'react';
import PropTypes from 'prop-types';
import BookStoreComponent from './BookStoreComponent';

const BookList = ({ books, onDelete }) => (
  <div className="book-list">
    <h2>Books</h2>
    {books.map((book) => (
      <BookStoreComponent key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
