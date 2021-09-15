import {ICartPizza} from "../store/reducers/cartReducer/cart.type";

export function getArray(number: number): number[] {
  return new Array(number).fill(0).map((_, idx) => idx + 1)
}

export function getCountCurrentPizza(cartItems: Map<ICartPizza, number>, currentPizza: ICartPizza): number {
  let count: number = 0
  Array.from(cartItems.keys()).forEach(pizza => {
    if (pizza.name === currentPizza.name && pizza.type === currentPizza.type && pizza.size === currentPizza.size) {
      count = cartItems.get(pizza) || 0
    }
  })
  return count
}
