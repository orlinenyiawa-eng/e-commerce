import { useState } from "react";

function Register({ setUser }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (!nom || !prenom || !email) {
      alert("Remplis tous les champs");
      return;
    }

    // ✅ Sauvegarde utilisateur
    setUser({
      nom,
      prenom,
      email,
    });

    alert("Inscription réussie 🎉");
  };

  return (
    <div style={style.container}>
      <h2>📝 Inscription</h2>

      {/* Prénom */}
      <input
        type="text"
        placeholder="Prénom"
        onChange={(e) => setPrenom(e.target.value)}
        style={style.input}
      />

      {/* Nom */}
      <input
        type="text"
        placeholder="Nom"
        onChange={(e) => setNom(e.target.value)}
        style={style.input}
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={style.input}
      />

      <button onClick={handleRegister} style={style.button}>
        S'inscrire
      </button>
    </div>
  );
}

const style = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  input: {
    padding: "12px",
    margin: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    padding: "12px 20px",
    background: "#ff4d88",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Register;