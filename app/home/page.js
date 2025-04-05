"use client";
import About from '../components/About'
import Header from '../components/Header'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'

import ScrollNavButtons from '@/components/ScrollNavButtons';

import React from 'react'

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />

        <ScrollNavButtons />
    </div>
  )
}

export default Home