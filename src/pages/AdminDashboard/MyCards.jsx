import React from 'react';
import './MyCards.css';

const MyCards = ({ cards }) => {
  return (
    <div className="my-cards">
      {cards.map((card, index) => (
        <div className="card-container" key={index}>
          <div className="card-content">
            <p>Card Type: {card.type}</p>
            <p>Card Number: **** **** **** {card.last4}</p>
            <p>Expiry Date: {card.expiry}</p>
            <p>Cardholder Name: {card.name}</p>
            <p>Billing Address: {card.address}</p>
            <div className="button-group">
              <button className="edit-button">Edit</button>
              <button className="remove-button">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCards;
