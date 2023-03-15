import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Primary";
import { API_URL } from "../../utils/constants";
import JoinUsModal from "./components/JoinUs";
import SEO from "../../components/SEO";
import SecondaryButton from "../../components/Button/Secondary";
import { useRouter } from "next/router";
import TitleCard from "../../components/TitleCard";
import Link from "next/link";
import LabCard from "../../components/LabCard";
import TestimonialCard from "../../components/TestimonialCard";

type SingleArticle = {
  id: string;
  title: string;
  image: string;
  url: string;
  body: string;
  author: string;
};

export default function ForDevelopers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showJoinUsModal, setshowJoinUsModal] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setLoading(true);

    const url = `${API_URL}/blogs`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-transparent">
      <JoinUsModal
        show={showJoinUsModal}
        closed={() => setshowJoinUsModal(false)}
      />
      <SEO
        title="Research & Innovation"
        description="Are you an extremely skilled techy? Join our talent Pool today."
      />

      <div className="container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        {/* <div className="flex lg:flex-col justify-between xl:items-center ">
          <div className="lg:w-full w-5/12">
            <h1 className="text-4xl leading-normal w-10/12  lg:text-3xl font-semibold sm:text-3xl my-3 lg:pt-0 lg:pb-4 pt-6">
              Unlock Next Level Innovation 🚀
            </h1>
            <div className="w-10/12 lg:w-full my-9 lg:my-5 py-2">
              <p className="my-4">
                Different ideas require different set of approach and skills. It
                could be technical, informational or human resource deficit.{" "}
              </p>
              <p>Let's help you unlock innovation without limits.</p>
            </div>
            <div className="flex justify-between max-w-sm items-center text-base">
              <Button onClick={() => setshowJoinUsModal(true)}>
                <span className="cursor-pointer hover:bg-blue-900 ease-in transition-all hover:text-white  bg-primary text-white mx-2 rounded-l-lg rounded-r-lg font-normal flex items-center justify-center  text-sm ">
                  Join Talent Pool
                </span>
              </Button>
            </div>
          </div>
          <div className="relative w-6/12 lg:w-full mt-5 py-3 uppercase">
            <div className="from-blue-300 to-blue-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute top-4">
              Research
            </div>
            <div className="from-blue-300 to-blue-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute right-3 top-8">
              Ideas
            </div>
            <div className="from-blue-300 to-blue-500 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-xl text-2xl absolute left-9 bottom-4">
              Innovation
            </div>
            <img className="w-full" src="/assets/images/bg/hero.svg" alt="" />
          </div>
        </div> */}

        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 relative">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="absolute top-0 rotate-12 left-[-30%] lg:w-20 lg:left-0 z-[-6] w-48 h-24">
            <img className="w-full" src="/assets/images/illustrations/ill2.png" alt="" />
          </div>
          <div className="absolute top-0 rotate-12 right-[-30%] z-[-6] lg:w-20 lg:right-[10%] lg:top-[15%] w-48 h-24">
            <img className="w-full" src="/assets/images/illustrations/ill1.png" alt="" />
          </div>
          <div  className="absolute bottom-0 rotate-90 right-[-10%] z-[-6] w-40  h-24 lg:left-[-10%] lg:w-36 lg:bottom-[10%]">
            <img className="w-full" src="/assets/images/illustrations/ill3.png" alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unlock Next Level Innovation 🚀
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Different ideas require specific skills and resources. It could be
              technical, informational or human resource deficit. Let's help you
              unlock innovation without limits.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Do you <strong>manage a hub</strong> in Africa?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-16 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Us
              </a>
              
            </div>
          </div>
        </div>
      </div>
      {/* px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 */}
      <div className="my-16  bg-gradient-to-r from-teal-300 to-blue-500 container mx-auto px-5mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2 ">
        <div className="text-center py-5 relative ">
          <h2 className="lg:text-3xl text-4xl font-semibold my-4">
            Build & Innovate
          </h2>
          <p className="text-center text-lg mx-auto my-7 font-normal pt-8 max-w-3xl">
            The best ideas must be combined with the right information and the
            best teams if they will ever become usable solutions for everyday
            people.
          </p>
          <div className="bg-[#182F43] absolute w-32 h-1 top-20 left-[45%] lg:left-28"></div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mx-auto place-items-center items-center  my-8 gap-8 justify-between items-center">
          <LabCard
            imgSrc={"/assets/images/bg/idea-testing.webp"}
            title={"Ideas Testing Lab"}
            content={
              "Ideas are the building block of every product. Tap in our experts to help you to easily test & vet your ideas before building and shipping your product."
            }
            pageurl={"ideas-lab"}
          />
          <LabCard
            imgSrc={"/assets/images/bg/mvp-lab.webp"}
            title={"MVP Lab"}
            content={
              "A Minimum Viable Product (MVP) is the first proof of concept. We make it easy to develop an MVP and hit the road running towards reaching your users."
            }
            pageurl={"mvp-lab"}
          />
          <LabCard
            imgSrc={"/assets/images/bg/blockchain.webp"}
            title={"Blockchain Lab"}
            content={
              "Work with our team to build blockchain solutions, interact with our products or augment your team with blockchain developers from Africa."
            }
            btnText="Explore"
            pageurl={"blockchain-lab"}
          />

          <LabCard
            imgSrc={"/assets/images/bg/social-impact.webp"}
            title={"Social Impact Lab"}
            content={
              "We are building solutions that drive social impact with an objective to empower, increase access to solve problems in developing nations."
            }
            pageurl={"social-impact"}
          />
        </div>
        {/* <div className="text-center mx-auto mt-12 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/eEaeJV6w"
            className="bg-blue-700 hover:bg-blue-900 text-white  font-semibold border-b border-[#2d5ad7] bg-primary text-white mx-2 ease-in transition-all rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center"
          >
            Discover Hubs
          </a>
        </div> */}
      </div>
      {/* <div className="sm:container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <div className="text-center">
          <h2 className="lg:text-3xl text-4xl font-semibold my-5">
            Latest Campaigns
          </h2>
          <p className="mb-8">
            Explore current campaigns. Learn, Network, Build and Win prizes.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mx-auto place-items-center items-centermt-12 my-8 gap-8 justify-between items-center">
          <LabCard
            title={"100 Days of OpenBuilD"}
            content={
              "Openbuild is powered by 3weblabs with the goal to empower builders with the tools, resources and network to build on the continent. The goal is simple: to empower over a 100,000+ talents to build and contribute to Africa."
            }
            pageurl={"100daysofopenbuild"}
          />
          <LabCard
            title={"OpenBuilD for SDGs"}
            content={
              "Join us to build impactful projects that would help us achieve the Sustainable Development Goals (SDGs)."
            }
            pageurl={"sdgs"}
          />
          {/* <Link href="/">
          <LabCard
            title={"3WebLabs"}
            content={
              "Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis. Provident […]"
            }
          />
        </Link> */}
      {/* </div>
        <div className="text-center mx-auto mt-12 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/eEaeJV6w"
            className="bg-[#30d72d2c] text-[#30d72d]  font-semibold border-b border-[#30D72D] bg-primary text-white mx-2 hover:bg-green-500 hover:text-white ease-in transition-all rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center"
          >
            Join Our Community
          </a> *
        </div>
       </div> */}
    </div>
  );
}
