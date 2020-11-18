import React from 'react';
import '../../styles/components/Curriculo/cursos.css';
import opice from '../../assets/badges/opiceblum.png';
import fgv from '../../assets/badges/fgv.png';
import bradesco from '../../assets/badges/bradesco.png';
import niduu from '../../assets/badges/niduu.png';
import ietec from '../../assets/badges/ietec.jpg';
import tiexames from '../../assets/badges/tiexames.png';
import bizagi from '../../assets/badges/bizagi.png';
import conquer from '../../assets/badges/conquer.jpg';
import alura from '../../assets/badges/alura.png';

export default function Cursos() {
    return(
        <div className="extracurricular">
            <h2>Cursos e Conhecimentos Adicionais</h2>
            <div className="licensed">
                <img src={alura} alt="Alura Cursos Online"/>
                <div className="description-licensed">
                    <h4>Imersão GameDev JavaScript</h4>
                    <span><b>Alura Cursos Online</b></span>
                    <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial </span>
                    <a href="https://i.imgur.com/HfkoTXf.jpg" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={conquer} alt="Escola Conquer"/>
                <div className="description-licensed">
                    <h4>Inteligência Financeira</h4>
                    <span><b>Escola Conquer</b></span>
                    <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial </span>
                    <a href="https://drive.conqueronline.com.br/Certificados/Intelig%C3%AAncia%20Financeira/1594069138356-54271baa-ae16-4b52-978c-0ebffb9a3fc3.pdf" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={bizagi} alt="Bizagi"/>
                <div className="description-licensed">
                    <h4>Modelagem de Processos</h4>
                    <span><b>Bizagi</b></span>
                    <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial </span>
                    <a href="https://i.imgur.com/PxoX1lV.jpg" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={tiexames} alt="TIexames"/>
                <div className="description-licensed">
                    <h4>OKR: Um caminho para o Business Agility</h4>
                    <span><b>TIexames</b></span>
                    <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 47636</span>
                    <a href="https://www.eadtiexames.com.br/novoensino/certificado_evento_pdf.php?COD_INSCRICAO=eG9mcXlYenIvZ3dRVVRwKzVGd21PQT09" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={tiexames} alt="TIexames"/>
                <div className="description-licensed">
                    <h4>Profissional de Privacidade de Dados (LGPD)</h4>
                    <span><b>TIexames</b></span>
                    <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 43246</span>
                    <a href="https://www.eadtiexames.com.br/novoensino/certificado_profissional.php?COD_INSCRICAO=NnZic0tuR2VxZ3dJRkZyQk1ibXRMUT09" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={tiexames} alt="TIexames"/>
                <div className="description-licensed">
                    <h4>Visão prática de um Profissional de Segurança da Informação</h4>
                    <span><b>TIexames</b></span>
                    <span>Emitido em jun. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 45053</span>
                    <a href="https://www.eadtiexames.com.br/novoensino/certificado_evento_pdf.php?COD_INSCRICAO=U2ZkSWM0QW5uRythVFo4Qk4vTjRrdz09" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={ietec} alt="Ietec - Instituto de Educação Tecnológica"/>
                <div className="description-licensed">
                    <h4>Gestão de Processos</h4>
                    <span><b>Ietec - Instituto de Educação Tecnológica</b></span>
                    <span>Emitido em mai. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial ACPkAeui7q</span>
                    <a href="https://virtual.ietec.com.br/" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={niduu} alt="Niduu"/>
                <div className="description-licensed">
                    <h4>Semana da Gamificação</h4>
                    <span><b>Niduu</b></span>
                    <span>Emitido em mai. 2020 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 9mx3j</span>
                    <a href="https://niduu.com/diploma/9mx3j" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={bradesco} alt="Fundação Bradesco"/>
                <div className="description-licensed">
                    <h4>Fundamentos de ITIL</h4>
                    <span><b>Fundação Bradesco</b></span>
                    <span>Emitido em dez. 2019 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial A66C0D04-83F6-4BEF-A8FA-7CB2331E7777</span>
                    <a href="https://www.ev.org.br/validar-certificado" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={fgv} alt="Fundação Getulio Vargas"/>
                <div className="description-licensed">
                    <h4>Gerenciamento do Escopo de Projetos</h4>
                    <span><b>Fundação Getulio Vargas</b></span>
                    <span>Emitido em nov. 2019 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 2685537.368.OCWGPJEAD-01-2009-1</span>
                    <a href="https://imgur.com/mGK5CDn.png" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={fgv} alt="Fundação Getulio Vargas"/>
                <div className="description-licensed">
                    <h4>Como Organizar o Orçamento Familiar</h4>
                    <span><b>Fundação Getulio Vargas</b></span>
                    <span>Emitido em out. 2019 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 2685530.354.OCWOFEAD-0120-11-1</span>
                    <a href="https://i.imgur.com/Pp8CrVk.jpg" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
            <div className="licensed">
                <img src={opice} alt="Opice Blum Academy"/>
                <div className="description-licensed">
                    <h4>Curso Preparatório para Certificações EXIN - LGPD Essential e GDPR Foundation</h4>
                    <span><b>Opice Blum Academy</b></span>
                    <span>Emitido em ago. 2019 ∙ Nenhuma data de expiração</span>
                    <span>Nº da credencial 489101AFF73F9B73519950</span>
                    <a href="https://e-certificado.com/login/autenticar?c=489101AFF73F9B73519950" target="_blank" rel="noopener noreferrer">Visualizar credencial</a>
                </div>
            </div>
        </div>
    );
}