import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookTitle && bookAuthor) {
      onAddBook({ bookTitle, bookAuthor });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book Title" value={bookTitle} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book Author" value={bookAuthor} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
