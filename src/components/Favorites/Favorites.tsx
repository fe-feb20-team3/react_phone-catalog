import React, { useMemo, useEffect } from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { getGoods, getFavorites } from '../../store';
import { GoodsList } from '../GoodsList';
import { Pagination, SelectPerPage } from '../Pagination';
import { PER_PAGE_SETTINGS } from '../../helpers';
import { NotFound } from '../NotFound';

export const Favorites = () => {
  const goods: Good[] = useSelector(getGoods);
  const favorites: Array<string> = useSelector(getFavorites);

  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const favoritesProducts = useMemo(
    () => [...goods].filter(product => favorites.some(id => id === product.id)),
    [favorites, goods],
  );

  const [defaultPerPage] = PER_PAGE_SETTINGS;
  const currentPage = Number(searchParams.get('page'));
  const perPage = useMemo(() => Number(searchParams.get('perPage')), [searchParams]);

  useEffect(() => {
    if (PER_PAGE_SETTINGS.some(item => item.name === String(perPage))) {
      return;
    }

    searchParams.set('perPage', defaultPerPage.name);
    history.push({
      search: searchParams.toString(),
    });
  }, [perPage, defaultPerPage.name, history, searchParams]);


  const paginatedGoods = favoritesProducts.slice(
    (currentPage || 1) * perPage - perPage,
    (currentPage || 1) * perPage,
  );

  if (favoritesProducts.length < perPage && currentPage > 1) {
    return (
      <Redirect
        to={{
          pathname: `${location.pathname}`,
          search: `?page=1&perPage=${perPage}`,
        }}
      />
    );
  };

  return (
    <section className="section GoodsSection">
      <Helmet>
        <title>Favorite Goods</title>
      </Helmet>
      <h1 className="GoodsSection__Heading">
        Favorite Goods
      </h1>
      <div className="GoodsSection__Qty">{`${favorites.length} items`}</div>
      <div className="GoodsSection__Control">
        {favoritesProducts.length > 1 && (
          <div className="GoodSection__Select">
            <div className="GoodsSection__SelectName">
              Items on page
            </div>
            <SelectPerPage options={PER_PAGE_SETTINGS} />
          </div>
        )}
      </div>
      <GoodsList goods={paginatedGoods} />
      {paginatedGoods.length === 0 && <NotFound />}
      {favoritesProducts.length > perPage && (
        <div className="Pagination">
          <Pagination qty={favoritesProducts.length} perPage={perPage} />
        </div>
      )}
    </section>
  );
};
