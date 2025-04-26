import { useState } from "react";
import "./index.css";

export default function ResumoFinal() {
  const [fotos, setFotos] = useState({
    frente: null,
    tras: null,
    lateralEsq: null,
    lateralDir: null,
    superior: null,
    inferior: null,
    imei: null,
    bateria: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFotos((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fotos enviadas:", fotos);
    alert(
      "Avaliação finalizada com sucesso! Entraremos em contato pelo WhatsApp."
    );
  };

  return (
    <div className="form-container fade-in-up">
      <h2>Resumo da Avaliação</h2>
      <p>
        Valor estimado: <strong>R$ 1.550,00</strong>
      </p>
      <p>Se estiver de acordo, envie as fotos do seu aparelho:</p>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Foto da Frente:
          <input
            type="file"
            name="frente"
            onChange={handleFileChange}
            required
          />
        </label>
        <label>
          Foto de Trás:
          <input type="file" name="tras" onChange={handleFileChange} required />
        </label>
        <label>
          Lateral Esquerda:
          <input
            type="file"
            name="lateralEsq"
            onChange={handleFileChange}
            required
          />
        </label>
        <label>
          Lateral Direita:
          <input
            type="file"
            name="lateralDir"
            onChange={handleFileChange}
            required
          />
        </label>
        <label>
          Parte Superior:
          <input
            type="file"
            name="superior"
            onChange={handleFileChange}
            required
          />
        </label>
        <label>
          Parte Inferior:
          <input
            type="file"
            name="inferior"
            onChange={handleFileChange}
            required
          />
        </label>
        <label>
          Foto do IMEI:
          <input type="file" name="imei" onChange={handleFileChange} required />
        </label>
        <label>
          Foto do % de Bateria:
          <input
            type="file"
            name="bateria"
            onChange={handleFileChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Finalizar Avaliação
        </button>
      </form>
    </div>
  );
}
