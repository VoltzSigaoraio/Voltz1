import "./Formulario.css";
import { useState } from "react";

export default function FormularioAparelho({ formData, setFormData }) {
  const [defeitoBateria, setDefeitoBateria] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    const fieldValue = type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  return (
    <div className="formulario-container fade-in-up">
      <h2>Informações do Aparelho</h2>
      <form>
        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          placeholder="Ex: Apple"
          onChange={handleChange}
          required
        />

        <label>Modelo:</label>
        <input
          type="text"
          name="modelo"
          placeholder="Ex: iPhone 13 Pro"
          onChange={handleChange}
          required
        />

        <label>Cor:</label>
        <input
          type="text"
          name="cor"
          placeholder="Ex: Azul"
          onChange={handleChange}
          required
        />

        <label>Capacidade:</label>
        <input
          type="text"
          name="capacidade"
          placeholder="Ex: 128GB"
          onChange={handleChange}
          required
        />

        <label>IMEI:</label>
        <input
          type="text"
          name="imei"
          placeholder="Número do IMEI"
          onChange={handleChange}
          required
        />

        <label>Alguma peça foi substituída?</label>
        <input
          type="text"
          name="pecaSubstituida"
          placeholder="Se sim, qual?"
          onChange={handleChange}
        />

        <h3>Itens com Defeito</h3>
        <label>
          <input
            type="checkbox"
            name="defeitoBateria"
            checked={defeitoBateria}
            onChange={(e) => setDefeitoBateria(e.target.checked)}
          />
          Bateria
        </label>
        {defeitoBateria && (
          <input
            type="text"
            name="bateriaPorcentagem"
            placeholder="% de Bateria"
            onChange={handleChange}
            required
          />
        )}

        <h3>Fotos do Aparelho</h3>
        <label>Frente:</label>
        <input type="file" name="fotoFrente" accept="image/*" onChange={handleChange} />

        <label>Trás:</label>
        <input type="file" name="fotoTras" accept="image/*" onChange={handleChange} />

        <label>Lateral Esquerda:</label>
        <input type="file" name="fotoLatEsq" accept="image/*" onChange={handleChange} />

        <label>Lateral Direita:</label>
        <input type="file" name="fotoLatDir" accept="image/*" onChange={handleChange} />

        <label>Parte Superior:</label>
        <input type="file" name="fotoSuperior" accept="image/*" onChange={handleChange} />

        <label>Parte Inferior:</label>
        <input type="file" name="fotoInferior" accept="image/*" onChange={handleChange} />

        <label>Foto do IMEI:</label>
        <input type="file" name="fotoIMEI" accept="image/*" onChange={handleChange} />

        <label>Print da % de Bateria:</label>
        <input type="file" name="fotoBateria" accept="image/*" onChange={handleChange} />

        <button type="submit" className="button">
          Finalizar Avaliação
        </button>
      </form>
    </div>
  );
}
