import React from 'react';
import "react-vertical-timeline-component/style.min.css";
import "./experience.scss";

import experienceElements from './experienceElements';
import { FcBusiness } from 'react-icons/fc';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Experience = () => {
    let educationIconStyles = {background:"#fff", height:'50px', width:'50px'}
    return (
        <div className="experience" id="experience">
            <div className="container">
                <h1 className="section-title">Experience</h1>
                <VerticalTimeline layout={'2-columns'}>
                        {
                            experienceElements.map(element => {
                                return (
                                    <VerticalTimelineElement
                                        contentStyle={{ background: '#fff', color: '#000' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #d7f9ff' }}
                                        key={element.key}
                                        date={element.date}
                                        dateClassName="date"
                                        iconStyle={educationIconStyles}
                                        icon={<FcBusiness/>}
                                    >   
                                        <h2 className="vertical-timeline-element-title">{element.place}</h2>
                                        <h3 className="vertical-timeline-element-title"><i>{element.title}</i></h3>
                                        <h5 className="vertical-timeline-element-title">{element.location}</h5>
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
