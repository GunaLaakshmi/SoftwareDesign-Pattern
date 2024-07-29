import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ products }) => {
  return (
    <div className="product-details">
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Rental Price</th>
            <th>Available Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
