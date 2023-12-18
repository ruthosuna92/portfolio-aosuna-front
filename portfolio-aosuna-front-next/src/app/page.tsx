"use client"
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navbar/navbar'
import AboutMe from './aboutme/page'
import Background from './background/page'
import MyProjects from './myprojects/page'
import MySkills from './myskills/page'
import Contact from './contact/page'
import { useState } from 'react'
import ThemeComponent from './components/themeComponent/themeComponent'

export default function Home() {

  
  return <ThemeComponent/>
      
}
