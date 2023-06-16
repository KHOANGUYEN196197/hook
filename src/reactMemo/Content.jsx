import { memo } from "react";

function Content({ onClickMe }) {
  console.log("render");
  return (
    <div>
      <div>HELLO WORD!!!!</div>
      <button onClick={onClickMe}> Increment</button>
    </div>
  );
}
export default memo(Content);
