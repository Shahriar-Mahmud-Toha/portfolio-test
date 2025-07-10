'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    About Me
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    {/* About Content */}
                    <div className="space-y-6">
                        <p className="text-lg">
                            I'm a <strong className="text-primary">Full Stack Developer</strong> with a BSc. in Computer Science & Engineering from American International University Bangladesh (AIUB), graduated in 2024.
                        </p>

                        <p>
                            My technical expertise includes:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li className="flex items-center">
                                <span className="mr-2 text-primary">▹</span>
                                <span><strong>Backend:</strong> Laravel</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-primary">▹</span>
                                <span><strong>Frontend:</strong> Next.js, React</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-primary">▹</span>
                                <span><strong>Database:</strong> MySQL, PostgreSQL, Redis</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-primary">▹</span>
                                <span><strong>Containerization:</strong> Docker</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-primary">▹</span>
                                <span><strong>Version Control:</strong> Git & GitHub</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-primary">▹</span>
                                <span><strong>DevOps:</strong> CI/CD, Nginx</span>
                            </li>
                        </ul>

                        <p>
                            I'm passionate about software architecture, DevOps practices, and building scalable solutions. Currently working as a Full Stack Developer at Toha Metal Engineering Works, where I've developed and deployed a custom ERP system from scratch.
                        </p>

                        <p>
                            When I'm not coding, I enjoy solving programming problems on platforms like Codeforces and Beecrowd, and continuously exploring new technologies to expand my skill set.
                        </p>
                    </div>

                    {/* Stats/Highlights */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="card p-6 text-center dark:bg-gray-700">
                            <h3 className="text-5xl font-bold text-primary mb-2">2+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                        </div>

                        <div className="card p-6 text-center dark:bg-gray-700">
                            <h3 className="text-5xl font-bold text-primary mb-2">10+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                        </div>

                        <div className="card p-6 text-center dark:bg-gray-700">
                            <h3 className="text-5xl font-bold text-primary mb-2">5+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Technologies Mastered</p>
                        </div>

                        <div className="card p-6 text-center dark:bg-gray-700">
                            <h3 className="text-5xl font-bold text-primary mb-2">100+</h3>
                            <p className="text-gray-600 dark:text-gray-300">Problem Solving</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
