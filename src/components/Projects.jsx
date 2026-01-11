import { useState, useEffect } from 'react';
// IMPORTANTE: Comentei os ícones para testarmos se eles eram o erro
// import { FolderNotch, GitFork, Star } from '@phosphor-icons/react';
import './Projects.css';

export function Projects() {
  const [repos, setRepos] = useState([]);
  const [erro, setErro] = useState(false); // Estado para guardar se deu erro

  useEffect(() => {
    fetch('https://api.github.com/users/Eric90johnson/repos?sort=updated&direction=desc')
      .then(async response => {
        // Verifica se a resposta da API foi "OK" (status 200)
        if (!response.ok) {
           throw new Error('Erro ao buscar dados do GitHub');
        }
        return response.json();
      })
      .then(data => {
        // Só salva se for realmente uma lista (array)
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setErro(true);
        }
      })
      .catch(e => {
        console.error("ERRO CRÍTICO:", e);
        setErro(true);
      });
  }, []);

  return (
    <section>
      <h2>Meus Projetos</h2>
      
      {/* Se der erro, mostra mensagem amigável em vez de tela branca */}
      {erro && <p>⚠️ Não foi possível carregar os projetos agora.</p>}

      <div className="projects-grid">
        {repos.map(repo => {
          return (
            <a key={repo.id} href={repo.html_url} target="_blank" className="project-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {/* Ícone provisório (emoji) enquanto arrumamos a biblioteca */}
                <span>📁</span> 
                <h3>{repo.name}</h3>
              </div>
              
              <p>{repo.description || "Sem descrição definida"}</p>

              <div style={{ display: 'flex', gap: '1rem', color: '#7c7c8a', fontSize: '0.875rem' }}>
                {repo.language && <span className="tech-tag">{repo.language}</span>}
                <span>⭐ {repo.stargazers_count}</span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}