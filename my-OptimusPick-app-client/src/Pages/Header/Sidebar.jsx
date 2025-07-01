import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';

const ReactAwesome = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r rounded-lg  w-full ">
            <Zoom triggerOnce>
                <h2 className="text-2xl md:text-4xl lg:text-3.5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    A Product Recommendation System
                </h2>
            </Zoom>

            <Fade delay={300} triggerOnce>
                <p className="text-base md:text-lg  text-gray-700 max-w-2xl mb-6">
                    A product recommendation system is a software tool designed to generate and provide suggestions for items or content a specific user would like to purchase or engage with — making your shopping experience smoother and smarter.
                </p>
            </Fade>

            <Zoom delay={500} triggerOnce>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg py-2 px-8 rounded-full shadow-lg transition duration-300">
                    Start Your Journey
                </button>
            </Zoom>
        </div>
    );
};

export default ReactAwesome;
