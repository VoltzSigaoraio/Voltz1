import { useNavigate } from "react-router-dom";
import "./Formulario.css";

export default function AvaliacaoCliente({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="formulario-container">
      <h2>Dados do Cliente</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/modelo");
        }}
      >
        <fieldset>
          <legend>Informações Pessoais</legend>

          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData?.nome || ""}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData?.cpf || ""}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contato"
            placeholder="Telefone/WhatsApp"
            value={formData?.contato || ""}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData?.email || ""}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData?.endereco || ""}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={formData?.bairro || ""}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData?.cep || ""}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dataNascimento"
            value={formData?.dataNascimento || ""}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button type="submit">Próximo</button>
      </form>
    </div>
  );
}
