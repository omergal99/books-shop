import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import MiniDrawer from "./MiniDrawer";
import AppRouter from "./AppRouter";
import AppLogs from "./AppLogs";
import { BrowserRouter as Router } from "react-router-dom";
import { LogsProvider } from "../context/LogsContext";
import { HttpProvider } from "../context/HttpContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LogsProvider>
          <HttpProvider>
            <Router>
              <MiniDrawer logsComponent={AppLogs}>
                <AppRouter />
              </MiniDrawer>
            </Router>
          </HttpProvider>
        </LogsProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
