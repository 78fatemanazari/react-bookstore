import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookStoreComponent = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>
        <span>Author: </span>
        <span>{book.author}</span>
      </p>
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
        Delete
      </button>
    </div>
  );
};

BookStoreComponent.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookStoreComponent;
