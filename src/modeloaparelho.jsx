import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario.css";

export default function ModeloAparelho() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [imei, setImei] = useState("");
  const [pecaSubstituida, setPecaSubstituida] = useState("não");
  const [qualPeca, setQualPeca] = useState("");
  const [icloudLivre, setIcloudLivre] = useState("sim");
  const [defeitos, setDefeitos] = useState({
    bateria: false,
    tela: false,
    camera: false,
    faceId: false,
    som: false,
  });
  const [bateria, setBateria] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Salvar dados e ir para a próxima etapa
    navigate("/resumo");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Informações do Aparelho</h2>

      <label htmlFor="marca">Marca:</label>
      <input
        id="marca"
        type="text"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />

      <label htmlFor="modelo">Modelo:</label>
      <input
        id="modelo"
        type="text"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />

      <label htmlFor="cor">Cor:</label>
      <input
        id="cor"
        type="text"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
      />

      <label htmlFor="capacidade">Capacidade:</label>
      <input
        id="capacidade"
        type="text"
        value={capacidade}
        onChange={(e) => setCapacidade(e.target.value)}
      />

      <label htmlFor="imei">IMEI:</label>
      <input
        id="imei"
        type="text"
        value={imei}
        onChange={(e) => setImei(e.target.value)}
      />

      <label htmlFor="peca">Alguma peça foi substituída?</label>
      <select
        id="peca"
        value={pecaSubstituida}
        onChange={(e) => setPecaSubstituida(e.target.value)}
      >
        <option value="não">Não</option>
        <option value="sim">Sim</option>
      </select>

      {pecaSubstituida === "sim" && (
        <>
          <label htmlFor="qualPeca">Qual peça?</label>
          <input
            id="qualPeca"
            type="text"
            value={qualPeca}
            onChange={(e) => setQualPeca(e.target.value)}
          />
        </>
      )}

      <label htmlFor="icloud">iCloud Livre para Testes?</label>
      <select
        id="icloud"
        value={icloudLivre}
        onChange={(e) => setIcloudLivre(e.target.value)}
      >
        <option value="sim">Sim</option>
        <option value="não">Não</option>
      </select>

      <fieldset>
        <legend>Itens com Defeito</legend>
        {Object.entries(defeitos).map(([item, checked]) => (
          <label key={item}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) =>
                setDefeitos({ ...defeitos, [item]: e.target.checked })
              }
            />
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
        ))}

        <label htmlFor="bateria">% de Bateria:</label>
        <input
          id="bateria"
          type="number"
          value={bateria}
          onChange={(e) => setBateria(e.target.value)}
          min="0"
          max="100"
        />
      </fieldset>

      <button type="submit">Próximo</button>
    </form>
  );
}
