'use client'

import Card from './Card'
import Link from 'next/link'
import { IconBrandFramerMotion, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandOpenai, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconChevronDown, IconChevronRight, } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { childVariant } from './ui/animation-wrapper'
import Image from 'next/image'
import React, { useState } from 'react'

export type Project = {
  title: string,
  description: string,
  image: string,
  liveLink: string,
  sourceLink: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

export type UpcomingProject = {
  title: string,
  description: string,
  image?: string,
  liveLink?: string,
  sourceLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}
const ReactNative = {
  name: 'React Native',
  logo: <IconBrandReact size={18} />,
}
const ReactTech = {
  name: 'React',
  logo: <IconBrandReact size={18} />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}

const Motion = {
  name: 'Motion',
  logo: <IconBrandFramerMotion size={18} />
}

const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs size={18} />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript size={18} />
}

const MongoDB = {
  name: 'MongoDB',
  logo: <IconBrandMongodb size={18} />
}
const openAI = {
  name: 'OpenAI',
  logo: <IconBrandOpenai size={18} />
}
const cloudinary = {
  name: 'Cloudinary',
  logo: <img src="https://imgs.search.brave.com/qNgLouxHOtQeaHHpR0DdhFEOFYSowliBstw-Z6NMm3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXYt/dG8tdXBsb2Fkcy5z/My5hbWF6b25hd3Mu/Y29tL3VwbG9hZHMv/YXJ0aWNsZXMvenZs/ZXZsNW95ZnRhY2xv/emQzcTYucG5n" alt="Cloudinary" width={18} height={20} />,
};


