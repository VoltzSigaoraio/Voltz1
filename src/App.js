import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <header className="hero-header">
        <img
          src="https://i.postimg.cc/RFq3SFzw/VLTZ-LOGO.png"
          alt="Logo Voltz"
          className="hero-logo"
        />
        <a href="tel:+5521977327739" className="hero-phone">
          📞 (21) 97732-7739
        </a>
        <Link to="/admin" className="hero-admin">
          Painel Adm
        </Link>
      </header>

      <main className="hero-main">
        <h1>
          Descubra o valor do seu <span>iPhone em minutos!</span>
        </h1>
        <p className="subtext">Avaliação rápida, segura e justa</p>
        <button
          className="button hero-btn"
          onClick={() => navigate("/avaliar")}
        >
          Começar Avaliação
        </button>

        <img
          src="https://i.postimg.cc/KcHVQvcw/troca.png"
          alt="Avatar celular"
          className="hero-illustration"
        />

        <section className="steps-new">
          <div className="step-box">
            <div className="step-icon">📋</div>
            <h3>Passo 1</h3>
            <p>Preencha o formulário com os dados do seu iPhone.</p>
          </div>
          <div className="step-box">
            <div className="step-icon">🔍</div>
            <h3>Passo 2</h3>
            <p>Receba uma análise com os dados fornecidos.</p>
          </div>
          <div className="step-box">
            <div className="step-icon">✅</div>
            <h3>Passo 3</h3>
            <p>Confira a oferta e prossiga com a negociação.</p>
          </div>
        </section>

        <section className="why-voltz-new">
          <div>
            <h2>Por que avaliar com a Voltz?</h2>
            <p>
              Nossa avaliação é ágil e prática, ajudando você a saber o valor do
              seu iPhone sem complicações.
            </p>
          </div>
          <img
            src="https://i.postimg.cc/ZqVK2h22/LOGO-VOLTZ.png"
            alt="Gráfico"
            className="voltz-graph"
          />
        </section>
      </main>

      <footer className="hero-footer">
        <p>Voltz® - Siga o Raio. Todos os direitos reservados.</p>
        <p>
          R. Edmundo Bitencourt, 101, 2º Piso (Shopping Teresópolis) – Várzea,
          Teresópolis – RJ
        </p>
      </footer>
    </div>
  );
}
