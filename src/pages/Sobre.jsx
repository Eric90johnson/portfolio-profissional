import '../App.css';
import './Sobre.css';

export function Sobre() {
    return (
        <div className="content-area">
            <header className="page-header">
                <h2>Sobre Mim</h2>
                <span className="subtitle">Minha jornada na tecnologia</span>
            </header>

            <section className="bio-section">
                <p>
                    Olá! Meu nome é <strong>Eric Johnson</strong>. Sou um apaixonado por tecnologia em transição de carreira para o desenvolvimento Front-End.
                </p>
                <p>
                    Tenho 35 anos e estou em busca da tão sonhada transição para a área de TI, dedicando-me aos estudos de Desenvolvimento Web Front-End desde 2022. Atualmente, curso Análise e Desenvolvimento de Software, com previsão de conclusão para junho de 2026.
                </p>
                <p>
                    Minha curiosidade natural me impulsiona a entender como as coisas funcionam. Foi isso que me fez apaixonar pelo desenvolvimento web: a capacidade de transformar linhas de código complexas e lógicas em interfaces visuais criativas. Adoro ver o resultado do meu gosto pessoal ganhando vida na tela.
                </p>
                <p>
                    Mudar de profissão após anos na mesma área é um grande dilema. O receio de recomeçar do zero existe, mas a satisfação de passar horas no VS Code, sem ver o tempo passar, confirmou que este é o caminho certo para mim.
                </p>
                <p>
                    Recentemente, encerrei um ciclo de quase 10 anos no meu último emprego. Não encarei isso como algo negativo, mas sim como a oportunidade perfeita para focar totalmente nesse desafio. Agora, busco uma chance para demonstrar meu potencial e o excelente profissional que posso me tornar.
                </p>
                <p>
                    Estou focado no ecossistema <strong>React</strong>, aprendendo a criar interfaces modernas, responsivas e performáticas. Gosto de resolver problemas e transformar ideias em código funcional.
                </p>
            </section>

            <section className="skills-section">
                <h3>Minhas Habilidades</h3>

                <div className="skills-grid">
                    {/* Base da Web */}
                    <div className="skill-card">
                        <span>🌐</span>
                        <strong>HTML5</strong>
                    </div>

                    <div className="skill-card">
                        <span>🎨</span>
                        <strong>CSS3 / Grid</strong>
                    </div>

                    <div className="skill-card">
                        <span>📜</span>
                        <strong>JavaScript</strong>
                    </div>

                    {/* Frameworks e Libs */}
                    <div className="skill-card">
                        <span>⚛️</span>
                        <strong>React.js</strong>
                    </div>

                    <div className="skill-card">
                        <span>⚡</span>
                        <strong>Vite</strong>
                    </div>

                    {/* Back-End */}
                    <div className="skill-card">
                        <span>🟢</span>
                        <strong>Node.js</strong>
                    </div>

                    {/* Ferramentas */}
                    <div className="skill-card">
                        <span>🌳</span>
                        <strong>Git / GitHub</strong>
                    </div>

                    <div className="skill-card">
                        <span>📱</span>
                        <strong>Responsividade</strong>
                    </div>
                </div>
            </section>
        </div>
    )
}