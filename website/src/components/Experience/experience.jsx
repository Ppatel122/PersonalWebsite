import React from 'react';

import experienceElements from './experienceElements';
import {MdOutlineWork} from "react-icons/md";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    let educationIconStyles = {background:"#FFF", height:'50px', width:'50px'}
    return (
        <div className="experience" id="experience">

                

                <div className="left">
                    <VerticalTimeline layout={'1-column-right'}>
                            {
                                experienceElements.map(element => {
                                    let isUniIcon = element.icon === "uni"
                                    let isUaargIcon = element.icon === "uaarg"
                                    return (
                                        
                                        <VerticalTimelineElement
                                            key={element.key}
                                            date={element.date}
                                            dateClassName="date"
                                            iconStyle={educationIconStyles}
                                            icon={isUniIcon? <img src="assets/uni.png" width="50" height="50"></img> : isUaargIcon? <img src="assets/uaarg.png" width="50" height="50" ></img>: <img src="assets/willow.png" width="50" height="50" ></img> }
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
                <div className='right'>
                    <h1>Experience</h1>
                    <MdOutlineWork size={200}></MdOutlineWork>
                </div>
        </div>
      );
  
};

export default Experience;
