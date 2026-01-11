import { useState, useEffect } from 'react';
import { FolderGit2, Star, GitFork } from 'lucide-react'; // Novos ícones
import './Projects.css';

export function Projects() {
  const [repos, setRepos] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/Eric90johnson/repos?sort=updated&direction=desc')
      .then(async response => {
        if (!response.ok) throw new Error('Erro ao buscar dados');
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        else setErro(true);
      })
      .catch(() => setErro(true));
  }, []);

  return (
    <section>
      <h2>Meus Projetos</h2>
      
      {erro && <p>⚠️ Não foi possível carregar os projetos.</p>}

      <div className="projects-grid">
        {repos.map(repo => {
          return (
            <a key={repo.id} href={repo.html_url} target="_blank" className="project-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {/* Ícone de Pasta Profissional */}
                <FolderGit2 size={24} color="#00B37E" />
                <h3>{repo.name}</h3>
              </div>
              
              <p>{repo.description || "Sem descrição definida"}</p>

              <div style={{ display: 'flex', gap: '1rem', color: '#7c7c8a', fontSize: '0.875rem' }}>
                {repo.language && <span className="tech-tag">{repo.language}</span>}
                
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} /> {repo.stargazers_count}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}