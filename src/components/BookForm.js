import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(''); 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        id: uuidv4(), // Generate a unique ID
        title,
        author, 
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
