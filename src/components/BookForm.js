import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuidv4();
    if (title && author) {
      dispatch(
        addBook({
          title,
          author,
          category,
          item_id: itemId,
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="book-form">
      <h2 className="new-book">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input className="title-input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="author-input" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="add-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
