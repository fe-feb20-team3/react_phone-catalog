import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './BackToTop.scss';
import { Icon } from '../Icon';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const threshold = -200;
  const scrolToTop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollInfo = document.documentElement.getBoundingClientRect();

      if (scrollInfo.top <= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  });

  return (
    <div className={cn(
      {
        'BackToTop': true,
        'BackToTop--visible': isVisible,
      },
    )}>
      <Link
        to="#top"
        className="BackToTop__Link"
        onClick={scrolToTop}
      >
        <Icon
          name="arrow-up"
          size="medium"
          border={false}
          inActive={false}
        />
      </Link>
    </div>
  );
};
