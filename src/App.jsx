import { Sidebar } from './components/Sidebar';
import { Projects } from './components/Projects'; // <--- Importação com chaves {}
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main>
        <Projects />
      </main>
    </div>
  )
}

export default App