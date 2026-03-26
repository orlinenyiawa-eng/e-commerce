function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 10px 25px rgba(255, 105, 180, 0.2)",
        transition: "0.4s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-8px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      {/* Image */}
      <div style={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />

        {/* Badge promo */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "#ff4d88",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          NEW
        </span>
      </div>

      {/* Contenu */}
      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "10px 0", color: "#333" }}>
          {product.name}
        </h3>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#ff4d88",
          }}
        >
          {product.price} €
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(45deg, #ff4d88, #ff99cc)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.opacity = "0.8")
          }
          onMouseLeave={(e) =>
            (e.target.style.opacity = "1")
          }
        >
          🛒 Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default ProductCard;