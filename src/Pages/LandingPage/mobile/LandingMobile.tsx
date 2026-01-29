import "./LandingPageMobile.scss";
import {
  Box,
  Typography,
  Button,
  Avatar,
  IconButton,
  Grid,
  Stack,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function LandingMobile() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const trabajos = [
    "/images/techo-chapa.jpeg",
    "/images/camastro.jpeg",
    "/images/tuallas.jpeg",
    "/images/aparato-gim.png",
    "/images/calefactor.jpeg",
    "/images/silla.jpeg",
    "/images/mesa.jpeg",
  ];

  /* AUTOSCROLL */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let rafId: number;
    const speed = 1;

    const animate = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <Box className="mobile-landing">

      {/* HERO */}
      <Box className="hero">
        <Box className="hero-overlay" />

        {/* CONTENIDO CENTRAL */}
        <Box className="hero-center">
          <Avatar
            src="/images/logo-tato.jpeg"
            className="hero-logo"
          />

          <Typography className="hero-title">
            Pintura electrostática profesional
          </Typography>

          <Typography className="hero-subtitle">
            Terminaciones metálicas de alta resistencia
          </Typography>
        </Box>

        {/* CTA ABAJO */}
        <Box className="hero-bottom">
          <Button
            href="https://wa.me/543571570590"
            className="hero-cta"
          >
            Presupuesto por WhatsApp
          </Button>
        </Box>
      </Box>

      {/* TEXTO */}
     <Box className="intro-card-wrapper">
  <Box className="intro-card">
    <Typography className="intro-title">
      Nuestro trabajo
    </Typography>

    <Typography className="intro-text">
      Nos dedicamos a la pintura electrostática en polvo de piezas metálicas,
      cuidando cada paso del proceso y prestando atención a los detalles.
    </Typography>

    <Typography className="intro-text">
      Apuntamos a lograr terminaciones prolijas, duraderas y parejas,
      utilizando materiales de buena calidad y un método de trabajo responsable.
    </Typography>

    <Typography className="intro-text">
      Realizamos trabajos para particulares e industrias, adaptándonos
      a cada necesidad con compromiso y seriedad.
    </Typography>
  </Box>
</Box>

      {/* CARRUSEL */}
      <div className="auto-carousel" ref={carouselRef}>
        {[...trabajos, ...trabajos].map((img, i) => (
          <div
            className="carousel-item"
            key={i}
            onClick={() => setActiveImage(img)}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* FULLSCREEN */}
      {activeImage && (
        <Box className="fullscreen-overlay">
          <button
            className="close-btn"
            onClick={() => setActiveImage(null)}
          >
            <CloseIcon />
          </button>

          <img src={activeImage} className="fullscreen-image" />
        </Box>
      )}

      {/* CTA FINAL */}
    {/* REDES */}
      <Grid className="social-mobile">
        <Typography variant="h5" gutterBottom>
          Contactános
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Stack direction="row" spacing={3} justifyContent="center">
            <IconButton
              component="a"
              href="https://www.instagram.com/sclauzero.pintura.en.polvo/"
              target="_blank"
              className="icon-social-mobile"
            >
              <img src="/svg/instagram-icon.svg" alt="Instagram" />
            </IconButton>

            <IconButton
              component="a"
              href="https://wa.me/543571570590"
              target="_blank"
              className="icon-social-mobile icon-whatsapp-mobile"
            >
              <img src="/svg/whatsapp.svg" alt="whatsapp" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/@sclauzeropinturaenpolvo"
              target="_blank"
              className="icon-social-mobile icon-tiktok-mobile"
            >
              <img src="/svg/tiktok-icon.svg" alt="whatsapp" />
            </IconButton>
          </Stack>

        </Stack>
      </Grid>

      <Box className="footer">
        © {new Date().getFullYear()} Sclauzero – Sitio oficial
      </Box>
    </Box>
  );
}
