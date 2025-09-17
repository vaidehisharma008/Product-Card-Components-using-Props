import React from 'react';
import './App.css';

function ProductCard({ name, price, status }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>💲 Price: ${price}</p>
      <p>Status: {status === 'In Stock' ? '✅ In Stock' : '❌ Out of Stock'}</p>
    </div>
  );
}

function App() {
  const products = [
    { name: 'Wireless Mouse', price: 25.99, status: 'In Stock' },
    { name: 'Keyboard', price: 45.5, status: 'Out of Stock' },
    { name: 'Monitor', price: 199.99, status: 'In Stock' },
  ];

  return (
    <div className="App">
      <h1>🛒 Products List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
