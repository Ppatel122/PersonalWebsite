import React from 'react';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <h1 className="section-title">Contact</h1>
                <div className='contact-block'>
                    <a href="https://github.com/Ppatel122" class="link-buttons">
                        <FaGithub size={60} color={"black"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/pranj-patel-a1a4b81aa/"  class="link-buttons">
                        <FaLinkedin size={60} color={"#0e76a8"} />
                    </a>
                    <a href="mailto:pranj@ualberta.ca" class="link-buttons">
                        <SiGmail size={60} color={"red"}/>
                    </a>
                </div>
            </div>
        </div>
      );
  
};

export default Contact;