import React from 'react';

import educationElements from './educationElements';
import {IoSchool} from "react-icons/io5";

import { languageElements } from './languagesElements';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const Education = () => {

    let educationIconStyles = {background:"#d7f9ff", height:'50px', width:'50px'}
    return (
        
        <div className="education" id="education">
            {/* <div className='left'>

            </div> */}
            <div className="left">
                <h1 className="section-title">Education</h1>
                
                <VerticalTimeline layout={'2-columns'} lineColor={'#000'}>
                    {
                        educationElements.map(element => {
                            let isUniIcon = element.icon === "uni"
                            
                            return (
                                
                                <VerticalTimelineElement
                                    contentStyle={{ background: '#d7f9ff', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #d7f9ff' }}
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={educationIconStyles}
                                    icon={isUniIcon? <IoSchool></IoSchool> :<IoSchool></IoSchool>}
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
