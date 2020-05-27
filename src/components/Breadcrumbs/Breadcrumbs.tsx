import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './Breadcrumbs.scss';
import { Icon } from '../Icon';

export const Breadcrumbs = () => {
  const match = useRouteMatch();

  return (
    <div className="Breadcrumbs">
      <ul className="Breadcrumbs__List">
        <li className="Breadcrumbs__Item">
          <Link to="/" className="Breadcrumbs__Link">
            <Icon
              name="home"
              size={1}
              border={false}
              inActive={false}
            />
          </Link>
        </li>
        {console.log('match:', match)}

      </ul>
    </div>
  );
};
