export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_RESTAURANT_TO_FAVORITESLIST":
      return {
        ...state,
        favoriteslist: [action.payload, ...state.favoriteslist],
      };
    case "REMOVE_RESTAURANT_FROM_FAVORITESLIST":
      return {
        ...state,
        favoriteslist: state.favoriteslist.filter(
          (evet) => evet.restaurant.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
