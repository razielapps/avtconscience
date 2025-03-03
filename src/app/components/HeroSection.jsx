"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Howdy! I can help you with:{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Design",
                1000,
                "Web Dev.",
                1000,
                "API Dev.",
                1000,
                "Data Mining",
                1000,
                "Contents Creation",
                1000,
                "SEO",
                1000,
                "Coaching",
                1000,
                "Consultation",
                1000,
                "Full-Stack Dev.",
                1000,
                "Backend Dev.",
                1000,
                "eCommerce Solutions",
                1000,
                "Web Scraping",
                1000,
                "Automation",
                1000,
                "Database Mgmt.",
                1000,
                "Chatbots",
                1000,
                "AI Integration",
                1000,
                "Web Optimization",
                1000,
                "Bug Fixing",
                1000,
                "And More!",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As an autodidactic versatile technologist, I leverage the latest and most advanced technologies to bring ideas to life, ensuring superior quality, usability, security, and client satisfaction. With a strong work ethic and a commitment to excellence, I deliver projects efficiently while maintaining the highest standards of quality.
          
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            >
              Hire Me!
            </Link>
            
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#0000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
