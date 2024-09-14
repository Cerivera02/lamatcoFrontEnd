import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes/theme";
import { App } from "./App.tsx";
import "./index.css";

const Main = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isDarkMode = theme === "dark";

  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("selectedTheme", theme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
