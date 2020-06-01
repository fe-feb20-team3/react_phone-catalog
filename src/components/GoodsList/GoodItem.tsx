import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getFavorites, addFavorite, removeFavorite } from '../../store';
import { PrimaryButton } from '../Buttons';
import { Icon } from '../Icon';
import { CartContext } from '../Cart';

interface Props {
  good: Good;
}

export const GoodItem: React.FC<Props> = ({ good }) => {
  const favorites: Array<string> = useSelector(getFavorites);
  const dispatch = useDispatch();
  const { cart } = useContext(CartContext);

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
        <img
          src={good.imageUrl}
          alt={good.name}
          className="GoodItem__Image"
        />
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
        <div className="GoodItem__PropsItem">
          <span className="GoodItem__PropsItem--title">Screen</span>
          <span className="GoodItem__PropsItem--value">
            {good.screen ? good.screen : '-'}
          </span>
        </div>

        <div className="GoodItem__PropsItem">
          <span className="GoodItem__PropsItem--title">Capacity</span>
          <span className="GoodItem__PropsItem--value">
            {good.capacity ? good.capacity : '-'}
          </span>
        </div>

        <div className="GoodItem__PropsItem">
          <span className="GoodItem__PropsItem--title">RAM</span>
          <span className="GoodItem__PropsItem--value">
            {good.ram ? good.ram : '-'}
          </span>
        </div>
      </section>

      <section className="GoodItem__Buttons">
        <div className="GoodItem__Buttons--main">
          <PrimaryButton
            text={cart.some(prod => prod.id === good.id)
              ? 'Remove from cart'
              : 'Add to cart'}
            selected={cart.some(prod => prod.id === good.id)}
            id={good.id}
          />
        </div>
        <label onClick={() => handleFavorites(good)}>
          <Icon name={isFavorite(good.id) ? 'favorites-filled' : 'favorites'} border inActive={false} />
        </label>
      </section>
    </article>
  );
};
