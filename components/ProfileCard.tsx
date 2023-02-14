import React from "react";

import Slider from "react-slick";

type ProfileCardProps = {
  name?: string;
  role?: string;
  twitter?: string;
  imgUrl?: string;
  linkedin?: string;
  className?: string;
};
const ProfileCard = (props: ProfileCardProps) => {
    const {name, role, imgUrl, twitter, linkedin, className} = props
  return (
    <div className="my-2 p-6 bg-white drop-shadow-xl border rounded-lg w-11/12 ">
        <div className="md:px-12 xl:px-6">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto object-cover"
              src={imgUrl}
              alt = {`Profile image of ${name}`}
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {name}
            </h3>
            <div className="text-center text-gray-400  font-semibold">
              <p>{role}</p>
            </div>

            <div className="text-center flex justify-center items-center my-5">
              {
                twitter?  (<a
                  className="text-xs mx-4 text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href={twitter}
                >
                  <img
                    className="w-8 h-8"
                    src="/assets/images/icons/twitter.png"
                  />
                </a>) : ''
              }
              {
                linkedin ? (<a
                  className="text-xs mx-4 text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href={linkedin}
                >
                  <img
                    className="w-8 h-8"
                    src="/assets/images/icons/linkedin.png"
                  />
                </a>) : ''
              }
             
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfileCard;
