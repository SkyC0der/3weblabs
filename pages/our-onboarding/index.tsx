import React from "react";
import SEO from "../../components/SEO";
import Button from "../../components/Button/Primary";
import SecondaryButton from "../../components/Button/Secondary";
import { useRouter } from "next/router";
import TitleCard from "../../components/TitleCard";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import TestimonialCard from "../../components/TestimonialCard";

export default function Onboarding() {
  const { pathname, push } = useRouter();
  return (
    <div className="bg-transparent">
      <SEO
        title="OpenBuilD"
        description="Getting Started to Work with Us"
      />

      {/* <div className='h-60 flex px-40 sm:px-4 justify-between items-center border-2 border-b-white border-r-0 border-t-0 border-l-0 sm:h-42 sm:flex-col sm:items-start sm:justify-center'>
        <div>
          <h1 className="text-4xl font-semibold sm:text-2xl my-2">Onboarding Process</h1>
          <p className="text-sm font-light sm:text-sm my-2"> Getting Started to Work with Us</p>
        </div>
        <Button onClick={() => push('/contact')} className="sm:m-0 sm:my-2">Hire Us</Button>
      </div> */}
{/* xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
       <div className="flex lg:flex-col justify-between xl:items-center ">
       <div className="lg:w-full w-5/12">
          <h1 className="text-5xl leading-normal w-9/12  lg:text-3xl font-semibold sm:text-3xl my-3 lg:pt-0 lg:pb-4 pt-6">
            Building for Africa in the Open 🚀
          </h1>
          <p className="w-10/12 lg:w-full my-9 lg:my-5 py-2">
            The challenges in Africa requires builders. Openbuild is powered by
            the African Blockchain Centre for Developers with a goal to empower
            builders with the tools and resources to build on the continent.
          </p>
          <div className="flex justify-between max-w-sm items-center text-base">
            <Button className="bg-green-700 ml-0 text-sm" onClick={() => push("/openbuild")}>
              About OpenBuilD
            </Button>
            {/* <Button className="bg-transparent border-2" onClick={() => push("/openbuild")}>
              Join Our Community
            </Button> */}
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/ffVMcKQQ"><span className="bg-transparent cursor-pointer text-green-500 mx-2 border border-green-500 rounded-l-lg rounded-r-lg p-3 text-sm font-normal flex items-center justify-center "> Join Our Community</span></a>
          </div>
        </div>
        <div className="relative w-6/12 lg:w-full mt-5 py-3 uppercase">
          <div className="from-green-200 to-green-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute top-4">#Hacks</div>
          <div className="from-green-300 to-green-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute right-3 top-8">#Builds</div>
          <div className="from-green-300 to-green-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute left-9 bottom-4">#Events</div>
          <img className="w-full" src="/assets/images/bg/hero.svg" alt="" />
        </div>
       </div>
      </div>
      {/* px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
       <div className="my-16  bg-gradient-to-r from-green-400 to-teal-500 container mx-auto px-5mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2 ">
        <div className="text-center py-5 relative">
          <h2 className="lg:text-3xl text-4xl font-semibold my-4">Who is OpenBuilD for?</h2>
          <p className="text-center mx-auto my-7 font-normal pt-8 max-w-3xl">
            OpenBuilD is for beginners hungry to learn more about web3, startups
            who would want to build teams to build with tools from our campaigns
            and creators looking to form teams that could become startup ideas.
          </p>
          <div className="bg-[#182F43] absolute w-24 h-1 top-20 left-1/2 lg:left-28"></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mx-auto place-items-center items-center  my-8 gap-8 justify-between items-center">
          <TitleCard
            title="Beginners"
            content="Beginners trying to learn more about web3"
          />
          <TitleCard
            title="Startups"
            content="Startups looking for a fast way to learn & build"
          />
          <TitleCard
            title="Creators"
            content="Creators who want to build an impressive portfolio of projects"
          />
        </div>
      </div>
      {/* max-xl:px-28 max-lg:px-20 max-3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
     <div className="sm:container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <div className="text-center">
          <h2 className="lg:text-3xl text-4xl font-semibold my-5">Latest Campaigns</h2>
          <p className="mb-8">
            Explore current campaigns. Learn, Build and Win amazing prizes.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mx-auto place-items-center items-centermt-12 my-8 gap-8 justify-between items-center">
          <Link href="/">
            <BlogCard title = {"100 Days of OpenBuilD"} content={"Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis. Provident […]"} />
          </Link>

          <Link href="/">
            <BlogCard title = {"LTO Campaign"} content={"Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis. Provident […]"} />
          </Link>
          <Link href="/">
            <BlogCard title = {"3WebLabs"} content={"Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis. Provident […]"} />
          </Link>
        </div>
        <div className="text-center mx-auto mt-12 flex justify-center">
          <Button className="bg-[#30d72d2c] text-[#30d72d]  font-semibold border-b border-[#30D72D]" onClick={() => push("/openbuild")}>Join Our Community</Button>
        </div>
      </div>

      {/* my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="sm:container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <div className="grid grid-cols-2 sm:grid-cols-1  mx-auto place-items-center lg:grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-3 relative pt-8">
          <div className="absolute bottom-28 -left-9 -z-10 sm:top-0"><img src="/assets/images/bg/rod.svg" alt="" /></div>
          {/* <div className=" justify-between items-center"> */}
            <div className="text-center">
              <h3 className="lg:text-3xl text-4xl font-semibold my-5">
                What Developers are saying
              </h3>
              <p>Get inspired by these stories</p>
            </div>
            <div className="">
              <TestimonialCard />
            </div>
          {/* </div> */}
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>

      </div>
      {/* my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
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
      {/* Proceess */}

      {/* <div className='flex mx-60 sm:mx-4 grid grid-cols-2 grid-rows-5 mt-20 sm:grid-cols-1'>
        <div className="sm:h-[33rem] bg-[length:100%_100%] bg-cover sm:bg-[url('/assets/images/bg/Rectangle39778.png')]">
          <h2 className="text-white my-2 text-7xl font-semibold sm:text-center sm:text-black sm:text-3xl sm:mb-[4rem]">01</h2>
          <h3 className="font-semibold text-3xl w-[20rem] sm:text-xl sm:my-6  sm:mb-[2rem] pl-2">Service Request and Requirement</h3>
          <p className="my-2 pr-[8rem] font-light text-sm sm:pr-0 sm:pl-2">Business contacts ABCD with a development request using our website form, contract email address or phone call and fill out the requirement document prepared by the development/engineering team to understand client requirements.</p>
        </div>
        <div className="sm:hidden"></div>

        <div className="sm:hidden"></div>

        <div className="sm:mb-[10rem] sm:h-[33rem] bg-[length:100%_100%] bg-cover sm:bg-[url('/assets/images/bg/Rectangle39778.png')]">
          <h2 className="text-white my-2 text-7xl font-semibold sm:text-center sm:text-black sm:text-3xl sm:mb-[4rem]">02</h2>
          <h3 className="font-semibold text-3xl w-[20rem] sm:text-xl sm:my-6  sm:mb-[2rem] pl-2">Introductory/Project Initiation Meeting </h3>
          <p className="my-2 pr-[8rem] font-light text-sm sm:pr-0 sm:pl-2">An introductory meeting with the client is scheduled to further understand the client’s project, cost, and payment model and signing of NDAs.</p>
        </div>

        <div className="sm:mb-[10rem] sm:h-[33rem] bg-[length:100%_100%] bg-cover sm:bg-[url('/assets/images/bg/Rectangle39778.png')]">
          <h2 className="text-white my-2 text-7xl font-semibold sm:text-center sm:text-black sm:text-3xl sm:mb-[4rem]">03</h2>
          <h3 className="font-semibold text-3xl w-[20rem] sm:text-xl sm:my-6  sm:mb-[2rem] pl-2">Project Proposal and Budget </h3>
          <p className="my-2 pr-[8rem] font-light text-sm sm:pr-0 sm:pl-2">After our introductory meeting we would get back to you with a proposal on project requirement, timeline and cost. We would have meetings to solidify how we are going to kickstart to project to completion </p>
        </div>
        <div className="sm:hidden"></div>

        <div className="sm:hidden"></div>

        <div className="sm:mb-[10rem] sm:h-[33rem] bg-[length:100%_100%] bg-cover sm:bg-[url('/assets/images/bg/Rectangle39778.png')]">
          <h2 className="text-white my-2 text-7xl font-semibold sm:text-center sm:text-black sm:text-3xl sm:mb-[4rem]">04</h2>
          <h3 className="font-semibold text-3xl w-[20rem] sm:text-xl sm:my-6  sm:mb-[2rem] pl-2">Contract/Retainer Payment</h3>
          <p className="my-2 pr-[8rem] font-light text-sm sm:pr-0 sm:pl-2">A service contract is prepared, analyzed and signed by both parties and the client pays the initial retainer fee for development to proceed.</p>
        </div>

        <div className="sm:h-[33rem] bg-[length:100%_100%] bg-cover sm:bg-[url('/assets/images/bg/Rectangle39778.png')]">
          <h2 className="text-white my-2 text-7xl font-semibold sm:text-center sm:text-black sm:text-3xl sm:mb-[4rem]">05</h2>
          <h3 className="font-semibold text-3xl w-[20rem] sm:text-xl sm:my-6  sm:mb-[2rem] pl-2">Development and Product Test</h3>
          <p className="my-2 pr-[8rem] font-light text-sm sm:pr-0 sm:pl-2">Development begins with the initiation of payment. After which we continue the loop of development and testing to ensure quality.</p>
        </div>
        <div className="sm:hidden"></div>


    </div> */}
      {/* End Proceess */}
    </div>
  );
}
