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
import { Helmet } from "react-helmet-async";

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

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Pintura en Polvo Industrial | Sclauzero Río Tercero</title>
        <meta
          name="description"
          content="Servicios profesionales de pintura electrostática en polvo. Protegemos y decoramos piezas metálicas con acabados duraderos y de alta calidad en Río Tercero y alrededores."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ================= HERO ================= */}
      <Box className="hero-mobile">
        <Box className="hero-overlay-mobile" />

        <Avatar
          src="/images/logo-tato.jpeg"
          className="hero-avatar-mobile"
          alt="Sclauzero pintura en polvo industrial"
        />

        <Box className="hero-cta-mobile">
          <Button
            href="https://wa.me/543571570590?text=Hola%2C%20quisiera%20pedir%20un%20presupuesto%20de%20pintura%20en%20polvo.%20%C2%BFPodr%C3%ADan%20asesorarme%3F"
            target="_blank"
            className="hero-button-mobile"
          >
            Pedí tu presupuesto
          </Button>
        </Box>
      </Box>

      {/* ================= INTRO / SEO ================= */}
      <Box className="intro-card-wrapper">
        <Box className="intro-card">

          {/* ⭐ SEO H1 */}
          <Typography component="h1" variant="h4" className="intro-title-mobile">
            Pintura en polvo Industrial
          </Typography>

          <Typography className="intro-text">
            Nos especializamos en <strong>pintura electrostática en polvo para piezas metálicas</strong>,
            cuidando cada etapa del proceso y prestando atención a los detalles.
          </Typography>

          <Typography className="intro-text">
            Buscamos terminaciones prolijas, duraderas y uniformes,
            trabajando con materiales de calidad y procedimientos confiables.
          </Typography>

          <Typography className="intro-text">
            Realizamos trabajos tanto para particulares como para industrias
            en <strong>Río Tercero y zona</strong>, adaptándonos a cada proyecto
            con responsabilidad y compromiso.
          </Typography>
        </Box>
      </Box>

      {/* ================= TRABAJOS ================= */}
      <Typography
        component="h2"
        variant="h5"
        className="releases-title-mobile"
        gutterBottom
        id="trabajos"
      >
        Trabajos realizados
      </Typography>

      <div className="auto-carousel" ref={carouselRef}>
        {[...trabajos, ...trabajos].map((img, i) => (
          <div
            className="carousel-item"
            key={i}
            onClick={() => setActiveImage(img)}
          >
            {/* ⭐ SEO ALT */}
            <img
              src={img}
              alt="Trabajo de pintura en polvo en piezas metálicas realizado por Sclauzero"
            />
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

          <img
            src={activeImage}
            className="fullscreen-image"
            alt="Detalle de terminación en pintura electrostática en polvo"
          />
        </Box>
      )}

      {/* ================= UBICACIÓN ================= */}
      <Box className="mobile-location-section" id="ubicacion">

        {/* ⭐ SEO H2 */}
        <Typography component="h2" variant="h5" className="mobile-location-title">
          Dónde estamos
        </Typography>

        <Box className="mobile-map-wrapper">
          <iframe
            src="https://www.google.com/maps?q=Independencia%20145%20Río%20Tercero%20Córdoba&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa ubicación Sclauzero Río Tercero"
          />
        </Box>

        <Box className="mobile-location-card premium">
          <Typography className="location-subtitle">
            Pintura en polvo industrial
          </Typography>

          <Typography className="location-address">
            Empresa de pintura electrostática en polvo ubicada en
            Independencia 145 · Río Tercero, Córdoba.
          </Typography>

          <Divider className="location-divider" />

          <Box className="location-hours">
            <Typography className="hours-label">Horarios</Typography>
            <Typography className="hours-text">
              Lunes a Viernes · 08 a 12 hs · 15 a 19 hs
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

      {/* ================= CONTACTO ================= */}
      <Grid className="social-mobile" id="contacto">
        {/* ⭐ SEO H2 */}
        <Typography component="h2" variant="h5" gutterBottom>
          Contactanos
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton
            component="a"
            href="https://www.instagram.com/sclauzero.pintura.en.polvo/"
            target="_blank"
            className="icon-social-mobile"
          >
            <img src="/svg/instagram-icon.svg" alt="Instagram Sclauzero pintura en polvo" />
          </IconButton>

          <IconButton
            component="a"
            href="https://wa.me/543571570590"
            target="_blank"
            className="icon-social-mobile icon-whatsapp-mobile"
          >
            <img src="/svg/whatsapp.svg" alt="WhatsApp Sclauzero pintura en polvo" />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.tiktok.com/@sclauzeropinturaenpolvo"
            target="_blank"
            className="icon-social-mobile icon-tiktok-mobile"
          >
            <img src="/svg/tiktok-icon.svg" alt="TikTok Sclauzero pintura en polvo" />
          </IconButton>
        </Stack>
      </Grid>

      {/* ================= FOOTER ================= */}
      <Box className="footer">
        © {new Date().getFullYear()} Sclauzero – Pintura en polvo industrial en Río Tercero
      </Box>

      {/* WHATSAPP FLOAT */}
      <a
         href="https://wa.me/543571570590?text=Hola%2C%20quisiera%20pedir%20un%20presupuesto%20de%20pintura%20en%20polvo.%20%C2%BFPodr%C3%ADan%20asesorarme%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Sclauzero pintura en polvo"
      >
        <img src="/svg/whatsapp.svg" alt="WhatsApp contacto Sclauzero" />
      </a>

    </Box>
  );
}
