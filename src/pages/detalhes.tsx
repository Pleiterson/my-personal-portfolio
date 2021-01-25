import React from 'react';
import '../styles/pages/detalhes.css';
import Header from '../components/header';
import Footer from '../components/footer';
import github from '../assets/images/github2.svg';
import BecomeRemote from '../assets/bootcamps/D9C99ED9-00.png';
import BRAula1 from '../assets/bootcamps/D9C99ED9-01.png';
import BRAula2 from '../assets/bootcamps/D9C99ED9-02.png';
import BRAula3 from '../assets/bootcamps/D9C99ED9-03.png';
import BRAula4 from '../assets/bootcamps/D9C99ED9-04.png';
import BRAula5 from '../assets/bootcamps/D9C99ED9-05.png';
import BackEndCarrefour from '../assets/bootcamps/B635F02F-00.png';
import BCAula1 from '../assets/bootcamps/dio.png';
import BCAula2 from '../assets/bootcamps/carrefour.png';
import BCAula3 from '../assets/bootcamps/logica.png';
import BCAula4 from '../assets/bootcamps/controle-versoes.png';
import BCAula5 from '../assets/bootcamps/git-github.png';
import BCAula6 from '../assets/bootcamps/repositorio.png';
import BCAula7 from '../assets/bootcamps/arq-sistemas.png';
import BCAula8 from '../assets/bootcamps/arq-sistemas-avan.png';
import BCAula9 from '../assets/bootcamps/dev-basic-java.png';
import BCAula10 from '../assets/bootcamps/collections-java.png';
import BCAula11 from '../assets/bootcamps/spring-boot.png';
import BCAula12 from '../assets/bootcamps/dev-avan-java.png';
import BCAula13 from '../assets/bootcamps/spring-web-mvc.png';
import BCAula14 from '../assets/bootcamps/testes-java.png';
import BCAula15 from '../assets/bootcamps/dp-kubernetes.png';
import BCAula16 from '../assets/bootcamps/bd postgresql.png';
import BCAula17 from '../assets/bootcamps/scrum.png';
import BCAula18 from '../assets/bootcamps/javascript.png';
import BCAula19 from '../assets/bootcamps/js-es6.png';
import BCAula20 from '../assets/bootcamps/dev-avan-jses6.png';
import BCAula21 from '../assets/bootcamps/nodejs-express.png';
import BCAula22 from '../assets/bootcamps/backend-nodejs.png';
import BCAula23 from '../assets/bootcamps/dp-api-crushes.png';
import BCAula24 from '../assets/bootcamps/dp-ia-java.png';
import BCAula25 from '../assets/bootcamps/el-lgpd.png';
import FullCarrefour from '../assets/bootcamps/B96662DD-00.png';
import FCAula2 from '../assets/bootcamps/banco-carrefour.png';
import FCAula8 from '../assets/bootcamps/domain-driven.png';
import FCAula10 from '../assets/bootcamps/el-arq-hexagonal.png';
import FCAula12 from '../assets/bootcamps/passos-net-c.png';
import FCAula13 from '../assets/bootcamps/dp-net-core.png';
import FCAula14 from '../assets/bootcamps/dev-net.png';
import FCAula15 from '../assets/bootcamps/dp-injec-ntecore.png';
import FCAula16 from '../assets/bootcamps/python.png';
import FCAula17 from '../assets/bootcamps/dp-extr-python.png';
import FCAula21 from '../assets/bootcamps/dp-perfor-js.png';
import FCAula23 from '../assets/bootcamps/dp-tdd-js.png';
import FCAula24 from '../assets/bootcamps/angular.png';
import FCAula25 from '../assets/bootcamps/te-avan-angular.png';
import GlobalFullStack from '../assets/bootcamps/E7A61E1A-00.png';
import GFAula2 from '../assets/bootcamps/global-fullstack.png';
import GFAula9 from '../assets/bootcamps/prog-html-css.png';
import GFAula10 from '../assets/bootcamps/pag-bootstrap.png';
import GFAula13 from '../assets/bootcamps/jquery.png';
import GFAula15 from '../assets/bootcamps/dp-snake-game.png';
import GFAula17 from '../assets/bootcamps/reactjs.png';
import GFAula18 from '../assets/bootcamps/dev-reactjs.png';
import GFAula19 from '../assets/bootcamps/dp-react.png';
import GFAula20 from '../assets/bootcamps/avan-reactjs.png';
import GFAula24 from '../assets/bootcamps/dev-bd-python-django.png';
import GFAula25 from '../assets/bootcamps/dev-python-flesk-api.png';
import GFAula26 from '../assets/bootcamps/dp-flask.png';

