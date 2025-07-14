import { Children, useMemo } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useThemeStore } from "./stores/themeStore";
import { getTheme } from "./theme/themeContext"
import MainLayout from "./Layout";
import Router from "./Layout";

function App() {
  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}
export default App;
