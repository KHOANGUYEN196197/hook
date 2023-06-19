// /// useState
// //1. innittialState count =
// //2. action up: coint + 1, down : count-1
// // useReducer
// // 1. inittialState count = 0
// //2. action up , action down
// //3. reducer:
// //4. dispatch

import Todo from "./todo";

// import { useReducer } from "react";

// //initState
// const inittialState = 0;

// //action

// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// //reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;

//     default:
//       return state;
//   }
// };

function HookReducer() {
  // const [count, dispatch] = useReducer(reducer, inittialState);
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>useReducer</h1>

      {/* <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch(UP_ACTION);
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          dispatch(DOWN_ACTION);
        }}
      >
        down
      </button> */}
      <Todo />
    </div>
  );
}
export default HookReducer;
