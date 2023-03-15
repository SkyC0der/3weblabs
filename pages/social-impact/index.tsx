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
          A community for developers, designers, technical writers and every
          kind of builder in the tech space. The problems facing Africa are
          unique and particularly interesting. Africa is a unique continent with
          over 1.4 Billion people most of whom are young people. We can all
          agree that there has also been increasing interest in Africa of late.
        </p>
        <p className="my-8 font-normal">
        In the wake of all these, we still have very few Africans learning and contributing to Africa. We want to empower a generation to build for Africa and solve problems for the rest of the globe. Nobody understands the unique opportunities and challenges in Africa like those who have lived and worked in it. Does this mean you cannot participate if you are not African? not at all.


        </p>
        <p className="my-8 font-normal">
        The goal is simple: to empower over a <strong>100,000+</strong> talents to build and contribute to Africa.

        </p>
        <p className="my-8 font-normal">
        Welcome to our Social Impact Lab, let’s build!!!
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
