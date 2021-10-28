export const initalState = {
  basket: [
    {
      id: "215",
      title: "some title some title some title some title",
      price: "45646",
      rating: 5,
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    },
  ],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {...state, basket: [...state.basket, action.item]};

    case "Remove_From_Basket":
      console.log(action)
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }

      return {...state, basket: newBasket};

    default:
      return state;
  }
}

export default reducer;
