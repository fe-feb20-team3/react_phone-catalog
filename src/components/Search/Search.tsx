import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

import './Search.scss';
import { debounce, SECTION_LINKS } from '../../helpers';

export const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const { section } = useParams();
  const isSection = SECTION_LINKS.some(item => item.url === section);
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';
  const [visibleQuery, setVisibleQuery] = useState(query);

  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query === '' && searchInput.current) {
      searchInput.current.focus();
    }
  }, [query]);

  const updateQuery = useCallback(debounce(
    (actualQuery: string): void => {
      if (actualQuery === '') {
        searchParams.delete('query');
      } else {
        searchParams.set('query', actualQuery);
      }

      searchParams.set('page', '1');
      history.push({ search: searchParams.toString() });
    },
    1000,
  ), []);

  const handleQueryUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    updateQuery(value);
    setVisibleQuery(value);
  };

  const clearInput = () => {
    searchParams.delete('query');
    history.push({ search: searchParams.toString() });
    updateQuery('');
    setVisibleQuery('');
  };

  return (
    <div className="Search">
      {isSection && (
        <form action="./" className="Search__Form" onSubmit={e => e.preventDefault()}>
          <label htmlFor="search-field" className="Search__Label">
            <input
              id="search-field"
              type="text"
              className="Search__Input"
              value={visibleQuery}
              placeholder="Search in phones..."
              ref={searchInput}
              onChange={handleQueryUpdate}
            />
            <button
              type="button"
              className={cn({
                Search__Button: true,
                'Search__Button--clear': visibleQuery.length > 0,
              })}
              onClick={clearInput}
            />
          </label>
        </form>
      )}
    </div>
  );
};
