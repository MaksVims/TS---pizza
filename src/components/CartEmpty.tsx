import React, {FC} from 'react';
import SmileImg from '../assets/img/ungry-smile.png'
import PosterImg from '../assets/img/cart-empty.png'
import Button, {btnColors} from "./common/Button";
import Navbar from "./Navbar";

const CartEmpty: FC = () => {
  return (
    <>
      <Navbar/>
      <section className="cart-empty">
        <div className="cart-empty__container container">
          <h2 className="cart-empty__title title">Корзина пустая
            <img className="cart-empty__smile" src={SmileImg} alt="smile"/>
          </h2>
          <p className="cart-empty__text">
            Вероятней всего, вы не заказывали ещё пиццу.
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img className="cart-empty__img" src={PosterImg} alt="Пустая корзина"/>
          <Button href={'/'} color={btnColors.black} classes={'cart-empty__btn'}
          >Вернуться назад</Button>
        </div>
      </section>
    </>
  );
};

export default CartEmpty;
