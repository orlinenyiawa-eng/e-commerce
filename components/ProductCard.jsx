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
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            transition: "0.4s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.transform = "scale(1.1)")
          }
          onMouseLeave={(e) =>
            (e.target.style.transform = "scale(1)")
          }
        />

        {/* Badge */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "linear-gradient(45deg, #ff4d88, #ff99cc)",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          🔥 NEW
        </span>
      </div>

      {/* Contenu */}
      <div style={{ padding: "15px" }}>
        <h3
          style={{
            margin: "10px 0",
            color: "#333",
            fontSize: "18px",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#ff4d88",
          }}
        >
          {product.price} €
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(45deg, #ff4d88, #ff99cc)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow =
              "0 5px 15px rgba(255, 77, 136, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          🛒 Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default ProductCard;