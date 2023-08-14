import { motion } from 'framer-motion';

import { staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../CustomTexts/CustomTexts';
import InsightCard from './InsightCard'
import {insights} from '../Data/Data'

const Insights = () => (
  <section className={`tw-text-black sm:tw-p-16 xs:p-15 tw-px-6 tw-py-6 tw-relative tw-z-10`} id='about'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:tw-max-w-[1280px] tw-w-full tw-mx-auto tw-flex tw-flex-col`}
    >
      <TypingText title="About Us" textStyles="tw-text-black tw-text-center" />

      <div className="tw-flex tw-flex-col tw-gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
