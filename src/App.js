import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { cData, currentColumns, currentRows } from "./currentdata";
import { vData, voltageColumns, voltageRows } from "./voltagedata";
import { pData, powerColumns, powerRows } from "./powerdata";
import LandingPage from "./pages/landingpage/LandingPage";
import CurrentChart from "./pages/currentcharts/CurrentChart";
import VoltageChart from "./pages/voltagecharts/VoltageChart";
import PowerChart from "./pages/powercharts/PowerChart";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="dashboard" element={<Home />} />
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="currentData">
              <Route index element={<List data = {cData} userColumns = {currentColumns} userRows = {currentRows}/>}  component = {List}/>
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="voltageData">
              <Route index element={<List data = {vData} userColumns = {voltageColumns} userRows = {voltageRows}/>} component = {List}/>
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="powerData">
              <Route index element={<List data = {pData} userColumns = {powerColumns} userRows = {powerRows}/>} component = {List}/>
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="currentcharts">
              <Route index element={<CurrentChart />} component={CurrentChart}/>
            </Route>
            <Route path="voltagecharts">
              <Route index element={<VoltageChart />} component={VoltageChart}/>
            </Route>
            <Route path="powercharts">
              <Route index element={<PowerChart />} component={PowerChart}/>
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
