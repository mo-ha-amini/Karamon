import React from 'react'
import { motion } from "framer-motion";
import {slideIn} from '../../utils/motion'
import Image from './ImageMotion';
const Movie = ({movie}) => {
  return (
    <motion.div 
      variants={slideIn('up', 'tween', movie.id*0.4, 1)}
    >
        <img className='imgPic tw-scale-{10%}' src={movie.img} />
    </motion.div> 
  );
}

export default Movie