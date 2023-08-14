import React from 'react'
import Hero from './Hero'
import Projects from '../Projects/Projects'
import { picturesPro } from "../Data/Data";

const index = () => {
  return (
    <div>
        <Hero/>
        <Projects picData={picturesPro}/>
    </div>
  )
}

export default index