import React from 'react';
import '../styles/pages/sobre.css';
import Header from '../components/header';

export default function Sobre() {
    return (
        <>
            <Header />
            <div className="construction">
                <h1>Em construção...</h1><br/>
                Para visualizar meu LinkedIn
                <a href="http://linkedin.com.br/in/pleiterson/" target="_blank" rel="noopener noreferrer">Clique aqui.</a> Ou volte para meu currículo.
            </div>
        </>
    );
}