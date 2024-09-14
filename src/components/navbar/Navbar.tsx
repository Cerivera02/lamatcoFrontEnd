import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Logo
            </Link>
          </Typography>
          {!isMobile && (
            <div>
              <Button
                component="a"
                // href="#nosotros"
                sx={{ color: "text.secondary" }}
                onClick={() => scrollToSection("nosotros")}
              >
                Nosotros
              </Button>
              <Button
                component="a"
                // href="#contacto"
                sx={{ color: "text.secondary" }}
                onClick={() => scrollToSection("contacto")}
              >
                Contacto
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={{ color: "text.secondary" }}
              >
                Iniciar Sesion
              </Button>
            </div>
          )}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={isMenuOpen} onClose={handleCloseMenu}>
        <div style={{ width: 250 }}>
          <List>
            <ListItemButton
              component="a"
              // href="#nosotros"
              // onClick={handleCloseMenu}
              onClick={() => scrollToSection("nosotros")}
            >
              <ListItemText primary="Nosotros" />
            </ListItemButton>
            <ListItemButton
              component="a"
              // href="#contacto"
              // onClick={handleCloseMenu}
              onClick={() => scrollToSection("contacto")}
            >
              <ListItemText primary="Contacto" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/login"
              onClick={handleCloseMenu}
            >
              <ListItemText primary="Iniciar Sesion" />
            </ListItemButton>
          </List>
          <Divider />
        </div>
      </Drawer>
    </AppBar>
  );
};
