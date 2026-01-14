// 1. CORREÇÃO: Importamos 'Mail' em vez de 'EnvelopeSimple'
import { Github, Linkedin, Instagram, MessageCircle, House, User, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
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

      <nav className="nav-menu">
        <NavLink to="/" className="nav-link" title="Página Inicial">
          <House size={20} />
          Home
        </NavLink>

        <NavLink to="/sobre" className="nav-link" title="Sobre Mim">
          <User size={20} />
          Sobre
        </NavLink>

        <NavLink to="/contato" className="nav-link" title="Fale Comigo">
          {/* 2. CORREÇÃO: Usamos o componente Mail aqui */}
          <Mail size={20} />
          Contato
        </NavLink>
      </nav>

      <footer className="footer">
        <div className="social-links">
            <a href="https://github.com/Eric90johnson" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
            </a>
            
            <a href="https://www.linkedin.com/in/ericjohnson-development-student/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
            </a>

            <a href="https://www.instagram.com/eric90johnson/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
            </a>

            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            </a>
        </div>
      </footer>
    </aside>
  );
}