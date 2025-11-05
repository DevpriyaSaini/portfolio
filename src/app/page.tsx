import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import GithubGraph from '@/components/GithubGraph'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'
import Education from '@/components/education'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <Education/>
      <Skills />
      <GithubGraph />
      <Projects />
    </AnimationWrapper>
  )
}

export default Home
