import * as FilterCreators from './filter.actions'
import * as PizzaCreators from './pizza.actions'
import * as CartCreators from './cart.actions'

export default {
  ...FilterCreators,
  ...PizzaCreators,
  ...CartCreators
}
