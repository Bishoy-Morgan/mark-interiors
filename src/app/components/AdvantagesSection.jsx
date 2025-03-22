"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const AdvantageCard = ({ number, title, delay }) => {
  return (
    <motion.div
      className="relative p-6 border-t border-gray-800 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <span className="text-number text-secondary block mb-4">{number}</span>
      <p className="text-body-md text-secondary font-light mx-auto max-w-lg">{title}</p>
    </motion.div>
  );
};

const AdvantagesSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="md:w-1/2">
            <motion.div
              className="relative overflow-hidden h-full mx-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <Image
                src="https://ext.same-assets.com/1247681252/2371131985.jpeg"
                alt="Guarantee of reliability"
                className="h-[70vh] w-full object-cover object-center"
              /> */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-heading-sm text-secondary font-light mb-4">Guarantee of reliability</h3>
                <p className="text-caption text-secondary mx-auto max-w-md">
                  And full information about all stages of repair
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-0">
              <AdvantageCard
                number="01"
                title="We implement the most technically complex design and architectural solutions"
                delay={0.1}
              />
              <AdvantageCard
                number="02"
                title="We use the best building materials available on the market"
                delay={0.2}
              />
              <AdvantageCard
                number="03"
                title="Jewelry precision of work, due to the professionalism and experience of our employees"
                delay={0.3}
              />
            </div>
          </div>
        </div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-heading-md text-secondary font-light mb-4">Wide range of solutions</h2>
          <p className="text-body-lg text-secondary font-light mx-auto max-w-3xl">We will help you implement a project of any complexity</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 mx-auto max-w-6xl">
          {[
            "2501977778", "3217244637", "1994812942", "1285188325"
          ].map((id, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* <Image
                src={`https://ext.same-assets.com/1247681252/${id}.jpeg`}
                alt={`Interior design ${index + 1}`}
                className="w-full h-full object-cover"
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
