import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const MyQueriesRightSide = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r rounded-lg  w-full ">
            <Zoom triggerOnce>
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                    Add a query for you
                </h2>
            </Zoom>

            <Fade delay={300} triggerOnce>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mb-8">
                    A well developed recommendation system will help businesses improve their shopper's experience on website and result in better customer acquisition and .                </p>
            </Fade>

            <Zoom delay={500} triggerOnce>
                <Link to='/addQueries' >
                    <button className=" btn bg-blue-700 hover:bg-blue-800 text-white font-medium text-lg py-6 px-8 rounded-full shadow-lg transition duration-300">
                        Added Queries
                    </button>
                </Link>
            </Zoom>
        </div>
    );
};

export default MyQueriesRightSide;
