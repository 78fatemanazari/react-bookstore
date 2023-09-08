import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default Home;
