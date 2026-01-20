import "./LandingMobile.scss";

const LandingMobile = () => {
  return (
    <main className="mobile-landing">
      {/* HERO */}
      <section className="mobile-hero">
        <div className="overlay">
          <h1>Sclauzero</h1>
          <p>Pintura en polvo industrial</p>

          <a
            href="https://wa.me/549"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mobile-section">
        <h2>Servicios</h2>

        <ul className="services-list">
          <li>• Pintura en polvo</li>
          <li>• Recubrimientos electrostáticos</li>
          <li>• Terminaciones industriales</li>
          <li>• Alta resistencia</li>
        </ul>
      </section>

      {/* INFO */}
      <section className="mobile-section gray">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Trabajamos con procesos industriales de alta calidad, garantizando
          durabilidad, terminación uniforme y máxima resistencia.
        </p>
      </section>

      {/* MAPA */}
      <section className="mobile-map">
        <iframe
          title="ubicacion"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* FOOTER */}
      <footer className="mobile-footer">
        <p>📍 Argentina</p>
        <p>📞 Consultas por WhatsApp</p>
      </footer>
    </main>
  );
};

export default LandingMobile;
