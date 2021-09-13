import React, {FC} from 'react';
import {useTypedSelector} from "../core/hooks/useTypedSelector";
import CartEmpty from "../components/CartEmpty";
import {ReactSVG} from "react-svg";
import cartBigSVG from '../assets/img/svg/cart-big.svg';
import trashSVG from '../assets/img/svg/trash.svg';
import arrowSVG from '../assets/img/svg/arrow-left.svg';
import List from "../components/common/List";
import CartPizzaItem from "../components/CartPizzaItem";
import Button, {btnColors} from "../components/common/Button";

const CartPage: FC = () => {
  const {items: cartItems, total} = useTypedSelector(state => state.cart)

  if (!cartItems.length) {
    return <CartEmpty/>
  }

  return (
    <section className="cart">
      <div className="cart__container container">
        <div className="cart__top">
          <h2 className="cart__title title">
            <ReactSVG src={cartBigSVG}/>
            Корзина
          </h2>
          <button className="cart__btn-clear">
            <ReactSVG src={trashSVG}/>
            Очистить корзину
          </button>
        </div>
        <div className="cart__content">
          <List
            classes='cart__list'
            items={cartItems}
            renderItem={(pizza => (
              <CartPizzaItem key={pizza.id} pizza={pizza}/>
            ))}/>
          <div className="cart__total">
            <span className="cart__count">Всего пицц: <strong>{cartItems.length} шт.</strong></span>
            <span className="cart__total-price">Сумма заказа: <strong>{total} ₽</strong></span>
          </div>
        </div>
        <div className="cart__bottom">
          <Button href={'/'} color={btnColors.grey} classes="cart__btn-back">
            <ReactSVG src={arrowSVG}/>
            Вернуться назад
          </Button>
          <Button color={btnColors.accent}>Оплатить сейчас</Button>
        </div>

      </div>
    </section>
  );
};

export default CartPage;
