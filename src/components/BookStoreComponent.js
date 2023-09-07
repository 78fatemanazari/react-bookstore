import React from 'react';
import PropTypes from 'prop-types';
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
        Author:
        {book.author}
      </p>
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
        Delete
      </button>
    </div>
  ); 
}

BookStoreComponent.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookStoreComponent;
