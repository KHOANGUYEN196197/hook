import { SET_TODO, ADD_TODO, REMOVE_TODO } from "../constant";
export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
