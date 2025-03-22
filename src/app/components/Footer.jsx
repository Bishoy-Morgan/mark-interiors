"use client";
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="pt-16 pb-8 px-4 md:px-8 bg-primary text-secondary text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8">
                <div className="flex flex-col items-center">
                    <h3 className="text-heading-sm font-light mb-4">Selemen</h3>
                    <p className="text-caption">Construction company</p>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="font-medium mb-2 text-body-sm">Links</h4>
                    <ul className="space-y-2 text-center">
                        <li><Link href="/projects" className="text-caption hover:text-white">Projects</Link></li>
                        <li><Link href="/services" className="text-caption hover:text-white">Services</Link></li>
                        <li><Link href="/contact" className="text-caption hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="font-medium mb-2 text-body-sm">Contact</h4>
                    <a href="mailto:Info@selemen.ru" className="text-caption block hover:text-white">Info@selemen.ru</a>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="font-medium mb-2 text-body-sm">Messengers</h4>
                    <div className="flex space-x-4">
                        <a href="https://wa.me/1111111111" className="text-caption hover:text-white">
                            WhatsApp
                        </a>
                        <a href="https://t.me/" className="text-caption hover:text-white">
                            Telegram
                        </a>
                    </div>
                    <p className="mt-6 text-caption">More than 20 years of successful work</p>
                </div>
            </div>
            <div className="mt-8 flex justify-between items-center max-w-4xl mx-auto">
                <p className="text-caption">Selemen</p>
                <p className="text-caption">2025</p>
                <p className="text-caption">Made by Liqium</p>
            </div>
        </footer>
    )
}

export default Footer
