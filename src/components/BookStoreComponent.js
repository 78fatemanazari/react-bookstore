import React from 'react';
import PropTypes from 'prop-types';

const BookStoreComponent = ({ book, onDelete }) => (
  <div className="book">
    <h2>{book.title}</h2>
    <p>
      Author:
      {book.author}
    </p>
    <button type="button" onClick={() => onDelete(book.id)}>
      Delete
    </button>
  </div>
);

BookStoreComponent.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookStoreComponent;
