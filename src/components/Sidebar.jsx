import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react'; // Importamos os novos
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
        {/* GitHub */}
        <a href="https://github.com/Eric90johnson" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
          GitHub
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ericjohnson-development-student/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
          LinkedIn
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/eric90johnson/" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
          Instagram
        </a>

        {/* WhatsApp (Link especial: wa.me/SeuNumero) */}
        {/* Troque o 5511999999999 pelo seu número real com DDD */}
        <a href="https://wa.me/5585998700911" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </footer>
    </aside>
  );
}