import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.scss';
import { getGoods, getCartGoods } from '../../store';
import { changeCount, clearCart, deleteCartGoods } from '../../store/cart';


export const Cart = () => {
  const goods: Good[] = useSelector(getGoods);
  const cart = useSelector(getCartGoods);
  const dispatch = useDispatch();
  const [goodForBuy, setGoodForBuy] = useState<Good[]>(
    goods.filter(good => cart.some(prod => prod.id === good.id)),
  );

  const [checkoutHeight] = useState(206);
  const cartGoodWidth = 128;
  const cardGap = 16;
  const checkoutContainer = 90;
  const maxForOrder = 10;

  useEffect(() => {
    if (cart.length) {
      setGoodForBuy(goods
        .filter(good => cart
          .some(prod => prod.id === good.id)));
    }
  }, [cart, goods]);

  const totalPrice = goodForBuy
    .map(good => {
      const clearPrice = good.discount > 0
        ? good.price - ((good.price / 100) * good.discount)
        : good.price;
      const currentCount = cart.find(prod => prod.id === good.id)?.count;

      return clearPrice * (currentCount || 1);
    })
    .reduce((accum, currentValue) => currentValue + accum, 0);

  const priceWithoutDiscount = goodForBuy
    .map(good => {
      const { price } = good;
      const currentCount = cart.find(prod => prod.id === good.id)?.count;

      return price * (currentCount || 1);
    })
    .reduce((accum, currentValue) => accum + currentValue, 0);

  return (
    <>
      {cart.length === 0 && (
        <div className="Cart__Empty">
          <h1 className="Cart__EmptyTitle">
            Cart is empty :(
          </h1>
          <picture>
            <source srcSet="./images/emptyCart.jxr" type="image/vnd.ms-photo" />
            <source srcSet="./images/emptyCart.jp2" type="image/jp2" />
            <source srcSet="./images/emptyCart.webp" type="image/webp" />
            <img
              srcSet="./images/emptyCart.jpeg"
              alt="Cart is empty"
              className="Cart__EmptyImage"
            />

          </picture>
          <picture>
            <source srcSet="./images/jxr/emptyCart.jxr" type="image/vnd.ms-photo" />
            <source srcSet="./images/jp2/emptyCart.jp2" type="image/jp2" />
            <source srcSet="./images/webp/emptyCart.webp" type="image/webp" />
            <img
              srcSet="./images/jpeg/emptyCart.jpeg"
              alt="Cart is empty"
              className="Cart__EmptyImage"
            />
          </picture>
          <div className="Cart__ButtonContainer">
            <Link className="Cart__GoShop" to="/">
              Go to shop
            </Link>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div
          className="Cart container"
          style={{
            height: `${checkoutContainer + (cart.length * cartGoodWidth) + (cardGap * (cart.length - 1)) + checkoutHeight + cardGap}px`,
          }}
        >
          <h1 className="Cart__Title">
            Cart
          </h1>
          <div className="Cart__InfoContainer">
            <ul
              className="Cart__List"
              style={{
                height: `${cart.length * cartGoodWidth + cardGap * cart.length}px`
              }}
            >
              {goodForBuy.map((good, i) => (
                <li
                  className="Cart__Item"
                  key={good.id}
                  style={{
                    transform: `translateY(${(i * cartGoodWidth) + (cardGap * i - 1)}px)`,
                  }}
                >
                  <div className="Cart__Info">
                    <label
                      className="Cart__Label"
                    >
                      <button
                        className="Cart__Remove"
                        onClick={() => dispatch(deleteCartGoods(good.id))}
                        type="button"
                      />
                    </label>
                    <div className="Cart__Image-Container">
                      <img
                        src={good.imageUrl}
                        alt={good.name}
                        className="Cart__Image"
                      />
                    </div>
                    <p className="Cart__Name">
                      {good.name}
                    </p>
                  </div>
                  <div className="Cart__CountAndPrice">
                    <div className="Cart__ControlPanel">
                      <button
                        type="button"
                        className="Cart__ChangeCount"
                        disabled={
                          Boolean(cart
                            .find(prod => prod.id === good.id && prod.count === 1)?.count)
                        }
                        onClick={() => dispatch(changeCount(good.id, -1))}
                      >
                        <span className="Cart__CharMinus" />
                      </button>
                      <p className="Cart__ModelCount">
                        {cart.find(prod => prod.id === good.id)?.count}
                      </p>
                      <button
                        type="button"
                        className="Cart__ChangeCount"
                        disabled={
                          Boolean(cart
                            .find(prod => prod.id === good.id && prod.count === maxForOrder)?.count)
                        }
                        onClick={() =>  dispatch(changeCount(good.id, 1))}
                      >
                        <span className="Cart__CharPlus" />
                      </button>
                    </div>
                    <p className="Cart__Price">
                      $
                      {good.discount > 0
                        ? good.price - ((good.discount / 100) * good.price)
                        : good.price}
                    </p>
                    {good.discount > 0 && (
                      <p className="Cart__OldPriceCard">
                        $
                        {good.price}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {cart.length > 0 && (
              <div className="Cart__Checkout">
                <div className="Cart__CheckoutContainer">
                  <p className="Cart__CheckoutPrice">
                    $
                    {totalPrice}
                  </p>
                  {priceWithoutDiscount > totalPrice && (
                    <p className="Cart__OldPrice">
                      $
                      {priceWithoutDiscount}
                    </p>
                  )}
                  <p className="Cart__CheckoutTotal">
                    Total for
                    {' '}
                    {cart.length}
                    {' '}
                    items
                  </p>
                  <Link
                    to="/checkout"
                    className="Cart__CheckoutButton"
                    onClick={() => dispatch(clearCart())}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
