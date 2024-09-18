import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/home/Home";
import { LoginForm } from "./screen/login/LoginForm";
import { Admin } from "./screen/admin/Admin"; // Asegúrate de importar el componente Admin

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
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};
