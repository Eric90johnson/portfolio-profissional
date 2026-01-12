import { useState, useEffect } from 'react';
// 1. Adicionamos o ícone Calendar na importação
import { FolderGit2, Star, Github, Globe, Calendar } from 'lucide-react'; 
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

  // 2. Função auxiliar para formatar a data (Ex: 2024-01-15 -> 15/01/2024)
  function formatarData(dataISO) {
    const data = new Date(dataISO);
    return new Intl.DateTimeFormat('pt-BR').format(data);
  }

  return (
    <section>
      <h2>Meus Projetos</h2>
      
      {erro && <p>⚠️ Não foi possível carregar os projetos.</p>}

      <div className="projects-grid">
        {repos.map(repo => {
          return (
            <div key={repo.id} className="project-card">
              
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FolderGit2 size={24} color="#00B37E" />
                  <h3>{repo.name}</h3>
                </div>
              </div>
              
              <p>{repo.description || "Sem descrição definida"}</p>

              {/* Informações Técnicas (Data e Linguagem) */}
              <div className="tech-row">
                {/* 3. Aqui adicionamos a data de criação */}
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#a8a8b3' }}>
                   <Calendar size={14} /> 
                   {formatarData(repo.created_at)}
                </span>
                
                {repo.language && <span className="tech-tag">{repo.language}</span>}
                
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} /> {repo.stargazers_count}
                </span>
              </div>

              <div className="card-actions">
                <a href={repo.html_url} target="_blank" className="btn-github">
                  <Github size={16} /> Código
                </a>

                {repo.homepage ? (
                   <a href={repo.homepage} target="_blank" className="btn-deploy">
                     <Globe size={16} /> Site
                   </a>
                ) : (
                  <span className="btn-disabled" title="Sem link configurado">
                    <Globe size={16} /> Site OFF
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}