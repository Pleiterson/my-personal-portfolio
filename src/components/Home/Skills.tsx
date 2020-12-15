import React from 'react';
import '../../styles/components/Home/skills.css';
import pascal from '../../assets/images/pascal.jpg';
import vb from '../../assets/images/visual-basic.svg';
import delphi from '../../assets/images/delphi.png';
import cplusplus from '../../assets/images/cplusplus.svg';
import csharp from '../../assets/images/csharp.svg';
import Sql from '../../assets/images/sql.png';
import js from '../../assets/images/javascript.svg';
import nodejs from '../../assets/images/nodejs.svg';
import reactjs from '../../assets/images/reactjs.svg';
import html5 from '../../assets/images/html5.svg';
import css3 from '../../assets/images/css3.svg';
import git from '../../assets/images/git.svg';
import github from '../../assets/images/github.svg';
import ts from '../../assets/images/typescript.svg';
import angular from '../../assets/images/angularjs.svg';
import flutter from '../../assets/images/flutter.png';
import kubernetes from '../../assets/images/kubernetes.png';
import lavarel from '../../assets/images/lavarel.svg';
import mongo from '../../assets/images/mongodb.svg';
import mysql from '../../assets/images/mysql.svg';
import postgresql from '../../assets/images/postgresql.svg';
import python from '../../assets/images/python.svg';
import redux from '../../assets/images/redux.svg';
import vuejs from '../../assets/images/vuejs.svg';
import npm from '../../assets/images/npm.svg';
import yarn from '../../assets/images/yarn.svg';
import bootstrap from '../../assets/images/bootstrap.svg';
import dnet from '../../assets/images/dot-net.svg';
import gradle from '../../assets/images/gradle.svg';
import java from '../../assets/images/java.svg';
import php from '../../assets/images/php.svg';

export default function Skills() {
    return (
        <main>
            <div className="resume">
                <div className="box">
                    <h2>Linguagens</h2>
                    <img src={pascal} alt="Pascal" title="Pascal" className="skills"/>
                    <img src={vb} alt="Visual Basic" title="Visual Basic" className="skills"/>                    
                    <img src={delphi} alt="Delphi" title="Delphi" className="skills"/>
                    <img src={cplusplus} alt="C++" title="C++" className="skills"/>                        
                    <img src={csharp} alt="C#" title="C#" className="skills"/>                        
                    <img src={Sql} alt="SQL" title="SQL" className="skills"/>
                    <img src={js} alt="JavaScript" title="JavaScript" className="skills"/>                        
                </div>
                <div className="box">
                    <h2>Frameworks/Tecnologias</h2>
                    <img src={nodejs} alt="Node.JS" title="Node.JS" className="skills"/>
                    <img src={npm} alt="npm" title="npm" className="skills"/>
                    <img src={yarn} alt="Yarn" title="Yarn" className="skills"/>
                    <img src={reactjs} alt="React.JS" title="React.JS" className="skills"/>
                    <img src={ts} alt="TypeScript" title="TypeScript" className="skills"/>
                    <img src={html5} alt="HTML5" title="HTML5" className="skills"/>
                    <img src={css3} alt="CSS3" title="CSS3" className="skills"/>
                    <img src={git} alt="Git" title="Git" className="skills"/>
                    <img src={github} alt="GitHub" title="GitHub" className="skills"/>
                </div>                    
                <div className="box">
                    <h2>Estudando...</h2>
                    <img src={js} alt="JavaScript" title="JavaScript" className="skills"/>
                    <img src={ts} alt="TypeScript" title="TypeScript" className="skills"/>
                    <img src={html5} alt="HTML5" title="HTML5" className="skills"/>
                    <img src={css3} alt="CSS3" title="CSS3" className="skills"/>
                    <img src={git} alt="Git" title="Git" className="skills"/>
                    <img src={reactjs} alt="React.JS" title="React.JS" className="skills"/>
                    <img src={nodejs} alt="Node.JS" title="Node.JS" className="skills"/>
                    <img src={npm} alt="npm" title="npm" className="skills"/>
                    <img src={yarn} alt="Yarn" title="Yarn" className="skills"/>
                    <img src={angular} alt="Angular" title="Angular" className="skills"/>
                    <img src={postgresql} alt="PostgreSQL" title="PostgreSQL" className="skills"/>
                    <img src={java} alt="Java" title="Java" className="skills"/>
                </div>
                <div className="box">
                    <h2>Estudo futuro...</h2>
                    <img src={flutter} alt="Flutter" title="Flutter" className="skills"/>
                    <img src={kubernetes} alt="Kubernetes" title="Kubernetes" className="skills"/>
                    <img src={lavarel} alt="Lavarel" title="Lavarel" className="skills"/>
                    <img src={mongo} alt="MongoDB" title="MongoDB" className="skills"/>
                    <img src={mysql} alt="MySQL" title="MySQL" className="skills"/>
                    <img src={python} alt="Python" title="Python" className="skills"/>
                    <img src={redux} alt="Redux" title="Redux" className="skills"/>
                    <img src={vuejs} alt="Vue.JS" title="Vue.JS" className="skills"/>
                    <img src={reactjs} alt="React Native" title="React Native" className="skills"/>
                    <img src={bootstrap} alt="Bootstrap" title="Bootstrap" className="skills"/>
                    <img src={dnet} alt=".NET" title=".NET" className="skills"/>
                    <img src={gradle} alt="Gradle" title="Gradle" className="skills"/>
                    <img src={php} alt="php" title="php" className="skills"/>
                </div>
            </div>
        </main>
    );
}