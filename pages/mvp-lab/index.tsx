import Link from "next/link";
import React from "react";

const IdeasLab = () => {
  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/Background.png')]">
        <h2 className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl my-2">
          MVP Lab
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
          A Minimum Viable Product (MVP) is the first proof of concept. We make
          it easy to develop an MVP and hit the road running towards reaching
          your users. Think of it as a bare-bone working concept for your idea.
          This allows you pitch a prototype to investors, raise funds and
          utilize the resource to scale.
        </p>
        <p className="my-8 font-normal">
          Our engineering team will work with you to define technical needs,
          resource requirements and tooling requirements to get the MVP off the
          ground. We do not only stop there we also give you an idea of a
          roadmap for when you are ready to make your MVP more robust.
        </p>

        <div className="text-center mx-auto mt-12 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="bg-[#302dd7] px-8  border-b  bg-primary text-white mx-2 hover:bg-blue-500 hover:text-white ease-in transition-all rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default IdeasLab;
