import React from 'react';
import '../styles/pages/home.css';
import Header from '../components/header';
import sfc from '../assets/images/scrum-sfc.png';
import sfpc from '../assets/images/scrum-sfpc.png';
import pascal from '../assets/images/pascal.jpg';
import vb from '../assets/images/visual-basic.png';
import delphi from '../assets/images/delphi.png';
import cplusplus from '../assets/images/cplusplus.svg';
import csharp from '../assets/images/csharp.svg';
import Sql from '../assets/images/sql.png';
import js from '../assets/images/javascript.svg';
import nodejs from '../assets/images/nodejs.svg';
import reactjs from '../assets/images/reactjs.svg';
import html5 from '../assets/images/html5.svg';
import css3 from '../assets/images/css3.svg';
import git from '../assets/images/git.svg';
import github from '../assets/images/github.svg';

export default function Home() {
    return (
        <>
            <Header />

            <div className="title">
                <h1>- Sobre mim</h1>            
            </div>

            <main>
                <div className="container">
                    <img src="https://avatars0.githubusercontent.com/u/18745378?s=460&u=1ad1ae2a6a433d2d611cfdf097c4c0e1239c525f&v=4" alt="foto" className="photo-home"/>
            
                    <div className="description">
                        <p>Experiência de 9 anos relativos à redução do índice de Fraude, Prevenção de Perdas, Gerenciamento de Risco, análise e elaboração de planos de ação no controle preventivo e auditoria interna. Responsável por mapeamento de Processos de Negócios da Segurança Corporativa da AeC.</p>
                        <p>Certificado em Scrum, SFC e SFPC pela SCRUMStudy e CertiProf. Tenho conhecimentos em BPMN. Estudando LGPD, onde almejo obter as certificações da EXIN, desde Segurança da Informação até o de DPO. Atualmente sou membro da Associação Nacional dos Profissionais de Privacidade de Dados, a ANPPD.</p>
                        <p>Conhecimento nas linguagens de programação Pascal, Visual Basic, Delphi, C++, C# e SQL. Estudando de Sistemas de Informação pela PUC Minas. Busco sempre me atualizar quanto as novas tecnologias de desenvolvimento de softwares do mercado. Atualmente estou estudando JavaScript, HTML com CSS, Node.JS, React.JS, Git, entre vários outros.</p>
                        <p>Sou uma pessoa extrovertida e e amo estar com minha família e amigos. Gosto de leitura, quadrinhos, animes, música, teatro, cinema, bikes, cozinha e apaixonado por videogames, nerd rsrs. Sempre procuro um tempo para sair com minha esposa e filho, e junto a isso, também em aprender e principalmente ensinar ao meu filho de 13 anos os passos da programação.</p>
                    </div>
                </div>

                <div className="title">
                    <h1>- Certificações</h1>            
                </div>

                <div className="certifications">
                    <img src={sfc} alt="Scrum SFC" title="Scrum Fundamentals Certified (SFC)" className="certifi"/>
                    <img src={sfpc} alt="Scrum SFPC" title="Scrum Foundation Professional Certificate (SFPC)" className="certifi"/>
                </div>

                <div className="resume">
                    <div className="box">
                        <h2>Linguagens</h2>
                        <img src={pascal} alt="Pascal" title="Pascal" className="skills"/>                        
                        <img src={vb} alt="Visual Basic" title="Visual Basic" className="skills"/>                        
                        <img src={delphi} alt="Delphi" title="Delphi" className="skills"/>                        
                        <img src={cplusplus} alt="C++" title="C++" className="skills"/>                        
                        <img src={csharp} alt="C#" title="C#" className="skills"/>                        
                        <img src={Sql} alt="SQL" title="SQL" className="skills"/>
                        <img src={js} alt="JavaScript" title="JavaScript" className="skills"/>                        
                    </div>
                    <div className="box">
                        <h2>Frameworks/Bibliotecas</h2>
                        <img src={nodejs} alt="Node.JS" title="Node.JS" className="skills"/>
                        <img src={reactjs} alt="React.JS" title="React.JS" className="skills"/>
                        <img src={html5} alt="HTML5" title="HTML5" className="skills"/>
                        <img src={css3} alt="CSS3" title="CSS3" className="skills"/>
                    </div>
                    <div className="box">
                        <h2>Tecnologias</h2>
                        <img src={git} alt="Git" title="Git" className="skills"/>
                        <img src={github} alt="GitHub" title="GitHub" className="skills"/>
                    </div>
                </div>         
            </main>
        </>        
    );
}