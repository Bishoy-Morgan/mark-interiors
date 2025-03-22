"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import img1 from '@/public/images/hero/1.jpeg'
import img2 from '@/public/images/hero/2.jpeg'
import img3 from '@/public/images/hero/3.jpeg'
import img4 from '@/public/images/hero/4.jpg'
import img5 from '@/public/images/hero/5.jpg'
import img6 from '@/public/images/hero/6.jpg'
import img7 from '@/public/images/hero/7.jpg'


const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-primary overflow-hidden">
      <div className="relative w-full h-full">
        <motion.div 
          initial={{  width: '0vw'  ,opacity: 0 }}
          animate={{ width: '25vw'  ,opacity: 1 }}
          transition={{ duration: .8 }}
          className="absolute top-0 right-[20%] w-[25vw] h-[40vh] "
        >
          <Image
            src={img1}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          initial={{ scale: .6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .8 }}
          className="absolute bottom-[40%] right-[30%] w-[15vw] h-[20vh] "
        >
          <Image
            src={img2}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          initial={{ scale: .8 , opacity: 0 }}
          animate={{ scale: 1.1 , opacity: 1 }}
          transition={{ duration: .5, delay: .3 }}
          className="absolute top-0 left-[35%] w-[15vw] h-[20vh] "
        >
          <Image
            src={img3}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          initial={{ scale: .5 , opacity: 0 }}
          animate={{ scale: 1 , opacity: 1 }}
          transition={{ duration: .5, delay: .3 }}
          className="absolute bottom-[17%] right-[18%] w-[23vw] h-[33vh] z-30  "
        >
          <Image
            src={img3}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
        <motion.div 
        initial={{ scale: .9 ,opacity: 0 }}
          animate={{ scale: 1.1 ,opacity: 1 }}
          transition={{ duration: .8, delay: .5 }}
        className="absolute top-[21%] left-[40%] w-[15vw] h-[50vh] z-10 ">
          <Image
            src={img1}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
        <motion.div 
        initial={{ scale: .8 , opacity: 0 }}
          animate={{ scale: 1 , opacity: 1 }}
          transition={{ duration: 1, delay: .8 }}
        className="absolute bottom-[14%] left-[38%] w-[25vw] h-[35vh] z-20 ">
          <Image
            src={img1}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
        <motion.div 
        initial={{ scale: .2 , opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: .7 }}
        className="absolute bottom-[40%] left-[19%] w-[22vw] h-[35vh] z-20  ">
          <Image
            src={img2}
            alt="Interior design"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.h1
          className="text-secondary font-medium tracking-tighter z-20 "
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 1
          }}
          style={{ fontSize: 'clamp(12rem, 15vw, 20rem)' }}
        >
          Mark Interiors
        </motion.h1>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center text-secondary z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-body-lg font-extralight">Construction company</p>
      </motion.div>
    </section>
  );
};

export default Hero;
