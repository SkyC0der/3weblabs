import Link from "next/link";
import React from "react";

const IdeasLab = () => {
  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/Background.png')]">
        <h2 className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl my-2">
          Blockchain Lab
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
          In the last couple of years we have been deeply invested in blockchain
          technology development and related services. We have you covered on
          all the core services:
        </p>
        <ul className="list-disc pl-10">
          <li>
            <span>Tokenomics/Token Engineering.</span>
          </li>
          <li>
            <span>Smart Contracts Development. (Solidity, Rust & Plutus).</span>
          </li>
          <li>
            <span>DApp Development.</span>
          </li>
          <li>
            <span>Wallets Development.</span>
          </li>
          <li>
            <span>DeFi related Development.</span>
          </li>
          <li>
            <span>Consultancy etc</span>
          </li>
        </ul>
        <p className="my-8 font-normal">
          We have trained developers too in these field working with companies
          such as Emurgo academy, Gimbalabs & DApp360 most of who have gone on
          to work with top blockchain companies. We most recently have worked
          with other blockchain partners to deploy solutions for land registry
          in burkina faso.
        </p>
        <p className="my-8 font-normal">
          What are you building? Let’s get started!!!
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
