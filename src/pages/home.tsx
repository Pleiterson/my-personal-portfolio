import React from 'react';
import '../styles/pages/home.css';
import Header from '../components/header';

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <img src="https://avatars0.githubusercontent.com/u/18745378?s=460&u=1ad1ae2a6a433d2d611cfdf097c4c0e1239c525f&v=4" alt="photo" className="photo-home"/>                    
                </div>
                <div className="description">
                    <p>Experiência de 8 anos relativos à redução do índice de Fraude, Prevenção de Perdas, Gerenciamento de Risco, análise e elaboração de planos de ação no controle preventivo e auditoria interna. Responsável por mapeamento de Processos de Negócios da Segurança Corporativa da AeC.</p>
                    <p>Certificado em Scrum, SFC e SFPC pela SCRUMStudy e CertiProf. Tenho conhecimentos em BPMN. Estudando LGPD, onde almejo obter as certificações da EXIN, desde Segurança da Informação até o de DPO. Atualmente sou membro da Associação Nacional dos Profissionais de Privacidade de Dados, a ANPPD.</p>
                    <p>Conhecimento nas linguagens de programação Pascal, Visual Basic, Delphi, C++ e C#. Estudando de Sistemas de Informação pela PUC Minas. Busco sempre me atualizar quanto as novas tecnologias de desenvolvimento de softwares do mercado. Atualmente estou estudando JavaScript, HTML com CSS, Node.JS, React.JS, Git, entre vários outros.</p>
                    <p>Sou uma pessoa extrovertida e e amo estar com minha família e amigos. Gosto de leitura, quadrinhos, animes, música, teatro, cinema, bikes, cozinha e apaixonado por videogames, nerd rsrs. Sempre procuro um tempo para sair com minha esposa e filho, e junto a isso, também em aprender e principalmente ensinar ao meu filho os passos da programação.</p>
                </div>
            </main>
        </>        
    );
}