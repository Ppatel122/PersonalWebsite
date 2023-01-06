import React from 'react';

import experienceElements from './experienceElements';
import {MdOutlineWork} from "react-icons/md";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    let educationIconStyles = {background:"#d7f9ff", height:'50px', width:'50px'}
    return (
        <div className="experience" id="experience">
                {/* <div className='left'>
                    <h1>Experience</h1>
                    <MdOutlineWork size={200}></MdOutlineWork>
                </div> */}
                

                <div className="right">
                <h1 className="section-title">Experience</h1>
                    <VerticalTimeline layout={'2-columns'}>
                            {
                                experienceElements.map(element => {
                                    let isUniIcon = element.icon === "uni"
                                    let isUaargIcon = element.icon === "uaarg"
                                    return (
                                        
                                        <VerticalTimelineElement
                                            contentStyle={{ background: '#d7f9ff', color: '#000' }}
                                            contentArrowStyle={{ borderRight: '7px solid  #d7f9ff' }}
                                            key={element.key}
                                            date={element.date}
                                            dateClassName="date"
                                            iconStyle={educationIconStyles}
                                            icon={isUniIcon? <MdOutlineWork></MdOutlineWork> : isUaargIcon? <MdOutlineWork></MdOutlineWork>: <MdOutlineWork></MdOutlineWork> }
                                        >   
                                            <h2 className="vertical-timeline-element-title">{element.place}</h2>
                                            <h3 className="vertical-timeline-element-title"><i>{element.title}</i></h3>
                                            <h5 className="vertical-timeline-element-title">{element.location}</h5>
                                            {/* <p id="description">{element.description}</p> */}
                                        </VerticalTimelineElement>
                                    )
                                })
                            }
                    </VerticalTimeline>
                </div>

        </div>
      );
  
};

export default Experience;
