import React from 'react';
import {AiOutlinePhone} from 'react-icons/ai';
import {FiAtSign} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {GiRelationshipBounds} from 'react-icons/gi';
import '../styles/pages/curriculo.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Work from '../components/Curriculo/Work';
import Education from '../components/Curriculo/Education';
import PersonalSkills from '../components/Curriculo/PersonalSkills';
import Cursos from '../components/Curriculo/Cursos';
import profile from '../assets/profile.png';
import brasil from '../assets/images/brasil.png';
import usa from '../assets/images/usa.png';
import study from '../assets/badges/scrumstudy.png';
import certiprof from '../assets/badges/certiprof.jpg';
import whatsapp from '../assets/images/whatsapp.svg';

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
                        <p>
                            <AiOutlinePhone size={20}/> +55 (31) 98878-9772 | <i>Entre em contato → </i>
                            {/* {' '} */}
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5531988789772&text=Olá! Vi seu currículo no seu Portfólio Pessoal. Podemos conversar?" target="_blank" rel="noopener noreferrer">
                                <img src={whatsapp} alt="WhatsApp"/>
                            </a>
                        </p>
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
                            <img src={certiprof} alt="CertiProf"/>
                            <div className="descricao-licenca">
                                <h4>CertiProf Continuous Learner Lifelong Learning (LLL)</h4>
                                <span><b>CertiProf</b></span>
                                <span>Emitido em ago. 2020 ∙ Expira em ago. 2022</span>
                                <span>Nº da credencial </span>
                                <a href="https://www.youracclaim.com/badges/6ba05a04-10f6-4eb0-aeaf-31496067a14a?source=linked_in_profile" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            </div>
                        </div>
                        <div className="licenca">
                            <img src={certiprof} alt="CertiProf"/>
                            <div className="descricao-licenca">
                                <h4>Scrum Foundation Professional Certificate (SFPC)</h4>
                                <span><b>CertiProf</b></span>
                                <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                                <span>Nº da credencial 91591408918998</span>
                                <a href="https://www.youracclaim.com/badges/750429a6-9f36-4ebf-9c35-5e7cf909ca68/linked_in" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            </div>
                        </div>
                        <div className="licenca-last">
                            <img src={study} alt="ScrumStudy"/>
                            <div className="descricao-licenca">
                                <h4>Scrum Fundamentals Certified (SFC)</h4>
                                <span><b>ScrumStudy</b></span>
                                <span>Emitido em mai. 2020 ∙ Nenhuma data de expiração</span>
                                <span>Nº da credencial 779075</span>
                                <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-PleitersonAmorim-779075.pdf" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
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

            <Footer />
        </>
    );
}