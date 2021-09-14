import React, {FC} from 'react';
import {ICartPizza} from "../core/store/reducers/cartReducer/cart.type";
import Button, {btnColors, btnType} from "./common/Button";
import {ReactSVG} from "react-svg";
import decrementSVG from '../assets/img/svg/minus.svg'
import incrementSVG from '../assets/img/svg/plus.svg'
import crossSVG from '../assets/img/svg/cross.svg'
import {useActions} from "../core/hooks/useActions";

interface CartPizzaItemProps {
  pizza: ICartPizza,
  count: number
}

const CartPizzaItem: FC<CartPizzaItemProps> = ({pizza, count}) => {
  const {addItemToCart, awayOneItemFromCart, removeItemFromCart} = useActions()

  const addPizza = () => addItemToCart(pizza)
  const awayPizza = () => awayOneItemFromCart(pizza)
  const removePizza = () => removeItemFromCart(pizza)

  return (
    <li className="cart__item">
      <article className="cart__product cart-product">
        <div className="cart-product__left">
          <img className="cart-product__img" src={pizza.imageUrl} alt="small-pizza" />
            <div className="cart-product__content">
              <h3 className="cart-product__title">{pizza.name}</h3>
              <p className="cart-product__text">{pizza.type} тесто, {pizza.size}см</p>
            </div>
        </div>
        <div className="cart-product__wrapper">
          <div className="cart-product__buttons">
            <Button color={btnColors.light} type={btnType.circle} classes='cart-product__btn cart-product__btn--count' onClick={awayPizza}>
              <ReactSVG src={decrementSVG} />
              <span className="visually-hidden">Убрать 1</span>
            </Button>
            <span className="cart-product__count">{count}</span>
            <Button onClick={addPizza} color={btnColors.light} type={btnType.circle} classes='cart-product__btn cart-product__btn--count'>
              <ReactSVG src={incrementSVG} />
              <span className="visually-hidden">Добавить 1</span>
            </Button>
          </div>
          <span className="cart-product__cost">{pizza.price * count} ₽ </span>
          <Button color={btnColors.grey} type={btnType.circle} classes='cart-product__btn cart-product__btn--delete' onClick={removePizza}>
            <ReactSVG src={crossSVG} />
            <span className="visually-hidden">Удалить текущий пункт</span>
          </Button>
        </div>
      </article>
    </li>
  );
};

export default CartPizzaItem;
