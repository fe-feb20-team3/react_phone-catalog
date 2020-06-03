import React from 'react';
import './NotFound.scss';

export const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src="images/notFound.jpg"
        alt="Goods not found"
        className="NotFound__Image"
      />
      <picture>
        <source srcSet="./images/jxr/notFound.jxr" type="image/vnd.ms-photo" />
        <source srcSet="./images/jp2/notFound.jp2" type="image/jp2" />
        <source srcSet="./images/webp/notFound.webp" type="image/webp" />
        <img
          srcSet="./images/jpeg/notFound.jpeg"
          alt="Goods not found"
          className="NotFound__Image"
        />
      </picture>
    </div>
  );
};
