import {CartAction, CartState, CartTypeActions, ICartPizza} from "./cart.type";

const initialState: CartState = {
  total: 0,
  items: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartTypeActions.SET_TOTAL:
      return {...state, total: action.payload}
    case CartTypeActions.CLEAR_CART:
      return {...state, items: []}
    case CartTypeActions.ADD_ITEM:
      return {...state, items: [...state.items, action.payload]}
    default:
      return state
  }
}
