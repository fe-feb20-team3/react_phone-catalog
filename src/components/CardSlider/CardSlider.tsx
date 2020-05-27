import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { GoodItem } from '../GoodsList';
import './CardSlider.scss';

interface Props {
  goods: Good[];
  title: string;
}

export const CardSlider: React.FC<Props> = ({ goods, title }) => {
  const [left, setLeft] = useState(0);
  const myWidth = useRef<HTMLDivElement>(null);
  const cardGap = 16;
  const minCardWidth = 272;
  const [cardsOnOneMoment, setCardsOnOneMoment] = useState(4);
  const [cardWidth, setCardWidth] = useState(minCardWidth);
  const cardsLength = goods.length;
  const [position, setPosition] = useState(cardsOnOneMoment);

  const handleSlider = (path: number) => {
    const newLeftPosition = (cardWidth + cardGap) * -path;

    setLeft(left + newLeftPosition);
    setPosition(position + path);
  };

  useEffect(() => {
    const containerWidth = myWidth.current?.offsetWidth || 0;
    const visibleCardsQTY = Math.floor(containerWidth / cardWidth);
    const gapsWidth = (visibleCardsQTY - 1) * cardGap;
    const visibleCardWidth = (containerWidth - gapsWidth) / visibleCardsQTY;

    setCardsOnOneMoment(visibleCardsQTY);
    setPosition(visibleCardsQTY);
    setLeft(0);
    setCardWidth(visibleCardWidth);
  }, [myWidth.current?.offsetWidth]);

  return (
    <>
      <div
        className="Card__Container"
        ref={myWidth}
      >
        <div className="Card__Title-site">
          <div>
            <h2 className="Card__Title">{title}</h2>
          </div>
          <div className="Card__Buttons">
            <button
              className="Card__Button"
              type="button"
              onClick={() => handleSlider(-1)}
              disabled={position === cardsOnOneMoment}
            >
              <div
                className={cn({
                  'Card__Button--arrow-left': true,
                  'Card__Button--arrow': true,
                  'Card__Button--arrow--disabled': position === cardsOnOneMoment,
                })}
              />
            </button>
            <button
              className="Card__Button"
              type="button"
              onClick={() => handleSlider(1)}
              disabled={position === cardsLength}
            >
              <div
                className={cn({
                  'Card__Button--arrow-right': true,
                  'Card__Button--arrow': true,
                  'Card__Button--arrow--disabled': position === cardsLength,
                })}
              />
            </button>
          </div>
        </div>
        <ul
          className="Card"
          style={{
            transform: `translateX(${left}px)`,
          }}
        >
          {goods.map(card => (
            <li
              key={card.id}
              className="Card__Item"
              style={{
                width: `${cardWidth}px`,
              }}
            >
              <GoodItem good={card} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
