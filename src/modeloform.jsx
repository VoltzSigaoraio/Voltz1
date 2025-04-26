import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function ModeloForm() {
  const navigate = useNavigate();
  const [modelo, setModelo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/defeitos");
  };

  return (
    <div className="form-card fade-in-up">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Avatar"
        className="avatar"
      />
      <p className="fade-in-up fade-delay-1">Qual é o modelo do seu iPhone?</p>

      <form onSubmit={handleSubmit} className="fade-in-up fade-delay-2">
        <select
          className="input select-scroll"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        >
          <option value="">Selecione o modelo</option>
          <option>iPhone 15 Pro Max</option>
          <option>iPhone 15 Pro</option>
          <option>iPhone 15 Plus</option>
          <option>iPhone 15</option>
          <option>iPhone 14 Pro Max</option>
          <option>iPhone 14 Pro</option>
          <option>iPhone 14 Plus</option>
          <option>iPhone 14</option>
          <option>iPhone 13 Pro Max</option>
          <option>iPhone 13 Pro</option>
          <option>iPhone 13</option>
          <option>iPhone 13 mini</option>
          <option>iPhone 12 Pro Max</option>
          <option>iPhone 12 Pro</option>
          <option>iPhone 12</option>
          <option>iPhone 12 mini</option>
          <option>iPhone 11 Pro Max</option>
          <option>iPhone 11 Pro</option>
          <option>iPhone 11</option>
          <option>iPhone XR</option>
        </select>

        <button type="submit" className="button fade-in-up fade-delay-3">
          Continuar
        </button>
      </form>
    </div>
  );
}
