import {ICartPizza} from "../store/reducers/cartReducer/cart.type";

export function getTotalPrice(items: ICartPizza[]): number {
  return items.reduce((total,cartItem) => {
    return total += cartItem.price
  }, 0)
}
