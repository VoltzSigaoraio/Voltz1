import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function FinalizacaoForm() {
  const navigate = useNavigate();
  const [aceitou, setAceitou] = useState(false);
  const [fotos, setFotos] = useState({});

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFotos((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Imagens enviadas:", fotos);
    alert("Formulário finalizado com sucesso!");
    navigate("/");
  };

  const camposFotos = [
    "Frente",
    "Trás",
    "Lateral Esquerda",
    "Lateral Direita",
    "Parte Superior",
    "Parte Inferior",
    "IMEI (foto)",
    "% de Bateria (print)",
  ];

  return (
    <div className="form-card fade-in-up">
      {!aceitou ? (
        <>
          <h2 className="fade-in-up">
            Você receberá <strong>R$1.450,00</strong>
          </h2>
          <p className="fade-in-up">
            Esse valor é baseado na análise das informações fornecidas.
          </p>
          <button
            className="button fade-in-up"
            onClick={() => setAceitou(true)}
          >
            Aceito e quero prosseguir
          </button>
        </>
      ) : (
        <>
          <h2 className="fade-in-up">Envie as fotos do aparelho</h2>
          <form onSubmit={handleSubmit} className="upload-form fade-in-up">
            {camposFotos.map((label) => (
              <div className="upload-field" key={label}>
                <label>{label}:</label>
                <input
                  type="file"
                  name={label}
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                />
              </div>
            ))}
            <button type="submit" className="button fade-in-up">
              Finalizar avaliação
            </button>
          </form>
        </>
      )}
    </div>
  );
}
