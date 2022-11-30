import React from 'react';

import educationElements from './educationElements';
import {IoSchool} from "react-icons/io5";


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Education = () => {

    let educationIconStyles = {background:"#FFF",height:'50px', width:'50px'}
    return (
        
        <div className="education" id="education">
            <div className='left'>
                <h1>Education</h1>
                <IoSchool size={200} ></IoSchool>
            </div>
            <div className="right">
                <VerticalTimeline layout={'1-column-left'}>
                    {
                        educationElements.map(element => {
                            let isUniIcon = element.icon === "uni"
                            
                            return (
                                
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={educationIconStyles}
                                    icon={isUniIcon? <img src="assets/uni.png" width="50" height="50"></img> :<img src="assets/high.png" width="50" height="50" ></img>}
                                >   
                                    <h2 className="vertical-timeline-element-title">{element.place}</h2>
                                    <h3 className="vertical-timeline-element-title"><i>{element.title}</i></h3>
                                    <h5 className="vertical-timeline-element-title">{element.location}</h5>
                                    <p id="description">{element.description}</p>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>

        </div>
      );
  
};

export default Education;
