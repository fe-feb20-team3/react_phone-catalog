import React from 'react';
import { techInfo } from '../../helpers/techInfo';
import { ITEM_TECH_INFO } from '../../helpers/config';
interface Props {
  goodInfo: Good | undefined;
  goodDetail: GoodDetail;
}

export const GoodTechInfo: React.FC<Props> = ({ goodInfo, goodDetail }) => (
  <ul className="GoodPage__InfoList">
    {ITEM_TECH_INFO.map(item => (
      <li className="GoodPage__InfoItem">
        <p className="GoodPage__InfoTitle">
          {item.name}
        </p>
        <p className="GoodPage__InfoFeature">
          {goodInfo && techInfo(goodInfo, goodDetail, item.name, item.order)}
        </p>
      </li>
    ))}
  </ul>
);

