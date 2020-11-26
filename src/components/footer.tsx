import React from 'react';
import {BiArrowToTop} from 'react-icons/bi';
import '../styles/components/footer.css';
import insta from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.png';
import gitlab from '../assets/images/gitlab.svg';

export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <nav className="links">
                    <p>Navegação</p>
                    <a href="/sobre">Sobre</a>
                    <a href="/curriculo">Curriculo</a>
                    <a href="/contatos">Contatos</a>
                    <a href="/projetos">Projetos</a>
                </nav>

                <a href="#" className="back-top">
                    <BiArrowToTop size={26}/>
                </a>

                <div className="contacts">
                    <a target="_blank" href="https://www.instagram.com/pleiterson/" rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" title="Instagram" className="social"/>
                    </a>
                    <a target="_blank" href="http://twitter.com/pleiterson" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" title="Twitter" className="social"/>
                    </a>
                    <a target="_blank" href="http://www.linkedin.com/in/pleiterson/" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" title="LinkedIn" className="social"/>
                    </a>
                    <a target="_blank" href="http://github.com/Pleiterson" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" title="GitHub" className="social"/>
                    </a>
                    <a target="_blank" href="http://gitlab.com/pleiterson" rel="noopener noreferrer">
                        <img src={gitlab} alt="GitLab" title="GitLab" className="social"/>
                    </a>
                </div>
                <p className="register">Pleiterson Amorim 2020</p> {/*incluir 2020-2021 em 2021*/}
            </div>
        </footer>
    );
}