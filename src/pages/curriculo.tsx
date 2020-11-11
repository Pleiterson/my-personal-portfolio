import React from 'react';
import {AiOutlinePhone} from 'react-icons/ai';
import {FiAtSign} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {GiRelationshipBounds, GiBrazilFlag, GiUsaFlag} from 'react-icons/gi';
import '../styles/pages/curriculo.css';
import Header from '../components/header';
import profile from '../assets/profile.png';

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
                        <p><GiBrazilFlag size={20}/> Portugês: Nativo/Fluente</p>
                        <p><GiUsaFlag size={20}/> English: Basic</p>
                    </div>
                </div>

                <div className="container-two">
                    <div className="work-experience">
                        <h2>Experiência Profissional</h2>
                        <h3>AeC Centro de Contatos</h3>
                        <p>12 anos 3 meses</p>
                        {/* <div className="work">
                            <h4> | <i></i></h4>
                            <div className="time-work">
                                <span> | </span>
                                <span></span>
                            </div>
                            <p></p>                            
                        </div> */}
                        <div className="work">
                            <h4>ANALISTA ADMINISTRATIVO PLENO | <i>Segurança Corporativa</i></h4>
                            <div className="time-work">
                                <span>fev. 2017 até o momento | 3 anos 10 meses</span>
                                <span>Belo Horizonte e Região, Brasil</span>
                            </div>
                            <p>- Elaboração e Mapeamento de Processos de Negócio do setor de Segurança Corporativa;</p>
                            <p>- Promover melhoria e automação nos Processos de Negócio;</p>
                            <p>- Elaboração de apresentação de resultados do setor de Antifraude para gerência e diretoria;</p>
                            <p>- Realizar análises de Fraudes e Auditoria Interna (sistêmicas e documentais).</p>
                        </div>
                        <div className="work">
                            <h4>ANALISTA DE FRAUDE | <i>Antifraude</i></h4>
                            <div className="time-work">
                                <span>abr. 2011 a fev. 2017 | 5 anos 11 meses</span>
                                <span>Belo Horizonte e Região, Brasil</span>
                            </div>
                            <p>- Realizar análises de fraudes interna e de Clientes (parceiros) nos canais especiais;</p>
                            <p>- Planejamento estratégico e auditoria interna (sistêmica e documental com ênfase em periscotécnica e caligrafiscópia);</p>
                            <p>- Redução dos índices de fraude através de gerenciamento de riscos, Prevenção de Perdas e nova metodologia de gestão de análise de riscos;</p>
                            <p>- Foco em Prevenção e Custos;</p>
                            <p>- Relacionamento com organizações Federais, Municipais, Estaduais e com empresas de Segurança do Brasil.</p>
                        </div>
                        <div className="work">
                            <h4>AUXILIAR ADMINISTRATIVO | <i>Gestão de Acessos</i></h4>
                            <div className="time-work">
                                <span>set. 2008 a abr 2011 | 2 anos 8 meses</span>
                                <span>Belo Horizonte e Região, Brasil</span>
                            </div>
                            <p>- Controlar e gerenciar acessos (Logins e Senhas) para com os Sistemas internos e externos (empresa/cliente);</p>
                            <p>- Controle e confecção de Base SFTP de logins ativos/inativos (faturamento).</p>
                        </div>
                        <div className="work">
                            <h4>AUXILIAR ADMINISTRATIVO | <i>Produção e Qualidade</i></h4>
                            <b>Colortextil Participações LTDA.</b>
                            <div className="time-work">
                                <span>jun. 2005 a ago. 2008 | 3 anos 3 meses</span>
                                <span>Belo Horizonte e Região, Brasil</span>
                            </div>
                            <p>- Controle dos Índices de Produção de Tecidos e Leves Defeitos ocorridos no processo da produção;</p>
                            <p>- Elaborar relatórios e Apresentação de Resultados à Diretoria;</p>
                            <p>- Capacitar e melhorar desempenho dos Funcionários através de cursos de informática.</p>
                        </div>
                    </div>

                    <div className="education">
                        <h2>Formação</h2>
                        {/* <h4></h4>
                        <p></p> */}
                        <h4>Bacharelado em Sistemas de Informação | 2007- o momento</h4>
                        <p>Pontifícia Universidade Católica de Minas Gerais - PUC Minas</p>
                        <h4>Técnico em Informática Gerencial | 2001-2005</h4>
                        <p>Escola Politécnica de Minas Gerais - POLIMIG</p>
                    </div>

                    <div className="personal-skills">
                        <h2>Habilidades Pessoais</h2>
                    </div>

                    <div className="extracurricular">
                        <h2>Cursos e Conhecimentos Adicionais</h2>
                    </div>
                </div>
            </main>
        </>
    );
}