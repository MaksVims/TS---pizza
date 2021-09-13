import {Dispatch} from "redux";
import {ICartPizza} from "../reducers/cartReducer/cart.type";
import {CartAction, CartTypeActions} from "../reducers/cartReducer/cartReducer";
import {getTotalPrice} from "../../utils/cartHelpers";

export function addItemToCart(item: ICartPizza) {
  return ({type: CartTypeActions.ADD_ITEM, payload: item})
}

export function setTotalPrice(cartItems: ICartPizza[]) {
  return (dispatch: Dispatch<CartAction>) => {
    const totalPrice = getTotalPrice(cartItems)
    dispatch({type: CartTypeActions.SET_TOTAL, payload: totalPrice})
  }
}
