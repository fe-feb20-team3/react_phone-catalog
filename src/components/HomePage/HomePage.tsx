import React from 'react';
import { BannerSlider } from '../Banner';
import { CardSlider } from '../CardSlider';
import { sldierFilter } from '../../helpers';
import { ShopCategory } from '../ShopCategory';

type Props = {
  goods: Good[];
}


export const HomePage: React.FC<Props> = ({ goods }) => {
  const hotPrices = sldierFilter(goods, 'hotPrice');
  const highPrices = sldierFilter(goods, 'newModels');

  return (
    <>
      <BannerSlider />
      <CardSlider goods={hotPrices} title="Hot prices" />
      <ShopCategory goods={goods} />
      <CardSlider goods={highPrices} title="Brand new models" />
    </>
  );
};
