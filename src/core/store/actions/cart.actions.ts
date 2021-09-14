import {Dispatch} from "redux";
import {CartAction, CartTypeActions, ICartPizza} from "../reducers/cartReducer/cart.type";
import {getTotalPrice} from "../../utils/cartHelpers";

export function addItemToCart(item: ICartPizza) {
  return ({type: CartTypeActions.ADD_ITEM, payload: item})
}

export function awayOneItemFromCart(item: ICartPizza) {
  return ({type: CartTypeActions.AWAY_ONE_ITEM, payload: item})
}

export function removeItemFromCart(item: ICartPizza) {
  return ({type: CartTypeActions.REMOVE_ITEM, payload: item})
}

export function clearCart() {
  return ({type: CartTypeActions.CLEAR_CART})
}


export function setTotalPrice(cartItems: Map<ICartPizza, number>) {
  return (dispatch: Dispatch<CartAction>) => {
    const totalPrice = getTotalPrice(cartItems)
    dispatch({type: CartTypeActions.SET_TOTAL, payload: totalPrice})
  }
}
