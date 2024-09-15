import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { Navbar } from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Bienvenido a Nuestra Página
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Aquí encontrarás información sobre nosotros y cómo contactarnos.
            Lorem ipsum dolor sit amet colnsectetur adipisicing elit. Corrupti
            odio, nam sapiente ea sit nisi vero doloribus, labore voluptatibus
            laudantium magnam placeat nulla, ullam qui deserunt repudiandae ut
            consequuntur? Quaerat!Aquí encontrarás información sobre nosotros y
            cómo contactarnos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias obcaecati blanditiis error sed, eveniet quod
            a optio qui ea eaque voluptas inventore expedita vitae nisi numquam
            officia consequatur quaerat rerum?
          </Typography>
        </Box>

        <Grid item xs={12} md={6} id="nosotros">
          <Typography variant="h4" component="h2" gutterBottom>
            Nosotros
          </Typography>
          <Typography variant="body1" paragraph>
            Somos una empresa dedicada a proporcionar las mejores soluciones
            para nuestros clientes. Nuestro equipo está compuesto por expertos
            en la industria, comprometidos con la excelencia y la innovación.
          </Typography>
          <Button variant="contained" color="primary">
            Saber Más
          </Button>
        </Grid>

        <Box sx={{ py: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            non ullam perspiciatis qui ratione laborum repellendus officiis,
            cupiditate deleniti sit iure voluptatibus commodi, blanditiis
            eveniet nulla corrupti beatae corporis deserunt?
          </Typography>
        </Box>

        <Grid item xs={12} md={6} id="contacto">
          <Typography variant="h4" component="h2" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body1" paragraph>
            Si tienes alguna pregunta o deseas más información, no dudes en
            ponerte en contacto con nosotros. Puedes llamarnos o enviarnos un
            correo electrónico.
          </Typography>
          <Button variant="contained" color="secondary">
            Contáctanos
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
