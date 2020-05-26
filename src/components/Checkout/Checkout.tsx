import React from 'react';
import './Checkout.scss';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  return (
    <div className="Checkout">
      <h1 className="Checkout__Title">
        Thank you for purchase
      </h1>
      <div className="Checkout__BackToShop">
        <Link className="Checkout__Link" to="/">
          Go to shop
        </Link>
      </div>
    </div>
  );
};
