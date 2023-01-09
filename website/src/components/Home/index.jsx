import React from 'react';
import "./style.scss";
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

const Home = () => {

    const occupation = useRef()

    useEffect(() => {
        init(occupation.current,{
            showCursor:true,
            strings: ["Pranj Patel"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h1>Hi, I'm <span ref={occupation}></span></h1>
                    <h1>Software Engineering Student</h1>
                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/profile.jpg" alt="Hi"></img>
                </div>
            </div>
            
        </div>
      );
  
};

export default Home;
