import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function DefeitosAparelho() {
  const [defeitos, setDefeitos] = useState({
    bateria: false,
    tela: false,
    camera: false,
    microfone: false,
    altoFalante: false,
    botaoHome: false,
    volume: false,
    outros: "",
  });

  const [porcentagemBateria, setPorcentagemBateria] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setDefeitos((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui futuramente você pode enviar os dados para o backend
    navigate("/resumo");
  };

  return (
    <div className="form-container fade-in-up">
      <h2 className="fade-in-up">Itens com Defeito</h2>
      <form className="formulario fade-in-up" onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="bateria"
            checked={defeitos.bateria}
            onChange={handleChange}
          />
          Bateria
        </label>

        {defeitos.bateria && (
          <input
            type="text"
            placeholder="% de Bateria"
            value={porcentagemBateria}
            onChange={(e) => setPorcentagemBateria(e.target.value)}
          />
        )}

        <label>
          <input
            type="checkbox"
            name="tela"
            checked={defeitos.tela}
            onChange={handleChange}
          />
          Tela
        </label>

        <label>
          <input
            type="checkbox"
            name="camera"
            checked={defeitos.camera}
            onChange={handleChange}
          />
          Câmera
        </label>

        <label>
          <input
            type="checkbox"
            name="microfone"
            checked={defeitos.microfone}
            onChange={handleChange}
          />
          Microfone
        </label>

        <label>
          <input
            type="checkbox"
            name="altoFalante"
            checked={defeitos.altoFalante}
            onChange={handleChange}
          />
          Alto-falante
        </label>

        <label>
          <input
            type="checkbox"
            name="botaoHome"
            checked={defeitos.botaoHome}
            onChange={handleChange}
          />
          Botão Home
        </label>

        <label>
          <input
            type="checkbox"
            name="volume"
            checked={defeitos.volume}
            onChange={handleChange}
          />
          Botão de Volume
        </label>

        <label>
          Outros:
          <input
            type="text"
            name="outros"
            placeholder="Descreva outros defeitos"
            value={defeitos.outros}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="button fade-in-up">
          Prosseguir
        </button>
      </form>
    </div>
  );
}
