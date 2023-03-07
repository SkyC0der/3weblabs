import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
// import PrimaryButton from '../components/Button/Primary'
import SEO from '../components/SEO'
import Slider from "react-slick";

import axios from 'axios'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button/Primary'
import { API_URL } from '../utils/constants'

export function SubScribeToNewLetterModal(props: any){

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');


  async function handleMailSubscription(e: PointerEvent) {

    e.preventDefault();

    setLoading(true);
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      const url = `${API_URL}/subscribe`

      try {
        await axios.post(url, { email });
        await alert('Success')
        await setLoading(false);
        setEmail('');

      } catch (err) {
        alert('Failed')
        setLoading(false);

      }
    } else {
      alert('Invalid email address');
      setLoading(false);

    }
  }

  return (<Modal onClose={() => { props.closed() }} show={props.show}>
      
    <div className="p-10">
      <div className="w-full">
        <img alt="exit" className="h-4 mb-5 float-right cursor-pointer" src="/assets/images/icons/exit.png" onClick={() => { props.closed() }} />
      </div>
        <div className="flex flex-col items-center justify-center mt-12">
              <div className="bg-slate-200 rounded-3xl">
                <img src="/assets/images/icons/envelope.png" className="h-20 w-20" alt="envelope" />
              </div>
        <h1 className="text-2xl font-semibold text-center my-4">Subscribe to our newsletter</h1>
        <p className="text-sm font-light text-center text-slate-500">Receive new articles and resources directly on your inbox. Fill your email below to join our email newsletter today.</p>
              <div className="rounded-3xl p-2 flex shadow-2xl my-4">
          <Input placeholder='Enter your email' type="email" className="border-none sm:text-xs sm:text-bold enabled:hover:border-gray-400 required:border-red-500
          focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500
          " required={true} onChange={(e: any) => {
              setEmail(e.target.value);
            }} value={email} />
          <Button loading={loading} disabled={loading} onClick={handleMailSubscription} className="rounded-l-3xl rounded-r-3xl sm:text-xs sm:text-bold mr-0 ml-0 sm:rounded-l-3xl sm:rounded-r-3xl ">Subscribe</Button>
              </div>
        </div>
    </div>
    </Modal>)
}

const Home: NextPage = () => {

  const {  push } = useRouter();
 
  const [showingPartners, setShowingPartners] = useState(false);
  const [showNewsLetter, setShowNewsletter] = useState(false);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows:false
  };

  return (
    <div className="mt-[1rem] home">

      <SubScribeToNewLetterModal closed={() => setShowNewsletter(false)} show={showNewsLetter} />

      <SEO title="Home" description="Hire Top African Designers and Developers." />
    
      <div className="mx-44 border border-white sm:mx-2 cursor-pointer">
        <div className="grid grid-cols-2 grid-rows-1 h-[20rem] sm:h-[13rem]">
          <div className="flex justify-center items-center p-[7rem] sm:p-[1rem] font-semibold text-4xl border border-white sm:text-sm 3xl:leading-[3rem] bg-cover bg-[url('/assets/images/bg/Rectangle39772.svg')] " onClick={() => push('/for-companies')}>Hire Top African Designers and Developers.</div>
          <div className="flex justify-center items-center p-[7rem] sm:p-[1rem] font-semibold text-4xl sm:text-sm  border border-white 3xl:leading-[3rem] bg-cover bg-[url('/assets/images/bg/Rectangle39772.svg')]" onClick={(e) => setShowNewsletter(true)}>Subscribe to Our Newsletter</div>

          </div>
        <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-0 cursor-pointer bg-[rgba(255,255,255,0.2)] backdrop-opacity-10 ">
          <div className="border border-white h-[20rem] sm:h-[13rem] flex justify-center items-center  font-semibold text-4xl sm:text-sm " onClick={() => push('/blog')}>Blog</div>

          <div className="col-span-2 border border-white flex justify-center items-center  font-semibold text-4xl sm:text-sm  h-[20rem] sm:h-[13rem] flex-col pl-8" onClick={(e) => setShowingPartners(!showingPartners)}>
            {showingPartners ? <div className="w-full partners  carousel">
              <Slider {...settings}>
                <div className="">
                  <img alt="empowa" src="/assets/images/partners/empowa.png" className="sm:h-6 h-16"/>
                </div>
                <div className="">
                  <img alt="dapp360" src="/assets/images/partners/dapp360.png" className="sm:h-6 h-16" />
                </div>

                <div className="">
                  <img alt="Proof of africa" src="/assets/images/partners/poa.png" className="sm:h-6 h-14" />
                </div>

                <div className="">
                  <img alt="ABCD" src="/assets/images/partners/abcd.png" className="sm:h-6 h-14" />
                </div>
                
              </Slider>
            </div> : <div className="transition-all ease-in partners mt-10" >Partners</div> }
          </div>

          <div className="border border-white flex justify-center items-center  font-semibold text-4xl sm:text-sm  h-[20rem] sm:h-[13rem]" onClick={() => push('/openbuild')}>Open Build</div>
          <div className="row-span-2 border border-white flex justify-center items-center font-semibold text-4xl sm:text-sm " onClick={() => push('/for-developers')}>Reasearch & Innovation</div>
        </div>
        </div>
    {/* header */}

      {/* <div className='relative grid 3xl:grid-cols-2 pl-40 h-screen sm:grid-cols-1 sm:text-center sm:p-4 md:p-4 md:text-center lg:text-center lg:grid-cols-1 lg:pl-4'>

      <div className='mt-40 sm:mt-60'>
          <h1 className='text-6xl font-medium leading-[5rem] sm:leading-[4rem]'>Access world class blockchain 
          <br/>
          developers.</h1>
          <h3 className='text-xl font-light mt-4'>Take your ideas from sketch to finish.</h3>
      </div>

        <div className="absolute h-screen w-screen z-[-1]">
          <div className="bg-cover bg-[url('/assets/images/bg/circles.png')] h-4/5 w-2/4 absolute right-0 mt-10 mr-20 sm:mr-0 sm:w-4/5 sm:h-2/4 sm:bg-contain bg-no-repeat">
          </div>

          <div className="absolute right-0 mt-10 mr-20 h-4/5 w-2/4 bg-cover bg-[url('/assets/images/bg/Group75.png')]  sm:bg-contain bg-no-repeat">

          </div>

      </div>

    </div> */}
    {/* end headre */}

    {/* partners */}

      {/* <div className="pb-16 bg-transparent pt-20 sm:pl-0 flex-col items-center text-center">

      <h3 className="text-4xl pb-10 sm:pb-5 font-medium">Our Partners</h3>

      <div className="text-sm text-center sm:text-[0.7rem]">
          We are very fortunate to work with these amazing partners
      </div>

      <div className="flex flex-nowrap items-center justify-evenly py-6 px-20 sm:flex-wrap sm:px-0">
        <img src="/assets/images/partners/Client/Amazon.png" className="h-6 sm:px-2 sm:pb-2" />
          <img src="/assets/images/partners/Client/Google.png" className="h-6 sm:px-2 sm:pb-2" />
          <img src="/assets/images/partners/Client/microsoft.png" className="h-6 sm:px-2 sm:pb-2" />
          <img src="/assets/images/partners/Client/Uber.png" className="h-6 sm:px-2 sm:pb-2" />
          <img src="/assets/images/partners/Client/Verizon.png" className="h-6 sm:px-2 sm:pb-2" />

      </div>
    </div> */}

    {/* partners end */}


    

    </div>
  )
}

export default Home
