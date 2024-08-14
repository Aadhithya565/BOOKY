// src/components/Novel.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Novel.css'; // Import the updated CSS for styling
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b11.jpg';
import b4 from '../images/b12.jpg';
import b5 from '../images/b4.jpg';
import b6 from '../images/b7.jpg';
import b7 from '../images/b8.jpg';
import b8 from '../images/b9.jpg';

const novelBooks = [
  { id: 1, title: 'The Great Adventure', imgSrc: b1, description: 'A captivating tale of courage and discovery in a richly imagined world.', rating: 4.6 },
  { id: 2, title: 'Mystery of the Hidden Village', imgSrc: b2, description: 'An intriguing novel that unveils secrets in a quaint village with dark mysteries.', rating: 4.7 },
  { id: 3, title: 'Whispers in the Wind', imgSrc: b3, description: 'A dramatic story of love, loss, and redemption set against the backdrop of a turbulent era.', rating: 4.8 },
  { id: 4, title: 'Echoes of the Past', imgSrc: b4, description: 'A gripping narrative exploring the echoes of history and their impact on the present.', rating: 4.4 },
  { id: 5, title: 'The Lost Heir', imgSrc: b5, description: 'Follow the journey of a young heir searching for their true identity and legacy.', rating: 4.5 },
  { id: 6, title: 'Beneath the Surface', imgSrc: b6, description: 'A thrilling novel delving into hidden truths and the complexities of human nature.', rating: 4.3 },
  { id: 7, title: 'The Last Sunset', imgSrc: b7, description: 'A poignant story of love and longing as two lives intersect during a fateful summer.', rating: 4.6 },
  { id: 8, title: 'Shadows of Tomorrow', imgSrc: b8, description: 'An imaginative exploration of future possibilities and the shadows they cast on our present.', rating: 4.7 },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="novel-stars">
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

const Novel = () => {
  return (
    <div className="novel-container">
      <h1>Novel Books</h1>
      <div className="novel-grid">
        {novelBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="novel-card">
            <img src={book.imgSrc} alt={book.title} className="novel-image" />
            <h2 className="novel-title">{book.title}</h2>
            <p className="novel-description">{book.description}</p>
            <div className="novel-rating">
              {renderStars(book.rating)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Novel;
