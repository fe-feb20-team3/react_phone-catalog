import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './Breadcrumbs.scss';
import { Icon } from '../Icon';
import { STATIC_PAGES, SERVICE_PAGES } from '../../helpers/sitemap';
import { SECTION_LINKS } from '../../helpers';
import { GoodsContext } from '../Goods';

export const Breadcrumbs = () => {
  const [sitemap, setSitemap] = useState<SitemapLink[]>([]);
  const { goods } = useContext(GoodsContext);

  const getSitemap = useCallback(
    () => {
      if (goods.length > 0) {
        const generatedSitemap: SitemapLink[] = [
          ...STATIC_PAGES,
          ...SERVICE_PAGES,
          ...SECTION_LINKS.map(section => ({
            ...section,
            children: goods
              .filter(product => product.type === section.type)
              .map(product => ({
                name: product.name,
                title: product.name,
                url: product.id,
              })),
          })),
        ];

        setSitemap(generatedSitemap);
      }
    },
    [goods],
  );


  useEffect(() => {
    getSitemap();
  }, [goods, getSitemap]);

  const match: Match = useRouteMatch();
  const levelOne = sitemap.find(item => item.url === match.params.levelOne);
  let levelTwo = null;

  if (levelOne && match.params.levelTwo) {
    levelTwo = levelOne.children?.find((item) => item.url === match.params.levelTwo);
  }

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
        {match.params.levelOne && (
          <li className="Breadcrumbs__Item">
            <Link to={`/${levelOne?.url}` || ''} className="Breadcrumbs__Link">
              {levelOne?.title}
            </Link>
          </li>
        )}
        {levelTwo && (
          <li className="Breadcrumbs__Item">
            {levelTwo?.title}
          </li>
        )}
      </ul>
    </div>
  );
};
