const incrementCountType = 'INCREMENT_PRODUCT_COUNT';
const decrementCountType = 'DECREMENT_PRODUCT_COUNT';
const prepareNewProductType = 'PREPARE_NEW_PRODUCT';
const initialState = { products: [], count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType }),
  prepareNewProduct: () => ({ type: prepareNewProductType })
};

export const reducer = (state, action) => {
  state = state || initialState;
  let newState = { ...state };

  if (action.type === incrementCountType) {
        newState.count = state.count + 1;
  } else if (action.type === decrementCountType) {
        newState.count = state.count - 1;
  } else if (action.type === prepareNewProductType) {
    newState.newProduct = {
        name: "",
        description: "",
        quantityAvailable: 0
    };
  } else {
      return state;
  }

  return newState;

};
