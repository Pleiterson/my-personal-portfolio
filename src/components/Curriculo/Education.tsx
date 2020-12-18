import React from 'react';
import '../../styles/components/Curriculo/education.css';

export default function Education() {
    return(
        <div className="education">
            <h2>Formação</h2>
                {/* <div className="local-education">
                    <h4>Bacharelado em Sistemas de Informação | 2007- o momento</h4>
                    <p>Pontifícia Universidade Católica de Minas Gerais - PUC Minas</p>
                </div> */}
                
                {/* PUC Minas */}
                <div className="local-education">
                    <h4>Bacharelado em Sistemas de Informação | 2007- o momento</h4>
                    <p>Pontifícia Universidade Católica de Minas Gerais - PUC Minas</p>
                </div>
                
                {/* Polimig */}
                <div className="local-last">
                    <h4>Técnico em Informática Gerencial | 2001-2005</h4>
                    <p className="last">Escola Politécnica de Minas Gerais - POLIMIG</p>
                </div>
        </div>
    );
}