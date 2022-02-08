import React from 'react';

import educationElements from './educationElements';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Education = () => {

    let educationIconStyles = {background:"#06d6a0"}
    return (
        <div className="education" id="education">
          <h1>Education</h1>
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
                                icon={isUniIcon? <img src="assets/uni.png" width="60" height="60"></img> : <img src="assets/high.png" width="60" height="60" ></img> }
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            </VerticalTimelineElement>
                        )
                    })
                }
          </VerticalTimeline>
        </div>
      );
  
};

export default Education;
