import React from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario.css";

export default function ClienteForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/modelo");
  };

  return (
    <div className="form-container fade-in-up">
      <h2 className="fade-in-up">Informações do Cliente</h2>
      <form onSubmit={handleSubmit} className="fade-in-up">
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required />

        <label htmlFor="contato">Contato (WhatsApp):</label>
        <input type="text" id="contato" name="contato" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" />

        <label htmlFor="bairro">Bairro:</label>
        <input type="text" id="bairro" name="bairro" />

        <label htmlFor="cep">CEP:</label>
        <input type="text" id="cep" name="cep" />

        <label htmlFor="nascimento">Data de Nascimento:</label>
        <input type="date" id="nascimento" name="nascimento" required />

        <button type="submit" className="button fade-in-up">
          Avançar
        </button>
      </form>
    </div>
  );
}
