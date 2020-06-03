import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getFavorites, removeFavorite, addFavorite } from '../../store';
import { PrimaryButton } from '../Buttons';
import { Icon } from '../Icon';
import { GoodItemProp } from './GoodItemProp';

interface Props {
  good: Good;
}

export const GoodItem: React.FC<Props> = ({ good }) => {
  const favorites: Array<string> = useSelector(getFavorites);
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => (goodId: string) => favorites.some(id => id === goodId),
    [favorites],
  );

  const handleFavorites = (selectedGood: Good) => {
    if (favorites.some(favorite => favorite === selectedGood.id)) {
      dispatch(removeFavorite(selectedGood.id));
    } else {
      dispatch(addFavorite(selectedGood.id));
    }
  };

  return (
    <article key={good.id} className="GoodsList__Item GoodItem">
      <Link to={`/${good.type}/${good.id}`} className="GoodItem__Link">
        <picture>
          <source srcSet={`./img/phones-jxr/${good.id}.0.jxr`} type="image/vnd.ms-photo" />
          <source srcSet={`./img/phones-jp2/${good.id}.0.jp2`} type="image/jp2" />
          <source srcSet={`./img/phones-webp/${good.id}.0.webp`} type="image/webp" />
          <img
            srcSet={`./img/phones-jpeg/${good.id}.0.jpeg`}
            alt={good.name}
            className="GoodItem__Image"
          />
        </picture>
        <h3 className="GoodItem__Heading">
          {good.name}
        </h3>
      </Link>

      <section className="GoodItem__Price">
        <span className="GoodItem__Price--actual">
          {(good.discount > 0)
            ? good.price - ((good.price / 100) * good.discount)
            : good.price}
        </span>
        {(good.discount > 0) && (
          <span className="GoodItem__Price--full">
            {good.price}
          </span>
        )}
      </section>

      <section className="GoodItem__PropsList">
        <GoodItemProp name="Screen" value={good.screen} />
        <GoodItemProp name="Capacity" value={good.capacity} />
        <GoodItemProp name="RAM" value={good.ram} />
      </section>

      <section className="GoodItem__Buttons">
        <div className="GoodItem__Buttons--main">
          <PrimaryButton
            id={good.id}
          />
        </div>
        <label onClick={() => handleFavorites(good)}>
          <Icon
            name={isFavorite(good.id) ? 'favorites-filled' : 'favorites'}
            border
            inActive={false}
          />
        </label>
      </section>
    </article>
  );
};
