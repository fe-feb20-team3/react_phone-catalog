import React, { useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './GoodsSection.scss';
import { GoodsList } from '../GoodsList';
import { Pagination, SelectPerPage } from '../Pagination';
import { NotAvailable } from '../NotAvailable';
import {
  sortBy,
  SECTION_LINK,
  SORT_TYPES,
  PER_PAGE_SETTINGS,
} from '../../helpers';
import { Select } from '../Select';

interface Props {
  goods: Good[];
}

export const GoodsSection: React.FC<Props> = ({ goods }) => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const query = searchParams.get('query')?.toLowerCase() || '';
  const currentPage = Number(searchParams.get('page'));
  const [defaultPerPage] = PER_PAGE_SETTINGS;
  const perPageParam = useMemo(() => searchParams.get('perPage'), [searchParams]);
  let perPage = Number(defaultPerPage.name);

  if (PER_PAGE_SETTINGS.find(item => item.name === perPageParam)) {
    perPage = Number(PER_PAGE_SETTINGS.find(item => item.name === perPageParam)?.name);
  } else {
    searchParams.set('perPage', defaultPerPage.name);
    history.push({
      search: searchParams.toString(),
    });
  }

  const sortParam = searchParams.get('sortBy');
  const sortType = SORT_TYPES.find((sort: SortType) => sort.type === sortParam) || SORT_TYPES[1];

  if (!sortType) {
    searchParams.set('sortBy', SORT_TYPES[1].type);
    history.push({
      search: searchParams.toString(),
    });
  }

  const { section } = useParams();
  const sectionProp = SECTION_LINK.find(link => link.url === `/${section}`);

  const filteredGoods = useMemo(
    () => goods.filter(good => good.type === sectionProp?.type),
    [goods, sectionProp],
  );

  const searchedGoods = useMemo(
    () => filteredGoods.filter(good => {
      return `${good.name} ${good.snippet}`.toLowerCase().includes(query);
    }),
    [query, filteredGoods],
  );

  const sortedGoods = useMemo(
    () => sortBy(searchedGoods, sortType),
    [searchedGoods, sortType],
  );

  const paginatedGoods = sortedGoods.slice(
    (currentPage || 1) * perPage - perPage,
    (currentPage || 1) * perPage,
  );

  return (
    <>
      {sortedGoods.length === 0 && (
        <NotAvailable />
      )}
      {sortedGoods.length >= 1 && (
        <section className="section GoodsSection">
          <Helmet>
            <title>{sectionProp?.title || sectionProp?.name}</title>
          </Helmet>
          <h1 className="GoodsSection__Heading">
            {sectionProp?.title || sectionProp?.name}
          </h1>
          <div className="GoodsSection__Qty">{`${filteredGoods.length} models`}</div>

          <div className="GoodsSection__Control">
            {filteredGoods.length > 1 && (
              <>
                <div className="GoodsSection__Select">
                  <div className="GoodsSection__SelectName">
                    Sort by
                  </div>
                  <Select options={SORT_TYPES} />
                </div>

                <div className="GoodSection__Select">
                  <div className="GoodsSection__SelectName">
                    Items on page
                  </div>
                  <SelectPerPage options={PER_PAGE_SETTINGS} />
                </div>
              </>
            )}
          </div>

          <div className="GoodsSection__Container">
            <GoodsList goods={paginatedGoods} />
          </div>
          {searchedGoods.length > perPage && (
            <div className="Pagination">
              <Pagination qty={searchedGoods.length} perPage={perPage} />
            </div>
          )}
        </section>
      )}
    </>
  );
};