export default function Detalhes() {
    return (
        <>
            <Header />

            <main className="details-course">
                {/* Bootcamp Global Full-stack Developer */}
                <div className="container-course">
                    <div className="bootcamp">
                        <img src={GlobalFullStack} alt="Badge Curso"/>
                        <div className="bootcamp-data">
                            <h2>Bootcamp Global Full-stack Developer</h2>
                            <span><a href="https://digitalinnovation.one/" target="_blank" rel="noopener noreferrer">Digital Innovation One Inc.</a></span>
                            <span>Emitido em jul. 2020 ∙ Nenhuma data de expiração</span>
                            <span>Nº da credencial E7A61E1A</span>
                            <a href="https://certificates.digitalinnovation.one/E7A61E1A" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <p>O Global Fullstack Developer é um programa que une desenvolvedores de software das 10 nações que tem a Língua Portuguesa como idioma principal onde você aprenderá a criar soluções e websites para a internet usando HTML, CSS, JavaScript, ReactJS, Python e Banco de dados.</p>
                            <span>Nível: Intermediário ∙ Cursos/Atividades: 26 ∙ Duração: 97 horas</span>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula1} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Bem-vindo à DIO</h4>
                            <p>Seja bem-vindo à Digital Innovation One, o maior ecossistema open education em desenvolvimento de software da América Latina. Você vai começar agora uma jornada para criar o seu currículo com portfólio de projetos inovadores e acelerar a sua carreira para conquistar grandes oportunidades.</p>
                            <span>Nível: Básico ∙ Duração: 1 hora</span>
                            <span>Nº da credencial 6D91FD7B</span>
                            <a href="https://certificates.digitalinnovation.one/6D91FD7B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula2} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Lançamento Global Fullstack Developer</h4>
                            <p>Entenda sobre o novo bootcamp disponível: Global Fullstack Developer, um programa que une desenvolvedores de software das 10 nações que tem a Língua Portuguesa como idioma principal. Com ele você aprenderá a criar soluções e websites para a internet usando HTML, CSS, JavaScript, ReactJS, Python e Banco de dados.</p>
                            <span>Nível: Básico ∙ Duração: 2 hora</span>
                            <span>Nº da credencial 29845794</span>
                            <a href="https://certificates.digitalinnovation.one/29845794" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula3} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Lógica de programação essencial</h4>
                            <p>Lógica de programação é a forma como o desenvolvedor entende a comunicação a fim de programar uma função de um programa. Faz uso de algoritmos, que são sequências de passos bem estabelecidos, como por exemplo, uma receita de bolo.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 009747F0</span>
                            <a href="https://certificates.digitalinnovation.one/009747F0" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula4} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao Git e Controle de Versões</h4>
                            <p>Aprenda o que é controle de versão e como trabalhar com o Git, assim como os seus principais comandos.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial E4A5B1E8</span>
                            <a href="https://certificates.digitalinnovation.one/E4A5B1E8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula5} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao GitHub e comandos para trabalhar em equipe</h4>
                            <p>Conheça mais a fundo o GitHub e sua interface WEB com exemplos de uso de branch e merge com um fluxo de trabalho que você pode usar no mundo real.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 2307BC57</span>
                            <a href="https://certificates.digitalinnovation.one/2307BC57" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula6} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Criando um repositório para seus projetos inovadores</h4>
                            <p>Aprenda neste curso a criar desde uma conta no GitHub até o seu primeiro repositório na plataforma para compartilhar código com outros desenvolvedores e entrar no radar de recrutadores.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 0478AD5A</span>
                            <a href="https://certificates.digitalinnovation.one/0478AD5A" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula7} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Fundamentos de Arquitetura de Sistemas</h4>
                            <p>Aprenda nesse curso sobre como funcionam as arquiteturas de softwares, seus conceitos, aplicações e desenvolvimento de operações.</p>
                            <span>Nível: Básico ∙ Duração: 6 horas</span>
                            <span>Nº da credencial 0FA384AC</span>
                            <a href="https://certificates.digitalinnovation.one/0FA384AC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula8} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao domain driven design e padrões de arquitetura</h4>
                            <p>Nesse curso você aprende os princípios básicos de DDD (Domain Driven Design ou em português desenvolvimento dirigido ao domínio) assim como a sua aplicabilidade e padrões de arquitetura de software.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial D990B46D</span>
                            <a href="https://certificates.digitalinnovation.one/D990B46D" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula9} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Programação para internet com HTML5 e CSS3</h4>
                            <p>Aprenda a construir uma página WEB utilizando estrutura de HTML5 e defina estilos para elementos utilizando CSS3.</p>
                            <span>Nível: Básico ∙ Duração: 6 horas</span>
                            <span>Nº da credencial 8E76C58B</span>
                            <a href="https://certificates.digitalinnovation.one/8E76C58B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula10} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Construindo páginas para internet com Bootstrap</h4>
                            <p>Aprenda a utilizar o framework Bootstrap e aprofunde mais o seu conhecimento em HTML5 e CSS3.</p>
                            <span>Nível: Intermediário ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 25D40B53</span>
                            <a href="https://certificates.digitalinnovation.one/25D40B53" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula8} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Arquitetura de Sistemas Avançado</h4>
                            <p>Conheça sobre os conceitos da arquitetura de sistemas, aplicações em nuvem e operações em softwares.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 38A009FE</span>
                            <a href="https://certificates.digitalinnovation.one/38A009FE" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula18} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Programação para internet com JavaScript</h4>
                            <p>JavaScript é uma das mais importantes linguagens front-end, e nesse curso você entenderá o porquê disso e como trabalhar com ela.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial B23AE002</span>
                            <a href="https://certificates.digitalinnovation.one/B23AE002" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula13} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução à biblioteca jQuery</h4>
                            <p>jQuery é uma biblioteca do JavaScript que produz efeitos e animações por meio de um código reduzido e sem nenhuma instalação externa no browser.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 1605411F</span>
                            <a href="https://certificates.digitalinnovation.one/1605411F" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula19} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>JavaScript ES6 essencial</h4>
                            <p>Nesse curso você vai conhecer a extensão ES6, do JavaScript, que foi criada com o objetivo de resolver problemas antigos da linguagem, facilitar a construção de aplicações, entre outros benefícios.</p>
                            <span>Nível: Intermediário ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 40273713</span>
                            <a href="https://certificates.digitalinnovation.one/40273713" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula15} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Recriando o jogo da cobrinha com JavaScript</h4>
                            <p>Já pensou em criar seu próprio jogo do zero? Aprenda a desenvolver de forma simples o clássico jogo da cobrinha utilizando HTML, CSS e JavaScript.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial E49FBA66</span>
                            <a href="https://certificates.digitalinnovation.one/E49FBA66" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula20} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento avançado com JavaScript ES6</h4>
                            <p>Aprenda a trabalhar com a mais nova atualização da linguagem JavaScript, a ES6, desde seus fundamentos até as funções avançadas e novos conceitos aplicados.</p>
                            <span>Nível: Avançado ∙ Duração: 5 horas</span>
                            <span>Nº da credencial 8F3A0FF8</span>
                            <a href="https://certificates.digitalinnovation.one/8F3A0FF8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula17} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao ReactJS</h4>
                            <p>Aprenda os conceitos sobre ReactJS, ferramenta usada para a criação de interfaces para os usuários.</p>
                            <span>Nível: Básico ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 81739DBC</span>
                            <a href="https://certificates.digitalinnovation.one/81739DBC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula18} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento de aplicações para internet com ReactJS</h4>
                            <p>Você aprenderá conceitos avançados sobre a combinação de Redux com React e sua aplicação.</p>
                            <span>Nível: Intermediário ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 4FB093D3</span>
                            <a href="https://certificates.digitalinnovation.one/4FB093D3" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula19} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Como gerenciar o estado de uma aplicação React</h4>
                            <p>Aprenda sobre gerenciamento de estado com exemplos práticos, desde o State Local até o Redux inclusive com middlewares para requisições assíncronas como Redux-Saga</p>
                            <span>Nível: Intermediário ∙ Duração: 2 horas</span>
                            <span>Nº da credencial B3916E0B</span>
                            <a href="https://certificates.digitalinnovation.one/B3916E0B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula20} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Práticas avançadas em projetos com ReactJS</h4>
                            <p>Conclua o seu conhecimento de React JS com técnicas avançadas para desenvolver e otimizar o tempo dos projetos. Seja um desenvolvedor front-end de alta performance!</p>
                            <span>Nível: Avançado ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 76B0CC32</span>
                            <a href="https://certificates.digitalinnovation.one/76B0CC32" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula17} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Projetos ágeis com SCRUM</h4>
                            <p>SCRUM é um framework utilizado no gerenciamento ágil de projetos de software. Esse curso ensinará os fundamentos e práticas da metodologia.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 129123A8</span>
                            <a href="https://certificates.digitalinnovation.one/129123A8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula16} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Conceitos e melhores práticas com bancos de dados PostgreSQL</h4>
                            <p>Esse curso ensinará como trabalhar com PostgreSQL, um gerenciador de banco de dados relacional.</p>
                            <span>Nível: Básico ∙ Duração: 9 horas</span>
                            <span>Nº da credencial 049D20FC</span>
                            <a href="https://certificates.digitalinnovation.one/049D20FC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula16} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução à programação com Python</h4>
                            <p>O curso trará todo o embasamento da linguagem Python, quando e onde é mais indicado aplicá-la.</p>
                            <span>Nível: Básico ∙ Duração: 8 horas</span>
                            <span>Nº da credencial 04E146F2</span>
                            <a href="https://certificates.digitalinnovation.one/04E146F2" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula24} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento para Internet e Banco de Dados com Python e Django</h4>
                            <p>Esse curso irá ensinar como gerenciar bancos de dados para internet através da framework Django, da linguagem Python.</p>
                            <span>Nível: Intermediário ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 53345273</span>
                            <a href="https://certificates.digitalinnovation.one/53345273" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula25} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento avançado Python com Flask e REST API</h4>
                            <p>Nesse curso você aprenderá sobre a framework Flask e como desenvolver REST API através dela.</p>
                            <span>Nível: Intermediário ∙ Duração: 5 horas</span>
                            <span>Nº da credencial A7B373E4</span>
                            <a href="https://certificates.digitalinnovation.one/A7B373E4" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={GFAula26} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Introdução a Testes com Flask</h4>
                            <p>Aprenda sobre a importância dos testes e uma introdução de como realizar testes unitários em uma aplicação Flask.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 188AD6D0</span>
                            <a href="https://certificates.digitalinnovation.one/188AD6D0" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                </div>

                {/* Bootcamp Fullstack Developer Banco Carrefour */}
                <div className="container-course">
                    <div className="bootcamp">
                        <img src={FullCarrefour} alt="Badge Curso"/>
                        <div className="bootcamp-data">
                            <h2>Bootcamp Fullstack Developer Banco Carrefour</h2>
                            <span><a href="https://digitalinnovation.one/" target="_blank" rel="noopener noreferrer">Digital Innovation One Inc.</a></span>
                            <span>Emitido em jul. 2020 ∙ Nenhuma data de expiração</span>
                            <span>Nº da credencial B96662DD</span>
                            <a href="https://certificates.digitalinnovation.one/B96662DD" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <p>Aprenda gratuitamente quais são as tecnologias usadas no Banco Carrefour, uma instituição que oferece diversos serviços financeiros aos seus clientes.</p>
                            <span>Nível: Intermediário ∙ Cursos/Atividades: 25 ∙ Duração: 96 horas</span>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula1} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Bem-vindo à DIO</h4>
                            <p>Seja bem-vindo à Digital Innovation One, o maior ecossistema open education em desenvolvimento de software da América Latina. Você vai começar agora uma jornada para criar o seu currículo com portfólio de projetos inovadores e acelerar a sua carreira para conquistar grandes oportunidades.</p>
                            <span>Nível: Básico ∙ Duração: 1 hora</span>
                            <span>Nº da credencial 6D91FD7B</span>
                            <a href="https://certificates.digitalinnovation.one/6D91FD7B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula2} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Conheça o Banco Carrefour</h4>
                            <p>O Banco Carrefour começou em 1989 para criar soluções de produtos e serviços. Hoje, é um dos maiores emissores de cartão de crédito do Brasil, oferecendo opções de crédito para milhares de brasileiros.</p>
                            <span>Nível: Básico ∙ Duração: 1 hora</span>
                            <span>Nº da credencial CF8CA85B</span>
                            <a href="https://certificates.digitalinnovation.one/CF8CA85B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula3} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Lógica de programação essencial</h4>
                            <p>Lógica de programação é a forma como o desenvolvedor entende a comunicação a fim de programar uma função de um programa. Faz uso de algoritmos, que são sequências de passos bem estabelecidos, como por exemplo, uma receita de bolo.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 009747F0</span>
                            <a href="https://certificates.digitalinnovation.one/009747F0" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula4} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao Git e Controle de Versões</h4>
                            <p>Aprenda o que é controle de versão e como trabalhar com o Git, assim como os seus principais comandos.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial E4A5B1E8</span>
                            <a href="https://certificates.digitalinnovation.one/E4A5B1E8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula5} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao GitHub e comandos para trabalhar em equipe</h4>
                            <p>Conheça mais a fundo o GitHub e sua interface WEB com exemplos de uso de branch e merge com um fluxo de trabalho que você pode usar no mundo real.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 2307BC57</span>
                            <a href="https://certificates.digitalinnovation.one/2307BC57" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula6} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Criando um repositório para seus projetos inovadores</h4>
                            <p>Aprenda neste curso a criar desde uma conta no GitHub até o seu primeiro repositório na plataforma para compartilhar código com outros desenvolvedores e entrar no radar de recrutadores.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 0478AD5A</span>
                            <a href="https://certificates.digitalinnovation.one/0478AD5A" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula7} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Fundamentos de Arquitetura de Sistemas</h4>
                            <p>Aprenda nesse curso sobre como funcionam as arquiteturas de softwares, seus conceitos, aplicações e desenvolvimento de operações.</p>
                            <span>Nível: Básico ∙ Duração: 6 horas</span>
                            <span>Nº da credencial 0FA384AC</span>
                            <a href="https://certificates.digitalinnovation.one/0FA384AC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula8} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao domain driven design e padrões de arquitetura</h4>
                            <p>Nesse curso você aprende os princípios básicos de DDD (Domain Driven Design ou em português desenvolvimento dirigido ao domínio) assim como a sua aplicabilidade e padrões de arquitetura de software.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial D990B46D</span>
                            <a href="https://certificates.digitalinnovation.one/D990B46D" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula8} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Arquitetura de Sistemas Avançado</h4>
                            <p>Conheça sobre os conceitos da arquitetura de sistemas, aplicações em nuvem e operações em softwares.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 38A009FE</span>
                            <a href="https://certificates.digitalinnovation.one/38A009FE" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula10} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Expert Lesson: Arquitetura Hexagonal: mantendo aplicações saudáveis</h4>
                            <p>Aprenda o que é a Arquitetura Hexagonal, por que ela existe e como ela funciona, passando por todo o caminho que um recurso faz no software, desde o seu ponto de entrada até o retorno para o cliente.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 1155874A</span>
                            <a href="https://certificates.digitalinnovation.one/1155874A" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula16} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Conceitos e melhores práticas com bancos de dados PostgreSQL</h4>
                            <p>Esse curso ensinará como trabalhar com PostgreSQL, um gerenciador de banco de dados relacional.</p>
                            <span>Nível: Básico ∙ Duração: 9 horas</span>
                            <span>Nº da credencial 049D20FC</span>
                            <a href="https://certificates.digitalinnovation.one/049D20FC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula12} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Primeiros passos com .NET + C#</h4>
                            <p>Nesse curso o aluno terá o primeiro contato com a plataforma .NET e sua linguagem C# aprendendo onde e como utilizá-las. O especialista vai mostrar como preparar ambiente, lidar com erros, classes e objetos.</p>
                            <span>Nível: Básico ∙ Duração: 7 horas</span>
                            <span>Nº da credencial 296E5E8C</span>
                            <a href="https://certificates.digitalinnovation.one/296E5E8C" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula13} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Testando aplicações .Net Core</h4>
                            <p>Testar uma aplicação é algo extremamente importante e relativamente simples. Aprenda como fazer testes de unidade e de integração em aplicações .NET Core.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial A41A23ED</span>
                            <a href="https://certificates.digitalinnovation.one/A41A23ED" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula14} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento de aplicações com .NET</h4>
                            <p>Aprenda a sobre o Entity Framework, como criar aplicativos web ASP .NET API e ASP .NET MVC. Você também vai criar testes na aplicação e um projeto com Unit Tests.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial F70E7C2A</span>
                            <a href="https://certificates.digitalinnovation.one/F70E7C2A" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula15} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Injeção de Dependência em .NET Core: o que é isso?</h4>
                            <p>Aprenda a utilizar um hands on e injeção de dependência nativa do .NET Core e qual a melhor forma de usá-la.</p>
                            <span>Nível: Básico ∙ Duração: 3 horas</span>
                            <span>Nº da credencial F28F2BFE</span>
                            <a href="https://certificates.digitalinnovation.one/F28F2BFE" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula16} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução à programação com Python</h4>
                            <p>O curso trará todo o embasamento da linguagem Python, quando e onde é mais indicado aplicá-la.</p>
                            <span>Nível: Básico ∙ Duração: 8 horas</span>
                            <span>Nº da credencial 04E146F2</span>
                            <a href="https://certificates.digitalinnovation.one/04E146F2" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula17} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Extraindo dados da web com Python</h4>
                            <p>Com a difusão do termo Big Data houve também um aumento na demanda por novos profissionais que atuem na área de manipulação de dados. Aprenda técnicas de web scraping, skill essencial para seguir a carreira em Data Science. Essa técnica será aprendida através do Python, linguagem nº 1 dos profissionais dessa área.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 32F9C9C1</span>
                            <a href="https://certificates.digitalinnovation.one/32F9C9C1" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula17} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Projetos ágeis com SCRUM</h4>
                            <p>SCRUM é um framework utilizado no gerenciamento ágil de projetos de software. Esse curso ensinará os fundamentos e práticas da metodologia.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 129123A8</span>
                            <a href="https://certificates.digitalinnovation.one/129123A8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula18} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Programação para internet com JavaScript</h4>
                            <p>JavaScript é uma das mais importantes linguagens front-end, e nesse curso você entenderá o porquê disso e como trabalhar com ela.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial B23AE002</span>
                            <a href="https://certificates.digitalinnovation.one/B23AE002" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula19} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>JavaScript ES6 essencial</h4>
                            <p>Nesse curso você vai conhecer a extensão ES6, do JavaScript, que foi criada com o objetivo de resolver problemas antigos da linguagem, facilitar a construção de aplicações, entre outros benefícios.</p>
                            <span>Nível: Intermediário ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 40273713</span>
                            <a href="https://certificates.digitalinnovation.one/40273713" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula21} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Performance Web Utilizando JavaScript</h4>
                            <p>Esse projeto prático vai ensinar o desenvolvedor a implementar a experiência do usuário para deixá-la em alta performance.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 09AB6094</span>
                            <a href="https://certificates.digitalinnovation.one/09AB6094" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={BCAula20} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento avançado com JavaScript ES6</h4>
                            <p>Aprenda a trabalhar com a mais nova atualização da linguagem JavaScript, a ES6, desde seus fundamentos até as funções avançadas e novos conceitos aplicados.</p>
                            <span>Nível: Avançado ∙ Duração: 5 horas</span>
                            <span>Nº da credencial 8F3A0FF8</span>
                            <a href="https://certificates.digitalinnovation.one/8F3A0FF8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula23} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: TDD com JavaScript</h4>
                            <p>Você já ouviu falar de TDD (Test Driven Development)? Quer fazer os olhos do(a) entrevistador(a) brilhar ou se destacar na sua equipe? Domine a arte dos testes de software e o mais interessante: usando JavaScript! Veremos tipos de testes, ferramentas e como testar a nossa aplicação.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 83BE56CA</span>
                            <a href="https://certificates.digitalinnovation.one/83BE56CA" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula24} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao Angular 8</h4>
                            <p>Nesse curso você aprenderá os conceitos e técnicas necessárias para começar a desenvolver aplicações usando Angular 8.</p>
                            <span>Nível: Básico ∙ Duração: 5 horas</span>
                            <span>Nº da credencial EDE9CC08</span>
                            <a href="https://certificates.digitalinnovation.one/EDE9CC08" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    <div className="courses">
                        <img src={FCAula25} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Técnicas avançadas em Angular 8</h4>
                            <p>Aprenda a montar um CRUD (Create, Read, Update e Delete) completo de filmes com aulas práticas voltadas para desenvolvedores que já possuem conhecimentos em Angular.</p>
                            <span>Nível: Intermediário ∙ Duração: 8 horas</span>
                            <span>Nº da credencial E0BFCCAD</span>
                            <a href="https://certificates.digitalinnovation.one/E0BFCCAD" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                </div>

                {/* Bootcamp Back-end Developer Carrefour */}
                <div className="container-course">
                    <div className="bootcamp">
                        <img src={BackEndCarrefour} alt="Badge Curso"/>
                        <div className="bootcamp-data">
                            <h2>Bootcamp Back-end Developer Carrefour</h2>
                            <span><a href="https://digitalinnovation.one/" target="_blank" rel="noopener noreferrer">Digital Innovation One Inc.</a></span>
                            <span>Emitido em jul. 2020 ∙ Nenhuma data de expiração</span>
                            <span>Nº da credencial B635F02F</span>
                            <a href="https://certificates.digitalinnovation.one/B635F02F" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <p>Aprenda as tecnologias usadas no Carrefour e se prepare para trabalhar em uma empresa global! Esse treinamento foi desenvolvido para que você conheça quais tecnologias são usadas no Carrefour.</p>
                            <span>Nível: Intermediário ∙ Cursos/Atividades: 25 ∙ Duração: 100 horas</span>
                        </div>
                    </div>
                    {/* Bem-vindo à DIO */}
                    <div className="courses">
                        <img src={BCAula1} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Bem-vindo à DIO</h4>
                            <p>Seja bem-vindo à Digital Innovation One, o maior ecossistema open education em desenvolvimento de software da América Latina. Você vai começar agora uma jornada para criar o seu currículo com portfólio de projetos inovadores e acelerar a sua carreira para conquistar grandes oportunidades.</p>
                            <span>Nível: Básico ∙ Duração: 1 hora</span>
                            <span>Nº da credencial 6D91FD7B</span>
                            <a href="https://certificates.digitalinnovation.one/6D91FD7B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Conheça o Carrefour */}
                    <div className="courses">
                        <img src={BCAula2} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Conheça o Carrefour</h4>
                            <p>Conheça um pouco mais sobre a maior instituição de varejo alimentar do Brasil que oferece muito mais que apenas alimentos, eletrodomésticos e outros produtos. Descubra por que o Carrefour busca uma alimentação e soluções melhores para todos os brasileiros.</p>
                            <span>Nível: Básico ∙ Duração: 1 hora</span>
                            <span>Nº da credencial D33108FF</span>
                            <a href="https://certificates.digitalinnovation.one/D33108FF" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Lógica de programação essencial */}
                    <div className="courses">
                        <img src={BCAula3} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Lógica de programação essencial</h4>
                            <p>Lógica de programação é a forma como o desenvolvedor entende a comunicação a fim de programar uma função de um programa. Faz uso de algoritmos, que são sequências de passos bem estabelecidos, como por exemplo, uma receita de bolo.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 009747F0</span>
                            <a href="https://certificates.digitalinnovation.one/009747F0" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/logica-flowgorithm" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fluxogramas do Flowgorithm"/>
                                </a>
                                <a href="https://github.com/Pleiterson/logica-portugol" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Códigos Portugol"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Introdução ao Git e Controle de Versões */}
                    <div className="courses">
                        <img src={BCAula4} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao Git e Controle de Versões</h4>
                            <p>Aprenda o que é controle de versão e como trabalhar com o Git, assim como os seus principais comandos.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial E4A5B1E8</span>
                            <a href="https://certificates.digitalinnovation.one/E4A5B1E8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/introducaogit-git" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Códigos Git"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Introdução ao GitHub e comandos para trabalhar em equipe */}
                    <div className="courses">
                        <img src={BCAula5} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao GitHub e comandos para trabalhar em equipe</h4>
                            <p>Conheça mais a fundo o GitHub e sua interface WEB com exemplos de uso de branch e merge com um fluxo de trabalho que você pode usar no mundo real.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 2307BC57</span>
                            <a href="https://certificates.digitalinnovation.one/2307BC57" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/introducaogit-git" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Códigos Git"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Criando um repositório para seus projetos inovadores */}
                    <div className="courses">
                        <img src={BCAula6} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Criando um repositório para seus projetos inovadores</h4>
                            <p>Aprenda neste curso a criar desde uma conta no GitHub até o seu primeiro repositório na plataforma para compartilhar código com outros desenvolvedores e entrar no radar de recrutadores.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 0478AD5A</span>
                            <a href="https://certificates.digitalinnovation.one/0478AD5A" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Fundamentos de Arquitetura de Sistemas */}
                    <div className="courses">
                        <img src={BCAula7} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Fundamentos de Arquitetura de Sistemas</h4>
                            <p>Aprenda nesse curso sobre como funcionam as arquiteturas de softwares, seus conceitos, aplicações e desenvolvimento de operações.</p>
                            <span>Nível: Básico ∙ Duração: 6 horas</span>
                            <span>Nº da credencial 0FA384AC</span>
                            <a href="https://certificates.digitalinnovation.one/0FA384AC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Arquitetura de Sistemas Avançado */}
                    <div className="courses">
                        <img src={BCAula8} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Arquitetura de Sistemas Avançado</h4>
                            <p>Conheça sobre os conceitos da arquitetura de sistemas, aplicações em nuvem e operações em softwares.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 38A009FE</span>
                            <a href="https://certificates.digitalinnovation.one/38A009FE" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Desenvolvimento básico em Java */}
                    <div className="courses">
                        <img src={BCAula9} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento básico em Java</h4>
                            <p>A linguagem Java é orientada a objetos e uma das mais usadas por desenvolvedores no mundo. Aprenda desde os conceitos e instalação até a execução de projetos em Java.</p>
                            <span>Nível: Básico ∙ Duração: 9 horas</span>
                            <span>Nº da credencial 3315DFE1</span>
                            <a href="https://certificates.digitalinnovation.one/3315DFE1" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/java-basico-projetos-spring-boot" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Projetos Spring Boot Gradle e Maven"/>
                                </a>
                                <a href="https://github.com/Pleiterson/java-basico" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Java Básico"/>
                                </a>
                                <a href="https://github.com/Pleiterson/digital-innovation-one" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/DigitalInnovationOne-CursoBasicoJava" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Implementando Collections e Streams com Java */}
                    <div className="courses">
                        <img src={BCAula10} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Implementando Collections e Streams com Java</h4>
                            <p>Aprenda a trabalhar com collections e streams, usadas para implementar estrutura de dados da linguagem Java.</p>
                            <span>Nível: Intermediário ∙ Duração: 6 horas</span>
                            <span>Nº da credencial CDD47E29</span>
                            <a href="https://certificates.digitalinnovation.one/CDD47E29" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/collections-streams-java" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Collections e Streams"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Introdução ao framework Spring Boot */}
                    <div className="courses">
                        <img src={BCAula11} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao framework Spring Boot</h4>
                            <p>Spring Boot é um micro framework que tem como finalidade reaproveitar tecnologias já aplicadas a fim de otimizar o trabalho do desenvolvedor.</p>
                            <span>Nível: Intermediário ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 4E3116F7</span>
                            <a href="https://certificates.digitalinnovation.one/4E3116F7" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/introducao-springboot" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Spring Boot"/>
                                </a>
                                <a href="https://github.com/Pleiterson/springboot_digital_innovation_one" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Desenvolvimento avançado em Java */}
                    <div className="courses">
                        <img src={BCAula12} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento avançado em Java</h4>
                            <p>Aprenda em 8 horas de curso a executar de forma eficaz e ágil a linguagem Java e ainda conheça quais são as novidades nas versões da tecnologia: Java 10 e Java 11.</p>
                            <span>Nível: Avançado ∙ Duração: 8 horas</span>
                            <span>Nº da credencial C4B7D18E</span>
                            <a href="https://certificates.digitalinnovation.one/C4B7D18E" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/java-avancado" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/java-modular" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Criando aplicações web com Spring Web MVC */}
                    <div className="courses">
                        <img src={BCAula13} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Criando aplicações web com Spring Web MVC</h4>
                            <p>Considerado um dos frameworks mais conhecido e utilizado de Java, o Spring Web MVC reúne várias funções em apenas uma ferramenta que otimiza o trabalho do desenvolvedor.</p>
                            <span>Nível: Intermediário ∙ Duração: 7 horas</span>
                            <span>Nº da credencial 8C4186B9</span>
                            <a href="https://certificates.digitalinnovation.one/8C4186B9" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/spring-web-mvc" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Spring Web MVC"/>
                                </a>
                                <a href="https://github.com/Pleiterson/global-labs-academy" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/digitalinnovation-jaxrs" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/digitalinnovation-filters" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/digitalinnovation-jackson" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/digitalinovation-mockmvc" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Aprenda a aplicar testes com Java */}
                    <div className="courses">
                        <img src={BCAula14} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Aprenda a aplicar testes com Java</h4>
                            <p>Saiba como criar testes e utilizar as principais ferramentas usadas no mercado de trabalho que oferecem segurança e qualidade no código.</p>
                            <span>Nível: Intermediário ∙ Duração: 2 horas</span>
                            <span>Nº da credencial AD672F5E</span>
                            <a href="https://certificates.digitalinnovation.one/AD672F5E" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Desafio prático: Deploying Java em Kubernetes com Quarkus */}
                    <div className="courses">
                        <img src={BCAula15} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Deploying Java em Kubernetes com Quarkus</h4>
                            <p>Neste projeto prático, o especialista vai apresentar como a comunidade Java está adaptando o ecossistema para atender novas necessidades como containers cold start e processos de curta duração.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial B0F84864</span>
                            <a href="https://certificates.digitalinnovation.one/B0F84864" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Conceitos e melhores práticas com bancos de dados PostgreSQL */}
                    <div className="courses">
                        <img src={BCAula16} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Conceitos e melhores práticas com bancos de dados PostgreSQL</h4>
                            <p>Esse curso ensinará como trabalhar com PostgreSQL, um gerenciador de banco de dados relacional.</p>
                            <span>Nível: Básico ∙ Duração: 9 horas</span>
                            <span>Nº da credencial 049D20FC</span>
                            <a href="https://certificates.digitalinnovation.one/049D20FC" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/digital_innovation_one" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Projetos ágeis com SCRUM */}
                    <div className="courses">
                        <img src={BCAula17} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Projetos ágeis com SCRUM</h4>
                            <p>SCRUM é um framework utilizado no gerenciamento ágil de projetos de software. Esse curso ensinará os fundamentos e práticas da metodologia.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial 129123A8</span>
                            <a href="https://certificates.digitalinnovation.one/129123A8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Programação para internet com JavaScript */}
                    <div className="courses">
                        <img src={BCAula18} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Programação para internet com JavaScript</h4>
                            <p>JavaScript é uma das mais importantes linguagens front-end, e nesse curso você entenderá o porquê disso e como trabalhar com ela.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial B23AE002</span>
                            <a href="https://certificates.digitalinnovation.one/B23AE002" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/programacao-internet-js-dio" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* JavaScript ES6 essencial */}
                    <div className="courses">
                        <img src={BCAula19} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>JavaScript ES6 essencial</h4>
                            <p>Nesse curso você vai conhecer a extensão ES6, do JavaScript, que foi criada com o objetivo de resolver problemas antigos da linguagem, facilitar a construção de aplicações, entre outros benefícios.</p>
                            <span>Nível: Intermediário ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 40273713</span>
                            <a href="https://certificates.digitalinnovation.one/40273713" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/javascript-es6-essencial-dio" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/Pleiterson/introducao-ao-javascript-dio" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor"/>
                                </a>
                                <a href="https://github.com/tc39/proposal-decorators" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Proposal Decorators"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Desenvolvimento avançado com JavaScript ES6 */}
                    <div className="courses">
                        <img src={BCAula20} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento avançado com JavaScript ES6</h4>
                            <p>Aprenda a trabalhar com a mais nova atualização da linguagem JavaScript, a ES6, desde seus fundamentos até as funções avançadas e novos conceitos aplicados.</p>
                            <span>Nível: Avançado ∙ Duração: 5 horas</span>
                            <span>Nº da credencial 8F3A0FF8</span>
                            <a href="https://certificates.digitalinnovation.one/8F3A0FF8" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/javascript-es6-avancado-dio" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor - NodeJS com Express"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Introdução ao Node.js com Express */}
                    <div className="courses">
                        <img src={BCAula21} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Introdução ao Node.js com Express</h4>
                            <p>Nesse curso você vai conhecer um framework de JavaScript, o Express, que foi criado com a finalidade de criar aplicativos web usando o Node.js.</p>
                            <span>Nível: Básico ∙ Duração: 2 horas</span>
                            <span>Nº da credencial C77A2991</span>
                            <a href="https://certificates.digitalinnovation.one/C77A2991" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <div className="repos">
                                <a href="https://github.com/Pleiterson/node-express" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor - NodeJS com Express"/>
                                </a>
                                <a href="https://github.com/Pleiterson/node-cli" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor - CLI"/>
                                </a>
                                <a href="https://github.com/Pleiterson/node-clima-cli" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor - Clima CLI"/>
                                </a>
                                <a href="https://github.com/Pleiterson/pug-template" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor - Pug Template"/>
                                </a>
                                <a href="https://github.com/Pleiterson/pug-express" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Repositório" title="Fork do Instrutor - Pug com Express"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Desenvolvimento back-end com Node.js */}
                    <div className="courses">
                        <img src={BCAula22} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desenvolvimento back-end com Node.js</h4>
                            <p>Aprenda como programar em back-end utilizando o Node, uma plataforma poderosa de aplicações que conecta o back ao front-end.</p>
                            <span>Nível: Intermediário ∙ Duração: 5 horas</span>
                            <span>Nº da credencial A8DB674E</span>
                            <a href="https://certificates.digitalinnovation.one/A8DB674E" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Desafio prático: Criando uma API em Node.js para gerenciar seus crushes */}
                    <div className="courses">
                        <img src={BCAula23} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: Criando uma API em Node.js para gerenciar seus crushes</h4>
                            <p>Está difícil gerenciar todos os seus contatinhos? Então não perca essa atividade prática! Aprenda a construir uma API usando Node.js para organizar os likes e crushes com Jakeliny Gracielly.</p>
                            <span>Nível: Intermediário ∙ Duração: 3 horas</span>
                            <span>Nº da credencial EDCA02CF</span>
                            <a href="https://certificates.digitalinnovation.one/EDCA02CF" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Desafio prático: IA com JAVA? Construindo um sistema de recomendação! */}
                    <div className="courses">
                        <img src={BCAula24} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desafio prático: IA com JAVA? Construindo um sistema de recomendação!</h4>
                            <p>Aprenda o que são sistemas de recomendação e como fazer um MVP disso em Java usando o Mahout.</p>
                            <span>Nível: Avançado ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 18CA97BE</span>
                            <a href="https://certificates.digitalinnovation.one/18CA97BE" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Expert Lesson: Introdução à LGPD */}
                    <div className="courses">
                        <img src={BCAula25} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Expert Lesson: Introdução à LGPD</h4>
                            <p>Principais conceitos da Lei Geral de Proteção de Dados Pessoais e como o desenvolvimento de software será afetado com a lei.</p>
                            <span>Nível: Básico ∙ Duração: 3 horas</span>
                            <span>Nº da credencial 20ACEFF5</span>
                            <a href="https://certificates.digitalinnovation.one/20ACEFF5" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                </div>

                {/* Bootcamp Become Remote */}
                <div className="container-course-last">
                    <div className="bootcamp">
                        <img src={BecomeRemote} alt="Badge Curso"/>
                        <div className="bootcamp-data">
                            <h2>Bootcamp Become Remote</h2>
                            <span><a href="https://digitalinnovation.one/" target="_blank" rel="noopener noreferrer">Digital Innovation One Inc.</a></span>
                            <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                            <span>Nº da credencial D9C99ED9</span>
                            <a href="https://certificates.digitalinnovation.one/D9C99ED9" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                            <p>Tudo o que você precisa saber para ser um profissional de sucesso de forma remota. Esse bootcamp vai te ajudar a se preparar para oportunidades ou projetos remotos de forma eficaz e direto ao ponto. Aprenda sobre comunicação, ferramentas, escopo e os desafios de trabalhar remoto. Você vai sair desse curso já sabendo as boas práticas dessa nova forma de trabalho e vai poder ser produtivo desde o dia 01 em um novo projeto.</p>
                            <span>Nível: Intermediário ∙ Cursos/Atividades: 25 ∙ Duração: 17 horas</span>
                        </div>
                    </div>
                    {/* Boas-vindas da Impulso */}
                    <div className="courses">
                        <img src={BRAula1} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Boas-vindas da Impulso</h4>
                            <p>Esse bootcamp é uma parceria entre a Digital Innovation One e a Impulso Network. A DIO você já conhece, mas o que é a Impulso Network? Esse curso tem o objetivo de explicar como a DIO e a Impulso podem te ajudar a acelerar ainda mais sua carreira.</p>
                            <span>Nível: Básico ∙ Duração: 1 hora</span>
                            <span>Nº da credencial BA3C6D0B</span>
                            <a href="https://certificates.digitalinnovation.one/BA3C6D0B" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Desmistificando o Trabalho Remoto */}
                    <div className="courses">
                        <img src={BRAula2} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Desmistificando o Trabalho Remoto</h4>
                            <p>Entenda o que faz parte do trabalho remoto e o que você e sua equipe precisam saber para que todos os processos e comunicações funcionem de forma eficaz. A especialista também vai esclarecer sobre o uso de ferramentas para organizar atividades e sobre o conceito "remote first".</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 423B4F04</span>
                            <a href="https://certificates.digitalinnovation.one/423B4F04" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Como se comunicar de forma eficiente e eficaz trabalhando remotamente */}
                    <div className="courses">
                        <img src={BRAula3} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Como se comunicar de forma eficiente e eficaz trabalhando remotamente</h4>
                            <p>A comunicação é primordial para o andamento de qualquer projeto, em especial para projetos desenvolvidos equipes remotas. Nesse curso você vai aprender sobre os tipos de comunicação envolvidos em trabalhar remotamente e como você deve agir em cada uma delas.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 0CABF5F1</span>
                            <a href="https://certificates.digitalinnovation.one/0CABF5F1" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Como gerenciar seus projetos trabalhando remotamente */}
                    <div className="courses">
                        <img src={BRAula4} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Como gerenciar seus projetos trabalhando remotamente</h4>
                            <p>Começar um novo projeto exige que o profissional se informe sobre todo o cenário do produto como: modelo de negócio, qual o momento do produto e como atingir os objetivos. Nesse curso você vai aprender como ficar por dentro de todo o contexto do projeto e como organizar suas prioridades e tarefas junto a sua equipe de forma remota.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial 91FA843C</span>
                            <a href="https://certificates.digitalinnovation.one/91FA843C" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                    {/* Rotina e produtividade individual no trabalho remoto */}
                    <div className="courses">
                        <img src={BRAula5} alt="Badge Curso"/>
                        <div className="course-data">
                            <h4>Rotina e produtividade individual no trabalho remoto</h4>
                            <p>Nesse último curso do bootcamp a especialista vai falar sobre a importância de adaptar o seu espaço para o trabalho remoto, quais os principais desafios encontrados por quem começa essa nova jornada e a solução para os mesmos.</p>
                            <span>Nível: Básico ∙ Duração: 4 horas</span>
                            <span>Nº da credencial D6C46D88</span>
                            <a href="https://certificates.digitalinnovation.one/D6C46D88" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}