import React from 'react';
import './NotAvailable.scss';

export const NotAvailable = () => (
  <div className="NotAvailable">
    <picture>
      <source srcSet="./images/jxr/notAvailable.jxr" type="image/vnd.ms-photo" />
      <source srcSet="./images/jp2/notAvailable.jp2" type="image/jp2" />
      <source srcSet="./images/webp/notAvailable.webp" type="image/webp" />
      <img
        srcSet="./images/jpeg/notAvailable.jpeg"
        alt="Goods not available"
        className="NotAvailable__Image"
      />
    </picture>
  </div>
);
