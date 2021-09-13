export interface IPizza {
  id: number,
  imageUrl: string,
  name: string,
  types: string[],
  sizes: number[],
  price: number,
  category: string,
  rating: number
}

export enum PizzaTypeActions {
  FETCH_PIZZAS = 'FETCH_PIZZAS',
  FETCH_PIZZAS_SUCCESS = 'FETCH_PIZZAS_SUCCESS',
  FETCH_PIZZAS_ERROR = 'FETCH_PIZZAS_ERROR',
  SET_FILTERED_PIZZAS = 'SET_FILTERED_PIZZAS'
}

interface fetchPizzasAction {
  type: PizzaTypeActions.FETCH_PIZZAS,
}
interface fetchPizzasSuccessAction {
  type: PizzaTypeActions.FETCH_PIZZAS_SUCCESS,
  payload: IPizza[]
}
interface fetchPizzasErrorAction {
  type: PizzaTypeActions.FETCH_PIZZAS_ERROR,
  payload: string
}

interface SetFilteredPizzasAction {
  type: PizzaTypeActions.SET_FILTERED_PIZZAS,
  payload: IPizza[]
}

export type PizzasAction = fetchPizzasAction | SetFilteredPizzasAction | fetchPizzasErrorAction | fetchPizzasSuccessAction

export interface PizzaState {
  pizzas: IPizza[],
  filteredPizzas: IPizza[],
  loading: boolean,
  error: string | null
}
