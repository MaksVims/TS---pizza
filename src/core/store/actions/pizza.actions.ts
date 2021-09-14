import {IPizza, PizzasAction, PizzaTypeActions} from "../reducers/pizzaReducer/pizza.type";
import {PizzaService} from "../../services/pizzaService";
import {Dispatch} from "redux";


export function setFilteredPizzas(filteredPizzas: IPizza[]): PizzasAction {
  return {type: PizzaTypeActions.SET_FILTERED_PIZZAS, payload: filteredPizzas}
}

export function fetchPizzas() {
  return async (dispatch: Dispatch<PizzasAction>) => {
    try {
      dispatch({type: PizzaTypeActions.FETCH_PIZZAS})
      const pizzas = await PizzaService.getAll()
      dispatch({type: PizzaTypeActions.FETCH_PIZZAS_SUCCESS, payload: pizzas})
    } catch (e) {
      dispatch({type: PizzaTypeActions.FETCH_PIZZAS_ERROR, payload: 'Ошибка загрузки'})
    }
  }
}

