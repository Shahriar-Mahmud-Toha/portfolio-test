'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const SkillsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Skill categories
    const skillCategories = [
        {
            title: "Frameworks & Libraries",
            confident: [
                { name: "Laravel", icon: "https://img.shields.io/badge/-Laravel-F05340?style=flat-square&logo=laravel&logoColor=white" },
                { name: "Next.js", icon: "https://img.shields.io/badge/-Next.js-000?style=flat-square&logo=next.js" },
                { name: "React", icon: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" },
            ],
            basic: [
                { name: "NestJS", icon: "https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" },
                { name: "ASP.NET", icon: "https://img.shields.io/badge/-ASP.NET-512BD4?style=flat-square&logo=dotnet" },
            ]
        },
        {
            title: "UI & Styling",
            confident: [
                { name: "Tailwind CSS", icon: "https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" },
                { name: "Bootstrap", icon: "https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" },
                { name: "HTML5", icon: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" },
                { name: "CSS3", icon: "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" },
            ],
            basic: []
        },
        {
            title: "Languages",
            confident: [
                { name: "C", icon: "https://img.shields.io/badge/-C-A8B9CC?style=flat-square&logo=c" },
                { name: "C++", icon: "https://img.shields.io/badge/-C++-00599C?style=flat-square&logo=c%2b%2b" },
                { name: "C#", icon: "https://img.shields.io/badge/-C%23-239120?style=flat-square&logo=c-sharp" },
                { name: "PHP", icon: "https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white" },
                { name: "JavaScript", icon: "https://img.shields.io/badge/-JavaScript-FFD600?style=flat-square&logo=javascript&logoColor=black" },
            ],
            basic: [
                { name: "Java", icon: "https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" },
                { name: "Python", icon: "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" },
                { name: "TypeScript", icon: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" },
            ]
        },
        {
            title: "Databases",
            confident: [
                { name: "MySQL", icon: "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" },
                { name: "Redis", icon: "https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" },
            ],
            basic: [
                { name: "PostgreSQL", icon: "https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" },
            ]
        },
        {
            title: "Deployment & DevOps",
            confident: [
                { name: "Git", icon: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" },
                { name: "GitHub", icon: "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" },
                { name: "Docker", icon: "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" },
                { name: "Nginx", icon: "https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=nginx" },
            ],
            basic: [
                { name: "GitHub Actions", icon: "https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" },
            ]
        },
        {
            title: "Tools & Design",
            confident: [
                { name: "Figma", icon: "https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" },
                { name: "Photoshop", icon: "https://img.shields.io/badge/-Photoshop-31A8FF?style=flat-square&logo=adobe-photoshop&logoColor=white" },
                { name: "draw.io", icon: "https://img.shields.io/badge/-draw.io-FF9900?style=flat-square&logo=diagrams-dot-net&logoColor=white" },
            ],
            basic: []
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 }
        },
    };

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="mt-12 space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                                {category.title}
                            </h3>

                            {/* Confident Skills */}
                            {category.confident.length > 0 && (
                                <div>
                                    <h4 className="text-lg font-medium mb-3 text-primary">Confident & Experienced</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {category.confident.map((skill, index) => (
                                            <div key={index} className="skill-badge">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Basic Skills */}
                            {category.basic.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-lg font-medium mb-3 text-gray-600 dark:text-gray-400">Basic Knowledge</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {category.basic.map((skill, index) => (
                                            <div key={index} className="skill-badge">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 p-6 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                    variants={itemVariants}
                >
                    <p className="text-center text-gray-600 dark:text-gray-300 italic">
                        "Categories 'Confident & Experienced' reflect hands-on project experience and personal proficiency.
                        The 'Basic Knowledge' section includes technologies I've explored but do not use extensively."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
