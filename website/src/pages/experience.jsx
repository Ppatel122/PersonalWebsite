import React from 'react';
import experienceElements from './experienceElements';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    let educationIconStyles = {background:"#FFF"}
    return (
        <div className="experience" id="experience">

                
                <div className='left'>
                <h1>Experience</h1>
                </div>
                <div className="right">
                    <VerticalTimeline>
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
                                            icon={isUniIcon? <img src="assets/uni.png" width="60" height="60"></img> : isUaargIcon? <img src="assets/uaarg.png" width="60" height="60" ></img>: <img src="assets/willow.png" width="60" height="60" ></img> }
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

export default Experience;