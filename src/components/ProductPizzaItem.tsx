import React, {FC, useState} from 'react';
import {IPizza} from "../core/store/reducers/pizzaReducer/pizza.type";
import Button, {btnColors} from "./common/Button";
import {ReactSVG} from "react-svg";
import PlusIcon from '../assets/img/svg/plus.svg'
import classnames from 'classnames'
import {ICartPizza} from "../core/store/reducers/cartReducer/cart.type";
import {v4} from 'uuid'
import {useActions} from "../core/hooks/useActions";

interface ProductPizzaItemProps {
  pizza: IPizza
}

const allTypes: string[] = ['тонкое', 'традиционное']
const allSizes: number[] = [26, 30, 40]

const ProductPizzaItem: FC<ProductPizzaItemProps> = ({pizza}) => {
  const [cartPizza, setCartPizza] = useState<ICartPizza>(
    {
      size: pizza.sizes[0],
      type: pizza.types[0],
      name: pizza.name,
      imageUrl: pizza.imageUrl,
      price: pizza.price,
      id: v4()
    }
  )
  const {addItemToCart} = useActions()

  const addItem = () => {
    cartPizza.id = v4()
    addItemToCart(cartPizza)
  }

  return (
    <li className="products__grid-item">
      <article className="product">
        <div className="product__top">
          <div className="product__img">
            <img src={pizza.imageUrl} alt="pizza"/>
          </div>
          <h3 className="product__title">{pizza.name}</h3>
        </div>
        <div className="product__customization customization">
          <ul className="customization__list">
            {allTypes.map(type => (
              <li
                className={classnames({
                  'customization__item': true,
                  'customization__item--current': type === cartPizza.type,
                  'customization__item--disable': !pizza.types.includes(type)
                })}
                key={type}
                onClick={() => setCartPizza({...cartPizza, type})}
              >{type}</li>
            ))}
          </ul>
          <ul className="customization__list">
            {allSizes.map(size => (
              <li className={classnames({
                'customization__item': true,
                'customization__item--current': size === cartPizza.size,
                'customization__item--disable': !pizza.sizes.includes(size)
              })}
                  key={size}
                  onClick={() => setCartPizza({...cartPizza, size})}
              >{size} см.</li>
            ))}
          </ul>
        </div>
        <div className="product__bottom">
          <span className="product__cost">от {pizza.price} ₽</span>
          <Button color={btnColors.light} classes={"product__btn"} onClick={addItem}>
            <ReactSVG src={PlusIcon} className='product__btn-svg'/>
            <span>добавить</span>
          </Button>
        </div>
      </article>
    </li>
  );
};

export default ProductPizzaItem;
