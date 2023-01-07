import React from 'react'

import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles";

function particle() {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}

        options={{
            fpsLimit: 120,
            interactivity: {
                events: {
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#000",
                },
                links: {
                    color: "#000",
                    distance: 250,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "square",
                },
                size: {
                    value: { min: 5, max: 10 },
                },
            },
            detectRetina: true,
        }}
        />
    )
}

export default particle