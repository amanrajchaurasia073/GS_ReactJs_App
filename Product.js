import React, { useState, useEffect } from 'react';
import './Product.css'; // You can create a CSS file for styling

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Initial state for no filter

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="product">
      <h2 className="new-products">New products</h2>
      <div className="filters">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="product-list">
  {filteredProducts.map(product => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.split(' ').slice(0, 13).join(' ')}...</p>
      {/* <p>Category: {product.category}</p> */}
      <p>Price: ${product.price}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Product;
