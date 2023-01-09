import React from 'react';
import "react-vertical-timeline-component/style.min.css";
import "./education.scss";

import educationElements from './educationElements';
import { FcGraduationCap } from 'react-icons/fc';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Education = () => {
    let educationIconStyles = {background:"#fff", height:'50px', width:'50px'}
    return (
        <div className="education" id="education">
            <div className="container">
                <h1 className="section-title">Education</h1>
                <VerticalTimeline layout={'2-columns'} lineColor={'#fff'}>
                    {
                        educationElements.map(element => {
                            return ( 
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#fff', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #d7f9ff' }}
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={educationIconStyles}
                                    icon={<FcGraduationCap/>}
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
