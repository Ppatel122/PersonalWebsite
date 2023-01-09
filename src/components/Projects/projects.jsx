import React from 'react';
import "./projects.scss";

import {BiFoodMenu} from "react-icons/bi";
import {CgWebsite} from "react-icons/cg";
import {FaDiscord, FaLeaf} from "react-icons/fa";

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className="container">
                <h1 className="title"><div className="text">
                    Projects
                </div></h1>
                <div className="project-block">
                    <div className="project-info">
                        <CgWebsite className="project-icon" size="250"/>
                        <div className="project-name">
                            <b>Portfolio Website</b>
                            <p>Created a website using React, HTML, CSS and Javascript to showcase my education, experience and projects.</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <BiFoodMenu className="project-icon" size="250" />
                        <div className="project-name">
                            <b>FoodVerse</b>
                            <p>Programmed an android app using Java to help reduce food wastage through the use of ingredient tracking and meal planning.</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <FaDiscord className="project-icon" size="250" />
                        <div className="project-name">
                            <b>Discord Bot</b>
                            <p>Collaborated with 3 team members in a 24 hour hackathon to create an multipurpose discord bot using Python.</p>
                        </div>
                    </div>
                    <div className="project-info">
                        <FaLeaf className="project-icon" size="250" />
                        <div className="project-name">
                            <b>EcoTracker (IN PROGRESS)</b>
                            <p>Creating a web app to show the ecological footprint of daily routine activities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  
};

export default Projects;
