import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #ff4d88, #ff99cc)",
        color: "#fff",
        boxShadow: "0 4px 15px rgba(255, 77, 136, 0.4)",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <h2>🛍️ MonShop</h2>
      </Link>

      {/* Barre de recherche */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderRadius: "25px",
          padding: "5px 10px",
          width: "35%",
        }}
      >
        <input
          type="text"
          placeholder="Rechercher un produit..."
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            padding: "8px",
            borderRadius: "25px",
          }}
        />
        <span style={{ color: "#ff4d88" }}>🔍</span>
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* Favoris */}
        <div style={iconStyle}>❤️</div>

        {/* Compte */}
        <div style={{ position: "relative" }}>
          <div
            style={iconStyle}
            onClick={() => setShowMenu(!showMenu)}
          >
            👤 Compte
          </div>

          {/* Menu déroulant */}
          {showMenu && (
            <div style={dropdownStyle}>
              <Link to="/login" style={menuItem} onClick={() => setShowMenu(false)}>
                Se connecter
              </Link>

              <Link to="/register" style={menuItem} onClick={() => setShowMenu(false)}>
                S'inscrire
              </Link>

              <Link to="/profile" style={menuItem} onClick={() => setShowMenu(false)}>
                Mon profil
              </Link>

              <p style={menuItem}>Déconnexion</p>
            </div>
          )}
        </div>

        {/* Panier */}
        <div style={{ position: "relative" }}>
          <div style={iconStyle}>🛒</div>

          <span style={badgeStyle}>{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}

/* Styles */

const iconStyle = {
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "20px",
  transition: "0.3s",
};

const dropdownStyle = {
  position: "absolute",
  top: "45px",
  right: 0,
  background: "#fff",
  color: "#333",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  width: "160px",
  display: "flex",
  flexDirection: "column",
};

const menuItem = {
  padding: "10px",
  textDecoration: "none",
  color: "#333",
  cursor: "pointer",
};

const badgeStyle = {
  position: "absolute",
  top: "-8px",
  right: "-10px",
  background: "#fff",
  color: "#ff4d88",
  borderRadius: "50%",
  padding: "5px 8px",
  fontSize: "12px",
  fontWeight: "bold",
};

export default Navbar;