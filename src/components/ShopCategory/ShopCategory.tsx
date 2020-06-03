import React from 'react';
import './ShopCategory.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getGoods } from '../../store';
import { SECTION_LINKS } from '../../helpers';

export const ShopCategory = () => {
  const goods: Good[] = useSelector(getGoods);

  return (
    <div className="Category">
      <h2 className="Category__Title">
        Shop by category
      </h2>
      <div className="Category__Container">
        <ul className="Category__List">
          {SECTION_LINKS.map(link => (
            <li
              className="Category__Item"
              key={link.name}
            >
              <Link to={link.url} className="Category__Link">
                <div
                  className="Category__ImageContainer"
                >
                  <picture>
                    <source srcSet={link.imgJXR} type="image/vnd.ms-photo" />
                    <source srcSet={link.imgJP2} type="image/jp2" />
                    <source srcSet={link.imgWEBP} type="image/webp" />
                    <img
                      srcSet={link.imgUrl}
                      alt={link.title}
                      className="Category__Image"
                    />
                  </picture>
                </div>
                <div className="Category__Info">
                  <h3 className="Category__InfoType Category__Paragraph">
                    {link.title}
                  </h3>
                  <p className="Category__InfoCount Category__Paragraph">
                    {goods.filter(card => card.type === link.type).length}
                    {' models'}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
