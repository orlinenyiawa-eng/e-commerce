function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #ff4d88, #ff99cc)",
        color: "#fff",
        padding: "30px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <h2>🛍️ MonShop</h2>

      <p>📧 Email : tonemail@gmail.com</p>
      <p>📱 WhatsApp : +237XXXXXXXXX</p>

      <p>
        <a
          href="https://facebook.com"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          👍 Facebook
        </a>
      </p>

      <p style={{ marginTop: "20px" }}>
        © 2026 MonShop
      </p>
    </footer>
  );
}

export default Footer;