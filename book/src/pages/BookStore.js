// src/components/BookStore.js
import React, { useState } from 'react';
import BookDetail from './BookDetails';
import MyCart from './Cart';

const BookStore = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <BookDetail addToCart={addToCart} />
      <MyCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default BookStore;
