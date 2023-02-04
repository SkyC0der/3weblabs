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
    <div className="">
      <SEO
        title="Our Onboarding Process"
        description="Getting Started to Work with Us"
      />

      {/* <div className='h-60 flex px-40 sm:px-4 justify-between items-center border-2 border-b-white border-r-0 border-t-0 border-l-0 sm:h-42 sm:flex-col sm:items-start sm:justify-center'>
        <div>
          <h1 className="text-4xl font-semibold sm:text-2xl my-2">Onboarding Process</h1>
          <p className="text-sm font-light sm:text-sm my-2"> Getting Started to Work with Us</p>
        </div>
        <Button onClick={() => push('/contact')} className="sm:m-0 sm:my-2">Hire Us</Button>
      </div> */}

      <div className="flex space-between items-center container mx-auto px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4">
        <div className="w-7/12">
          <h1 className="text-4xl font-semibold sm:text-2xl my-2">
            Building for Africa in the Open 🚀
          </h1>
          <p className="w-7/12 my-5 py-6">
            The challenges in Africa requires builders. Openbuild is powered by
            the African Blockchain Centre for Developers with a goal to empower
            builders with the tools and resources to build on the continent.
          </p>
          <div className="flex">
            <Button onClick={() => push("/openbuild")}>
              What is OpenBuild?
            </Button>
            {/* <Button className="bg-transparent border-2" onClick={() => push("/openbuild")}>
              Join Our Community
            </Button> */}
            <Link href="/openbuild"><span className="bg-transparent text-green-500 mx-2 border border-green-500 rounded-l-lg rounded-r-lg p-3 px-6 font-light flex items-center justify-center "> Join Our Community</span></Link>
          </div>
        </div>
        <div className="w-5/12">
          <img className="w-full" src="/assets/images/bg/hero.svg" alt="" />
        </div>
      </div>

      <div className="my-12 bg-gradient-to-r from-green-400 to-teal-500 container mx-auto px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4">
        <div className="text-center py-5">
          <h2 className="text-4xl font-semibold my-5">Who is OpenBuilD for?</h2>
          <p className="text-center w-8/12 mx-auto my-7">
            OpenBuilD is for beginners hungry to learn more about web3, startups
            who would want to build teams to build with tools from our campaigns
            and creators looking to form teams that could become startup ideas.
          </p>
        </div>
        <div className="flex justify-between items-center">
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

      <div className="container mx-auto px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold my-5">Latest Campaigns</h2>
          <p className="mb-8">
            Explore current campaigns. Learn, Build and Win amazing prizes.
          </p>
        </div>
        <div className="flex mt-12 my-8 gap-8 justify-between items-center">
          <Link href="/">
            <BlogCard />
          </Link>

          <Link href="/">
            <BlogCard />
          </Link>
          <Link href="/">
            <BlogCard />
          </Link>
        </div>
        <div className="text-center mx-auto mt-12 flex justify-center">
          <Button onClick={() => push("/openbuild")}>Join Our Community</Button>
        </div>
      </div>

      <div className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4">
        <div className="grid ">
          <div className="col-span-2 flex justify-between items-center">
            <div className="text-center w-3/6">
              <h3 className="text-4xl font-semibold my-5">
                What Developers are saying
              </h3>
              <p>Get inspired by these stories</p>
            </div>
            <div className="w-3/6">
              <TestimonialCard />
            </div>
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
        {/* <img src="/assets/images/bg/rod.svg" alt="greed rod background" /> */}
      </div>

      <div className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4">
        <h3 className="text-center text-3xl font-semibold my-6 mb-12">
          Awesome Group Of Partners
        </h3>
        <div className="grid gap-3 grid-cols-5 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 mx-auto place-items-center items-center w-4/5 ">
          <div className="w-3/5">
            <img
              className="w-full"
              src="/assets/images/partners/Amazon.png"
              alt=""
            />
          </div>
          <div className="w-3/5">
            <img
              className="w-full"
              src="/assets/images/partners/Google.png"
              alt=""
            />
          </div>
          <div className="w-3/5">
            <img
              className="w-full"
              src="/assets/images/partners/Uber.png"
              alt=""
            />
          </div>
          <div className="w-3/5">
            <img
              className="w-full"
              src="/assets/images/partners/Netflix.png"
              alt=""
            />
          </div>

          <div className="w-3/5">
            <img
              className="w-full"
              src="/assets/images/partners/microsoft.png"
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
