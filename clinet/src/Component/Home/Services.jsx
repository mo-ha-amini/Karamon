import React from "react";
import img1 from "../Data/seedimg/1.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="tw-p-8 tw-grid tw-grid-flow-row sm:tw-grid-flow-col tw-justify-center tw-gap-5">
        <div className="tw-p-3 tw-shadow-xl tw-rounded-md">
          <div>
            <h5 className="tw-text-center tw-font-bold ">Architecture</h5>
            <div className="tw-flex tw-justify-center">
              <img src={img1} alt="" className="tw-w-[350px]" />
            </div>
          </div>
          <div className="tw-p-2 tw-text-justify tw-w-[100%]">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
          </div>
          <div className="tw-flex tw-justify-center ">
            <Link
              to={"/projects"}
              className=" tw-bg-orange-400 tw-border-orange-600 tw-border-[2px] tw-rounded-3xl tw-p-3 tw-text-neutral-800"
            >
              Architecture Project
            </Link>
          </div>
        </div>

        <div className="tw-p-3 tw-shadow-xl tw-rounded-md">
          <div>
            <h5 className="tw-text-center tw-font-bold ">HandiCraft</h5>
            <div className="tw-flex tw-justify-center">
              <img src={img1} alt="" className="tw-w-[350px]" />
            </div>
          </div>
          <div className="tw-p-2 tw-text-justify tw-w-[100%]">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
          </div>
          <div className="tw-flex tw-justify-center ">
            <Link
              to={"/handicraft"}
              className=" tw-bg-orange-400 tw-border-orange-600 tw-border-[2px] tw-rounded-3xl tw-p-3 tw-text-neutral-800"
            >
              HandiCraft Project
            </Link>
          </div>
        </div>

        <div className="tw-p-3 tw-shadow-xl tw-rounded-md">
          <div>
            <h5 className="tw-text-center tw-font-bold ">Interior Design</h5>
            <div className="tw-flex tw-justify-center">
              <img src={img1} alt="" className="tw-w-[350px]" />
            </div>
          </div>
          <div className="tw-p-2 tw-text-justify tw-w-[100%]">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
          </div>
          <div className="tw-flex tw-justify-center ">
            <Link
              to={"/interiordesign"}
              className=" tw-bg-orange-400 tw-border-orange-600 tw-border-[2px] tw-rounded-3xl tw-p-3 tw-text-neutral-800"
            >
              InteriorDesign Project
            </Link>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Services;
