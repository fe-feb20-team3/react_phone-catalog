import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { getGoods } from '../../store';
import { BannerSlider } from '../Banner';
import { CardSlider } from '../CardSlider';
import { sliderFilter, SLIDER_FILTER_TYPE } from '../../helpers';
import { ShopCategory } from '../ShopCategory';

export const HomePage = () => {
  const goods: Good[] = useSelector(getGoods);
  const hotPrices = sliderFilter(goods, SLIDER_FILTER_TYPE.hotPrice, '');
  const highPrices = sliderFilter(goods, SLIDER_FILTER_TYPE.newModels, '');

  return (
    <>
      <Helmet>
        <title>Phone Store</title>
      </Helmet>
      <BannerSlider />
      <CardSlider goods={hotPrices} title="Hot prices" />
      <ShopCategory />
      <CardSlider goods={highPrices} title="Brand new models" />
    </>
  );
};
