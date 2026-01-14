import { Mail, MessageCircle, MapPin } from 'lucide-react';
import '../App.css';
import './Contato.css'; // Vamos criar este CSS já já

export function Contato() {

  // Função que roda quando clica em "Enviar Mensagem"
  function handleSubmit(event) {
    event.preventDefault(); // Evita que a página recarregue
    alert("Obrigado pelo contato! Esta é uma simulação de envio.");
  }

  return (
    <div className="content-area">
      <header className="page-header">
        <h2>Fale Comigo</h2>
        <span className="subtitle">Entre em contato para novas oportunidades</span>
      </header>

      <div className="contact-container">
        
        {/* Coluna da Esquerda: Informações Diretas */}
        <div className="contact-info">
          
          <div className="info-card">
            <Mail className="icon" size={24} />
            <div>
              <strong>E-mail</strong>
              <p>ericjohnson@email.com</p> {/* Coloque seu email real */}
              <a href="mailto:ericjohnson@email.com">Enviar e-mail</a>
            </div>
          </div>

          <div className="info-card">
            <MessageCircle className="icon" size={24} />
            <div>
              <strong>WhatsApp</strong>
              <p>(00) 00000-0000</p>
              <a href="https://wa.me/5500000000000" target="_blank">Conversar agora</a>
            </div>
          </div>

          <div className="info-card">
            <MapPin className="icon" size={24} />
            <div>
              <strong>Localização</strong>
              <p>Brasil - Disponível para Remoto</p>
            </div>
          </div>

        </div>

        {/* Coluna da Direita: Formulário */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu E-mail" required />
          <textarea placeholder="Sua mensagem..." rows="5" required></textarea>
          
          <button type="submit">
            ENVIAR MENSAGEM
          </button>
        </form>

      </div>
    </div>
  )
}