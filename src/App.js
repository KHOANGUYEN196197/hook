import "./App.css";
import CustomHook from "./custom-hook";
import ReactMemo from "./reactMemo";
import HookUseEffect from "./useEffect";
import ImpreativeHandle from "./useImpreativeHandle";
import HookUseLayoutEffect from "./useLayoutEffect";
import HookUseMemo from "./useMemo";
import HookReducer from "./useReducer";
import HookUserRef from "./useRef";
import HookUseState from "./useState";
import HookUseCallBack from "./useCallback";
import ContextC from "./reactContext";
import { LightProvider } from "./reactContext/context/LightContext";

function App() {
  return (
    <LightProvider>
      <div className="App">
        {/* <HookUseState /> */}
        {/* <HookUseEffect /> */}
        {/* <HookUserRef /> */}
        {/* <HookUseLayoutEffect /> */}
        {/* <HookUseMemo /> */}
        {/* <ReactMemo /> */}
        {/* <HookUseCallBack /> */}
        {/* <ImpreativeHandle /> */}
        {/* <CustomHook /> */}
        {/* <HookReducer /> */}
        <ContextC /> {/* react.Context */}
      </div>
    </LightProvider>
  );
}

export default App;
