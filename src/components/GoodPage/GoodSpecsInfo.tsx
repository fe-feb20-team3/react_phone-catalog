import React from 'react';
import { techInfo } from '../../helpers/techInfo';
import { ITEM_TECH_SPECS } from '../../helpers/config';

interface Props {
  goodInfo: Good | undefined;
  goodDetail: GoodDetail;
};

export const GoodSpecsInfo: React.FC<Props> = ({ goodInfo, goodDetail }) => (
  <ul className="GoodPage__SpecsList">
    {ITEM_TECH_SPECS.map(item => (
      <li className="GoodPage__SpecsItem">
        <p className="GoodPage__SpecsTitle">
          {item.name}
        </p>
        <p className="GoodPage__SpecsFeature">
          {goodInfo && techInfo(goodInfo, goodDetail, item.name, item.order)}
        </p>
      </li>
    ))}
  </ul>
);
