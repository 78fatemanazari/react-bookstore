import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Progress from '../assets/circle2.png';

const BookStoreComponent = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="bookslist-container">
      <div className="book-container">
        <div className="book">
          <h2 className="book-title">{book.title}</h2>
          <span className="book-author">{book.author}</span>
        </div>
        <div className="btns">
          <button className="buttons" type="button">
            Comment
          </button>
          <button className="buttons" type="button" onClick={() => handleRemoveBook(book.item_id)}>
            Remove
          </button>
          <button className="buttons" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-progress">
        <img className="progress-image" src={Progress} alt="progress" />
        <span>
          <p className="precentage">64%</p>
          <p className="completed">Completed</p>
        </span>
      </div>
      <div class="Line-2"></div>
      <div className="part3">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="update-btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>  
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
