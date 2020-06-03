import React from 'react';

interface Props {
  name: string;
  value: string;
}

export const GoodItemProp: React.FC<Props> = ({ name, value }) => (
  <div className="GoodItem__PropsItem">
    <span className="GoodItem__PropsItem--title">
      {name}
    </span>
    <span className="GoodItem__PropsItem--value">
      {value || '-'}
    </span>
  </div>
);
