import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer/cartReducer";
import {filterReducer} from "./filterReducer/filterReducer";


export const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>
