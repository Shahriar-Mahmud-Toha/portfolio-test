'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSectionV2 = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section id="hero" className="min-h-screen relative flex items-center pt-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-10" />

            <div className="container-custom flex flex-col lg:flex-row items-center justify-between py-12 md:py-24">
                {/* Text Content */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="block">Hi, I'm</span>
                    <span className="text-primary">Md. Shahriar Mahmud</span>
                </h1>
                <div className="text-2xl md:text-3xl font-medium mb-6 h-12">
                    'Full Stack Developer',
                </div>


                <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-xl">
                    Passionate about building modern, scalable web applications with industry-standard practices and cutting-edge technologies.
                </p>

                <div className="flex space-x-4">
                    <Link
                        href="#projects"
                        className="btn-primary px-8 py-3"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
                <div className="flex flex-col items-center">
                    <span className="text-sm mb-2 text-gray-600 dark:text-gray-400">Scroll Down</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionV2;
