import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./screen/login/LoginForm";
import "./App.css";
import Home from "./screen/home/Home";

interface AppProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const App = (props: AppProps) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginForm
              toggleTheme={props.toggleTheme}
              isDarkMode={props.isDarkMode}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
