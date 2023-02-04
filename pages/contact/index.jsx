import React,{ useState } from 'react'
import { post } from 'axios';
import SEO from '../../components/SEO'
import Input from '../../components/Input'
import SelectInput from '../../components/Select'
import Button from '../../components/Button/Primary'
import TextArea from '../../components/TextArea'
import { API_URL } from '../../utils/constants'

export default function Contact() {

  const [contactInfo, setContactInfo] = useState({
    full_name:'',
    email:'',
    subject:'General',
    description:''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  function handleInputChange({ target }){
    const { value, name }  = target;

    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function handleSubmitForm(e){
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const data = contactInfo
    data.full_name = contactInfo.full_name

    const api = `${API_URL}/contacts`
    post(api, data)
    .then(function (response) {
    console.log(response);
     alert('Contact sent successfully');
  })
  .catch(function (error) {
    console.log(error.response.data);
    setError(error.response.data.error);
  }).finally(() => {
    setIsLoading(false);
  })
    
  }


  const contactSubjectOptions = [
                {value:'General', display: 'General'},
                {value:'Consultancy', display: 'Consultancy'},
                {value:'Hire', display: 'Hire'},
                {value:'Partnership', display: 'Partnership'},
                {value:'Development', display: 'Development'},


              ]
  return (
    <div>
      <SEO title="Contact" description="Get in touch with us today. Together we can build create the building blocks that powers the economy of the future." />

      <div className='h-60 flex px-40 sm:px-4 justify-between items-center border-2 border-b-white border-r-0 border-t-0 border-l-0 sm:h-42'>
        <h1 className="text-4xl font-semibold sm:text-2xl">Contact Us</h1>
      </div>

      {/* contact info */}

      <div className="w-screen">
        <div className="flex mx-24 justify-around items-center p-14 py-14 bg-[rgba(255,255,255,0.8)] rounded-3xl mt-[-4rem] sm:mx-4 sm:flex-col">
            {/* <div className="flex flex-col items-center justify-center">
              <img alt="phone" className="h-14 my-4" src="/assets/images/icons/phone.png" />
              <h3 className="my-2 font-semibold text-2xl">Call Us</h3>
              <p className="font-light text-sm">07064568</p>
            </div> */}

            <div className="flex flex-col items-center justify-center">
              <img alt="email" className="h-14 my-4" src="/assets/images/icons/email.png" />
              <h3 className="my-2 font-semibold text-2xl">Email Us</h3>
              <p className="font-light text-sm">contact@3weblabs.io</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img alt="map" className="h-14 my-4" src="/assets/images/icons/map.png" />
              <h3 className="my-2 font-semibold text-2xl">Visit Us</h3>
              <p className="font-light text-sm text-center w-[11rem]">Port Harcourt, Nigeria</p>
            </div>
        </div>
      </div>
      {/* contact info end */}


      {/* contact form */}

      <div className="my-14 h-[38rem] mx-32 flex items-center justify-center sm:flex-col sm:mx-4 sm:h-auto">
        <div className="bg-[length:100%_100%] bg-[url('/assets/images/utils/laptop.png')] h-full rounded-xl w-[40rem] text-white p-16 sm:w-full sm:p-6 sm:h-[25rem]">
          <h2 className="text-4xl my-4 font-semibold leading-[3rem]">Get in touch <br/>
with Us</h2>
          <p className="font-normal text-sm">Together we can build create the building blocks that <br/> powers the economy of the future.</p>
        </div>

        <div className="h-[97%] sm:h-auto rounded-xl w-[34rem] z-[3] ml-[-3rem] bg-[rgba(255,255,255,0.8)] sm:w-full sm:my-10 sm:ml-0">
          <form className="flex justify-center items-center flex-col h-full p-8">
              <Input withlabel={true} label="Full Name" className="bg-[rgba(255,255,255,0.8)] w-full mb-4 mt-2 border-2 border-[#C1D6E9] rounded-md py-2 pl-4 pr-3 placeholder-slate-400 text-black" placeholder='Samantha Wheeler' type="name" required name="full_name" value={contactInfo.full_name} onChange={handleInputChange} />

              <Input  withlabel label="Email Address" type="email" className="bg-[rgba(255,255,255,0.8)] w-full mb-4 mt-2 border-2 border-[#C1D6E9] rounded-md py-2 pl-4 pr-3 placeholder-slate-400 text-black" required name="email" value={contactInfo.email} onChange={handleInputChange}/>

              <SelectInput  withlabel={true} label="Subject" options={contactSubjectOptions} className="bg-[rgba(255,255,255,0.8)] w-full mb-4 mt-2 border-2 border-[#C1D6E9] rounded-md py-2 pl-4 pr-3 placeholder-slate-400 text-black" required name="subject" value={contactInfo.subject} onChange={handleInputChange} />

              <TextArea withlabel={true} label="What are you Contacting about? " className="bg-[rgba(255,255,255,0.8)] w-full mb-4 mt-2 border-2 border-[#C1D6E9] rounded-md h-[6rem] py-2 pl-4 pr-3 placeholder-slate-400 text-black" required placeholder='Description' name="description" value={contactInfo.description} onChange={handleInputChange}  />

              <Button type="button" onClick={handleSubmitForm} className="w-full my-4 font-light text-sm bg-blue-800" disabled={isLoading} loading={isLoading} >Send</Button>
          </form>
        </div>

      </div>

      {/* contact form end */}


    </div>
  )
}
