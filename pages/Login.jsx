import { useState } from "react";

function Login({ setUser }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) {
      alert("Entre ton email");
      return;
    }

    setUser({ email });
  };

  return (
    <div style={style.container}>
      <h2>🔐 Connexion</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={style.input}
      />

      <button onClick={handleLogin} style={style.button}>
        Se connecter
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
  },
  button: {
    padding: "12px 20px",
    background: "#ff4d88",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Login;