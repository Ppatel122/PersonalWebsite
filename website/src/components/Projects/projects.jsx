import React from 'react';

import {MdOutlineWeb} from "react-icons/md";
import {FaRobot, FaHamburger} from "react-icons/fa";

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className="right">
                <h1 className="title">Projects</h1>
                <div className="project-block">
                    <div className="skill-block">
                        <div className="project-icon">
                            <MdOutlineWeb size="150"/>
                        </div>
                        <div className="project-name">
                            <b>Portfolio Website</b>
                        </div>
                    </div>
                    <div className="skill-block">
                        <div className="project-icon">
                            <FaHamburger size="150"/>
                        </div>
                        <div className="project-name">
                            <b>FoodVerse</b>
                        </div>
                    </div>
                    <div className="skill-block">
                        <div className="project-icon">
                            <FaRobot size="150"/>
                        </div>
                        <div className="project-name">
                            <b>Discord Bot</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  
};

export default Projects;
