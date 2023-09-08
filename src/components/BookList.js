import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookStoreComponent from './BookStoreComponent';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const booksStore = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-list-container">
      {booksStore.books.map((book) => (
        <BookStoreComponent key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
