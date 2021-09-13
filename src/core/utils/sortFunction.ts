import {IPizza} from "../store/reducers/pizzaReducer/pizza.type";


export function filterPizzaByCategory(pizzas: IPizza[], currentCategoryFilter: string): IPizza[] {
  if (currentCategoryFilter === '') {
    return [...pizzas]
  }
  return pizzas.filter(pizza => pizza.category === currentCategoryFilter)
}

export function sortPizzaByFilter(pizzas: IPizza[], filter: string): IPizza[] {
  if (filter === 'name') {
    return [...pizzas].sort((a, b) => b.category.localeCompare(a.category))
  } else {
    // @ts-ignore
    return [...pizzas].sort((a,b) => b[filter] - a[filter])
  }
}
