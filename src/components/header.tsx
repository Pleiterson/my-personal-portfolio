import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/header.css';
import imgLogo from '../assets/images/logo.png';

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src={imgLogo} alt="Logo" className="logo-page" />
                </Link>
                <nav className="links">
                    <a href="/sobre">Sobre</a>
                    <a href="/curriculo">Curriculo</a>
                    <a href="/contatos">Contatos</a>
                    <a href="/projetos">Projetos</a>
                </nav>
            </div>
        </header>
    );
}