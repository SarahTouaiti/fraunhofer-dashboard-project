import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import DigitalAssistance from "./components/DigitalAssistance.jsx";
import RealWorldLaboratory from "./components/RealWorldLaboratory.jsx";
import DigitallyIntegratedProduction from "./components/DigitallyIntegratedProduction.jsx";
import EnergyMonitoring from "./components/EnergyMonitoring.jsx";

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
                path="/real-world-Laboratory"
                element={<RealWorldLaboratory />}
              />
              <Route
                path="/digitally-integrated-production"
                element={<DigitallyIntegratedProduction />}
              />
              <Route path="/energy-monitoring" element={<EnergyMonitoring />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
