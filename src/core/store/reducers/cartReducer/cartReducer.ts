import {ICartPizza} from "./cart.type";

export interface CartState {
  total: number,
  items: ICartPizza[]
}

export enum CartTypeActions {
  SET_TOTAL = 'SET_TOTAL',
  ADD_ITEM = 'ADD_ITEMS',
  REMOVE_ITEM = 'REMOVE_ITEMS'
}

interface setTotalAction {
  type: CartTypeActions.SET_TOTAL,
  payload: number
}
interface addItemAction {
  type: CartTypeActions.ADD_ITEM,
  payload: ICartPizza
}
interface removeItemAction {
  type: CartTypeActions.REMOVE_ITEM,
  payload: ICartPizza
}

export type CartAction = setTotalAction | addItemAction | removeItemAction

const initialState: CartState = {
  total: 0,
  items: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartTypeActions.SET_TOTAL:
      return {...state, total: action.payload}
    case CartTypeActions.ADD_ITEM:
      return {...state, items: [...state.items, action.payload]}
    default:
      return state
  }
}
