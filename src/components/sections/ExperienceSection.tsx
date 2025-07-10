'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Experience
                </motion.h2>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="relative mt-12"
                >
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>

                    {/* Experience Item */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-16 md:ml-0 ml-6"
                    >
                        <div className="flex flex-col md:flex-row items-start">
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>

                            {/* Date */}
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                                <h3 className="text-xl font-bold">Full Stack Developer</h3>
                                <p className="text-primary font-medium">July 2024 - Present</p>
                                <p className="mt-1">
                                    <a href="https://tohametal.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        Toha Metal Engineering Works
                                    </a>
                                </p>
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 md:pl-12">
                                <div className="card p-6 dark:bg-gray-800 shadow-lg">
                                    <ul className="space-y-3">
                                        <li className="flex">
                                            <span className="mr-2 text-primary">▹</span>
                                            <span><strong>Spearheaded</strong> the end-to-end development and deployment of a custom, scalable ERP system using <strong>Laravel</strong> (backend) and <strong>Next.js</strong> (frontend).</span>
                                        </li>
                                        <li className="flex">
                                            <span className="mr-2 text-primary">▹</span>
                                            <span>Applied <strong>SOLID</strong> principles, ensured <strong>ACID</strong> compliance, and implemented robust validation on both frontend and backend.</span>
                                        </li>
                                        <li className="flex">
                                            <span className="mr-2 text-primary">▹</span>
                                            <span>Implemented modern <strong>DevOps</strong> practices including Docker containerization, Nginx configuration, SSL/TLS setup, and CI/CD pipelines.</span>
                                        </li>
                                        <li className="flex">
                                            <span className="mr-2 text-primary">▹</span>
                                            <span>Developed the company's public landing page and led SEO optimization, content creation, and performance tuning.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
