import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.scss";
import {
  Typography,
  Button,
  Avatar,
  Stack,
  Container,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider,
  Fade,
  Grid,
  Box,
} from "@mui/material";

import Slider from "react-slick";
import { useState } from "react";
import Contact from "../../Components/CreatorContact";

export default function LandingPage() {
  const [openContact, setOpenContact] = useState(false)
  const lanzamientos = [
    { img: "./images/ropero.jpeg" },
    { img: "./images/techo-chapa.jpeg" },
    { img: "./images/camastro.jpeg" },
    { img: "./images/tuallas.jpeg" },
    { img: "./images/aparato-gim.png" },
    { img: "./images/calefactor.jpeg" },
    { img: "./images/mueble-tele.jpeg" },
    { img: "./images/mueble-tele.jpeg" },

  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Grid className="landing">
      <Grid container className="hero" />
      <Container className="about-section">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          className="about-card"
        >
          <Avatar
            src="/images/logo-tato.jpeg"
            className="about-avatar"
          />

          <Grid container className="about-content">
            <Typography variant="h4" className="about-title" gutterBottom>
              Pintura Electroestática de Alta Calidad
            </Typography>

            <Typography className="about-subtitle" gutterBottom>
              Protección, durabilidad y terminaciones profesionales
            </Typography>

            <Typography className="about-text">
              Brindamos servicios profesionales de pintura electrostática en polvo,
              logrando acabados resistentes, prolijos y de larga duración para todo tipo
              de piezas metálicas. Nuestro proceso garantiza una terminación superior,
              ideal para quienes buscan calidad, estética y protección en un solo trabajo.
              <br /><br />
              La pintura electrostática ofrece mayor resistencia a golpes, corrosión y
              desgaste, además de un acabado uniforme y moderno. Trabajamos con materiales
              de primera línea y un sistema eficiente que asegura resultados confiables.
              <br /><br />
              Atendemos clientes particulares e industriales, adaptándonos a cada proyecto
              con rapidez, responsabilidad y atención personalizada.
            </Typography>

            <Button href="https://wa.me/543571570590" className="about-cta">
              Pedí tu presupuesto
            </Button>
          </Grid>
        </Stack>
      </Container>

      <Grid className="releases">
        <Typography variant="h4" className="releases-title" gutterBottom>
          Trabajos Realizados
        </Typography>
        <Box className="slider-container">
          <Slider {...sliderSettings}>
            {lanzamientos.map((item, i) => (
              <Grid key={i} className="slider-item">
                <Card className="release-card">
                  <CardMedia component="img" height="400px" image={item.img} />
                </Card>
              </Grid>
            ))}
          </Slider>
        </Box>
      </Grid>

      {/* REDES */}
      <Grid className="social">
        <Typography variant="h5" gutterBottom>
          Contactános
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Stack direction="row" spacing={3} justifyContent="center">
            <IconButton
              component="a"
              href="https://www.instagram.com/sclauzero.pintura.en.polvo/"
              target="_blank"
              className="social-icon"
            >
              <img src="/svg/instagram-icon.svg" alt="Instagram" />
            </IconButton>

            <IconButton
              component="a"
              href="https://wa.me/543571570590"
              target="_blank"
              className="social-icon icon-whatsapp"
            >
              <img src="/svg/whatsapp.svg" alt="whatsapp" />
            </IconButton>
          </Stack>

        </Stack>
      </Grid>

      {/* FOOTER */}
      <Divider className="footer-divider" />
      <Grid className="footer" container direction="column" alignItems="center">
        <Box>
          © {new Date().getFullYear()} Tomas Tissera. Sitio oficial.
        </Box>
      </Grid>
    </Grid>

  );
}