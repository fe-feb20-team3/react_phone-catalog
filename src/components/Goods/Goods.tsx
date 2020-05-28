import React, { useState } from 'react';

export const GoodsContext = React.createContext<GoodsContextType>({
  goods: [],
  setSitemap: () => {},
});

export const GoodsContextWrapper: React.FC = ({ children }) => {
  const [goods, setSitemap] = useState<Good[]>([]);

  return (
    <GoodsContext.Provider value={{
      goods,
      setSitemap,
    }}
    >
      {children}
    </GoodsContext.Provider>
  );
};
