import React from 'react';
import { Link } from 'react-router-dom';

import './BackToTop.scss';
import { Icon } from '../Icon';

export const BackToTop = () => {
  const scrolToTop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="BackToTop">
      <Link
        to="#top"
        className="BackToTop__Link"
        onClick={scrolToTop}
      >
        <Icon
          name="arrow-up"
          size={2}
          border
          inActive={false}
        />
      </Link>
    </div>
  );
};
