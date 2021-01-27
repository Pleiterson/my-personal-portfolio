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
import snake from '../assets/projects/snake.png';
import dino from '../assets/projects/dinossauro.png';
import ifood from '../assets/projects/ifood.png';
import mercadoLivre from '../assets/projects/mercado-livre.png';
import ptempo from '../assets/projects/ptempo.png';
import naves from '../assets/projects/naves.png';
import genius from '../assets/projects/genius.png';
import mario from '../assets/projects/mario.png';
import velha from '../assets/projects/velha.png';
import shooter from '../assets/projects/shooter.png';
import covid from '../assets/projects/covid19.png';
import dio from '../assets/projects/dio.png';
import telegram from '../assets/projects/telegram.png';

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
                {/* Chatbot Fit Telegram */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Chatbot Fit Telegram</h3>
                    </div>
                    <div className="image">
                        <img src={telegram} alt="dio" title=">Chatbot Fit Telegram"/>
                    </div>
                    <div className="description-project">
                        <p>Construindo um ChatbotFit no Telegram com JavaScript e NodeJS</p>
                    </div>
                    <div className="pos">
                        <p>Chatbot no Telegram para buscas de vídeos de exercícios físicos no YouTube utilizando uma plataforma de entendimento de linguagem natural chamada DialogFlow.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/chatbotfit-telegram-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/chatbotfit-telegram-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        {/* REMOVER <a href="https://game-space-shooter.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a> */}
                    </div>
                    <div className="languages-project">
                        <p>JavaScript</p>
                    </div>
                </div>
                {/* Serverless Sexy API */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Serverless Sexy API</h3>
                    </div>
                    <div className="image">
                        <img src={dio} alt="dio" title=">Serverless Sexy API"/>
                    </div>
                    <div className="description-project">
                        <p>Construindo sexy APIs usando arquitetura serverless</p>
                    </div>
                    <div className="pos">
                        <p>Projeto de “APIs para Gestão de Produtos utilizando Node.js” ao qual você praticará e aplicará os conceitos de desenvolvimento de APIs e Arquitetura Serverless com Node.js.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/serverless-sexy-api-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/serverless-sexy-api-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript</p>
                    </div>
                </div>
                {/* Transferência Bancária - Plei Bank */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Transferência Bancária - Plei Bank</h3>
                    </div>
                    <div className="image">
                        <img src={dio} alt="dio" title=">Transferência Bancária - Plei Bank"/>
                    </div>
                    <div className="description-project">
                        <p>Criando uma aplicação de transferências bancárias com .NET da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Algoritmo simples de transferência bancária para exercer o pensamento orientado a objetos, o principal paradigma de programação utilizada no mercado.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/transferencia-bancaria-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/transferencia-bancaria-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>C#</p>
                    </div>
                </div>
                {/* Cadastro de séries em .NET */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Cadastro de séries em .NET</h3>
                    </div>
                    <div className="image">
                        <img src={dio} alt="dio" title=">Cadastro de séries em .NET"/>
                    </div>
                    <div className="description-project">
                        <p>Criando um APP simples de cadastro de séries em .NET da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Criado um algoritmo simples de cadastro de séries para praticar conhecimentos de orientação a objetos, o principal paradigma de programação utilizada no mercado.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/cadastro-series-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/cadastro-series-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>C#</p>
                    </div>
                </div>
                {/* Mapeamento Covid-19 pelo Mundo */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Mapeamento Covid-19 pelo Mundo</h3>
                    </div>
                    <div className="image">
                        <img src={covid} alt="covid" title=">Mapeamento Covid-19"/>
                    </div>
                    <div className="description-project">
                        <p>Desenvolvendo uma Progressive Web Application com React para mapear os dados do COVID19 pelo mundo</p>
                    </div>
                    <div className="pos">
                        <p>Mantenha-se informado de todos os casos do COVID-19 pelo mundo com uma PWA utilizando React sendo executada no browser e funcionar como aplicativo contendo algumas funcionalidades de um app nativo.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/mapeamento-covid19-js" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/mapeamento-covid19-js" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML</p>
                    </div>
                </div>
                {/* Jogo estilo Space Shooter */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo estilo Space Shooter</h3>
                    </div>
                    <div className="image">
                        <img src={shooter} alt="shooter" title="Jogo estilo Space Shooter"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo estilo Space Shooter criado no Bootcamp JavaScript Game Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Nesse projeto, foi criado o jogo Space Shooter utilizando HTML, CSS e Javascript.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/game-space-shooter-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/game-space-shooter-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-space-shooter.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Jogo da Velha */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo da Velha</h3>
                    </div>
                    <div className="image">
                        <img src={velha} alt="velha" title="Jogo da Velha"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo da Velha criado no Bootcamp JavaScript Game Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Jogo da Velha criado utilizando somente HTML, CSS e Javascript para criarmos toda suas interações, desde a escolha do jogador, efetivar uma jogada e dar um vencedor ao jogo.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/jogo-da-velha-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/jogo-da-velha-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://jogo-velha.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Jogo da Memória - Mário */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo da Memória - Mário</h3>
                    </div>
                    <div className="image">
                        <img src={mario} alt="mario" title="Jogo da Memória - Mário"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo da memória, estilo Super Mário, criado no Bootcamp JavaScript Game Developer da DIO</p>
                    </div>
                    <div className="pos">
                        <p>Com poucas linhas de código, foi desenvolvido, com efeitos 3D no CSS e lógica de programação utilizando condicionais, Immediately Invoked Function Expression e manipulação de Array.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/game-memoria-mario-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/game-memoria-mario-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-memoria-mario.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Jogo da Memória - Genius */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo da Memória - Genius</h3>
                    </div>
                    <div className="image">
                        <img src={genius} alt="genius" title="Jogo da Memória - Genius"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo da memória, estilo Genius, criado no Bootcamp JavaScript Game Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Nesse projeto, foi criado o jogo Genius utilizando apenas HTML, CSS e Javascript de forma introdutória, sendo o principal conceito, CSS Grid, manipulação de Array e Arrow Functions.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/game-memoria-genius-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/game-memoria-genius-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-genius.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Jogo de Naves - Resgate */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo de Naves - Resgate</h3>
                    </div>
                    <div className="image">
                        <img src={naves} alt="naves" title="Jogo de Naves - Resgate"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo de naves e Resgate criado no Bootcamp JavaScript Game Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Utilizando o HTML5 juntamente com CSS3 e JavaScript, é possível desenvolver jogos de forma rápida e compatível com diversas plataformas.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/game-de-naves-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/game-de-naves-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-resgate.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* API Previsão do Tempo */}
                <div className="project">
                    <div className="sub-title">
                        <h3>API de Previsão do Tempo</h3>
                    </div>
                    <div className="image">
                        <img src={ptempo} alt="ptempo" title="API Previsão do tempo"/>
                    </div>
                    <div className="description-project">
                        <p>API de Previsão do Tempo criado no Bootcamp React Native Mobile Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>API de Previsão do Tempo desenvolvido em Angular, e com os dados da Open Weather.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/api-previsao-tempo-angular" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/api-previsao-tempo-angular" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://api-previsao-tempo.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - TypeScript - HTML - SCSS - Angular</p>
                    </div>
                </div>
                {/* Clone Mercado Livre - React Native */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone Mercado Livre</h3>
                    </div>
                    <div className="image">
                        <img src={mercadoLivre} alt="mercadoLivre" title="mercadoLivre"/>
                    </div>
                    <div className="description-project">
                        <p>Clone do Mercado Livre realizado no Bootcamp React Native Mobile Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Aplicativo semelhante ao Mercado Livre em React Native e Firebase, desenvolvido do zero a estrutura de front-end com React e toda a interface utilizando Autentications, Cloud Storage e Cloud Firestore.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/clone-mercadolivre-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/clone-mercadolivre-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-dinossauro.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - React Native - Expo</p>
                    </div>
                </div>
                {/* Clone iFood - React Native */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone iFood</h3>
                    </div>
                    <div className="image">
                        <img src={ifood} alt="iFood" title="iFood"/>
                    </div>
                    <div className="description-project">
                        <p>Clone do iFood realizado no Bootcamp React Native Mobile Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Nesse projeto foi recriada a interface inicial do iFood, com a listagem de restaurantes, carrousel de banners e categorias. Utilizando React Native, Hooks do React para controle de estado, React Navigation.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/clone-ifood-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/clone-ifood-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - React Native - Expo</p>
                    </div>
                </div>
                {/* Clone Instagram - React Native */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone interface e feed Instagram</h3>
                    </div>
                    <div className="image">
                        <img src={instagram} alt="Instagram" title="Instagram"/>
                    </div>
                    <div className="description-project">
                        <p>Clone do Instagram realizado no Bootcamp React Native Mobile Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Nesse projeto foi realizado o clone da interface da página de feed de postagens do app Instagram, utilizando React Native, os Hooks do React para controle de estado, e React Navigation.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/cloneInstagramDIO" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/cloneInstagramDIO" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - React Native</p>
                    </div>
                </div>
                {/* Jogo do Dinossauro - Sem internet */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo do Dinossauro - Sem internet</h3>
                    </div>
                    <div className="image">
                        <img src={dino} alt="Dino Game" title="Dino Game"/>
                    </div>
                    <div className="description-project">
                        <p>Jogo criado durante o Bootcamp React Native Mobile Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Ainda falta algumas melhorias a serem realizadas, como contagem de tempo.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/game-dinossauro-dio" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/game-dinossauro-dio" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-dinossauro.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Jogo da Cobrinha - Snake Game */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Jogo da Cobrinha - Snake Game</h3>
                    </div>
                    <div className="image">
                        <img src={snake} alt="Snake Game" title="Snake Game"/>
                    </div>
                    <div className="description-project">
                        <p>Game Snake criado durante o Bootcamp HTML Developer da Digital Innovation One</p>
                    </div>
                    <div className="pos">
                        <p>Depois vou codificá-lo de forma responsiva. Ainda falta algumas melhorias a serem realizadas, como contagem de tempo e de comida utilizada, e mostrar uma mensagem de Game Over ao invés do alert.</p>
                    </div>
                    <div className="view-project">
                        <a href="https://github.com/Pleiterson/snake-game-javascript" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://gitlab.com/pleiterson/snake-game-javascript" target="_blank" rel="noopener noreferrer">
                            <img src={gitlab} alt="Repositório" title="Repositório do Projeto"/>
                        </a>
                        <a href="https://game-snake.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={vercel} alt="Projeto" title="Site do Projeto"/>
                        </a>
                    </div>
                    <div className="languages-project">
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* UI Clone Typeform */}
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
                        <p>UI focado na animação da homepage da Typeform. Não contém nenhuma imagem do site, focado apenas na animação do scroll.</p>
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
                        <p>TypeScript - HTML</p>
                    </div>
                </div>
                {/* UI Clone Vercel */}
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
                        <p>HTML - SCSS</p>
                    </div>
                </div>
                {/* Meu Portfólio Pessoal */}
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
                        <p>TypeScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Clone interface Netflix */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone interface Netflix</h3>
                    </div>
                    <div className="image">
                        <img src={netflix} alt="Netflix" title="Clone interface Netflix"/>
                    </div>
                    <div className="description-project">
                        <p>Clone da interface da Netflix do Bootcamp HTML Developer da Digital Innovation One</p>
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
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* Clone home Instagram */}
                <div className="project">
                    <div className="sub-title">
                        <h3>Clone home Instagram</h3>
                    </div>
                    <div className="image">
                        <img src={instagram} alt="Instagram" title="Clone home Instagram"/>
                    </div>
                    <div className="description-project">
                        <p>Clone da home do Instagram do Bootcamp HTML Developer da Digital Innovation One</p>
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
                    <div className="languages-project">
                        <p>HTML - CSS</p>
                    </div>
                </div>
                {/* Proffy */}
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
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* PleiFlix */}
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
                        <p>JavaScript - HTML - CSS</p>
                    </div>
                </div>
                {/* As Aventuras da Bruxa Hipsta */}
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
                        <p>JavaScript</p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}