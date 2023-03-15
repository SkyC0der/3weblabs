import Link from "next/link";
import React from "react";

const IdeasLab = () => {
  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/Background.png')]">
        <h2 className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl my-2">
         Ideas Testing Lab
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
          Ideas are the building block of every product. Tap in our experts to
          help you to easily test & vet your ideas before building and shipping
          your product.
        </p>
        <p className="my-8 font-normal">
        Most times what you need is not an MVP but enough technical detail and consulting to ensure your idea is full proof. This means knocking your ideas off experts who would advice you, help you document use cases and possibilities in your idea. This helps you to understand the market and opportunities you can leverage to enter the market.
        </p>
        <p className="my-8 font-normal">
        After this you can choose to go on to developing an MVP or prototype for your idea when you feel confident and ready to kick-off.

        </p>
        <p className="my-8 font-normal">
        Let’s talk about that idea and help you polish it.
        </p>


        <div className="text-center mx-auto mt-12 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="bg-[#302dd7] px-8 text-[#fff]  font-semibold border-b  bg-primary text-white mx-2 hover:bg-blue-500 hover:text-white ease-in transition-all rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center"
          >
            Join Us
          </a>
        </div>
        
      </div>

     
    </div>
  );
};

export default IdeasLab;
