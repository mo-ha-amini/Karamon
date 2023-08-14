import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="tw-flex md:tw-flex-row tw-flex-col tw-gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:tw-w-[270px] tw-w-full tw-h-[250px] tw-rounded-[32px] tw-object-cover"
    />
    <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
      <div className="tw-flex-1 md:tw-ml-[62px] tw-flex tw-flex-col tw-max-w-[650px]">
        <h4 className="tw-font-normal lg:tw-text-[42px] tw-text-[26px] tw-text-black">
          {title}
        </h4>
        <p className="tw-mt-[16px] tw-font-normal lg:tw-text-[20px] tw-text-[14px] tw-text-slate-950">
          {subtitle}
        </p>
      </div>

      {/* <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div> */}
    </div>
  </motion.div>
);

export default InsightCard;