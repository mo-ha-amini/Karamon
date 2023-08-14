import { useState } from 'react';
import { motion } from 'framer-motion'
import {staggerContainer, planetVariants} from '../../utils/motion'
import { TitleText, TypingText} from '../CustomTexts/CustomTexts'
import ExploreCard from './ExploreCard'
import {exploreWorlds} from '../Data/Data'


const Explore = () => {


  const [active, setActive] = useState('world-2');

  return(
    <section className={`sm:tw-p-16 xs:tw-p-8 tw-px-6 tw-py-12`} id="contact">
      <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:tw-max-w-[1280px] tw-w-full tw-mx-auto tw-flex tw-flex-col`}
        >
    
          {/* <TypingText title="Contact US" textStyles="tw-text-center" /> */}

          {/* <TitleText
            title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
            textStyles="text-center"
          /> */}

          <div className="tw-mt-[50px] tw-flex lg:tw-flex-row tw-flex-col tw-min-h-[70vh] tw-gap-5 tw-overflow-visible lg:tw-mx-56 sm:tw-mx-5">
            {exploreWorlds.map((world, index) => (
                <ExploreCard
                  key={world.id}
                  {...world}
                  index={index}
                  active={active}
                  handleClick={setActive}
                />
              ))}
          </div>

        </motion.div>
      
    </section> 
  )
};

export default Explore;
