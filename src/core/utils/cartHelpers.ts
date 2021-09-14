import {ICartPizza} from "../store/reducers/cartReducer/cart.type";

export function getTotalPrice(items: Map<ICartPizza, number>): number {
  let result = 0
  items.forEach((value, pizza) => {
    result += pizza.price * value
  })
  return result
}

export function getTotalItems(items: Map<ICartPizza, number>): number {
  if (!items.size) return 0
  let count = 0
  items.forEach((value => count += value))
  return count
}
