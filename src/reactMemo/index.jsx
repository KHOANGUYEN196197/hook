import React, { useCallback, useState } from "react";
import Content from "./Content";

function ReactMemo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <h1>react.memo</h1>

      <div>
        <Content onClickMe={increment} />
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default ReactMemo;
