import React, { useReducer } from "react";
import { addTodo, setTodo, removeTodo } from "../todo/action";
import reducer, { initState } from "../todo/reducer";
//1. khai tao initState
//2. tao cac constants
//3. tac cac action
//4. tao reducer
function Todo() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { todo, todos } = state;
  const handleAdd = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(""));
  };
  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <input
        name="todo"
        value={todo}
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
        placeholder="input todo..."
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <h2>danh sach</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <React.Fragment key={index}>
              <li key={index}>{todo}</li> &nbsp;&nbsp;
              <span
                onClick={() => {
                  handleRemove(index);
                }}
              >
                X
              </span>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
export default Todo;
