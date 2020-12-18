import React from 'react';
import '../../styles/components/Curriculo/work.css';

export default function Work() {
    return(
        <div className="work-experience">            
            <h2>Experiência Profissional</h2>                        
            <h3>AeC Centro de Contatos</h3>
            <p>12 anos 3 meses</p>
            {/* <div className="work">
                <h4>ANALISTA ADMINISTRATIVO PLENO | <i>Segurança Corporativa</i></h4>
                <div className="time-work">
                    <span>fev. 2017 até o momento | 3 anos 10 meses</span>
                    <span>Belo Horizonte e Região, Brasil</span>
                </div>
                <p>- Elaboração e Mapeamento de Processos de Negócio do setor de Segurança Corporativa;</p>
                <p>- Promover melhoria e automação nos Processos de Negócio;</p>
                <p>- Elaboração de apresentação de resultados do setor de Antifraude para gerência e diretoria;</p>
                <p>- Realizar análises de Fraudes e Auditoria Interna (sistêmicas e documentais).</p>
            </div> */}

            {/* Segurança Corporativa */}
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
            {/* Antifraude */}
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
            
            {/* Gestão de Acessos */}
            <div className="work">
                <h4>AUXILIAR ADMINISTRATIVO | <i>Gestão de Acessos</i></h4>
                <div className="time-work">
                    <span>set. 2008 a abr 2011 | 2 anos 8 meses</span>
                    <span>Belo Horizonte e Região, Brasil</span>
                </div>
                <p>- Controlar e gerenciar acessos (Logins e Senhas) para com os Sistemas internos e externos (empresa/cliente);</p>
                <p>- Controle e confecção de Base SFTP de logins ativos/inativos (faturamento).</p>
            </div>

            {/* Colortextil Participações LTDA. */}
            <div className="work-last">
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
    );
}