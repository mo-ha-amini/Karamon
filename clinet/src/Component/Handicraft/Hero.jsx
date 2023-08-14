import React from "react";
import img1 from "../Data/seedimg/1.png";

const Hero = () => {
  return (
    <div
      className={`p-5 text-center bg-image rounded-3 tw-bg-[image:var(--image-url)] tw-h-[100vh]`}
      style={{'--image-url': `url(${img1})`}} 
    >
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center tw-h-[100vh]">
          <div className="text-white">
            <h1 className="mb-3 tw-text-black tw-font-serif tw-text-8xl">HandiCraft</h1>
            {/* <h4 className="mb-3">Subheading</h4>
            <a className="btn btn-outline-light btn-lg" href="#!">
              Call to action
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
