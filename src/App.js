import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import BookList from './components/BookList';
import Navigation from './components/Navigation';
import BookForm from './components/BookForm';


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
      <h1>Home Page</h1>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
