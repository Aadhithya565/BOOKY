// src/components/BookHeaven.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Fiction.css'; // Import the updated CSS for styling
import b1 from '../images/f9.jpg';
import b2 from '../images/f8.jpg';
import b3 from '../images/f7.jpg';
import b4 from '../images/f1.jpg';
import b5 from '../images/f2.webp';
import b6 from '../images/f6.jpg';
import b7 from '../images/f3.png';
import b8 from '../images/f4.png';

const fictionBooks = [
  { id: 1, title: 'The Enchanted Forest', imgSrc: b1, description: 'Magic, mystery, adventure.', rating: 4.5 },
  { id: 2, title: 'Galactic Odyssey', imgSrc: b2, description: 'Future, cosmos, exploration.', rating: 4.7 },
  { id: 3, title: 'The Shadow of the Wind', imgSrc: b3, description: 'Suspense, romance, intrigue.', rating: 4.8 },
  { id: 4, title: 'Whispers of the Night', imgSrc: b4, description: 'Eerie, supernatural, secrets.', rating: 4.3 },
  { id: 5, title: 'Romantic Escapades', imgSrc: b5, description: 'Love, relationships, heartwarming.', rating: 4.6 },
  { id: 6, title: 'Mystery of the Ancient Ruins', imgSrc: b6, description: 'Adventure, archaeology, danger.', rating: 4.4 },
  { id: 7, title: 'The Time Traveler\'s Dilemma', imgSrc: b7, description: 'Time, fate, history.', rating: 4.5 },
  { id: 8, title: 'The Last Kingdom', imgSrc: b8, description: 'Bravery, loyalty, justice.', rating: 4.7 },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="book-heaven-stars">
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={i + fullStars + (halfStar ? 1 : 0)} className="far fa-star"></i>
      ))}
    </div>
  );
};

const BookHeaven = () => {
  return (
    <div className="book-heaven-container">
      <h1>Fiction Books</h1>
      <div className="book-heaven-grid">
        {fictionBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="book-heaven-card">
            <img src={book.imgSrc} alt={book.title} className="book-heaven-image" />
            <h2 className="book-heaven-title">{book.title}</h2>
            <p className="book-heaven-description">{book.description}</p>
            <div className="book-heaven-rating">
              {renderStars(book.rating)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookHeaven;
