import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';

import "./components/Navbar.css"
import "./App.css"
import { useState } from 'react';

const App = () => {
  const [list,setList]=useState(productsDetails);
  const [cart,setCart]=useState([]);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home listItems={list} setList={setList}cart={cart} setCart={setCart}/>} />
        <Route path="/men" element={<Men listItems={list} setList={setList} cart={cart} setCart={setCart}/>} />
        <Route path="/women" element={<Women listItems={list} setList={setList} cart={cart} setCart={setCart}/>} />
        <Route path="/kids" element={<Kids listItems={list} setList={setList} cart={cart} setCart={setCart}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist cartItems={cart}
        listItems={list} setListItems={setList} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cartItems={cart} setCart={setCart}/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};
const Profile = () => <div>Profile</div>;
const productsDetails=[
  {
    "id": 6,
    "image": "images/6.jpeg",
    "ProductName": "Men Classic Casual Shirt",
    "price": 1049,
    "Category": "Men",
    "Wishlist":false
  },
  {
    "id": 4,
    "image": "images/4.jpeg",
    "ProductName": "Women Elegant Silk Dress",
    "price": 2199,
    "Category": "Women",
    "Wishlist":false
  },
  {
    "id": 9,
    "image": "images/9.jpeg",
    "ProductName": "Kids Fun Graphic T-shirt",
    "price": 499,
    "Category": "Kids",
    "Wishlist":false
  },
  {
    "id": 7,
    "image": "images/7.jpeg",
    "ProductName": "Men Slim Fit Jeans",
    "price": 1599,
    "Category": "Men",
    "Wishlist":false
  },
  {
    "id": 10,
    "image": "images/10.jpeg",
    "ProductName": "Women Cozy Woolen Sweater",
    "price": 1299,
    "Category": "Women",
    "Wishlist":false
  },
  {
    "id": 8,
    "image": "images/8.jpeg",
    "ProductName": "Kids Denim Overalls",
    "price": 749,
    "Category": "Kids",
    "Wishlist":false
  },
  {
    "id": 2,
    "image": "images/2.jpeg",
    "ProductName": "Women Formals",
    "price": 2999,
    "Category": "Women",
    "Wishlist":false
  },
  {
    "id": 3,
    "image": "images/3.jpeg",
    "ProductName": "Women Party Wear Gown",
    "price": 3499,
    "Category": "Women",
    "Wishlist":false
  },
  {
    "id": 5,
    "image": "images/5.jpeg",
    "ProductName": "Kids Cotton Shorts",
    "price": 349,
    "Category": "Kids",
    "Wishlist":false
  },
  {
    "id": 1,
    "image": "images/1.jpeg",
    "ProductName": "Men Casual pant",
    "price": 4499,
    "Category": "Men",
    "Wishlist":false
  }
]


export default App;
