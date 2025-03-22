"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const ProjectCard = ({ title, description, link, number }) => {
  return (
    <motion.div
      className="relative overflow-hidden group mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: number * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={link} className="block h-full">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <span className="text-number text-secondary">{number}</span>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
          <h3 className="text-heading-sm text-secondary font-light mb-2">{title}</h3>
          <p className="text-caption text-secondary mx-auto max-w-xs">{description}</p>
        </div>
        <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
        {/* <Image
          src={`https://ext.same-assets.com/1247681252/${(number === '01') ? '299455335' : '3356224097'}.jpeg`}
          alt={title}
          className="w-full h-[50vh] object-cover object-center group-hover:scale-105 transition-transform duration-700"
        /> */}
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ProjectCard
            title="Commercial premises"
            description="Comfortable working space"
            link="/projects-premises"
            number="01"
          />
          <ProjectCard
            title="Houses apartments"
            description="A cozy space for you"
            link="/projects-apartments"
            number="02"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2 mb-8 text-center">
            <motion.h2
              className="text-heading-lg text-secondary font-extralight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              80
              <span className="text-body-lg ml-2 font-extralight">delivered projects</span>
            </motion.h2>
          </div>

          <motion.div
            className="relative overflow-hidden group mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/article-detail" className="block">
              <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
                <h3 className="text-heading-sm text-secondary font-light mb-2">APARTMENTS #80</h3>
                <p className="text-caption text-secondary mx-auto max-w-xs">A cozy space for living and working in the very center of the city</p>
              </div>
              <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
              {/* <Image
                src="https://ext.same-assets.com/1247681252/922833446.jpeg"
                alt="Apartments"
                className="w-full h-[50vh] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              /> */}
            </Link>
          </motion.div>

          <motion.div
            className="relative overflow-hidden group mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/article-detail-2" className="block">
              <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
                <h3 className="text-heading-sm text-secondary font-light mb-2">SEA OF LIGHT</h3>
                <p className="text-caption text-secondary mx-auto max-w-xs">Comfort surrounded by natural materials</p>
              </div>
              <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
              {/* <Image
                src="https://ext.same-assets.com/1247681252/1226460133.jpeg"
                alt="Sea of Light"
                className="w-full h-[50vh] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              /> */}
            </Link>
          </motion.div>

          <motion.div
            className="relative overflow-hidden group mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/article-detail-3" className="block">
              <div className="absolute bottom-8 left-0 right-0 z-10 text-center px-4">
                <h3 className="text-heading-sm text-secondary font-light mb-2">FIRST NUMBER</h3>
                <p className="text-caption text-secondary mx-auto max-w-xs">An elaborate space in one of the most prestigious areas of the city</p>
              </div>
              <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
              {/* <Image
                src="https://ext.same-assets.com/1247681252/3814498791.jpeg"
                alt="First Number"
                className="w-full h-[50vh] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              /> */}
            </Link>
          </motion.div>

          <div className="flex justify-center col-span-1 md:col-span-2 mt-8 space-x-12">
            <Link href="/projects-apartments" className="text-button text-secondary border-b border-secondary pb-1 hover:text-white">
              All apartments
            </Link>
            <Link href="/projects-premises" className="text-button text-secondary border-b border-secondary pb-1 hover:text-white">
              All premises
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
