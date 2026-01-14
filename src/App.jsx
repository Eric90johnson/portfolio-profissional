import { HashRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="wrapper">
        
        {/* A Sidebar fica FORA das rotas, pois ela aparece em todas as páginas */}
        <Sidebar />
        
        <main>
          {/* Aqui é a área dinâmica que muda conforme o link */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        
      </div>
    </HashRouter>
  )
}

export default App