import React from 'react';

import educationElements from './educationElements';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Education = () => {

    let educationIconStyles = {}
    return (
        
        <div className="education" id="education">
            <div className="left">
                <VerticalTimeline>
                        {
                            educationElements.map(element => {
                                let isUniIcon = element.icon === "uni"
                                
                                return (
                                    
                                    <VerticalTimelineElement
                                        key={element.key}
                                        date={element.date}
                                        dateClassName="date"
                                        iconStyle={educationIconStyles}
                                        icon={isUniIcon? <img src="assets/uni.png" width="60" height="60"></img> :<img src="assets/high.png" width="60" height="60" ></img>}
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
                <h1>Education</h1>
            </div>
        </div>
      );
  
};

export default Education;
