// src/components/Fantasy.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Fantasy.css'; // Import the updated CSS for styling
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b11.jpg';
import b4 from '../images/b12.jpg';
import b5 from '../images/b4.jpg';
import b6 from '../images/b7.jpg';
import b7 from '../images/b8.jpg';
import b8 from '../images/b9.jpg';

const fantasyBooks = [
  { id: 1, title: 'The Enchanted Realm', imgSrc: b1, description: 'Dive into a magical world full of mythical creatures and epic quests.', rating: 4.6 },
  { id: 2, title: 'Dragons and Destinies', imgSrc: b2, description: 'Follow the adventures of dragon riders and ancient prophecies.', rating: 4.7 },
  { id: 3, title: 'The Sorcerer\'s Journey', imgSrc: b3, description: 'A tale of powerful sorcery and epic battles between good and evil.', rating: 4.8 },
  { id: 4, title: 'Legends of the Hidden Lands', imgSrc: b4, description: 'Explore enchanted lands filled with mystical beings and hidden secrets.', rating: 4.4 },
  { id: 5, title: 'The Elven Kingdom', imgSrc: b5, description: 'Discover the rich history and magical wonders of the elven realm.', rating: 4.5 },
  { id: 6, title: 'Mysteries of the Fey', imgSrc: b6, description: 'Embark on a journey through the mysterious and whimsical world of the Fey.', rating: 4.3 },
  { id: 7, title: 'Wizards and Wonders', imgSrc: b7, description: 'Join wizards on a quest to uncover ancient wonders and magical artifacts.', rating: 4.6 },
  { id: 8, title: 'The Mythical Chronicles', imgSrc: b8, description: 'An epic saga of mythical creatures and legendary heroes.', rating: 4.7 },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="fantasy-stars">
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

const Fantasy = () => {
  return (
    <div className="fantasy-container">
      <h1>Fantasy Books</h1>
      <div className="fantasy-grid">
        {fantasyBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="fantasy-card">
            <img src={book.imgSrc} alt={book.title} className="fantasy-image" />
            <h2 className="fantasy-title">{book.title}</h2>
            <p className="fantasy-description">{book.description}</p>
            <div className="fantasy-rating">
              {renderStars(book.rating)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fantasy;
