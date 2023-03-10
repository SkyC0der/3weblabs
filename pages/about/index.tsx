import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/Background.png')]">
        <h2 className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl my-2">
          About 3weblabs
        </h2>
      </div>
      {/* my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="my-12 container mx-auto px-5 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2 ">
        {/* <Link href="/openbuild">
          <span className="bg-transparent cursor-pointer my-2  p-3 text-sm font-semibold flex ">
            {" "}
            &lt; Back To OpenBuilD
          </span>
        </Link> */}

        <p className="my-8 font-normal">
          3weblabs started out as a community effort heavily sponsored by ABCD
          Technologies. Earlier efforts began with a focus on the building out
          what was earlier known as the African Blockchain Centre for
          Developers.
        </p>
        <p className="my-8 font-normal">
          At 3weblabs our focus is simple; to collaborate with the next
          generation of builders, innovators and entrepreneurs to build out an
          innovative hive & laboratory that would become a centre for African
          technological research, innovation and development driven by
          communities for impact.
        </p>
        <p className="my-8 font-normal">
          Our goal in the short term is to empower digital skills acquisition,
          discover top talents and build the biggest web that connects hubs and
          innovation centres across the continent.
        </p>
        {/* <p className="my-8 font-normal">
        Welcome to OpenbuilD, let’s build!!!
        </p> */}
      </div>

      <div className="container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <h3 className="text-center text-3xl font-semibold my-6 mb-12">
          Awesome Group Of Partners
        </h3>
        <div className="grid pt-8 gap-8 grid-cols-4 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 mx-auto place-items-center items-center  ">
          <div className="w-4/5">
            <img
              className="w-full h-auto object-cover"
              src="/assets/images/partners/abcd.png"
              alt=""
            />
          </div>
          <div className="w-4/5">
            <img
              className="w-full h-auto object-cover"
              src="/assets/images/partners/dapp360.png"
              alt=""
            />
          </div>
          <div className="w-4/5">
            <img
              className="w-full h-auto object-cover"
              src="/assets/images/partners/poa.png"
              alt=""
            />
          </div>
          <div className="w-4/5">
            <img
              className="w-full h-auto bg-slate-700 object-cover"
              src="/assets/images/partners/empowa.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
