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
      <SEO title="OpenBuilD" description="Getting Started to Work with Us" />

      {/* xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <div className="flex lg:flex-col justify-between xl:items-center ">
          <div className="lg:w-full w-5/12">
            <h1 className="text-5xl leading-normal w-9/12  lg:text-3xl font-semibold sm:text-3xl my-3 lg:pt-0 lg:pb-4 pt-6">
              Building for Africa in the Open 🚀
            </h1>

            <p className="w-10/12 lg:w-full my-9 lg:my-5 py-2">
              The challenges in Africa require builders. Openbuild is powered by
              3weblabs with the goal to empower builders with the tools,
              resources and network to build on the continent.
            </p>
            <div className="flex justify-between max-w-sm items-center text-base">
              <Link href="/about-openbuild">
                <span className="cursor-pointer hover:bg-green-900 ease-in transition-all hover:text-white  bg-primary text-white mx-2 rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center ml-0 text-sm bg-green-700 ">
                  About OpenBuilD
                </span>
              </Link>
              {/* <Button className="bg-transparent border-2" onClick={() => push("/openbuild")}>
              Join Our Community
            </Button> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/eEaeJV6w"
              >
                <span className="bg-transparent cursor-pointer hover:bg-green-900 ease-in transition-all hover:text-white  text-green-500 mx-2 border border-green-500 rounded-l-lg rounded-r-lg p-3 text-sm font-normal flex items-center justify-center ">
                  {" "}
                  Join Our Community
                </span>
              </a>
            </div>
          </div>
          <div className="relative w-6/12 lg:w-full mt-5 py-3 uppercase">
            <div className="from-green-200 to-green-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute top-4">
              #Hacks
            </div>
            <div className="from-green-300 to-green-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute right-3 top-8">
              #Builds
            </div>
            <div className="from-green-300 to-green-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute left-9 bottom-4">
              #Events
            </div>
            <img className="w-full" src="/assets/images/bg/hero.svg" alt="" />
          </div>
        </div>
      </div>
      {/* px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="my-16  bg-gradient-to-r from-green-400 to-teal-500 container mx-auto px-5mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2 ">
        <div className="text-center py-5 relative">
          <h2 className="lg:text-3xl text-4xl font-semibold my-4">
            Who is OpenBuilD for?
          </h2>
          <p className="text-center mx-auto my-7 font-normal pt-8 max-w-3xl">
            A community with an aim to connect designers/developers/techies to
            build and solve problems on/from the African continent. Openbuild is
            open for every interested tech talent.
          </p>
          <div className="bg-[#182F43] absolute w-24 h-1 top-20 left-1/2 lg:left-28"></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mx-auto place-items-center items-center  my-8 gap-8 justify-between items-center">
          <TitleCard
            icon="fa-solid text-5xl fa-book"
            title="Project Library"
            content="A library of opensource projects and tools to help you 10x your technical or design skills and remain job ready for the industries of the future."
          />
          <TitleCard
            icon="fa-solid text-5xl fa-users"
            title="Connect with Jobs"
            content="Are you an extremely talented designer or developer? Join our talent pool and get to work with top companies around the world."
          />
          <TitleCard
            icon="fa-solid text-5xl fa-handshake"
            title="Partners / Sponsors "
            content="Partner with us to push awesome products to the community or sponsor to help us scale our community impact."
          />
        </div>
      </div>
      <div className="sm:container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <div className="text-center">
          <h2 className="lg:text-3xl text-4xl font-semibold my-5">
            Latest Campaigns
          </h2>
          <p className="mb-8">
            Explore current campaigns. Learn, Network, Build and Win prizes.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mx-auto place-items-center items-centermt-12 my-8 gap-8 justify-between items-center">
          <BlogCard
            title={"100 Days of OpenBuilD"}
            content={
              "Openbuild is powered by 3weblabs with the goal to empower builders with the tools, resources and network to build on the continent. The goal is simple: to empower over a 100,000+ talents to build and contribute to Africa."
            }
            pageurl={"100daysofopenbuild"}
          />
          <BlogCard
            title={"OpenBuilD for SDGs"}
            content={
              "Join us to build impactful projects that would help us achieve the Sustainable Development Goals (SDGs)."
            }
            pageurl={"sdgs"}
          />
          {/* <Link href="/">
            <BlogCard
              title={"3WebLabs"}
              content={
                "Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis. Provident […]"
              }
            />
          </Link> */}
        </div>
        <div className="text-center mx-auto mt-12 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/eEaeJV6w"
            className="bg-[#30d72d2c] text-[#30d72d]  font-semibold border-b border-[#30D72D] bg-primary text-white mx-2 hover:bg-green-500 hover:text-white ease-in transition-all rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center"
          >
            Join Our Community
          </a>
        </div>
      </div>

      {/* my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="sm:container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <div className="grid grid-cols-2 sm:grid-cols-1  mx-auto place-items-center lg:grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-3 relative pt-8">
          <div className="absolute bottom-28 -left-9 -z-10 sm:top-0">
            <img src="/assets/images/bg/rod.svg" alt="" />
          </div>
          {/* <div className=" justify-between items-center"> */}
          <div className="text-center">
            <h3 className="lg:text-3xl text-4xl font-semibold my-5">
              What Developers are saying
            </h3>
            <p>Get inspired by these stories</p>
          </div>
          <div className="">
            <TestimonialCard
              content="Community and networking helped me as a blockchain developer by providing access to resources, collaboration/partnership opportunities, professional networking, feedback and mentorship and career advancement opportunities, resulting in upscaling my technical skills, building my portfolio, and increasing my visibility in the industry."
              role="Blockchain Developer"
              name="Hussaini Auwal"
              imgurl="/assets/images/partners/hussaini.jpeg"
            />
          </div>
          {/* </div> */}
          <div>
            <TestimonialCard
              content="Collaborating with the next generation of builders and innovators within my community to build, write and participate in hackathons fast-tracked my skills to becoming a blockchain developer"
              role="Senior Blockchain Developer"
              name="Alfred Awah-Johnson"
              imgurl="/assets/images/partners/alfred.jpeg"
            />
          </div>
          <div>
            <TestimonialCard
              content="Collaborating and networking within this tech community helped me grow my skills as a frontend web developer"
              role="Frontend Developer"
              name="Emmanuel Ezenwigbo"
              imgurl="/assets/images/partners/bio.jpg"
            />
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
