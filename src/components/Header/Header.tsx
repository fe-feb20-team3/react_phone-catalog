import React, { useContext } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

import './Header.scss';
import { Nav } from '../Nav';
import { Search } from '../Search';
import { Icon } from '../Icon';
import { SECTION_LINKS } from '../../helpers';
import { FavoritesContext } from '../Favorites';
import { NavSliding } from '../NavSliding';
import { useSelector } from 'react-redux';
import { getCartGoods } from '../../store';

export const Header = () => {
  const { favorites } = useContext(FavoritesContext);
  const cart = useSelector(getCartGoods);

  return (
    <header className="Header" id="top">
      <Link to="/" className="Header__Logo">
        <img src="./img/logo.svg" alt="Logo" />
      </Link>
      <div className="Header__HomeLink">
        <NavLink
          to="/"
          exact
          className="Nav__Link"
          activeClassName="Nav__Link--active"
        >
          Home
        </NavLink>
      </div>
      <Nav links={SECTION_LINKS} className="Header__Nav" />
      <div className="Header__Search">
        <Route path="/:section" exact component={Search} />
      </div>
      <Link to="/favorites" className="Header__Button">
        <Icon
          name="favorites"
          tag={favorites.length}
          border={false}
          inActive={false}
        />
      </Link>
      <Link to="/cart" className="Header__Button">
        <Icon
          name="shopping-bag"
          tag={cart.length}
          border={false}
          inActive={false}
        />
      </Link>
      <NavSliding />
    </header>
  );
};
