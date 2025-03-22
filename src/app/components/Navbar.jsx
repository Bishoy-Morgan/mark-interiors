'use client'
import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
                }
            },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
                }
            }
        };

    return (
        <nav>
            <header className="py-6 px-4 md:px-8 flex justify-between items-center">
                <button
                onClick={toggleMenu}
                className="flex flex-col space-y-1 z-50"
                aria-label="Toggle menu"
                >
                    <span className="text-button text-secondary">menu</span>
                    <span className="w-10 h-[1px] bg-secondary"></span>
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/" className="text-heading-sm font-light text-secondary">
                        {/* <Image
                        src="https://ext.same-assets.com/1247681252/1691825940.svg"
                        alt="Selemen"
                        className="h-8"
                        /> */}
                    </Link>
                </div>
                <div>
                    <a
                        href="#contact"
                        className="text-button border border-secondary text-secondary rounded-full px-6 py-2"
                    >
                        Send request
                    </a>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-primary z-40 flex flex-col p-20"
                    >
                        <div className="mt-16 flex flex-col space-y-6">
                            <Link href="/projects" className="text-heading-sm font-light text-secondary hover:text-white transition-colors">
                                Projects
                            </Link>
                            <Link href="/services" className="text-heading-sm font-light text-secondary hover:text-white transition-colors">
                                Services
                            </Link>
                            <Link href="/company" className="text-heading-sm font-light text-secondary hover:text-white transition-colors">
                                Company
                            </Link>
                            <Link href="/contact" className="text-heading-sm font-light text-secondary hover:text-white transition-colors">
                                Contact
                            </Link>
                        </div>

                        <div className="mt-auto">
                            <p className="text-body-lg text-secondary font-light">+90 537 760 37 07</p>
                            <a href="mailto:Info@selemen.ru" className="text-body-lg text-secondary font-light hover:text-white">
                                Info@selemen.ru
                            </a>
                            <div className="flex space-x-4 mt-4">
                                <a href="https://wa.me/1111111111" className="text-button text-secondary hover:text-white">
                                WhatsApp
                                </a>
                                <a href="https://t.me/" className="text-button text-secondary hover:text-white">
                                Telegram
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
