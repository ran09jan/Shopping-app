import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItemsCount, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>FashionShop</h1>
          </Link>

          <nav className="nav">
            <Link to="/category/men" className="nav-link">Men</Link>
            <Link to="/category/women" className="nav-link">Women</Link>
            <Link to="/category/children" className="nav-link">Children</Link>
          </nav>

          <div className="header-actions">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">🔍</button>
            </form>

            <Link to="/cart" className="cart-link">
              <span className="cart-icon">🛒</span>
              {cartItemsCount > 0 && (
                <span className="cart-count">{cartItemsCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 