export interface CartState {
  total: number,
}

export enum CartTypeActions {
  SET_TOTAL = 'SET_TOTAL'
}

interface setTotalAction {
  type: CartTypeActions.SET_TOTAL,
  payload: number
}

export type CartAction = setTotalAction

const initialState: CartState = {
  total: 0
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartTypeActions.SET_TOTAL:
      return {...state, total: action.payload}
    default:
      return state
  }
}
