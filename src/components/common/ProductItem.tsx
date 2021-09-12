import React, {FC} from 'react';

const ProductItem:FC = () => {
  return (
    <article className="product">
      <div className="product__top">
        <div className="product__img">
          <img src="../img/pizza/pizza-2.png" alt="pizza" />
        </div>
        <h3 className="product__title">Сырная</h3>
      </div>
      <div className="product__customization customization">
        <ul className="customization__list">
          <li className="customization__item customization__item--current">Тонкое</li>
          <li className="customization__item">Традиционное</li>
        </ul>
        <ul className="customization__list">
          <li className="customization__item customization__item--current">26 см.</li>
          <li className="customization__item customization__item--disable">30 см.</li>
          <li className="customization__item customization__item--disable">40 см.</li>
        </ul>
      </div>
      <div className="product__bottom">
        <span className="product__cost">от 450 ₽</span>
        <button className="btn btn--light product__btn">
          <svg className="product__btn-svg">
            <use href="./img/sprite.svg#plus"></use>
          </svg>
          <span>добавить</span>
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
