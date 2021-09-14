export interface ICartPizza {
  id: string,
  imageUrl: string,
  name: string,
  type: string,
  size: number,
  price: number,
}

export interface CartState {
  total: number,
  items: Map<ICartPizza, number>
}

export enum CartTypeActions {
  SET_TOTAL = 'SET_TOTAL',
  ADD_ITEM = 'ADD_ITEMS',
  REMOVE_ITEM = 'REMOVE_ITEM',
  AWAY_ONE_ITEM = 'AWAY_ONE_ITEM',
  CLEAR_CART = 'CLEAR_CART'
}

interface setTotalAction {
  type: CartTypeActions.SET_TOTAL,
  payload: number
}
interface addItemAction {
  type: CartTypeActions.ADD_ITEM,
  payload: ICartPizza
}
interface awayOneItemAction {
  type: CartTypeActions.AWAY_ONE_ITEM,
  payload: ICartPizza
}
interface removeItemAction {
  type: CartTypeActions.REMOVE_ITEM,
  payload: ICartPizza
}
interface clearCartAction {
  type: CartTypeActions.CLEAR_CART,
}

export type CartAction = setTotalAction | addItemAction | removeItemAction | clearCartAction | awayOneItemAction
