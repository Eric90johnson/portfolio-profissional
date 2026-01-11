import { Github, Linkedin } from 'lucide-react'; // Importando da nova lib
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img 
        className="cover" 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop" 
        alt="Capa" 
      />

      <div className="profile">
        <img 
          className="avatar" 
          src="https://github.com/Eric90johnson.png" 
          alt="Eric Johnson" 
        />
        <strong>Eric Johnson</strong>
        <span>Front-End Developer</span>
      </div>

      <footer className="footer">
        <a href="https://github.com/Eric90johnson" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
          GitHub
        </a>
        
        {/* Agora com ícone do LinkedIn funcionando */}
        <a href="https://www.linkedin.com/in/ericjohnson-development-student/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
          LinkedIn
        </a>
      </footer>
    </aside>
  );
}