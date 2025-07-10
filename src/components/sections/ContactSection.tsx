'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null,
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                error: null,
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus(prev => ({ ...prev, isSubmitted: false }));
            }, 5000);
        }, 1000);
    };

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
        <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I'm open to freelance opportunities, full-time positions, and collaborations. Let's build something amazing together!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:contact@mdshahriar.me" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                                            contact@mdshahriar.me
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/shahriar-mahmud-toha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 hover:bg-primary hover:text-white dark:bg-gray-700 dark:hover:bg-primary p-3 rounded-full transition-colors duration-300"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a
                                    href="https://github.com/Shahriar-Mahmud-Toha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 hover:bg-primary hover:text-white dark:bg-gray-700 dark:hover:bg-primary p-3 rounded-full transition-colors duration-300"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="mailto:contact@mdshahriar.me"
                                    className="bg-gray-200 hover:bg-primary hover:text-white dark:bg-gray-700 dark:hover:bg-primary p-3 rounded-full transition-colors duration-300"
                                    aria-label="Email Contact"
                                >
                                    <FaEnvelope size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Portfolio website link */}
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
                            <h3 className="font-bold mb-2">Visit my portfolio</h3>
                            <a
                                href="https://mdshahriar.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline flex items-center"
                            >
                                mdshahriar.me
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className="card p-6">
                            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                            {formStatus.isSubmitted ? (
                                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-md text-green-700 dark:text-green-300 mb-4">
                                    Thanks for reaching out! I'll get back to you soon.
                                </div>
                            ) : formStatus.error ? (
                                <div className="bg-red-100 dark:bg-red-900 p-4 rounded-md text-red-700 dark:text-red-300 mb-4">
                                    {formStatus.error}
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-2 font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-2 font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block mb-2 font-medium">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full py-3"
                                    disabled={formStatus.isSubmitting}
                                >
                                    {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
