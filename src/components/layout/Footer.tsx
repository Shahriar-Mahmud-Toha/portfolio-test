'use client';

import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Md. Shahriar Mahmud</h2>
                        <p className="mt-2 text-gray-400">Full Stack Developer | Laravel & Next.js Enthusiast</p>
                    </div>

                    <div className="flex space-x-4">
                        <Link
                            href="https://www.linkedin.com/in/shahriar-mahmud-toha/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedinIn size={20} />
                        </Link>
                        <Link
                            href="https://github.com/Shahriar-Mahmud-Toha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={20} />
                        </Link>
                        <Link
                            href="mailto:contact@mdshahriar.me"
                            className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                            aria-label="Email Contact"
                        >
                            <FaEnvelope size={20} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Md. Shahriar Mahmud. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
                                <Link href="#hero" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
                                <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
                                <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</Link>
                                <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
