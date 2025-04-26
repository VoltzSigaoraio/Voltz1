import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@voltz.com" && senha === "1DOIS3qu@tro5") {
      localStorage.setItem("logadoVoltz", "true"); // salva login
      navigate("/admin");
    } else {
      setErro("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Entre com suas credenciais para acessar o painel.</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {erro && <p className="error">{erro}</p>}
      </form>
    </div>
  );
}
