import { useState } from 'react';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('raghav.kaashyap@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
                <div className="grid-container p-5 hover:shadow-lg hover:shadow-purple-300 transition-all">
                    <img
                        src="assets/profile.png"
                        alt="grid-1"
                        className="w-full sm:h-[276px] h-fit object-contain rounded-lg"
                    />
                    <div>
                        <p className="grid-headtext">Hi, I’m Raghav Kaashyap</p>
                        <p className="grid-subtext">
                            I'm a Software Engineering sophomore at Iowa State University, passionate about coding and
                            software development. I'm driven by the challenge of solving problems and creating
                            innovative solutions that make a real impact. Through my coursework and personal projects, I
                            continually strive to improve my skills and stay curious about new technologies.
                        </p>
                    </div>
                </div>

                <div className="grid-container p-5 bg-black flex flex-col items-center hover:shadow-lg hover:shadow-purple-300 transition-all">
                    <div className="w-full max-w-screen-md mx-auto">
                        <div className="grid grid-cols-4 gap-4 mt-4 sm:w-full w-4/5 mx-auto">
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/java-icon.png"
                                    alt="Java"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">Java</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/python-icon.png"
                                    alt="Python"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">Python</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/c-icon.png"
                                    alt="C"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">C</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/sql-icon.png"
                                    alt="SQL"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">SQL</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/JavaScript-logo.png"
                                    alt="JavaScript"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">JavaScript</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/html-icon.png"
                                    alt="HTML"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">HTML</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/css-icon.png"
                                    alt="CSS"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">CSS</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/spring.png"
                                    alt="Spring Boot"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">Spring Boot</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/react.svg"
                                    alt="React & React Native"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">React & React Native</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/nodejs-icon.png"
                                    alt="Node.js"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">Node.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/MySQL-Logo.png"
                                    alt="MySQL"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">MySQL</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="assets/sqlite-icon.png"
                                    alt="SQLite"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">SQLite</p>
                            </div>
                            <div className="flex flex-col items-center col-span-4">
                                <img
                                    src="assets/mongodb-icon.png"
                                    alt="MongoDB"
                                    className="w-10 h-10 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-400"
                                />
                                <p className="mt-2 text-xs text-purple-300">MongoDB</p>
                            </div>
                        </div>

                        <div className="mt-6 sm:w-full w-4/5 mx-auto">
                            <p className="grid-headtext text-cyan-400 font-bold text-xl">Tech Stack</p>
                            <p className="grid-subtext text-gray-300 mt-2">
                                I've worked with a range of technologies that empower me to build dynamic, scalable, and
                                efficient applications. Here are some of my key skills in programming languages, web
                                technologies, frameworks, and databases that help me create solid solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid-container p-5 hover:shadow-lg hover:shadow-purple-300 transition-all">
                    <img
                        src="assets/grid3.png"
                        alt="grid-3"
                        className="w-full sm:h-[266px] h-fit object-contain"
                    />
                    <div>
                        <p className="grid-headtext">My Drive for Innovation</p>
                        <p className="grid-subtext">
                            I see coding as a way to bring ideas to life. It's exciting to take a challenge and turn it
                            into something that works. Each project helps me grow, whether it's finding new solutions or
                            learning new technologies. I love the process of making things better and seeing the impact
                            of what I create. For me, it's all about continuous learning and crafting something that
                            helps solve a problem.
                        </p>
                    </div>
                </div>

                <div className="grid-container p-5 hover:shadow-lg hover:shadow-purple-300 transition-all">
                    <img
                        src="assets/grid4.png"
                        alt="grid-4"
                        className="w-full sm:h-[276px] h-fit object-cover sm:object-top"
                    />
                    <div className="space-y-4 text-center">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container flex justify-center items-center gap-2" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                raghav.kaashyap@gmail.com
                            </p>
                        </div>
                        <p className="grid-subtext text-center">Connect with me</p>
                        <div className="social-icons flex justify-center gap-4">
                            <a href="https://github.com/raghavkaashyap" target="_blank" rel="noopener noreferrer">
                                <img src="assets/github.svg" alt="GitHub" className="w-8 h-8"/>
                            </a>
                            <a href="https://www.linkedin.com/in/raghavkaashyap/" target="_blank"
                               rel="noopener noreferrer">
                                <img src="assets/linkedin.png" alt="LinkedIn" className="w-8 h-8"/>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default About;





