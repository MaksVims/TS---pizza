import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer/cartReducer";
import {filterReducer} from "./filterReducer/filterReducer";
import {pizzaReducer} from "./pizzaReducer/pizzaReducer";


export const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
  pizza: pizzaReducer
})

export type RootState = ReturnType<typeof rootReducer>
