function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #ff4d88, #ff99cc)",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      {/* ✅ Conteneur centré avec largeur réduite */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {/* Sections */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Logo */}
          <div>
            <h2>🛍️ MonShop</h2>
            <p>Votre boutique en ligne 💖</p>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact</h3>
            <p>📧 orlinenyiwa@gmail.com</p>
            <p>📱 +237675467815</p>
          </div>

          {/* Réseaux */}
          <div>
            <h3>Suivez-nous</h3>

            <p>
              <a href="#" style={linkStyle}>
                👍 Facebook
              </a>
            </p>

            <p>
              <a href="#" style={linkStyle}>
                💬 WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Bas du footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            borderTop: "1px solid rgba(255,255,255,0.3)",
            paddingTop: "15px",
          }}
        >
          <p>© 2026 MonShop - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

// Style des liens
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  transition: "0.3s",
};

export default Footer;