const projects: Project[] = [
  {
    title: 'New-Light',
    description: "New-Light: A school portal enabling multiple admins to manage results, announcements, and fests.",
    image: '/projects/Screenshot 2025-11-06 004246.png',
    liveLink: 'https://newlight-public-school.vercel.app/',
    sourceLink: 'https://github.com/DevpriyaSaini/New-light',
    tags: [
      NextJS,
      MongoDB,
      cloudinary,
     NodeJS,
      { name: 'Acertinity' },
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Nuro-Hire',
    description: "Nuro-Hire: An AI-powered platform for automated and live interviews with real-time candidate analysis.",
    image: '/projects/image.png',
    liveLink: 'https://neuro-hire-eight.vercel.app/',
    sourceLink: 'https://github.com/DevpriyaSaini/NeuroHire',
    tags: [
      NextJS,
      MongoDB,
      openAI,
     NodeJS,
      { name: 'Acertinity' },
      TypeScript,
      Tailwind
    ]
  },
  
  
  {
    title: 'Jigyasu',
    description: "Jigyshu: A project collaboration portal where IIT Jammu professors post projects and students apply to join.",
    image: '/projects/Screenshot 2025-11-05 234815.png',
    liveLink: 'https://jigyasu-iitjammu.vercel.app',
    sourceLink: 'https://github.com/DevpriyaSaini/jigyasu-iitjammu',
     tags: [
      NextJS,
      NodeJS,
      { name: 'Acertinity' },
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'MystryComment',
    description: "MystryComment: A versatile commenting system for blogs and articles, featuring nested comments, and user authentication.",
    image: '/projects/Screenshot 2025-11-08 175808.png',
    liveLink: 'https://mystrycomment.vercel.app/',
    sourceLink: 'https://github.com/DevpriyaSaini/mystrycomment',
     tags: [
      NextJS,
      NodeJS,
      openAI,
      { name: 'Acertinity' },
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Movie-flix',
    description: "Movie-Flix: A React Native app that recommends movies and stores preferences locally for users.",
    image: '/projects/WhatsApp Image 2025-11-06 at 00.50.14_eccd3f6d.jpg' ,
    liveLink: 'https://expo.dev/accounts/devpriyasaini/projects/movie2/builds/50b010a2-43b1-4364-8f1c-fe5891e56c63 ',
    sourceLink: 'https://github.com/DevpriyaSaini/movie-flix',
     tags: [
      ReactNative,
      NodeJS,
      { name: 'tmdb' },
      TypeScript,
      Tailwind
    ]
  },
   {
    title: 'Tomato',
    description: 'Tomato: A fast food delivery platform with secure ordering, real-time tracking, and payments.',
    image: '/projects/Screenshot 2025-11-06 002401.png',
    liveLink: 'https://food-delivery01.onrender.com/',
    sourceLink: 'https://github.com/DevpriyaSaini/food-delivery',
    tags: [
      ReactTech,
      NodeJS,
     
      { name: '' },
      { name: 'CSS' },
      JavaScript
    ]
  },
 
  {
    title: 'VidChat',
    description: 'A real-time browser video chat app built to learn and demonstrate WebRTC, featuring peer-to-peer video calls and simple signaling.',
    image: '/projects/vidchat.png',
    liveLink: 'https://viedo-call-client.onrender.com/',
    sourceLink: 'https://github.com/DevpriyaSaini/Viedo-call',
    tags: [
      ReactTech,
      
      { name: 'Socket.io' },
      { name: 'WebRTC' },
      Tailwind
    ]
  },
 
  {
    title: 'Job-Tracker',
    description: 'A job application tracker to manage and monitor job applications, built with ejs and Node.js.',
    image: '/projects/Screenshot 2025-11-06 002703.png',
    liveLink: 'https://jobtracker-black.vercel.app/',
    sourceLink: 'https://github.com/DevpriyaSaini/jobtracker',
    tags: [
      
      NodeJS,
      cloudinary,
      {
        name: 'EJS',
       },
      JavaScript,
      Tailwind
    ]
  },
  {
    title: 'Zootube',
    description: 'A YouTube-style backend clone with uploads and authentication, built to learn Express and backend development.',
    image: '/projects/zootube.png',
    liveLink: '.',
    sourceLink: '.',
    tags: [
      NodeJS,
      MongoDB,
      { name: 'Cloudinary' },
      JavaScript
    ]
  }
]

const upcomingProjects: UpcomingProject[] = [
  {
    title: 'AlgoBud',
    description: "An AI-powered DSA platform with a personal tutor that spots your mistakes, explains patterns, and helps you level up—smarter than brute force.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Zuno',
    description: "An AI agent that keeps track of your personal life, so you can focus on getting work done without missing anything important.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  }
]

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <div id='projects' className='mt-12'>
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>
        Projects I&apos;ve Crafted & Shipped
      </motion.h1>
      <div className='grid gap-4 md:auto-rows-[10rem]'>
        {
          visibleProjects.map(project => (
            <motion.div variants={childVariant} key={project.title} className='h-full w-full flex'>
              <Card project={project} />
            </motion.div>
          ))
        }
      </div>

      {!showAll && (
        <motion.div variants={childVariant}>
          <Button
            variant={'hidden'}
            asChild
            className='flex items-center gap-1 w-max text-sm mx-auto my-8'
            onClick={() => setShowAll(true)}
          >
            <span>
              See More <IconChevronDown size={16} />
            </span>
          </Button>
        </motion.div>
      )}

      {showAll && (
        <motion.div variants={childVariant}>
          <Button
            variant={'hidden'}
            asChild
            className='flex items-center gap-1 hover:gap-2 transition-all duration-200 w-max text-sm mx-auto my-8'
          >
            <Link href={'https://github.com/DevpriyaSaini'} target='_blank'>
              View on GitHub <IconChevronRight size={16} />
            </Link>
          </Button>
        </motion.div>
      )}

      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>Upcoming Projects</motion.h1>
      <div className='grid md:grid-cols-2 gap-4 w-full'>
        {
          upcomingProjects.map(project => (
            <motion.div variants={childVariant} key={project.title}>
              <Card project={project} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
