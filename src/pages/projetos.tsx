import React from 'react';
import '../styles/pages/projetos.css';
import Header from '../components/header';
import Footer from '../components/footer';
import github from '../assets/images/github2.svg';
import gitlab from '../assets/images/gitlab.svg';
import vercel from '../assets/images/vercel.png';
import hipsta from '../assets/projects/bruxahipsta.png';
import instagram from '../assets/projects/instagram.png';
import pleiflix from '../assets/projects/pleiflix.png';
import proffy from '../assets/projects/proffy.png';
import netflix from '../assets/projects/netflix.png';
import portfolio from '../assets/projects/portfolio.png';
import uivercel from '../assets/projects/vercel.png';
import uitypeform from '../assets/projects/typeform.png';
import languagehipsta from '../assets/projects/languages-hipsta.png';
import languagepleiflix from '../assets/projects/languages-pleiflix.png';
import languageproffy from '../assets/projects/languages-proffy.png';
import languageinsta from '../assets/projects/languages-insta.png';
import languagenetflix from '../assets/projects/languages-netflix.png';
import languageport from '../assets/projects/languages-portfolio.png';
import languagevercel from '../assets/projects/languages-vercel.png';
import languagetypeform from '../assets/projects/languages-typeform.png';

export default function Projetos() {
    return (
        <>            
            <Header />

            <div className="title-project">
                <h1>Veja aqui os projetos já realizados por mim</h1>
            </div>

            <div className="instructions">
                <p><img src={github} alt="Repositório"/> Clique nestas imagens abaixo para visualizar o Repositório do Projeto no GitHub e o código.</p>
                <p><img src={gitlab} alt="Repositório"/> Clique nestas imagens abaixo para visualizar o Repositório do Projeto no GitLab e o código.</p>
                <p><img src={vercel} alt="Projeto"/> Clique nestas imagens abaixo para visualizar o Site do Projeto funcionando.</p>
            </div>

            <main className="projects">
                <div className="project">
                    <div className="sub-title">
                        <h3>UI Clone Typeform</h3>
                    </div>
                    <div className="image">
                        <img src={uitypeform} alt="Typeform" title="UI Clone Typeform"/>
                    </div>
                    <div className="description-project">
                        <p>Código do vídeo "Homepage Animada do Typeform com Framer Motion" do YouTube da Rocketseat</p>
                    </div>
                    <div className="pos">
                        <p>UI focado na animação da homepage da Typeform. UI focado na animação da página. Não contém nenhuma imagem do site, focado apenas na animação do scroll.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/ui-clone-typeform-rocketseat" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/ui-clone-typeform-rocketseat" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://uiclone-typeform.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <img src={languagetypeform} alt="Linguagens"/>
                    </div>
                </div>
                <div className="project">
                    <div className="sub-title">
                        <h3>UI Clone Vercel</h3>
                    </div>
                    <div className="image">
                        <img src={uivercel} alt="Vercel" title="UI Clone Vercel"/>
                    </div>
                    <div className="description-project">
                        <p>Código criado do vídeo "Recriando homepage da Vercel" do YouTube da Rocketseat (UI Clone)</p>
                    </div>
                    <div className="pos">
                        <p>UI focado na animação da página. Não contém header e footer, apenas a parte principal do site. Alguns botões são direcionados para as mesmas páginas que a original. Responsividade dada como desafio.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/ui-clone-vercel-rocketseat" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/ui-clone-vercel-rocketseat" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://uiclone-vercel.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <img src={languagevercel} alt="Linguagens"/>
                    </div>
                </div>
                <div className="project">
                    <div className="sub-title">
                        <h3>Meu Portfólio Pessoal</h3>
                    </div>
                    <div className="image">
                        <img src={portfolio} alt="Meu Portfólio Pessoal" title="Meu Portfólio Pessoal"/>
                    </div>
                    <div className="description-project">
                        <p>Projeto pessoal para organizar todas as minhas informações pessoais e profissionais como dev</p>
                    </div>
                    <div className="pos">
                        <p>Ao longo da codificação deste projeto percebi que há várias possibilidades de melhorias, principalmente criar um back-end para armazenar e mostrar alguns dados. As melhorias serão realizadas com o tempo.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/my-personal-portfolio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/my-personal-portfolio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://pleiterson.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <img src={languageport} alt="Linguagens"/>
                    </div>
                </div>
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone interface Netflix</h3>
                    </div>
                    <div className="image">
                        <img src={netflix} alt="Netflix" title="Clone interface Netflix"/>
                    </div>
                    <div className="description-project">
                        <p>Clone da interface da Netflix do Bootcamp HTML Develper da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Neste projeto realizei algumas alterações, como a logo da Netflix que no projeto original não tem. A fonte utilizada no original foi Arial, eu já incluí a fonte Roboto do Google Fonts.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/clone-interface-netflix-html-css-js" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/clone-interface-netflix-html-css-js" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://clone-netflix.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <img src={languagenetflix} alt="Linguagens"/>
                    </div>
                </div>                
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone home Instagram</h3>
                    </div>
                    <div className="image">
                        <img src={instagram} alt="Instagram" title="Clone home Instagram"/>
                    </div>
                    <div className="description-project">
                        <p>Clone da home do Instagram do Bootcamp HTML Develper da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>A imagem principal da página ainda não é a do Instagram. Posteriormente deixarei a mesma imagem da rede social, mudando vários perfis como modelo. Assim como o footer da página.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/clone-home-instagram-html-css" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/clone-home-instagram-html-css" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://clone-instagram.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages">
                        <img src={languageinsta} alt="Linguagens"/>
                    </div>
                </div>
                <div className="project">
                    <div className="sub-title">
                        <h3>Proffy</h3>
                    </div>
                    <div className="image">
                        <img src={proffy} alt="Proffy" title="Proffy"/>
                    </div>
                    <div className="description-project">
                        <p>Site Proffy desenvolvido na Trilha Discovery da Next Level Week #2 da Rocketseat</p>
                    </div>
                    <div className="pos">
                        <p>Fazia alguns anos que não tinha contato com HTML e CSS que nunca vi, resolvi realizar primeiro esta a Trilha Dicovery para rever, conhecer e entender mais sobre CSS.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/nlw2-discovery-proffy" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/nlw2-discovery-proffy" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        {/* <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a> */}
                    </div>
                    <div className="languages-project">
                        <img src={languageproffy} alt="Linguagens"/>
                    </div>
                </div>
                <div className="project">
                    <div className="sub-title">
                        <h3>PleiFlix</h3>
                    </div>
                    <div className="image">
                        <img src={pleiflix} alt="PleiFlix" title="PleiFlix"/>
                    </div>
                    <div className="description-project">
                        <p>Página de streaming (Netflix) criada na Imersão ReactJS pela Alura</p>
                    </div>
                    <div className="pos">
                        <p>Nesta imersão eu realizei a PleiFlix, onde coloquei os conteúdos nos quais estou estudando, ainda tem mais conteúdos para catalogar, e serão realizados com o tempo.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/imersao-reactjs-pleiflix" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/imersao-reactjs-pleiflix" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://pleiflix.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <img src={languagepleiflix} alt="Linguagens"/>
                    </div>
                </div>
                <div className="project">
                    <div className="sub-title">
                        <h3>As Aventuras da Bruxa Hipsta</h3>
                    </div>
                    <div className="image">
                        <img src={hipsta} alt="Bruxa Hipsta" title="As Aventuras da Bruxa Hipsta"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo criado na Imersão GameDev JavaScript pela Alura. Feito no p5.js Web Editor</p>
                    </div>
                    <div className="pos">
                        <p>O jogo possui algumas alterações a serem realizadas, como aumentar a vida a medida que a personagem percorre a a floresta, mudar de cenário, incluir outros inimigos e incluir a opção para jogar via celular.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/imersaogamedev-javascript" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/imersaogamedev-javascript" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://abruxahipsta.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <img src={languagehipsta} alt="Linguagens"/>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}