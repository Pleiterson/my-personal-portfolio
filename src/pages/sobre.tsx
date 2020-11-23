import React from 'react';
import '../styles/pages/sobre.css';
import Header from '../components/header';

export default function Sobre() {
    return (
        <>
            <Header />
            <div className="construction">
                <h1>Em construção...</h1>
                Para visualizar meu currículo, acesse meu <a href="http://linkedin.com.br/in/pleiterson/">LinkedIn</a>
            </div>
        </>
    );
}