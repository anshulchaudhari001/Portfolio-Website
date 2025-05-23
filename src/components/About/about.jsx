import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-center gap-10">
                <img className="md:h-80 md:-ml-6" src={AboutImg} alt="About img" />

                    <ul>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Frontend developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                    I create responsive and interactive interfaces using HTML, CSS, JavaScript, and React.
                                    Passionate about design, usability, and performance.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Database developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                Skilled in Java, Python, and database management. 
                                I enjoy writing clean APIs and handling server-side logic efficiently.

                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Backend developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                    Experience working with databases and managing data flow across 
                                    applications to ensure integrity and accessibility.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
