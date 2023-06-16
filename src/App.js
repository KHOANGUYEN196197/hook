import "./App.css";
import CustomHook from "./custom-hook";
import ReactMemo from "./reactMemo";
import HookUseEffect from "./useEffect";
import ImpreativeHandle from "./useImpreativeHandle";
import HookUseLayoutEffect from "./useLayoutEffect";
import HookUseMemo from "./useMemo";
import HookUserRef from "./useRef";
import HookUseState from "./useState";

function App() {
  return (
    <div className="App">
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUserRef /> */}
      {/* <HookUseLayoutEffect /> */}
      {/* <HookUseMemo /> */}
      {/* <ReactMemo /> */}
      {/* <ImpreativeHandle /> */}
      <CustomHook />
    </div>
  );
}

export default App;
