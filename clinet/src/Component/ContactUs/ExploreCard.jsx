import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Neshanmap from "./map";
import { Link } from "react-router-dom";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  description,
  link,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`tw-relative ${
      active === id
        ? "lg:tw-flex-[3.5] tw-flex-[10]"
        : "lg:tw-flex-[0.5] tw-flex-[2] tw-grayscale-[90%]"
    } tw-flex tw-items-center tw-justify-center tw-min-w-[100px] tw-h-[250px] tw-transition-[flex] tw-duration-[0.7s] tw-ease-out-flex tw-cursor-pointer hover:tw-grayscale-0`}
    onClick={() => handleClick(id)}
  >
    {id === "world-2" ? (
      <Neshanmap />
    ) : (
      <img
        src={imgUrl}
        alt={title}
        className="tw-absolute tw-w-full tw-h-full tw-object-cover"
      />
    )}

    {active !== id ? (
      <h3 className="tw-font-semibold sm:tw-text-[32px] tw-text-[32px] tw-text-white tw-z-0 lg:tw-bottom-20 lg:tw-rotate-[-90deg] lg:tw-origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="tw-absolute tw-bottom-0 tw-p-8 tw-pb-12 tw-flex tw-justify-start tw-w-full tw-h-full tw-flex-col tw-bg-[rgba(0,0,0,0.5)] tw-rounded-b-[24px]">
        <Link to={link}>
          <h2 className="tw-mt-[24px] tw-font-semibold sm:tw-text-[32px] tw-text-[32px] tw-text-orange-500">
            {title}
          </h2>

          <p className="tw-font-normal tw-text-[16px] tw-leading-[20.16px] tw-text-orange-500">
            {description}
          </p>
        </Link>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
