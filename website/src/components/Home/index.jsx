import React from 'react';
import "./style.scss";
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

const Home = () => {

    const occupation = useRef()

    useEffect(() => {
        init(occupation.current,{
            showCursor:true,
            strings: [" Engineering Student at UofA"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h1>Hi, I'm Pranj Patel.</h1>
                    <h1>Software <span ref={occupation}></span></h1>
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
