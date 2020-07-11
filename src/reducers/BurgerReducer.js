const initialBurger = {
  burger: { salad: 1, cheese: 1, beef: 1 },
};

export const BurgerReducer = (state = initialBurger, action) => {
  switch (action.type) {
    case "ADD_ORDER_ITEM": {

      if (action.isAdd) {
        return { ...state, ...state.burger, [action.itemName] : state.burger[action.itemName]++};
      }

      if (state.burger[action.itemName] >= 0) {
        return { ...state, ...state.burger, [action.itemName] : state.burger[action.itemName]-- };
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};
