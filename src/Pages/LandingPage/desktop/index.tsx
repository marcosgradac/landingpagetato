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
  Box,
} from "@mui/material";

import Slider from "react-slick";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet-async";

export default function LandingDesktop() {
  const [openContact, setOpenContact] = useState(false);

  const lanzamientos = [
    { img: "./images/techo-chapa.jpeg", alt: "Pintura en polvo en techo de chapa" },
    { img: "./images/camastro.jpeg", alt: "Camastro pintado con pintura electrostática" },
    { img: "./images/tuallas.jpeg", alt: "Soporte metálico con pintura en polvo" },
    { img: "./images/aparato-gim.png", alt: "Aparato de gimnasio pintado en polvo" },
    { img: "./images/calefactor.jpeg", alt: "Calefactor con terminación en pintura en polvo" },
    { img: "./images/silla.jpeg", alt: "Silla metálica pintada en polvo" },
    { img: "./images/mesa.jpeg", alt: "Mesa metálica con pintura electrostática" },
    { img: "./images/rio3.jpeg", alt: "Trabajo de pintura en polvo industrial" },
    { img: "./images/rio32.jpeg", alt: "Detalle de pintura electrostática en polvo" },
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
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Pintura en polvo industrial en Río Tercero | Sclauzero</title>
        <meta
          name="description"
          content="Empresa de pintura electrostática en polvo en Río Tercero. Trabajos industriales y particulares en piezas metálicas con terminaciones duraderas y profesionales."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tudominio.com/" />
      </Helmet>

      <Grid className="landing">

        {/* ================= HERO ================= */}
        <Box className="hero">
          <Avatar
            src="/images/logo-tato.jpeg"
            className="hero-avatar"
            alt="Sclauzero pintura en polvo industrial"
          />
        </Box>

        {/* ================= ABOUT ================= */}
        <Container className="about-section">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            className="about-card"
          >
            <Grid container className="about-content">

              {/* ⭐ SEO H1 */}
              <Typography component="h1" variant="h4" className="about-title" gutterBottom>
                Pintura en polvo Industrial
              </Typography>

              {/* ⭐ SEO H2 */}
              <Typography component="h2" variant="subtitle1" className="about-subtitle" gutterBottom>
                Protección, durabilidad y terminaciones profesionales
              </Typography>

              <Typography className="about-text">
                Brindamos servicios profesionales de{" "}
                <strong>pintura electrostática en polvo para piezas metálicas</strong>,
                logrando acabados resistentes, prolijos y de larga duración.
                Nuestro proceso garantiza una terminación superior, ideal para
                proyectos que requieren calidad, estética y protección.
                <br /><br />
                La pintura en polvo ofrece mayor resistencia a golpes, corrosión y
                desgaste, además de un acabado uniforme y moderno. Trabajamos con
                materiales de primera línea y un sistema eficiente que asegura
                resultados confiables.
                <br /><br />
                Atendemos clientes particulares e industriales en{" "}
                <strong>Río Tercero y la región</strong>, adaptándonos a cada proyecto
                con rapidez, responsabilidad y atención personalizada.
              </Typography>

              {/* ⭐ CTA WhatsApp optimizado */}
              <Button
                href="https://wa.me/543571570590?text=Hola%2C%20quisiera%20pedir%20un%20presupuesto%20de%20pintura%20en%20polvo.%20%C2%BFPodr%C3%ADan%20asesorarme%3F"
                target="_blank"
                className="about-cta"
              >
                Pedí tu presupuesto
              </Button>

            </Grid>
          </Stack>
        </Container>

        {/* ================= TRABAJOS ================= */}
        <Grid className="releases" id="trabajos">
          {/* ⭐ SEO H2 */}
          <Typography component="h2" variant="h4" className="releases-title" gutterBottom>
            Trabajos realizados
          </Typography>

          <Box className="slider-container">
            <Slider {...sliderSettings}>
              {lanzamientos.map((item, i) => (
                <Grid key={i} className="slider-item">
                  <Card className="release-card">
                    <CardMedia
                      component="img"
                      height="400"
                      image={item.img}
                      alt={item.alt} // ⭐ SEO ALT
                    />
                  </Card>
                </Grid>
              ))}
            </Slider>
          </Box>
        </Grid>

        {/* ================= UBICACIÓN ================= */}
        <Grid className="location" id="ubicacion">
          <Container maxWidth="lg">

            {/* ⭐ SEO H2 */}
            <Typography component="h2" variant="h4" className="location-title" gutterBottom>
              Dónde estamos
            </Typography>

            <Grid container spacing={4} alignItems="stretch">

              {/* MAPA */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="map-container">
                  <iframe
                    title="Ubicación Sclauzero pintura en polvo en Río Tercero"
                    src="https://www.google.com/maps?q=Independencia%20145,%20R%C3%ADo%20Tercero,%20C%C3%B3rdoba&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </Box>
              </Grid>

              {/* INFO */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card className="location-card">
                  <CardContent className="location-card-content">
                    <Box>

                      {/* ⭐ SEO H3 */}
                      <Typography component="h3" variant="h6" className="location-card-title">
                        Sclauzero – Pintura en polvo
                      </Typography>

                      <Typography className="location-text">
                        Empresa de pintura electrostática ubicada en<br />
                        📍 Independencia 145 · Río Tercero, Córdoba
                      </Typography>

                      <Divider sx={{ my: 2 }} />

                      <Typography variant="subtitle1" className="location-subtitle">
                        🕒 Horarios
                      </Typography>

                      <Typography className="location-text">
                        Lunes a Viernes<br />
                        08:00 a 12:00 hs<br />
                        15:00 a 19:00 hs
                      </Typography>
                    </Box>

                    <Button
                      href="https://www.google.com/maps/dir/?api=1&destination=Independencia+145+Rio+Tercero+Córdoba"
                      target="_blank"
                      className="location-cta"
                    >
                      Cómo llegar
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Grid>

        {/* ================= CONTACTO ================= */}
        <Grid className="social" id="contacto">
          {/* ⭐ SEO H2 */}
          <Typography component="h2" variant="h5" gutterBottom>
            Contactanos
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <IconButton
              component="a"
              href="https://www.instagram.com/sclauzero.pintura.en.polvo/"
              target="_blank"
              className="social-icon"
            >
              <img src="/svg/instagram-icon.svg" alt="Instagram Sclauzero pintura en polvo" />
            </IconButton>

            <IconButton
              component="a"
              href="https://wa.me/543571570590"
              target="_blank"
              className="social-icon icon-whatsapp"
            >
              <img src="/svg/whatsapp.svg" alt="WhatsApp Sclauzero pintura en polvo" />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.tiktok.com/@sclauzeropinturaenpolvo"
              target="_blank"
              className="social-icon icon-tiktok"
            >
              <img src="/svg/tiktok-icon.svg" alt="TikTok Sclauzero pintura en polvo" />
            </IconButton>
          </Stack>
        </Grid>

        {/* ================= FOOTER ================= */}
        <Divider className="footer-divider" />
        <Grid className="footer" container direction="column" alignItems="center">
          <Box>
            © {new Date().getFullYear()} Sclauzero – Pintura en polvo industrial en Río Tercero. Sitio oficial.
          </Box>
        </Grid>

      </Grid>
    </>
  );
}
