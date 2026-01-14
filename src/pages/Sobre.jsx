import '../App.css'; // Importa estilos globais
import './Sobre.css'; // Vamos criar esse arquivo logo em seguida

export function Sobre() {
  return (
    <div className="content-area">
      <header className="page-header">
        <h2>Sobre Mim</h2>
        <span className="subtitle">Minha jornada na tecnologia</span>
      </header>

      <section className="bio-section">
        <p>
          Olá! Meu nome é <strong>Eric Johnson</strong>. Sou um apaixonado por tecnologia em transição de carreira para o desenvolvimento Front-End.
        </p>
        <p>
          Atualmente estou focado no ecossistema <strong>React</strong>, aprendendo a criar interfaces modernas, responsivas e performáticas. 
          Gosto de resolver problemas e transformar ideias em código funcional.
        </p>
      </section>

      <section className="skills-section">
        <h3>Minhas Habilidades</h3>
        
        <div className="skills-grid">
          {/* Card de Habilidade */}
          <div className="skill-card">
            <span>⚛️</span>
            <strong>React.js</strong>
          </div>

          <div className="skill-card">
            <span>⚡</span>
            <strong>Vite</strong>
          </div>

          <div className="skill-card">
            <span>🎨</span>
            <strong>CSS3 / Grid</strong>
          </div>

          <div className="skill-card">
            <span>📜</span>
            <strong>JavaScript</strong>
          </div>

          <div className="skill-card">
            <span>🌳</span>
            <strong>Git / GitHub</strong>
          </div>

          <div className="skill-card">
            <span>📱</span>
            <strong>Responsividade</strong>
          </div>
        </div>
      </section>
    </div>
  )
}