// src/components/Biography.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Biography.css'; // Import the updated CSS for styling
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b11.jpg';
import b4 from '../images/b12.jpg';
import b5 from '../images/b4.jpg';
import b6 from '../images/b7.jpg';
import b7 from '../images/b8.jpg';
import b8 from '../images/b9.jpg';

const biographyBooks = [
  { id: 9, title: 'The Life of a Legend', imgSrc: b1, description: 'A detailed look into the life of an iconic figure.', rating: 4.5 },
  { id: 2, title: 'Journey Through History', imgSrc: b2, description: 'An exploration of influential historical figures.', rating: 4.7 },
  { id: 3, title: 'Legends and Legacies', imgSrc: b3, description: 'Stories of remarkable lives and their impact on the world.', rating: 4.8 },
  { id: 4, title: 'The Untold Stories', imgSrc: b4, description: 'Uncovering the lesser-known facts about famous personalities.', rating: 4.3 },
  { id: 5, title: 'Heroes of Our Time', imgSrc: b5, description: 'Biographies of modern-day heroes and their contributions.', rating: 4.6 },
  { id: 6, title: 'The Great Minds', imgSrc: b6, description: 'Insights into the lives of groundbreaking thinkers and innovators.', rating: 4.4 },
  { id: 7, title: 'Portraits of Triumph', imgSrc: b7, description: 'Celebrating the achievements of influential individuals.', rating: 4.5 },
  { id: 8, title: 'The Path of Greatness', imgSrc: b8, description: 'Exploring the journeys of those who changed the course of history.', rating: 4.7 },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="biography-stars">
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

const Biography = () => {
  return (
    <div className="biography-container">
      <h1>Biography Books</h1>
      <div className="biography-grid">
        {biographyBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="biography-card">
            <img src={book.imgSrc} alt={book.title} className="biography-image" />
            <h2 className="biography-title">{book.title}</h2>
            <p className="biography-description">{book.description}</p>
            <div className="biography-rating">
              {renderStars(book.rating)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Biography;
