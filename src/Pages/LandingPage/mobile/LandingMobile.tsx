import "./LandingPageMobile.scss";
import {
  Box,
  Typography,
  Button,
  Avatar,
  IconButton,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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
      <Box className="hero-mobile">
        <Box className="hero-overlay-mobile" />

        {/* CONTENIDO CENTRAL */}
        <Box className="hero-center-mobile">
          <Avatar
            src="/images/logo-tato.jpeg"
            className="hero-logo-mobile"
          />

         
        </Box>

        {/* CTA ABAJO */}
        <Box className="hero-bottom-mobile">
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
  <Typography className="intro-text">
    Nos especializamos en pintura electrostática en polvo para piezas metálicas,
    cuidando cada etapa del proceso y prestando atención a los detalles.
  </Typography>

  <Typography className="intro-text">
    Buscamos terminaciones prolijas, duraderas y uniformes,
    trabajando con materiales de calidad y procedimientos confiables.
  </Typography>

  <Typography className="intro-text">
    Realizamos trabajos tanto para particulares como para industrias,
    adaptándonos a cada proyecto con responsabilidad y compromiso.
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

<Box className="mobile-location-section">
  <Typography variant="h5" className="mobile-location-title">
    Dónde estamos
  </Typography>

  {/* MAPA */}
  <Box className="mobile-map-wrapper">
    <iframe
      src="https://www.google.com/maps?q=Independencia%20145%20Río%20Tercero%20Córdoba&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </Box>

  <Box className="mobile-location-card premium">
  <Typography className="location-title">
    Sclauzero
  </Typography>

  <Typography className="location-subtitle">
    Pintura en polvo
  </Typography>

  <Typography className="location-address">
    Independencia 145 · Río Tercero
  </Typography>

  <Divider className="location-divider" />

  <Box className="location-hours">
    <Typography className="hours-label">Horarios</Typography>
    <Typography className="hours-text">
      Lun a Vie · 08 a 12 am - 15 a 19pm
    </Typography>
  </Box>

  <Button
    href="https://www.google.com/maps/dir/?api=1&destination=Independencia+145+Río+Tercero+Córdoba"
    target="_blank"
    className="location-button-premium"
  >
    Cómo llegar
  </Button>
</Box>

</Box>

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
