import React from 'react';
import {AiOutlinePhone} from 'react-icons/ai';
import {FiAtSign} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {GiRelationshipBounds} from 'react-icons/gi';
import '../styles/pages/curriculo.css';
import Header from '../components/header';
import Work from '../components/Curriculo/Work';
import Education from '../components/Curriculo/Education';
import PersonalSkills from '../components/Curriculo/PersonalSkills';
import Cursos from '../components/Curriculo/Cursos';
import profile from '../assets/profile.png';
import brasil from '../assets/images/brasil.png';
import usa from '../assets/images/usa.png';

export default function Curriculo() {
    return (
        <>            
            <Header />                

            <main className="curriculum">
                <div className="container-one">
                    <div className="presentation">
                        <img src={profile} alt="Foto Perfil" className="photo-profile"/>
                        <h1>Pleiterson de Mello Amorim</h1>
                        <h3>Analista Administrativo Pleno</h3>
                    </div>
                    
                    <div className="profile">
                        <h2>Perfil</h2>
                        <p>Exercer atividades com Transparência e Ética, assim como para com os colegas de trabalho.</p>
                        <p>Certificado em Scrum SFC e SFPC. Membro da Associação Nacional de Profissionais de Privacidade de Dados (Brasil).</p>
                    </div>

                    <div className="contact">
                        <h2>Contatos</h2>
                        <p><AiOutlinePhone size={20}/> +55 (31) 98878-9772</p>
                        <p><FiAtSign size={20}/> pleiterson@gmail.com</p>
                        <p><GoLocation size={20}/> Bosque, Ibirité, Minas Gerais, Brasil</p>
                        <p><GiRelationshipBounds size={20}/> Casado</p>
                    </div>

                    <div className="languages">
                        <h2>Idiomas</h2>
                        <div className="level-language">
                            <div className="basico">
                                <p><b>Básico</b></p>
                                <img src={usa} alt="Inglês" title="Inglês"/>
                            </div>
                            {/* <div className="intermediario">
                                <p><b>Intermediário</b></p>
                            </div> */}
                            <div className="nativo-fluente">
                                <p><b>Nativo/Fluente</b></p>
                                <img src={brasil} alt="Portugês" title="Português BR"/>
                            </div>
                        </div>
                    </div>
                    <div className="certificacoes">
                        <h2>Certificações</h2>
                        <div className="licenca">
                            <img src="" alt=""/>
                            <div className="descricao-licenca">
                                <h4></h4>
                                <span><b></b></span>
                                <span></span>
                                <span></span>
                                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-two">
                    <Work />
                    <Education />
                    <PersonalSkills />            
                    <Cursos />
                </div>
            </main>
        </>
    );
}