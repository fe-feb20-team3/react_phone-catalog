import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import { Nav } from '../Nav';
import { FOOTER_LINKS } from '../../helpers';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer__Content container">
      <Link to="/" className="Footer__Logo">
        <img src="./images/logo.svg" alt="Logo" />
      </Link>
      <Nav links={FOOTER_LINKS} className="Footer__Nav" />
      <div />
    </div>
  </footer>
);
