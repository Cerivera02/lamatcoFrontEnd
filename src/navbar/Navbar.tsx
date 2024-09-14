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
import { Link } from "react-router-dom"; // Ajusta esta importación si estás usando Next.js o React Router

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Ajusta el punto de quiebre según tus necesidades

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
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
                href="#nosotros"
                sx={{ color: "text.secondary" }}
              >
                Nosotros
              </Button>
              <Button
                component="a"
                href="#contacto"
                sx={{ color: "text.secondary" }}
              >
                Contacto
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
              href="#nosotros"
              onClick={handleCloseMenu}
            >
              <ListItemText primary="Nosotros" />
            </ListItemButton>
            <ListItemButton
              component="a"
              href="#contacto"
              onClick={handleCloseMenu}
            >
              <ListItemText primary="Contacto" />
            </ListItemButton>
          </List>
          <Divider />
        </div>
      </Drawer>
    </AppBar>
  );
};
