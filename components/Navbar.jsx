import { useState } from "react";

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
      <h2 style={{ cursor: "pointer" }}>
        🛍️ MonShop
      </h2>

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
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                background: "#fff",
                color: "#333",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                padding: "10px",
                width: "150px",
              }}
            >
              <p style={menuItem}>Se connecter</p>
              <p style={menuItem}>S'inscrire</p>
              <p style={menuItem}>Mon profil</p>
              <p style={menuItem}>Déconnexion</p>
            </div>
          )}
        </div>

        {/* Panier */}
        <div style={{ position: "relative" }}>
          <div style={iconStyle}>🛒</div>

          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "#fff",
              color: "#ff4d88",
              borderRadius: "50%",
              padding: "5px 8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cartCount}
          </span>
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

const menuItem = {
  padding: "8px",
  cursor: "pointer",
};

export default Navbar;