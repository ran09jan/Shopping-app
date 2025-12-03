import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import './Home.css';

const Home = ({ addToCart, searchTerm }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || searchTerm;
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  const featuredProducts = filteredProducts.slice(0, 8);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to FashionShop</h1>
            <p>Discover the latest trends in men's, women's, and children's apparel</p>
            <Link to="/category/men" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid grid grid-3">
            {categories.map(category => (
              <Link key={category.id} to={`/category/${category.id}`} className="category-card card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Products'}
          </h2>
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <p>No products found matching your search.</p>
              <Link to="/" className="btn btn-primary">View All Products</Link>
            </div>
          ) : (
            <div className="products-grid grid grid-4">
              {featuredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}
          {!searchQuery && filteredProducts.length > 8 && (
            <div className="view-more">
              <Link to="/category/men" className="btn btn-secondary">View More Products</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home; 