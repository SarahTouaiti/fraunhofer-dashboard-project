import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";

import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex">
          <Sidebar />
          <Box component="main" flexGrow={1}>
            <Topbar />
            {/* Hier kommt der restliche Content */}
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
