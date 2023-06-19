//Context
// ComponentA => ComponentB => ComponentC
// 1. Create context
// 2. Provider
// 3. Consumer
import { useContext } from "react";
import ListLight from "./list-light";
import { LightContext } from "./context/LightContext";

function ContextC() {
  const context = useContext(LightContext);
  return (
    <div className="App" style={{ padding: "20px 30px" }}>
      <h1>Context</h1>
      <button onClick={context.handleToggle}>Toggle</button>

      <ListLight />
    </div>
  );
}
export default ContextC;
