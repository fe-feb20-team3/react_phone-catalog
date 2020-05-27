import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './NavSliding.scss';
import { Icon } from '../Icon';
import { CartContext } from '../Cart';
import { FavoritesContext } from '../Favorites';
import { SECTION_LINK, FOOTER_LINKS } from '../../helpers';

export const NavSliding = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  const { cart } = useContext(CartContext);

  const handleNavSliding = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="NavSliding">
      <button
        type="button"
        className={cn('NavSliding__Button', { 'NavSliding__Button--cross': isOpen })}
        onClick={handleNavSliding}
      >
        <span className="NavSliding__ButtonLine" />
        <span className="NavSliding__ButtonLine" />
      </button>
      <section className={cn('NavSliding__Block', { show: isOpen })}>
        <div className="NavSliding__Illustration" />
        <div className="NavSliding__Content">
          <ul className="NavSliding__List--secondary NavSliding__List--icons">
            <li className="NavSliding__Item--secondary">
              <Link to="/favorites" className="NavSliding__Icon">
                <Icon
                  name="favorites"
                  tag={favorites.length}
                  size={3}
                  border={false}
                  inActive={false}
                />
              </Link>
            </li>
            <li className="NavSliding__Item--secondary">
              <Link to="/cart" className="NavSliding__Icon">
                <Icon
                  name="shopping-bag"
                  tag={cart.length}
                  size={3}
                  border={false}
                  inActive={false}
                />
              </Link>
            </li>
          </ul>
          <ul className="NavSliding__List">
            <li className="NavSliding__Item">
              <Link
                to="/"
                className="NavSliding__Link NavSliding__Link--primary"
              >
                Home
              </Link>
            </li>
            {SECTION_LINK.map(({ name, url }) => (
              <li className="NavSliding__Item" key={name}>
                <Link
                  to={url}
                  className="NavSliding__Link NavSliding__Link--primary"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="NavSliding__List--secondary">
            {FOOTER_LINKS.map(({ name, url }) => (
              <li className="NavSliding__Item--secondary" key={name}>
                <Link
                  to={url}
                  className="NavSliding__Link NavSliding__Link--secondary"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};
