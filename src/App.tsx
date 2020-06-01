import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loadGoods, addFavorite } from './store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoodsSection } from './components/GoodsSection';
import { GoodPage } from './components/GoodPage';
import { HomePage } from './components/HomePage';
import { Favorites } from './components/Favorites';
import { Cart, CartContextWrapper } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Breadcrumbs } from './components/Breadcrumbs';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGoods());
  }, [dispatch]);

  useEffect(
    () => {
      const favoritesJson = (localStorage.getItem('favoriteProducts'));
      const favorites = favoritesJson ? [...JSON.parse(favoritesJson)] : [];

      favorites.forEach(item => dispatch(addFavorite(item)));
    },
    [],
  );

  return (
    <>
      <CartContextWrapper>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact />
            <Route path="/:levelOne?/:levelTwo?">
              <Breadcrumbs />
            </Route>
          </Switch>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/:section" exact component={GoodsSection} />
            <Route path="/:section/:good" exact component={GoodPage} />
          </Switch>
        </div>
      </CartContextWrapper>
      <Footer />
    </>
  );
};
