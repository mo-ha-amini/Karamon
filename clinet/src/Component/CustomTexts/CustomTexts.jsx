import { motion } from 'framer-motion'
import {fadeIn, textContainer, textVariant2, planetVariants} from '../../utils/motion'



export const TypingText = ({title, textStyles}) => (
  <motion.h4
    variants={textContainer}
    className={`tw-text-[40px]  ${textStyles}`}
  >
    {/* {console.log(title)} */}
    {Array.from(title).map((letter, index)=> (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.h4>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-black ${textStyles}`}
>
  {title}
</motion.h2>
);
