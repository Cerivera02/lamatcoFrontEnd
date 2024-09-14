import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
    background: {
      default: "#121212",
    },
  },
});
