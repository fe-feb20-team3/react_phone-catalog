import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

interface Props {
  links: Link[];
  className?: string;
}

export const Nav: React.FC<Props> = ({ links, className }) => (
  <nav className={`Nav ${className || ''}`}>
    <ul className="Nav__List">
      {links.map(({ name, url, exact, external }) => (
        <li className="Nav__Item" key={name}>
          {external && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="Nav__Link">
              {name}
            </a>
          )}
          {!external && (
            <NavLink
              to={`/${url}`}
              exact={exact}
              className="Nav__Link"
              activeClassName="Nav__Link--active"
            >
              {name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
