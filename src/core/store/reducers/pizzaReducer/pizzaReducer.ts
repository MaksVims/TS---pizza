import {PizzasAction, PizzaState, PizzaTypeActions} from "./pizza.type";

const initialState: PizzaState = {
  pizzas: [],
  filteredPizzas: [],
  error: null,
  loading: false
}

export const pizzaReducer = (state = initialState, action: PizzasAction): PizzaState => {
  switch (action.type) {
    case PizzaTypeActions.FETCH_PIZZAS:
      return {...state, error: null, loading: true}
    case PizzaTypeActions.FETCH_PIZZAS_SUCCESS:
      return {...state, loading: false, pizzas: action.payload}
    case PizzaTypeActions.FETCH_PIZZAS_ERROR:
      return {...state, loading: false, error: action.payload}
    case PizzaTypeActions.SET_FILTERED_PIZZAS:
      return {...state, filteredPizzas: action.payload}
    default:
      return state
  }
}
