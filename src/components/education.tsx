'use client';
import React from 'react';
import { motion } from 'motion/react';
import { childVariant } from './ui/animation-wrapper';
import { Highlight } from './ui/highlight';

const Education = () => {
  return (
    <div className="my-10">
      {/* Heading */}
      <motion.h2
        variants={childVariant}
        className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white font-sans"
      >
        Education
      </motion.h2>

      {/* Education Section */}
      <motion.div
        variants={childVariant}
        className="border border-border rounded-2xl bg-[#0c0c0c]/60 p-6 md:p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
      >
        <h3 className="text-2xl font-semibold text-white mb-2">
          Indian Institute of Technology, Jammu
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Bachelor of Technology (B.Tech) 
        </p>

        <div className="space-y-1 text-muted-foreground text-sm mb-6">
          <p>📅 2024 – 2028 (2nd Year)</p>
          <p>📍 Jammu, Jammu & Kashmir, India</p>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed text-justify">
          <motion.p variants={childVariant}>
            I’m currently pursuing my <Highlight>B.Tech </Highlight> at{' '}
            <Highlight>IIT Jammu</Highlight>, where I’m learning the fundamentals of computer systems,
            algorithms, and modern technologies.
          </motion.p>

          <motion.p variants={childVariant}>
            Alongside academics, I actively participate in tech clubs and hackathons, where I build
            innovative projects that merge <Highlight>AI, Web, and App Development</Highlight>.
          </motion.p>

          <motion.p variants={childVariant}>
            My focus areas include <Highlight>AI systems</Highlight>, <Highlight>full-stack web development</Highlight>, and{' '}
            <Highlight>Machine Learning projects</Highlight>.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
