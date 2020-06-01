import React, {
  useState, useEffect, useMemo, useContext,
} from 'react';
import { useParams, useRouteMatch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import { getGoods } from '../../store';
import './GoodPage.scss';
import { PrimaryButton } from '../Buttons';
import { Icon } from '../Icon';
import { fetchGoodDetail, SECTION_LINKS, sliderFilter } from '../../helpers';
import { GoodTechInfo } from './GoodTechInfo';
import { GoodSpecsInfo } from './GoodSpecsInfo';
import { CardSlider } from '../CardSlider/CardSlider';
import { LoadSpinner } from '../LoadSpinner';
import { CartContext } from '../Cart';
import { FavoritesContext } from '../Favorites';

export const GoodPage = () => {
  const goods: Good[] = useSelector(getGoods);
  const { good } = useParams();
  const match: Match = useRouteMatch();
  const [goodDetail, setGoodDetail] = useState<GoodDetail>();
  const [goodInfo, setGoodInfo] = useState<Good>();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentType = goods.find(phone => goodDetail && phone.id === goodDetail.id);
  const sliderItems = sliderFilter(goods, 'hotPrice', '');
  const { cart } = useContext(CartContext);
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const loadGoodDetail = async (goodId: string) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const data = await fetchGoodDetail(goodId);
      const preparedGoodDetail = { ...data };

      setGoodDetail(preparedGoodDetail);
      setIsLoaded(true);
    } catch (error) {
      setErrorMessage(String(error));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (goods.length) {
      const goodInfo = goods.find(item => item.id === match.params.good);

      setGoodInfo(goodInfo);
    }
  }, [goods, match.params.good]);

  useEffect(() => {
    loadGoodDetail(good);
  }, [good]);

  const handleImages = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setActiveImageIndex(i);
  };

  const handleFavorites = (selectedGood: Good) => {
    if (isFavorite(selectedGood)) {
      removeFavorite(selectedGood);
    } else {
      addFavorite(selectedGood);
    }
  };

  const price = useMemo(
    () => (goodInfo && goodInfo.discount > 0
      ? goodInfo.price - ((goodInfo.price / 100) * goodInfo.discount)
      : goodInfo && goodInfo.price),
    [goodInfo],
  );

  if (match.params.section === 'undefined' && goods && currentType) {
    const typeParam = SECTION_LINKS.find(section => section.type === currentType.type);

    if (typeParam) {
      return <Redirect to={`/${typeParam.url}/${match.params.good}`} />;
    }
  }

  return (
    <>
      <section className="section">

        {errorMessage && <div>{errorMessage}</div>}
        {isLoading
          && (
            <div className="GoodPage__Loading">
              <LoadSpinner />
            </div>
          )}
        {isLoading && isLoaded && ''}
        {goodDetail && (
          <article className="GoodPage">
            <Helmet>
              <title>{goodDetail.name}</title>
            </Helmet>
            <h1 className="GoodPage__Heading">{goodDetail.name}</h1>
            <div className="GoodPage__Content">
              <div className="GoodPage__Column">
                <section className="GoodPage__Images">
                  <ul className="GoodPage__ImageList">
                    {goodDetail.images.map((image, i) => (
                      <li
                        className={cn({
                          'GoodPage__Image--current': i === activeImageIndex,
                        },
                        'GoodPage__ImageItem')}
                        key={image}
                      >
                        <a href="./#" onClick={e => handleImages(e, i)}>
                          <img
                            src={image}
                            alt={goodDetail.name}
                            className="GoodPage__Image"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <img
                    src={goodDetail.images[activeImageIndex]}
                    alt={goodDetail.name}
                    className="GoodPage__ImageBig"
                  />
                </section>
              </div>
              <div className="GoodPage__Column">
                <span className="GoodPage__Id">
                  ID:
                  {' '}
                  {goodInfo && goodInfo.id}
                </span>
                <section className="GoodPage__NarrowBlock">
                  <div className="GoodPage__Price">
                    <span className="GoodPage__Price--actual">
                      {price}
                    </span>
                    {(goodInfo && goodInfo.discount > 0) && (
                      <span className="GoodPage__Price--full">
                        {goodInfo.price}
                      </span>
                    )}
                  </div>
                  <div className="GoodPage__Buttons">
                    <div className="GoodPage__Buttons--main">
                      <PrimaryButton
                        text={cart.some(prod => prod.id === match.params.good)
                          ? 'Remove from cart'
                          : 'Add to cart'}
                        selected={cart.some(prod => prod.id === match.params.good)}
                        id={match.params.good}
                      />
                    </div>
                    <div className="GoodPage__Buttons--favorites">
                      <label onClick={() => handleFavorites(good)}>
                        <Icon name={isFavorite(good) ? 'favorites-filled' : 'favorites'} border inActive={false} />
                      </label>
                    </div>
                  </div>
                </section>
                <section className="GoodPage__Info">
                  <GoodTechInfo
                    goodDetail={goodDetail}
                    goodInfo={goodInfo}
                  />
                </section>
              </div>

              <div className="GoodPage__Column">
                <section className="GoodPage__Description">
                  <h2 className="GoodPage__SubHeading">About</h2>
                  {goodInfo && goodInfo.snippet}
                  <div className="GoodPage__MoreInfo">
                    <h3 className="GoodPage__MoreInfo--SubHeading">More info</h3>
                    {goodDetail && goodDetail.description}
                  </div>
                </section>
              </div>

              <div className="GoodPage__Column">
                <section className="GoodPage__TechSpecs">
                  <h2 className="GoodPage__SubHeading">Tech specs</h2>
                  <ul>
                    <GoodSpecsInfo
                      goodDetail={goodDetail}
                      goodInfo={goodInfo}
                    />
                  </ul>
                </section>
              </div>
            </div>
          </article>
        )}
      </section>
      <CardSlider goods={sliderItems} title="You may also like" />
    </>
  );
};
