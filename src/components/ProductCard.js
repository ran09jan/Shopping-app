import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-overlay">
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₹{product.price}</p>
          <div className="product-colors">
            {product.colors.slice(0, 3).map((color, index) => (
              <span key={index} className="color-dot" title={color}></span>
            ))}
            {product.colors.length > 3 && (
              <span className="color-more">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 