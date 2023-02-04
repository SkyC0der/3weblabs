import React,{ useEffect, useState} from 'react'
import SEO from '../../components/SEO'
import Button from '../../components/Button/Primary'
import { useRouter } from 'next/router'
import { API_URL } from '../../utils/constants'
import axios from 'axios';

type SingleArticle  = {
  id: string;
  title: string;
  image: string;
  url: string;
  body: string;
  author: string;
}

export default function ForCompanies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setLoading(true);

    const url = `${API_URL}/blogs`
    axios.get(url).then((response) => {
      setData(response.data.data);
    }).catch(error => {

    }).finally(() => {
      setLoading(false)
    })

  }, [])


  return (
    <div>
      <SEO title="For Companies" description="Want to work with us? We make it easier to bring your ideas to life." />

      <div className='h-60 flex px-40 sm:px-4 justify-between items-center border-2 border-b-white border-r-0 border-t-0 border-l-0 sm:h-42'>
        <h1 className="text-4xl font-semibold sm:text-2xl">For Companies</h1>
        <Button onClick={() => push('/contact')}>Hire Us</Button>
      </div>

      {/* About US */}

      <div className='px-40 sm:px-4 grid grid-cols-2 sm:grid-cols-1 mt-28 relative sm:mt-12'>
          <div className='height-auto relative sm:h-[25rem]'>
            <img
      src="/assets/images/illustrations/people.png"
      alt="People"
      width={500}
      height={500}
      className="absolute right-5"
    />
          </div>
    <div>
      <h3 className="text-2xl mb-10 font-medium">About US</h3>
      <p className="mb-5">We are a software development company focused on building solutions using various emerging technologies. At 3WebLabs we help businesses and enterprises scale by integrating technology in business and entrepreneurship.  3WebLAbs is powered by the development and Engineering department of ABCD with the global market as a target. </p>

      <ul>
        <li className="about-list flex items-center mb-3">
          <p className="pl-6">Research based approach to development.</p>
        </li>
        <li className="about-list flex items-center  mb-3">
          <p className="pl-6">
          Sustainable and equitable ecosystem.

          </p>
</li>
        <li className="about-list flex items-center  mb-3">
           <p className="pl-6">
 Empower Businesses.
           </p>
         </li>
        <li className="about-list flex items-center">
           <p className="pl-6">
             Setting the pace for the development and delivery of quality products.
          </p>
          
</li>

      </ul>
    </div>
      </div>



{/* Mission and vision */}

<div className='mt-80 sm:mt-20 grid grid-cols-2 px-80 gap-12 h-[40rem] sm:grid-cols-1 sm:px-4 sm:grid-rows-2 sm:gap-[15rem]'>

  <div className='bg-[#fff] relative rounded-md h-[30rem]'>
    <div className='absolute top-0 z-[2] w-[95%] rounded-md bg-[#fff] rounded-bl-none'>
      <h2 className="text-3xl font-semibold mb-4 p-8 pl-6 pb-2">Our Vision</h2>
      <p className="pl-6 pt-2 pb-4 font-light">To accelerate access and ease of integrating technology to build solutions that are scalable and sustainable for businesses.</p>
    </div>
    <img className='absolute bottom-0 h-80 w-full z-[1] sm:h-60' src="/assets/images/utils/vision.png"/>
  </div>

  <div className='bg-white relative rounded-md mt-20 sm:mt-30 rounded-md h-[30rem]'>
    
    <img className='absolute top-0 h-80 w-full z-[1] sm:h-60' src="/assets/images/utils/mission.png"/>
    <div className='absolute bottom-0 z-[2] w-[95%] rounded-md bg-[#fff] rounded-bl-none'>
      <h2 className="text-3xl font-semibold mb-4 p-8 pl-6 pb-2">Our Mission</h2>
      <ul className="pl-10 pt-2 pb-4 font-light list-disc">
        <li>Building solutions that equip startups and enterprises to achieve their business goals.
</li>
<li>
  Partnering with innovative companies to solve real world problems faced by businesses.
</li>
      </ul>
    </div>
  </div>

</div>

{/* Mission and vision */}

{/* our services */}

      <div className="grid gap-x-[6rem] grid-cols-3 sm:grid-cols-1 sm:grid-rows-1 px-48 my-36 mr-40 sm:px-4 sm:my-[20rem] sm:mr-0">
      <div className="mt-40 sm:mb-[8rem]">
          <h1 className="text-2xl pb-10 sm:pb-5 font-semibold">Our Services</h1>
          <div className="sm:text-sm text-sm font-light pr-26 sm:pr-[0rem]">3WebLabs is a development entity focused on building IT solutions for startups, enterprises and governments. 
Tell us about your idea and we’ll provide you with the most suitable technology to reach your project goals.</div>
          <Button className="ml-0 mt-4">Explore More</Button>
      </div>

      
        <div className="w-full">
          <div className="h-[390px] w-[20rem] sm:w-full  pt-4 px-6 rounded-md shadow-2xl mb-14 relative bg-[rgba(255,255,255,0.2)] backdrop-opacity-10 ">
            <img className="absolute top-10 h-[13rem] sm:hidden right-[-8.8rem]" src="/assets/images/utils/Group 82.png " />
            <img src="/assets/images/utils/services1.png" className="h-16 pb-4 mt-10 sm:pb-2" />
            <h3 className="text-md pb-4 sm:pb-5 font-semibold">Product Design &#38; Management</h3>
            <div className="font-light text-sm">When building products, proper management and user experience is key to retaining users. We make that process easy.</div>
          </div>
          
          <div className="h-[390px] w-[20rem] sm:w-full  pt-4 px-6  rounded-md shadow-2xl relative bg-[rgba(255,255,255,0.2)] backdrop-opacity-10 ">
             <img className="absolute top-10 h-[13rem] right-[-8.8rem] sm:hidden" src="/assets/images/utils/Group 83.png " />
             <img src="/assets/images/utils/services2.png" className="h-16 pb-4 mt-10 sm:pb-2" />
            <h3 className="text-md pb-4 sm:pb-5 font-semibold">Technical Consultancy</h3>
            <div className="font-light text-sm">Ideas can be really exciting but navigating the path to making them a reality can often be unclear. We take you through the how and smoothen the edges of doubts to bring clarity about your product.</div>
          </div>

        </div>

        <div className="mt-32 ">

          <div className=" h-[390px] sm:w-full w-[20rem] pt-4 px-6 rounded-md shadow-2xl mb-14 bg-[rgba(255,255,255,0.2)] backdrop-opacity-10 ">
            <img src="/assets/images/utils/services4.png" className="h-16 pb-4 mt-10 sm:pb-2" />
            <h3 className="text-md pb-4 sm:pb-5 font-semibold">Engineering &#38; Development</h3>
            <div className="font-light text-sm">Engineering and Development is the tool for building products that deliver value and that&apos;s exactly what we do. Just think it and we bring the magic to live.</div>
          </div>

          <div className=" h-[390px] sm:w-full w-[20rem] pt-4 px-6 rounded-md shadow-2xl bg-[rgba(255,255,255,0.2)] backdrop-opacity-10 ">
             <img src="/assets/images/utils/services3.png" className="h-16 pb-4 mt-10 sm:pb-2" />
            <h3 className="text-md pb-4 sm:pb-5 font-semibold">Research</h3>
            <div className="font-light text-sm">Sometimes we want to understand our market and the technology before taking a plunge. We help make that transition easy by offering advice backed by real data.</div>
          </div>

        </div>
     
    </div>
    {/* our services end */}



    {/* Testimonials */}

    <div className="my-[5rem] w-screen">
      <div className=" w-full pt-24 pl-44 sm:px-4 bg-[length:100%_100%] sm:bg-cover bg-[url('/assets/images/bg/group127.png')]">
        <div className="bg-white bottom-0 left-10 w-[30rem] h-[30rem] sm:w-full pt-16 pt-4 sm:px-6 rounded-xl shadow-2xl px-10">
            <h1 className="text-2xl pb-4 mt-10 sm:pb-5 font-semibold">You&apos;ve got ideas, we have the expertise to give it life.</h1>
            <h3 className="font-light">To accelerate access and ease of integrating technology to build solutions that are scalable and sustainable for businesses.</h3>

            <Button className="ml-0 mt-4" onClick={() => push('/contact')}>Hire Us</Button>
        </div>
      </div>

      {/* why work with us end */}
      <div className="mt-6 bg-[rgba(0,0,0,0.5)] py-16 px-44 text-white grid grid-cols-2 sm:grid-cols-1 sm:px-4">
        <div>
          <h2 className="font-extralight mb-3">Why Work with Us?</h2>
          <h1 className="text-4xl font-semibold">We make it easier to bring your ideas to life.</h1>
        </div>

        <div className="sm:mt-[4rem]">
          <h2 className="font-extralight mb-4 pr-[13rem] sm:pr-[3rem] sm:text-sm">Our journey has been about communities, strengthening partnerships and collaboration with the worlds best talents.</h2>
          <div className="grid grid-cols-3">

            <div className="flex">
              <span className="text-4xl sm:text-2xl font-semibold mr-4 sm:mr-2">15+</span>
              <span className="font-extralight mb-3 sm:text-xs">Satisfied <br/>Clients</span>
            </div>

            <div className="flex">
             <span className="text-4xl sm:text-2xl font-semibold mr-4 sm:mr-2">2</span>
              <span className="font-extralight mb-3 sm:text-xs">Years <br/> Experience</span>
            </div>

            <div className="flex">
              <span className="text-4xl sm:text-2xl font-semibold mr-4 sm:mr-2">1k+</span>
              <span className="font-extralight mb-3 sm:text-xs">Size of<br/> Developer Community</span>
            </div>

          </div>
        </div>
      </div>

      {/* why work with us end */}


    {/* Testimonial main */}

    <div className="my-10 sm:mb-2 flex flex-col items-center ">
      <h2 className="text-2xl pb-4 mt-10  sm:pb-5 font-semibold">Trusted By Industry Leaders</h2>
      <p className="text-sm pb-4 sm:pb-5 font-light w-[43rem] sm:w-full sm:p-4 text-center">Nothing excites us more than the feedback we get from the products we build and the services we offer to our clients.</p>
      <div>

      </div>
    </div>
    {/* Testimonial main  end*/}

    </div>

    {/* Testimonials end */}

    {/* blog */}
      <div className="px-48 my-48 sm:my-12 xl:px-24 lg:px-10 2xl:px-24 flex sm:flex-col">
        <div className="flex items-start flex-col sm:mb-6">
          <span className="bg-blue-700 p-2 text-white rounded-full">BLOG</span>
          <h1 className="text-4xl pb-4 mt-4  sm:pb-5 font-semibold sm:pb-2">Our Articles</h1>
          <p className="text-sm pb-4  sm:pb-5 font-light">Explore ideas light by world <br/> class talents.</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-1 sm:ml-[0rem] ml-[10rem] gap-6">
          
          {data && data.length && !loading ? data.map((article: SingleArticle) => {
            return (<div className="flex flex-col w-[14rem] sm:w-full" key={article.id}>
              <img src={article.image} className='h-[20rem] w-full' />
              <span className="text-xs font-light my-3">{article.author}</span>
              <h2 className="font-semibold text-md">{article.title}</h2>
              <p className="w-full font-light my-3 text-sm">{article.body}</p>
              <div className="w-full font-light my-3 text-xs" onClick={() => push(`/blog/${article.url}`)}>Read more</div>

            </div>)
          }) : <div className="w-full text-center text-3xl"><h1>No Post Yet!</h1></div>}

        </div>
      </div>
    {/* blog */}

    </div>
  )
}
