import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import products from "./data";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 📄 Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // 🛒 Ajouter au panier
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div style={{ background: "#fff0f5", minHeight: "100vh" }}>
        
        {/* 🔝 Navbar */}
        <Navbar cartCount={cart.length} />

        {/* 📄 ROUTES */}
        <Routes>

          {/* 🏠 PAGE ACCUEIL */}
          <Route
            path="/"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Produits</h1>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    padding: "20px",
                  }}
                >
                  {products.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      addToCart={addToCart}
                    />
                  ))}
                </div>

                {/* 🛒 Panier */}
                <Cart cart={cart} />
              </>
            }
          />

          {/* 🔐 LOGIN */}
          <Route
            path="/login"
            element={<Login setUser={setUser} />}
          />

          {/* 📝 REGISTER */}
          <Route
            path="/register"
            element={<Register setUser={setUser} />}
          />

          {/* 👤 PROFILE */}
          <Route
            path="/profile"
            element={<Profile user={user} />}
          />

        </Routes>

        {/* 🔻 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;