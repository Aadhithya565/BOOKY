import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home'; 
import Navbar from './components/Navbar';
import About from './pages/About';
import Collection from './pages/Collection';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Profile from './components/Profile';
import UserProvider from './pages/UserContext'; 
import Friction from './pages/Fictiion';
import BookDetail from './pages/BookDetails';
import Biography from './pages/Biography';
import Fantasy from './pages/Fantasy';
import Novel from './pages/Novel';
import Order from './components/Order';
import OrderTracking from './components/Tracking';
import FreeBooks from './components/Free';
import SellBook from './components/SellBook';
import { CartProvider } from './components/Cartcontext';



function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'&&location.pathname !=='/signup';
  const showfooter = location.pathname !== '/'&&location.pathname !=='/signup';

  return (
    <UserProvider> 
      <CartProvider>
      {showNavbar&&<Navbar /> }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/collection" element={<Collection />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='fiction' element={<Friction />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path='biography' element={<Biography />} />
        <Route path='/fantasy' element={<Fantasy />} />
        <Route path='/novel' element={<Novel/>} />
        <Route path='/order' element={<Order />} />
        <Route path='/tracking' element={<OrderTracking />} />
        <Route path='/free' element={<FreeBooks />} />
        <Route path='/sellbook' element={<SellBook />} />

      </Routes>
      {showfooter &&<Footer />}
      </CartProvider>
    </UserProvider>
  );
}

export default App;
