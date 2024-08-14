// src/components/BookDetail.js

import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/Cartcontext';
import './BookDetails.css';

import f1 from '../images/f9.jpg';
import f2 from '../images/f8.jpg';
import f3 from '../images/f7.jpg';
import f4 from '../images/f1.jpg';
import f5 from '../images/f2.webp';
import f6 from '../images/f6.jpg';
import f7 from '../images/f3.png';
import f8 from '../images/f4.png';
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="book-detail-stars">
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

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const booksData = [
    { id: 1, title: 'The Enchanted Forest', imgSrc: f1, description: 'Magic, mystery, adventure.', rating: 4.5, author: 'Author 1' },
    { id: 2, title: 'Galactic Odyssey', imgSrc: f2, description: 'Future, cosmos, exploration.', rating: 4.7, author: 'Author 2' },
    { id: 3, title: 'The Shadow of the Wind', imgSrc: f3, description: 'Suspense, romance, intrigue.', rating: 4.8 , price: 200},
  { id: 4, title: 'Whispers of the Night', imgSrc: f4, description: 'Eerie, supernatural, secrets.', rating: 4.3 },
  { id: 5, title: 'Romantic Escapades', imgSrc: f5, description: 'Love, relationships, heartwarming.', rating: 4.6 },
  { id: 6, title: 'Mystery of the Ancient Ruins', imgSrc: f6, description: 'Adventure, archaeology, danger.', rating: 4.4 },
  { id: 7, title: 'The Time Traveler\'s Dilemma', imgSrc: f7, description: 'Time, fate, history.', rating: 4.5 },
  { id: 8, title: 'The Last Kingdom', imgSrc: f8, description: 'Bravery, loyalty, justice.', rating: 4.7 },
  ];

  const book = booksData.find(book => book.id === parseInt(id));
  if (!book) return <p>Book not found</p>;

  return (
    <div className="book-detail-container">
      <div className="book-detail-content">
        <img src={book.imgSrc} alt={book.title} className="book-detail-image" />
        <div className="book-detail-details">
          <h1 className="book-detail-title">{book.title}</h1>
          <p className="book-detail-description">{book.description}</p>
          <p className="book-detail-author">Author: {book.author}</p>
          <p className="book-detail-author">Price: {book.price}</p>
          <div className="book-detail-rating">
            {renderStars(book.rating)}
          </div>
          <button
            className="book-detail-buy-button"
            onClick={() => {
              addToCart(book);
              navigate('/cart');
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
