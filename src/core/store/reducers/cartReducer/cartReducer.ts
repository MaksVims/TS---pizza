import {CartAction, CartState, CartTypeActions} from "./cart.type";

const initialState: CartState = {
  total: 0,
  items: new Map()
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartTypeActions.SET_TOTAL:
      return {...state, total: action.payload}
    case CartTypeActions.CLEAR_CART:
      return {...state, items: new Map()}
    case CartTypeActions.ADD_ITEM:
      const cartItemsA = new Map(state.items.entries())
      const newItem = action.payload
      const candidate = Array.from(cartItemsA.keys()).find(item => item.name === newItem.name && item.size === newItem.size && item.type === newItem.type)
      if (candidate) {
        // @ts-ignore
        cartItemsA.set(candidate, cartItemsA.get(candidate) + 1)
      } else {
        cartItemsA.set(newItem, 1)
      }
      return {
        ...state,
        items: cartItemsA
      }
    case CartTypeActions.AWAY_ONE_ITEM:
      const cartItems = new Map(state.items.entries())
      let count = cartItems.get(action.payload) || 1
      count === 1 ? cartItems.delete(action.payload) : cartItems.set(action.payload, count - 1)
      return {...state, items: cartItems}
    case CartTypeActions.REMOVE_ITEM:
      const cartItemsR = new Map(state.items.entries())
      cartItemsR.delete(action.payload)
      return {...state, items: cartItemsR}
    default:
      return state
  }
}
