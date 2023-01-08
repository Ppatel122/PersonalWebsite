import React from 'react';

import { languageElements } from './languagesElements';
import { technologyElements } from './technologyElements';
import { toolsElements } from './toolsElements';

import {DiPython, DiLinux, DiJava, DiHtml5, DiCss3, DiJavascript1, DiSqllite, DiReact, DiGit, DiWindows, DiFirebase} from "react-icons/di";
import {SiVmware, SiFirebase} from "react-icons/si";

const Skills = () => {

    
    return (
        
        <div className="skills" id="skills">

            <div className="right">
                <h1 className="section-title">Technical Skills</h1>
                <div className="skills-section">
                    <h2>Languages</h2>
                    <div className='project-block'>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiPython size="150"></DiPython>
                            </div>
                            <div className="skill-language">
                                <b>Python</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiJava size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>Java</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <img src="assets/cpp.png" height="150"></img>
                            </div>
                            <div className="skill-language">
                                <b>C++</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiHtml5 size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>HTML</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiCss3 size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>CSS</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiJavascript1 size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>JavaScript</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiSqllite size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>SQLite</b>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="skills-section">
                    <h2>Technologies/Frameworks</h2>    
                    <div className='project-block'>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiLinux size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>Linux</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiWindows size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>Windows</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <SiVmware size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>VMWare</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiGit size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>Git</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <DiReact size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>React</b>
                            </div>
                        </div>
                        <div className="skill-block">
                            <div className="skill-icon">
                                <SiFirebase size="150"/>
                            </div>
                            <div className="skill-language">
                                <b>Firebase</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
  
};

export default Skills;
