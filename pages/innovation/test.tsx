import { useEffect, useState} from 'react'
import axios from 'axios';
import SEO from '../../components/SEO'
import Button from '../../components/Button/Primary'
import { API_URL } from '../../utils/constants'
import { useRouter } from 'next/router'
import JoinUsModal from './components/JoinUs'

type SingleArticle  = {
  id: string;
  title: string;
  image: string;
  url: string;
  body: string;
  author: string;
}


export default function ForDevelopers() {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showJoinUsModal, setshowJoinUsModal] = useState(false);
  const {push} = useRouter();

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
      <JoinUsModal show={showJoinUsModal} closed={() => setshowJoinUsModal(false)}/>
      <SEO title="For Developers" description="Are you an extremely skilled techy? Join our talent Pool today." />

      <div className='h-60 flex px-40 sm:px-4 justify-between items-center border-2 border-b-white border-r-0 border-t-0 border-l-0 sm:h-42'>
        <h1 className="text-4xl font-semibold sm:text-2xl">For Developers</h1>
        <Button onClick={() => setshowJoinUsModal(true)}>Join Us</Button>
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



{/* our technology */}

      <div className="px-48 sm:px-4 flex flex-col items-center mt-[10rem] sm:mt-[35rem]">
        <h1 className="text-2xl font-semibold my-6">Our Technology</h1>
        <p className="my-4 text-sm font-light w-[42rem] sm:w-full sm:p-4 sm:my-2 text-center">Every expert has a magic wand for turning ideas into products. Regardless of your background we just might support your tool.</p>

        <div className="hidden sm:flex flex flex-col w-full">

          <div className="bg-[rgba(255,255,255,0.6)] flex justify-between items-start flex-col border-white h-[5rem] w-full p-6 stackite-mob">
            <div className="flex justify-between items-center w-full">
              <p className="vertical-mob">Programming Language</p>
              <img className="h-3 arrow" src="/assets/images/icons/arrow-down.png" />
            </div>
            
            <img src="/assets/images/utils/programinglanguage.png" className="hidden img h-12 fade-in" />
          </div>

          <div className="bg-[rgba(255,255,255,0.6)] my-4 flex justify-between items-start flex-col border-white h-[5rem] w-full p-6 stackite-mob">
            <div className="flex justify-between items-center w-full">
              <p className="vertical-mob">Blockchain Technology</p>
              <img className="h-3 arrow" src="/assets/images/icons/arrow-down.png" />
            </div>

            <img src="/assets/images/utils/technologies.png" className="hidden img h-12 fade-in" />
          </div>

          <div className="bg-[rgba(255,255,255,0.6)] my-4 flex justify-between items-start flex-col border-white h-[5rem] w-full p-6 stackite-mob">
            <div className="flex justify-between items-center w-full">
              <p className="vertical-mob">Frameworks</p>
              <img className="h-3 arrow" src="/assets/images/icons/arrow-down.png" />
            </div>

            <img src="/assets/images/utils/frameworks.png" className="hidden img h-12 fade-in" />
          </div>

          <div className="bg-[rgba(255,255,255,0.6)] my-4 flex justify-between items-start flex-col border-white h-[5rem] w-full p-6 stackite-mob">
            <div className="flex justify-between items-center w-full">
              <p className="vertical-mob">Mobile</p>
              <img className="h-3 arrow" src="/assets/images/icons/arrow-down.png" />
            </div>

            <img src="/assets/images/utils/mobile.png" className="hidden img h-12 fade-in" />
          </div>

          <div className="bg-[rgba(255,255,255,0.6)] my-4 flex justify-between items-start flex-col border-white h-[5rem] w-full p-6 stackite-mob">
            <div className="flex justify-between items-center w-full">
              <p className="vertical-mob">Web</p>
              <img className="h-3 arrow" src="/assets/images/icons/arrow-down.png" />
            </div>

            <img src="/assets/images/utils/web.png" className="hidden img h-12 fade-in" />
          </div>
          <div className="bg-[rgba(255,255,255,0.6)] my-4 flex justify-between items-start flex-col border-white h-[5rem] w-full p-6 stackite-mob">
            <div className="flex justify-between items-center w-full">
              <p className="vertical-mob">UI/UX</p>
              <img className="h-3 arrow" src="/assets/images/icons/arrow-down.png" />
            </div>

            <img src="/assets/images/utils/uiuxx.png" className="hidden img fade-in" />
          </div>
        
        </div>

    {/* desktop technologies */}
        <div className="my-[10rem] sm:my-[5rem] flex sm:flex sm:flex-col sm:ml-0 main w-3/6 sm:w-full sm:hidden">

          <div className="main-container p-6">
          <div className="bg-[rgba(255,255,255,0.6)] flex justify-center items-center border-2 border-white h-[20rem] w-[5rem] stackitem">
            <p className="vertical">Programming Language</p>
            <img src="/assets/images/utils/programinglanguage.png" className="hidden h-12" />
          </div>
          </div>

          <div className="main-container p-6">
            <div className="bg-[rgba(255,255,255,0.6)] flex justify-center items-center border-2 border-white h-[20rem] w-[5rem] stackitem">
              <p className="vertical">Blockchain Technology</p>
            <img src="/assets/images/utils/technologies.png" className="hidden h-12" />
          </div>
          </div>
   
            <div className="main-container p-6">
            <div className="bg-[rgba(255,255,255,0.6)] flex justify-center items-center border-2 border-white h-[20rem] w-[5rem] stackitem">
            <p className="vertical">Framework</p>
            <img src="/assets/images/utils/frameworks.png" className="hidden h-12" />
          </div>
          </div>

          <div className="main-container p-6">
            <div className="bg-[rgba(255,255,255,0.6)] flex justify-center items-center border-2 border-white h-[20rem] w-[5rem] stackitem">
            <p className="vertical">Mobile</p>
            <img src="/assets/images/utils/mobile.png" className="hidden h-12" />
          </div>
          </div>

          <div className="main-container p-6">
            <div className="bg-[rgba(255,255,255,0.6)] flex justify-center items-center border-2 border-white h-[20rem] w-[5rem] stackitem">
            <p className="vertical">Web</p>
            <img src="/assets/images/utils/web.png" className="hidden h-12" />
          </div>
          </div>

          <div className="main-container p-6">
            <div className="bg-[rgba(255,255,255,0.6)] flex justify-center items-center border-2 border-white h-[20rem] w-[5rem] stackitem">
            <p className="vertical">UI/UX</p>
            <img src="/assets/images/utils/uiuxx.png" className="hidden h-12" />
          </div>
          </div>
          

         
{/* <span className="bg-[rgba(255,255,255,0.6)] p-8 border-white rotate-90 w-[20rem]  absolute left-[16rem] sm:rotate-0 sm:relative sm:left-0 sm:mx-4 sm:top-8">Frameworks</span>


<span className="bg-[rgba(255,255,255,0.6)] p-8 border-white rotate-90 w-[20rem]  absolute left-[24rem] sm:rotate-0 sm:relative sm:left-0 sm:mx-4 sm:top-16">Mobile
</span>


<span className="bg-[rgba(255,255,255,0.6)] p-8 border-white rotate-90 w-[20rem]  absolute left-[32rem] sm:rotate-0 sm:relative sm:left-0 sm:mx-4 sm:top-20">Web</span>

<span className="bg-[rgb(255,255,255)] p-8 border-white rotate-90 w-[20rem]  absolute left-[40rem] sm:rotate-0 sm:relative sm:left-0 sm:mx-4 sm:top-24">UI/UX</span> */}

        </div>
        {/* desktop technologies end */}

      </div>
    {/* our technology end */}



    {/* Testimonials */}

    <div className="my-[5rem] w-screen">
      <div className=" w-full pt-36 pb-20 pl-44 sm:px-4 bg-[length:100%_100%] sm:bg-cover bg-[url('/assets/images/bg/group127.png')]">
        <div className="bg-white bottom-0 left-10 w-[30rem] h-[30rem] sm:w-full pt-16 pt-4 sm:px-6 rounded-xl shadow-2xl px-10">
            <h1 className="text-2xl pb-4 mt-10  sm:pb-5 font-semibold">Are you an extremely skilled techy? Join our Pool</h1>
            <h3 className="font-light">Join us in our efforts to helping businesses bring their ideas to life.</h3>

            <Button className="ml-0 mt-4" onClick={() => setshowJoinUsModal(true)}>Join Us</Button>
        </div>
      </div>

      {/* why work with us end */}
      <div className="mt-6 bg-[rgba(0,0,0,0.5)] py-16 px-44 text-white grid grid-cols-2 sm:grid-cols-1 sm:px-4">
        <div>
          <h2 className="font-extralight mb-3">Why Work with Us?</h2>
          <h1 className="text-4xl font-semibold">We connect you with projects that expand your earnings</h1>
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
