import React from 'react';



import { languageElements } from './languagesElements';

const Skills = () => {

    
    return (
        
        <div className="skills" id="skills">

            <div className="right">
                <h1 className="section-title">Technical Skills</h1>
                <div className="skills-section">
                    <h2>Languages</h2>
                    {languageElements.map((language, index) => { return (
                            <div key={index} className="language-block">
                                <div className="">
                                    <img src={language.icon}></img>
                                </div>
                                <div className="">
                                    {language.language}
                                </div>
                            </div>
                        )})}
                </div>
                <div className="skills-section">
                    <h2>Technologies/Frameworks</h2>    
                </div>
                <div className="skills-section">
                    <h2>Tools</h2>
                </div>
            </div>

        </div>
      );
  
};

export default Skills;
