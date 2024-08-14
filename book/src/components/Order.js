import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b11.jpg';
import b4 from '../images/b12.jpg';
import b5 from '../images/b4.jpg';
import b6 from '../images/b7.jpg';
import b7 from '../images/b8.jpg';
import b8 from '../images/b9.jpg';

const products = [
  { id: 1, title: 'The Enchanted Forest', imgSrc: b1, description: 'Magic, mystery, adventure.', rating: 4.5 },
  { id: 2, title: 'Galactic Odyssey', imgSrc: b2, description: 'Future, cosmos, exploration.', rating: 4.7 },
  { id: 3, title: 'The Shadow of the Wind', imgSrc: b3, description: 'Suspense, romance, intrigue.', rating: 4.8 },
  { id: 4, title: 'Whispers of the Night', imgSrc: b4, description: 'Eerie, supernatural, secrets.', rating: 4.3 },
  { id: 5, title: 'Romantic Escapades', imgSrc: b5, description: 'Love, relationships, heartwarming.', rating: 4.6 },
  { id: 6, title: 'Mystery of the Ancient Ruins', imgSrc: b6, description: 'Adventure, archaeology, danger.', rating: 4.4 },
  { id: 7, title: 'The Time Traveler\'s Dilemma', imgSrc: b7, description: 'Time, fate, history.', rating: 4.5 },
  { id: 8, title: 'The Last Kingdom', imgSrc: b8, description: 'Bravery, loyalty, justice.', rating: 4.7 },
];

const Order = () => {
  const navigate = useNavigate();

  const handleTrackOrderClick = (productId) => {
    if (productId === 1) { // Assuming you want to navigate only for the first product
      navigate('/tracking');
    }
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imgSrc} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button className="track-order-button" onClick={() => handleTrackOrderClick(product.id)}>
              Track Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;