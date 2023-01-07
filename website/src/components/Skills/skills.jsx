import React from 'react';

import { languageElements } from './languagesElements';
import { technologyElements } from './technologyElements';
import { toolsElements } from './toolsElements';

const Skills = () => {

    
    return (
        
        <div className="skills" id="skills">

            <div className="right">
                <h1 className="section-title">Technical Skills</h1>
                <div className="skills-section">
                    <h2>Languages</h2>
                    {languageElements.map((skill, index) => { return (
                            <div key={index} className="skill-block">
                                <div className="skill-icon">
                                    <img src={skill.icon}></img>
                                </div>
                                <div className="skill-language">
                                    <b>{skill.language}</b>
                                </div>
                            </div>
                        )})}
                </div>
                <div className="skills-section">
                    <h2>Technologies/Frameworks</h2>    
                    {technologyElements.map((skill, index) => { return (
                            <div key={index} className="skill-block">
                                <div className="skill-icon">
                                    <img src={skill.icon}></img>
                                </div>
                                <div className="skill-language">
                                    <b>{skill.language}</b>
                                </div>
                            </div>
                        )})}
                </div>
                <div className="skills-section">
                    <h2>Tools</h2>
                    {toolsElements.map((skill, index) => { return (
                            <div key={index} className="skill-block">
                                <div className="skill-icon">
                                    <img src={skill.icon}></img>
                                </div>
                                <div className="skill-language">
                                    <b>{skill.language}</b>
                                </div>
                            </div>
                        )})}
                </div>
            </div>

        </div>
      );
  
};

export default Skills;
