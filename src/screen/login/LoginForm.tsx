import { useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
  const navigate = useNavigate();
  let theme = props.isDarkMode ? "dark" : "light";

  const handleClickHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
    body.classList.add("login-background");

    return () => {
      body.classList.remove("login-background");
      body.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "0.5rem 1rem",
          backgroundColor: "background.default",
          boxShadow: 1,
          zIndex: 1200,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button variant="contained" color="secondary" onClick={handleClickHome}>
          Ir a Inicio
        </Button>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={8} md={7} lg={7}>
            <Box
              sx={{
                padding: "2rem",
                borderRadius: "0.5rem",
                backgroundColor: "background.default",
                color: "text.primary",
                backdropFilter: "blur(10px)",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                  <Typography variant="h5" component="h1">
                    Iniciar sesión
                  </Typography>
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="flex-end">
                  <IconButton
                    onClick={() => {
                      props.toggleTheme();
                    }}
                    aria-label="Cambiar tema"
                  >
                    {props.isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                      // Manejar envío de formulario
                      console.log(values);
                    }}
                  >
                    {() => (
                      <Form>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              name="email"
                              label="Correo electrónico"
                              type="email"
                              fullWidth
                              required
                              variant="outlined"
                              InputProps={{
                                style: {
                                  color: "text.primary",
                                },
                              }}
                              InputLabelProps={{
                                style: {
                                  color: "text.secondary",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              name="password"
                              label="Contraseña"
                              type="password"
                              fullWidth
                              required
                              variant="outlined"
                              InputProps={{
                                style: {
                                  color: "text.primary",
                                },
                              }}
                              InputLabelProps={{
                                style: {
                                  color: "text.secondary",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              fullWidth
                              sx={{ mt: 2 }}
                            >
                              Iniciar sesión
                            </Button>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
