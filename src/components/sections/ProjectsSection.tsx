/* eslint-disable */
// @ts-nocheck
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Main featured projects data
const featuredProjects = [
    {
        id: 1,
        title: "Subscription Tracker",
        description: "A full-stack subscription management application with modern UI, secure RESTful API, email notifications, and efficient job processing.",
        image: "/projects/subscription-tracker.jpg",
        tags: ["Laravel", "Next.js", "TypeScript", "MySQL", "Redis", "Docker"],
        github: "https://github.com/Shahriar-Mahmud-Toha/SubscriptionTracker",
        demo: "https://subs-tracker.mdshahriar.me/",
        features: [
            "Modern, responsive UI (Next.js)",
            "Secure RESTful API (Laravel, JWT authentication)",
            "Full CRUD for subscription management",
            "Email notifications & reminders",
            "Efficient job processing with Redis"
        ]
    },
    {
        id: 2,
        title: "Users Data Playground",
        description: "Interactive demo for managing user data from a mock REST API, showcasing React core concepts and best practices.",
        image: "/projects/users-data-playground.jpg",
        tags: ["React.js", "JavaScript", "Tailwind CSS", "DaisyUI", "Axios", "Recharts"],
        github: "https://github.com/Shahriar-Mahmud-Toha/users-data-playground",
        demo: "https://users-data-playground.vercel.app/",
        features: [
            "Form handling & validation",
            "API integration with Axios",
            "Search with debounce functionality",
            "useContext & custom hooks",
            "Data visualization with Recharts"
        ]
    },
];

// Other projects data
const otherProjects = [
    {
        id: 3,
        title: "Computer Shop Management System",
        description: "ASP.NET-based shop management solution with automated invoice generation and business insights.",
        tags: ["ASP.NET", "MSSQL", "C#"],
        github: "https://github.com/Shahriar-Mahmud-Toha/SSA-Computer-Shop-Management-System",
        features: [
            "Automated purchase and invoice generation",
            "Business insights and analytics",
            "Enhanced business performance tracking"
        ]
    },
    {
        id: 4,
        title: "Digital Banking Hub",
        description: "Full banking platform supporting multiple user roles and comprehensive digital banking workflows.",
        tags: ["Next.js", "NestJS", "PostgreSQL"],
        github: "https://github.com/Shahriar-Mahmud-Toha/Digital-Banking-Hub",
        features: [
            "Multiple user roles support",
            "Full digital banking workflows",
            "Dashboard analytics & reporting"
        ]
    },
    {
        id: 5,
        title: "SSI Computer Shop Management System",
        description: "PHP-based shop management system with automated purchase workflow and business insights.",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/Shahriar-Mahmud-Toha/Web_Technology_Course_Lab_Task/tree/master/Final/Project/SSI_Computer_Shop_Management_System",
        features: [
            "Automated purchase and invoice workflow",
            "Detailed business insights",
            "Performance tracking metrics"
        ]
    },
    {
        id: 6,
        title: "PC Shop Management System",
        description: "Desktop application for PC shop management with attendance tracking and sales automation.",
        tags: ["C#", "MSSQL", "Windows Forms"],
        github: "https://github.com/Shahriar-Mahmud-Toha/PC_Shop_Management_System_Desktop_Application",
        demo: "https://drive.google.com/file/d/11D7oS6FKtN6F7gdvZD5bKhsHoznXEaaX/view?t=65s",
        isVideo: true,
        features: [
            "Attendance tracking system",
            "Sales and discount automation",
            "Salary sheet generation"
        ]
    },
];

// Project card component
const ProjectCard = ({ project, isFeatured = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`card overflow-hidden ${isFeatured ? 'flex flex-col md:flex-row' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isFeatured && (
                <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 z-10"></div>
                    <Image
                        src={project.image || "/projects/placeholder.jpg"}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className={`transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    />
                </div>
            )}

            <div className={`p-6 ${isFeatured ? 'w-full md:w-1/2' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        {project.features.map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex space-x-3 mt-4">
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                    >
                        <FaGithub className="mr-1" /> Code
                    </Link>

                    {project.demo && (
                        <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                        >
                            <FaExternalLinkAlt className="mr-1" /> {project.isVideo ? 'Video Demo' : 'Live Demo'}
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="space-y-16 mt-12"
                >
                    {/* Featured Projects */}
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} isFeatured={true} />
                    ))}
                </motion.div>

                {/* Other Projects */}
                <motion.h3
                    className="text-2xl font-bold mt-24 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Other Noteworthy Projects
                </motion.h3>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {otherProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <Link
                        href="https://github.com/Shahriar-Mahmud-Toha?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                    >
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className="ml-2" size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
