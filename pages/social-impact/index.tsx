import Link from "next/link";
import React from "react";

const IdeasLab = () => {
  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/Background.png')]">
        <h2 className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl sm:my-2">
          Social Impact Lab
        </h2>
      </div>
      {/* my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="my-12 container mx-auto px-5 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2 ">
        <Link href="/innovation">
          <span className="bg-transparent cursor-pointer my-2  p-3 text-sm font-semibold flex ">
            {" "}
            &lt; Back To Innovation
          </span>
        </Link>

        <p className="my-8 font-normal">
          The social impact lab was built to specially allow us introduce
          innovation to local communities and groups around us. We acknowledge
          that in Africa especially there is a huge divide in technical
          education and access to information and resources that can empower the
          next generation of leaders with the tools to build and add value to
          their localities.
        </p>
        <p className="my-8 font-normal">
          The SDGs is also very close to our hearts and we believe that as an
          organization, it is important that we are able to contribute to
          specific aspects of the SDGs that relates to access to basic life
          resources, equitable & quality education, health infrastructure etc
        </p>
        <p className="my-8 font-normal">
          The challenges of the future require that all hands are on deck to
          contribute in every way possible to solve the problems closest to us
          and that’s our drive. Partner with us to increase our reach.
        </p>

        <div className="text-center mx-auto mt-12 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="bg-[#302dd7] px-8 font-semibold border-b  bg-primary text-white mx-2 hover:bg-blue-500 hover:text-white ease-in transition-all rounded-l-lg rounded-r-lg p-3  flex items-center justify-center"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default IdeasLab;
