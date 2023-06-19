import { SET_TODO, ADD_TODO, REMOVE_TODO } from "../constant";
export const initState = {
  todo: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
