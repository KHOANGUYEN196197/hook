import useToggle from "../hooks/useToggle";
import useWindowSize from "../hooks/useWindowSize";

function CustomHook() {
  const [isToggle, toggle] = useToggle(false);

  const windownSize = useWindowSize();
  console.log(555, windownSize);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>

      {isToggle ? "Toggle is on" : "Toggle is off"}
    </div>
  );
}
export default CustomHook;
