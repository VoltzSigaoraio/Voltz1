import React, { useState } from "react";
import "./index.css";

export default function FinalizarAvaliacao() {
  const [aceitou, setAceitou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados enviados com sucesso!");
  };

  return (
    <div className="form-card">
      <h2>Finalização da Avaliação</h2>
      <p>
        Valor estimado do seu iPhone: <strong>R$ 2.500,00</strong>
      </p>

      <label className="checkbox">
        <input
          type="checkbox"
          checked={aceitou}
          onChange={(e) => setAceitou(e.target.checked)}
        />
        Eu aceito o valor e desejo continuar
      </label>

      {aceitou && (
        <form onSubmit={handleSubmit} className="upload-form">
          <h3>Envie as fotos do aparelho:</h3>

          <div className="upload-group">
            <label>Frente:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>Trás:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>Lateral Esquerda:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>Lateral Direita:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>Parte Superior:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>Parte Inferior:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>Foto do IMEI:</label>
            <input type="file" accept="image/*" required />
          </div>

          <div className="upload-group">
            <label>% da Bateria (captura de tela):</label>
            <input type="file" accept="image/*" required />
          </div>

          <button className="button" type="submit">
            Enviar Avaliação
          </button>
        </form>
      )}
    </div>
  );
}
