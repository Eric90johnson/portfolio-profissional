import { useState, useEffect } from 'react';
import { FolderGit2, Star, Github, Globe } from 'lucide-react'; // Ícones para os botões
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
            // Mudamos de <a> para <div>, pois agora teremos botões dentro
            <div key={repo.id} className="project-card">
              
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FolderGit2 size={24} color="#00B37E" />
                  <h3>{repo.name}</h3>
                </div>
              </div>
              
              <p>{repo.description || "Sem descrição definida"}</p>

              <div className="tech-row">
                {repo.language && <span className="tech-tag">{repo.language}</span>}
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} /> {repo.stargazers_count}
                </span>
              </div>

              {/* RODAPÉ DO CARTÃO: Onde ficam os botões */}
              <div className="card-actions">
                {/* Botão 1: Ver Código (Link do GitHub) */}
                <a href={repo.html_url} target="_blank" className="btn-github">
                  <Github size={16} /> Código
                </a>

                {/* Botão 2: Ver Site (Link do Github Pages) 
                    A API só traz isso se você tiver colocado o link no campo "Website" do repo no GitHub.
                    Se não tiver link, o botão fica desabilitado visualmente.
                */}
                {repo.homepage ? (
                   <a href={repo.homepage} target="_blank" className="btn-deploy">
                     <Globe size={16} /> Site
                   </a>
                ) : (
                  <span className="btn-disabled" title="Adicione o link no campo Website do GitHub">
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