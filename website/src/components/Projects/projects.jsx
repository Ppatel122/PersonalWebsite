import React from 'react';

import {BiFoodMenu} from "react-icons/bi";
import {FcTemplate} from "react-icons/fc";
import {FaDiscord, FaLeaf} from "react-icons/fa";

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className="right">
                <h1 className="title">Projects</h1>
                <div className="project-block">
                    <div className="skill-block">
                        <div className="project-icon">
                            <FcTemplate size="250"/>
                        </div>
                        <div className="project-name">
                            <b>Portfolio Website</b>
                        </div>
                    </div>
                    <div className="skill-block">
                        <div className="project-icon">
                            <BiFoodMenu size="250" color="#3fd16c"/>
                        </div>
                        <div className="project-name">
                            <b>FoodVerse</b>
                        </div>
                    </div>
                    <div className="skill-block">
                        <div className="project-icon">
                            <FaDiscord size="250" color="#7289da"/>
                        </div>
                        <div className="project-name">
                            <b>Discord Bot</b>
                        </div>
                    </div>
                    <div className="skill-block wip">
                        <div className="project-icon">
                            <FaLeaf size="250" color="#69be94"/>
                        </div>
                        <div className="project-name">
                            <b>EcoTracker</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  
};

export default Projects;
