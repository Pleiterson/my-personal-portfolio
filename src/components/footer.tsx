import React from 'react';
import {BiArrowToTop} from 'react-icons/bi';
import '../styles/components/footer.css';
import insta from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.png';

export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <nav className="links">
                    <p>Navegação</p>
                    <a href="/curriculo">Curriculo</a>
                    <a href="/contatos">Contatos</a>
                    <a href="/projetos">Projetos</a>
                    <a href="/sobre">Sobre</a>
                </nav>

                <a href="#" className="back-top">
                    <BiArrowToTop size={26}/>
                </a>

                <div className="contacts">
                    <a href="https://www.instagram.com/pleiterson/">
                        <img src={insta} alt="Instagram" title="Instagram" className="social"/>
                    </a>
                    <a href="http://twitter.com/pleiterson">
                        <img src={twitter} alt="Twitter" title="Twitter" className="social"/>
                    </a>
                    <a href="http://www.linkedin.com/in/pleiterson/">
                        <img src={linkedin} alt="LinkedIn" title="LinkedIn" className="social"/>
                    </a>
                    <a href="http://github.com/Pleiterson">
                        <img src={github} alt="GitHub" title="GitHub" className="social"/>
                    </a>
                </div>
                <p className="register">© Pleiterson Amorim</p>
            </div>
        </footer>
    );
}