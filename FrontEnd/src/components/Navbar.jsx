import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Fashion</Link>
      </div>
      <div className="navbar-links">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="navbar-user-options">
        <Link to="/profile">Profile</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
