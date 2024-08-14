import React, { useState, useRef } from 'react';
import './Home.css';
import b1 from '../images/b10.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import b4 from '../images/b4.jpg';
import b5 from '../images/b5.jpg';
import b6 from '../images/b6.jpg';
import b7 from '../images/b7.jpg';
import b8 from '../images/b8.jpg';
import b9 from '../images/b9.jpg';

const allBooks = [
  { id: 1, title: 'The Great Adventure', imgSrc: b1, description: 'A thrilling journey through uncharted territories, filled with suspense and unexpected twists. Perfect for fans of adventure and exploration.', rating: 4.5, category: 'fiction' },
  { id: 2, title: 'Mystery of the Lost City', imgSrc: b2, description: 'Dive into a gripping mystery as our protagonist unravels secrets hidden in a forgotten city. A must-read for mystery enthusiasts.', rating: 4.0, category: 'fiction' },
  { id: 3, title: 'Romance in the Air', imgSrc: b3, description: 'A heartwarming love story that transcends time and space. Ideal for readers who enjoy romance and emotional depth.', rating: 4.7, category: 'fiction' },
  { id: 4, title: 'Science Fiction Odyssey', imgSrc: b4, description: 'Explore futuristic worlds and advanced technologies in this imaginative science fiction novel. Perfect for sci-fi lovers.', rating: 4.2, category: 'fantasy' },
  { id: 5, title: 'Historical Secrets', imgSrc: b5, description: 'Delve into a captivating historical drama that uncovers the hidden truths of the past. Great for history buffs and drama fans.', rating: 4.3, category: 'biography' },
  { id: 6, title: 'Fantasy Realm', imgSrc: b6, description: 'Embark on an epic quest in a magical realm filled with mythical creatures and ancient legends. Ideal for fans of fantasy and adventure.', rating: 4.6, category: 'fantasy' },
  { id: 7, title: 'Thriller Night', imgSrc: b7, description: 'A fast-paced thriller that keeps you on the edge of your seat from start to finish. Perfect for those who enjoy intense suspense.', rating: 4.4, category: 'fiction' },
  { id: 8, title: 'Horror Tales', imgSrc: b8, description: 'Experience spine-chilling horror stories that will keep you up at night. Ideal for readers who love a good scare.', rating: 4.1, category: 'fiction' },
  { id: 9, title: 'Self-Help Success', imgSrc: b9, description: 'A motivational guide to achieving personal success and happiness. Perfect for those looking to improve their lives and mindset.', rating: 4.8, category: 'biography' },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={i + fullStars + (halfStar ? 1 : 0)} className="far fa-star"></i>
      ))}
    </>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const scrollRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setIsSearching(false);
      setSearchResults([]);
    } else {
      setIsSearching(true);
      const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredBooks);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay">
          <h1>Welcome to Booky</h1>
          <p>Find the best Books</p>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for books..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {isSearching ? (
        <section id="search-results" className="search-results-section">
          <div className="section-content">
            <h2>Search Results</h2>
            <div className="search-results-wrapper">
              {searchResults.length > 0 ? (
                searchResults.map((book) => (
                  <div key={book.id} className="book-card">
                    <img src={book.imgSrc} alt={book.title} className="book-image" />
                    <p className="book-title">{book.title}</p>
                    <p className="book-description">{book.description}</p>
                    <div className="book-rating">
                      {renderStars(book.rating)}
                    </div>
                  </div>
                ))
              ) : (
                <p>No book found</p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section id="trending-books" className="trending-books-section">
          <div className="section-content">
            <h2>Trending Books</h2>
            <div className="trending-books-wrapper">
              <button className="scroll-button left" onClick={scrollLeft}>&#9664;</button>
              <div className="trending-books-container" ref={scrollRef}>
                {allBooks.map((book) => (
                  <div key={book.id} className="book-card">
                    <img src={book.imgSrc} alt={book.title} className="book-image" />
                    <p className="book-title">{book.title}</p>
                    <p className="book-description">{book.description}</p>
                    <div className="book-rating">
                      {renderStars(book.rating)}
                    </div>
                  </div>
                ))}
              </div>
              <button className="scroll-button right" onClick={scrollRight}>&#9654;</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
