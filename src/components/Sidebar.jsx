import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Imagem de Capa (pode ser abstrata ou de código) */}
      <img 
        className="cover" 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop" 
        alt="Capa de fundo" 
      />

      <div className="profile">
        {/* Sua foto do GitHub */}
        <img 
          className="avatar" 
          src="https://github.com/Eric90johnson.png" 
          alt="Eric Johnson" 
        />

        <strong>Eric Johnson</strong>
        <span>Front-End Developer</span>
      </div>

      <footer className="footer">
        {/* Botão para o GitHub */}
        <a href="https://github.com/Eric90johnson" target="_blank" rel="noopener noreferrer">
          <GithubLogo size={20} />
          GitHub
        </a>
        
        {/* Dica: Depois você pode duplicar essa linha para o LinkedIn */}
      </footer>
    </aside>
  );
}