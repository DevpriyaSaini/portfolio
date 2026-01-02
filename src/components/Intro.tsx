'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandX } from '@tabler/icons-react'
import { Socials } from './ui/socials'
import { FaGithub } from 'react-icons/fa6'
import { SiPeerlist } from 'react-icons/si'
import { Highlight } from './ui/highlight'
import { childVariant } from './ui/animation-wrapper'

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/DevpriyaSaini',
    icon: FaGithub
  },
  {
    name: 'X',
    link: 'https://x.com/DevpriyaSaini01',
    icon: IconBrandX
  },
 
]

const Intro = () => {
  return (
    <div className='my-4'>
      <div className='flex gap-4'>
        <motion.div
          variants={childVariant}
          className='overflow-hidden rounded-full w-max h-max shrink-0 border border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
        >
          <Image
            src={'/avatar.jpeg'}
            height={120}
            width={120}
            alt='Image'
            className='max-md:size-[6rem]'
          />
        </motion.div>
        <div>
          <motion.h1 variants={childVariant} className='text-4xl md:text-5xl font-sans font-bold tracking-tight'>
            Devpriya
          </motion.h1>
          <motion.p variants={childVariant} className='text-muted-foreground text-sm'>Developing AI-powered, user-first web experiences.</motion.p>
          <motion.div variants={childVariant}><Socials socials={socials} /></motion.div>
        </div>
      </div>
      <AboutMe />
    </div>
  )
}

const AboutMe = () => (
  <div className='text-muted-foreground text-sm my-4 flex flex-col gap-2 text-justify'>
    <motion.p variants={childVariant}>
      I'm a <Highlight>passionate developer</Highlight> who loves turning complex ideas into simple, <Highlight>elegant</Highlight> digital solutions. With a strong focus on <Highlight>AI-driven systems</Highlight>, data analytics,  web development and app development.
    </motion.p>
    <motion.p variants={childVariant}>
      I build projects that blend creativity with technology. I'm always learning, exploring new tools, and <Highlight>pushing boundaries</Highlight> to craft meaningful user experiences.
    </motion.p>
  </div>
)

export default Intro
