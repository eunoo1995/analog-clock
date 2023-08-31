import { RecoilRoot } from "recoil";
import "./App.css";
import AnalogClock from "./components/analogClock";
import Tooltip from "./components/tooltip";

function App() {
  return (
    <RecoilRoot>
      <AnalogClock />
      <Tooltip />
    </RecoilRoot>
  );
}

export default App;
