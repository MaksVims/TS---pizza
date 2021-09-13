import {IPizza} from "../store/reducers/pizzaReducer/pizza.type";
import axios from "axios";

export class PizzaService {

  static async getAll() {
    const response = await axios.get<IPizza[]>('http://localhost:3000/pizzas')
    return response.data
  }

}
