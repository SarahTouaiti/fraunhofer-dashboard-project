import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import DigitalAssistance from "./components/DigitalAssistance.jsx";
import RealWorldLaboratory from "./components/RealWorldLaboratory.jsx";
import DigitallyIntegratedProduction from "./components/DigitallyIntegratedProduction.jsx";
import EnergyMonitoring from "./components/EnergyMonitoring.jsx";
import Assembly from "./components/Assembly.jsx";
// Stator Manufacturing
import Stator from "./components/StatorManufacturing/Stator.jsx";
import LaminatedCore from "./components/StatorManufacturing/LaminatedCore.jsx";
import Rotor from "./components/StatorManufacturing/Rotor.jsx";
import Shaft from "./components/StatorManufacturing/Shaft.jsx";
import Housing from "./components/StatorManufacturing/Housing.jsx";
import FinalAssembly from "./components/StatorManufacturing/FinalAssembly.jsx";

import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/digital-assistance"
                element={<DigitalAssistance />}
              />
              <Route
                path="/real-world-laboratory"
                element={<RealWorldLaboratory />}
              />
              <Route
                path="/digitally-integrated-production"
                element={<DigitallyIntegratedProduction />}
              />
              <Route path="/energy-monitoring" element={<EnergyMonitoring />} />
              <Route
                path="/digital-assistance/assembly"
                element={<Assembly />}
              />
              <Route
                path="/digital-assistance/assembly/stator"
                element={<Stator />}
              />
              <Route
                path="/digital-assistance/assembly/laminated-core"
                element={<LaminatedCore />}
              />
              <Route
                path="/digital-assistance/assembly/rotor"
                element={<Rotor />}
              />
              <Route
                path="/digital-assistance/assembly/shaft"
                element={<Shaft />}
              />
              <Route
                path="/digital-assistance/assembly/housing"
                element={<Housing />}
              />
              <Route
                path="/digital-assistance/assembly/final-assembly"
                element={<FinalAssembly />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
