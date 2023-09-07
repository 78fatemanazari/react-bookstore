import React from 'react';
import PropTypes from 'prop-types';
import BookStoreComponent from './BookStoreComponent';
import { useSelector } from 'react-redux';

const BookList = () => {
   const books = useSelector(state => state.books.books); 
   return (
   <div className="book-list">
    <h2>Books</h2>
    {books.map((book) => (
      <BookStoreComponent key={book.item_id} book={book} />
    ))}
    <hr/>
  </div>
  ) 
};

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
