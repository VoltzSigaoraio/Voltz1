import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ClienteForm from "./ClienteForm";
import ModeloForm from "./ModeloForm";
import DefeitosAparelho from "./DefeitosAparelho";
import FinalizarAvaliacao from "./FinalizarAvaliacao";
import Admin from "./Admin";
import Login from "./Login"; // ← Importa a tela de login
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/avaliar" element={<ClienteForm />} />
        <Route path="/modelo" element={<ModeloForm />} />
        <Route path="/defeitos" element={<DefeitosAparelho />} />
        <Route path="/resumo" element={<FinalizarAvaliacao />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />{" "}
        {/* ← Adiciona rota para login */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
