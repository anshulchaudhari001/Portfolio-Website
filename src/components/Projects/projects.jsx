import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectCard
                    title="Stock Analysis Website"
                    main="A user-friendly platform showing real-time stock data, interactive charts, and predictive analytics."
                    demoLink="https://shorturl.at/nVxJg"
                    codeLink="https://shorturl.at/KxL4L"
                />
                <ProjectCard
                    title="Deepfake Unmasking and Detection"
                    main="A deep learning project using GANs to detect and unmask deepfake videos to improve digital media security."
                    demoLink="https://shorturl.at/nVxJg"
                    codeLink="https://shorturl.at/KxL4L"
                />
                <ProjectCard
                    title="Zomato Clone"
                    main="A clone of the popular food delivery app, Zomato, built using HTML, CSS and JS, featuring user authentication and real-time order tracking."
                    demoLink="https://shorturl.at/nVxJg"
                    codeLink="https://shorturl.at/KxL4L"
                />
            </div>
        </div>
    );
};

export default Projects;
