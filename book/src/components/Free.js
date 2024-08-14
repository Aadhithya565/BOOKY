import React, { useState } from 'react';
import './Free.css'; // Import CSS for styling

const booksData = [
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author 1',
    coverImage: 'https://via.placeholder.com/150',
    description: 'This is a brief description of Book Title 1.',
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author 2',
    coverImage: 'https://via.placeholder.com/150',
    description: 'This is a brief description of Book Title 2.',
  },
  // Add more books as needed
];

const FreeBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClosePreview = () => {
    setSelectedBook(null);
  };

  return (
    <div className="free-books-page">
      <h1>Free Books</h1>
      <div className="books-list">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="book-card"
            onClick={() => handleBookClick(book)}
          >
            <img src={book.coverImage} alt={book.title} className="book-cover" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">by {book.author}</p>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="book-preview">
          <button className="close-btn" onClick={handleClosePreview}>Close</button>
          <img src={selectedBook.coverImage} alt={selectedBook.title} className="preview-cover" />
          <h2 className="preview-title">{selectedBook.title}</h2>
          <p className="preview-author">by {selectedBook.author}</p>
          <p className="preview-description">{selectedBook.description}</p>
        </div>
      )}
    </div>
  );
};

export default FreeBooks;
