import { Routes, Route } from "react-router-dom";
import PricipalScreen from "./components/PrincipalScreen";
import SinglePlayer from "./components/SinglePlayer";
import Multyplayer from "./components/Multiplayer";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path = '/' element={<PricipalScreen/>}/>
      <Route path = '/singleplayer' element={<SinglePlayer/>}/>
      <Route path= '/multiplayer' element={<Multyplayer/>}/>
    </Routes>
  );
}
export default App;