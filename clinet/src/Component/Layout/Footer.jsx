import React from "react";
import "./Footer.css";
import googlemap from '../../assets/icons8-google-maps-old-50.png'
import instagram from '../../assets/icons8-instagram-50.png'
import whatsapp from '../../assets/icons8-whatsapp-50.png'



const footer = () => {
  return (
    <footer
      id="dark-theme"
      class="tw-bg-black tw-text-white tw-bottom-0 tw-left-0 tw-flex tw-flex-col tw-w-full tw-gap-8 tw-px-8 tw-py-14 md:tw-gap-12"
    >
      <div class="tw-grid tw-grid-cols-2 tw-gap-8 2xsm:tw-grid-cols-2 md:tw-grid-cols-4 ">
        <div class="tw-flex tw-flex-col tw-gap-6">
          <label class="tw-text-gray-400">SOLUTIONS</label>
          <ul class="tw-flex tw-flex-col tw-gap-6 ">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-6">
          <label class="tw-text-gray-400">SUPPORT</label>
          <ul class="tw-flex tw-flex-col tw-gap-6">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-6">
          <label class="tw-text-gray-400">COMPANY</label>
          <ul class="tw-flex tw-flex-col tw-gap-6 ">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-6">
          <label className="tw-text-gray-400"></label>
          <div className="tw-text-white tw-flex tw-flex-col tw-gap-4 tw-p-2">
          <div className="tw-text-xs">
            <h6>Address  </h6>
            <p>Isfahan, Khansar, Moalem BLV, Next to Mitra bridge</p>
          </div>
          <div className="tw-text-xs">
            <h6>Phone  </h6>
            <p>+98 912 123 45 67</p>
          </div>
        </div>
        </div>
      </div>
      <div class="tw-w-full tw-h-px tw-m-auto tw-bg-gradient-to-r tw-from-transparent tw-via-gray-400 tw-to-transparent"></div>
      <div class="tw-flex tw-flex-col tw-items-center tw-gap-6 md:tw-flex-row md:tw-justify-between ">
        <div>&#169; Developed By Mo.ha.Amini 2023</div>
        <div class="tw-text-white tw-flex tw-gap-4 tw-p-2 tw-rounded-md tw-social-wrapper">
          <img
            onclick="relocate('googlemap.com')"
            src={googlemap}
            alt="Facebook"
            className="tw-w-[30px]"
          />
          <img
            onclick="relocate('instagram.com')"
            src={instagram}
            alt="Instagram"
            className="tw-w-[30px]"

          />
          <img
            onclick="relocate('twitter.com')"
            src={whatsapp}
            alt="whatsapp"
            className="tw-w-[30px]"

          />

        </div>
      
      </div>
    </footer>
  );
};

export default footer;
