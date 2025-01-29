import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="c-space my-20" id="projects">
            <p className="head-text">My Projects</p>

            <div className="flex flex-col lg:flex-row mt-12 gap-5 w-full">
                <div
                    className="flex-1 flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-xl"
                    style={{
                        boxShadow: '0 0 20px 5px rgba(147, 112, 219, 0.8)', // Permanent purple shadow
                        borderRadius: '20px', // Smooth rounded edges
                        border: '2px solid rgba(147, 112, 219, 0.3)', // Optional border for a cleaner look
                    }}
                >
                    <div className="absolute top-0 right-0">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="tech-logo flex items-center justify-center p-2 rounded-lg hover:shadow-lg hover:shadow-purple-300 transition-all relative group"
                                >
                                    <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />

                                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 text-xs font-light py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        {tag.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600 hover:shadow-lg hover:shadow-purple-300 p-2 transition-all rounded-lg"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Source Code</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

