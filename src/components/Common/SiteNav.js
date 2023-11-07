import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './SiteNav.css';
import { useCart } from '../CartProvider/CartProvider';
import CartDropdown from '../CartProvider/CartDropdown'; // Adjust the path as needed

function SiteNav() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.productPrice, 0);
  const [showSearch, setShowSearch] = useState(false); // New state for search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query


  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (err) {
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      navigate('/'); // redirect to home after logging out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchQuery}`); // Navigate to /shop with the search query as a URL parameter
    setShowSearch(false); // Hide the search bar after navigating
  };

  return (
    <aside className="site-sidebar">
      <div className="sidebar-logo">
        <img src="/img/logo.png" alt="Pantry Parcel" className="navbar-logo" />
        <span>Pantry Parcel</span>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/shop" className="nav-item">Shop</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/review" className="nav-item">Review</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        {/* Cart and Authentication links */}
        <div className="nav-item cart" onClick={() => setShowCartDropdown(!showCartDropdown)}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <CartDropdown
          cart={cart}
          show={showCartDropdown}
          onClose={() => setShowCartDropdown(false)}
        />
        {user ? (
          <div className="nav-item" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </div>
        ) : (
          <Link to="/login" className="nav-item">
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Login</span>
          </Link>
        )}
      </nav>
    </aside>
  );
}

export default SiteNav;