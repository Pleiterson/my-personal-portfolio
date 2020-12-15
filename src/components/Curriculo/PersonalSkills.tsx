import React from 'react';
import '../../styles/components/Curriculo/personalskills.css';
import cplusplus from '../../assets/images/cplusplus.svg';
import csharp from '../../assets/images/csharp.svg';
import git from '../../assets/images/git.svg';
import github from '../../assets/images/github.svg';
import css from '../../assets/images/css3.svg';
import html from '../../assets/images/html5.svg';
import js from '../../assets/images/javascript.svg';
import nodejs from '../../assets/images/nodejs.svg';
import reactjs from '../../assets/images/reactjs.svg';
import sql from '../../assets/images/sql.png';
import scrum from '../../assets/images/scrum.png';
import kanban from '../../assets/images/kanban.png';
import out from '../../assets/images/outsystems.png';
import office from '../../assets/images/office.png';
import excel from '../../assets/images/excel.png';
import lgpd from '../../assets/images/lgpd.png';
import java from '../../assets/images/java.svg';
import angular from '../../assets/images/angularjs.svg';
import postgresql from '../../assets/images/postgresql.svg';

export default function PersonalSkills() {
    return(
        <div className="personal-skills">
            <h2>Habilidades Pessoais</h2>
            <div className="level">
                <div className="basic">
                    <p><b>Básico</b></p>
                    <img src={out} alt="OutSystems" title="OutSystems"/>
                    <img src={scrum} alt="Scrum" title="Scrum"/>
                    <img src={kanban} alt="Kanban" title="Kanban"/>
                    <img src={angular} alt="Angular" title="Angular" className="skills"/>
                    <img src={postgresql} alt="PostgreSQL" title="PostgreSQL" className="skills"/>
                    <img src={java} alt="Java" title="Java" className="skills"/>
                </div>
                <div className="basic-intermediate">
                    <p><b>Básico a Intermediário</b></p>
                    <img src={sql} alt="SQL" title="SQL"/>
                    <img src={nodejs} alt="NodeJS" title="NodeJS"/>
                    <img src={reactjs} alt="ReactJS" title="ReactJS"/>
                </div>
                <div className="intermediate">
                    <p><b>Intermediário</b></p>
                    <img src={lgpd} alt="C++" title="C++"/>
                    <img src={cplusplus} alt="C++" title="C++"/>
                    <img src={csharp} alt="C#" title="C#"/>
                    <img src={git} alt="Git" title="Git"/>
                    <img src={github} alt="GitHub" title="GitHub"/>
                    <img src={html} alt="HTML5" title="HTML5"/>
                    <img src={css} alt="CSS3" title="CSS3"/>
                    <img src={js} alt="JavaScript" title="JavaScript"/>
                </div>
                <div className="advanced">
                    <p><b>Avançado</b></p>
                    <img src={office} alt="Office" title="Office"/>
                    <img src={excel} alt="Excel" title="Excel"/>
                </div>
            </div>
        </div>
    );
}