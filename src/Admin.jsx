import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const navigate = useNavigate();
  const [autorizado, setAutorizado] = useState(false);

  useEffect(() => {
    const logado = localStorage.getItem("logadoVoltz");
    if (logado === "true") {
      setAutorizado(true);
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("logadoVoltz");
    navigate("/login");
  };

  if (!autorizado) return null;

  return (
    <div className="admin-container">
      <h2 className="admin-title">Painel Administrativo</h2>
      <button
        onClick={handleLogout}
        style={{ float: "right", marginBottom: "20px" }}
      >
        Sair
      </button>

      <div className="admin-dashboard">
        <div className="dashboard-card">
          <h3>Aparelhos mais procurados</h3>
          <p>iPhone 13 Pro Max, iPhone 11, iPhone XR</p>
        </div>
        <div className="dashboard-card">
          <h3>Aparelhos mais avaliados</h3>
          <p>iPhone 12, iPhone SE, iPhone 13</p>
        </div>
        <div className="dashboard-card">
          <h3>Peças com mais problemas</h3>
          <p>Bateria, Tela, Câmera traseira</p>
        </div>
        <div className="dashboard-card">
          <h3>Relatório de cliente por troca</h3>
          <p>45% escolheram upgrade para modelo superior</p>
        </div>
      </div>
    </div>
  );
}
