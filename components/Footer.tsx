
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Input from './Input'
import Button from './Button/Primary'
import { useRouter } from 'next/router'
import { API_URL } from '../utils/constants'

export default function Footer() {
  const { pathname } = useRouter();

  const [loading, setLoading] =  useState(false);
  const [email, setEmail ] = useState('');

  async function handleMailSubscription(e: PointerEvent){
    
    e.preventDefault();

    setLoading(true);
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)){
      const url = `${API_URL}/subscribe`

      try{
        await axios.post(url, {email});
          await alert('Success')
        await setLoading(false);
        setEmail('');

      } catch(err){
          alert('Failed')
        setLoading(false);

      }
    } else {
      alert('Invalid email address');
      setLoading(false);

    }
  }


  return (
    <div className={`container border border-t-gray border-l-0 border-r-0 mt-[1rem] `}>

      <div className={`container mx-auto sm:px-2 px-1 pt-8 xl:px-32 lg:px-10 3xl:px-52 xl:py-4 lg:py-4 md:py-4 3xl:py-8 bg-transparent text-dark ${pathname === '' || pathname === '/' ? 'hidden':''}`}>

        <div className="grid grid-cols-1 3xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 md:gris-rows-2 flex justify-between items-start ">

          <div className="flex items-start sm:items-center flex-col left sm:text-sm">
            <div className="mb-2 text-xl">
          
                <span className="font-medium sm:text-base">3WEBLABS</span>
          
            </div>
          
            <Link href="/for-companies" >
              <span className="font-light my-1">For Companies</span>
            </Link>

            <Link href="/for-developers" >
              <span className="font-light my-1">For Developers</span>
            </Link>
            <Link href="/contact" >
              <span className="font-light my-1">Contact Us</span>
            </Link>
          </div>

          <div className="flex items-start sm:items-center flex-col left sm:text-sm">
            <div className="mb-3 text-xl">
             
              <span className="font-medium sm:text-base">About</span>
              
            </div>
            <a href="https://discord.gg/6hwNBMBCd4" target="_blank" rel="noopener noreferrer" >
              <span className="font-light my-1 py-1">Join Our Community</span>
            </a>

            <Link href="/for-developers">
            <span className="font-light my-1 pt-1">Get Vetted</span>
            </Link>

            <Link href="/brand-guide">
              <span className="font-light my-1">Brand Guide</span>
            </Link>
          </div>

          <div className="flex flex-col items-start 3xl:w-80 sm:w-full sm:mt-10 bg-gray 3xl:px-4 py-4 sm:col-span-2">
            <div className="text-xl font-light sm:text-base">
              Subscribe to our newsletter to get all the stories straight in your inbox
            </div>

            <form className="my-4 flex w-full">
              <Input type="text" placeholder="Enter your @mail address" className="border border-gray rounded-lg px-3 py-2 w-full" value={email} required={false} withlabel={false} label=""  onChange={(e:any) => {
                setEmail(e.target.value);
              }}/>
              
              <Button className="bg-blue-700" loading={loading} disabled={loading} onClick={handleMailSubscription}>
                <img src="/assets/images/icons/arrows/right.png" alt="send" className="h-3 w-3" />
              </Button>
            </form>
            <script type="text/javascript" src="https://app.getresponse.com/view_webform_v2.js?u=M3O55&webforms_id=hbVYC" data-webform-id="hbVYC"></script>

            <div className="text-sm font-light mb-8 sm:text-xs">
              {/* Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id  */}
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-5 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 bg-transparent text-dark sm:px-4 sm:py-2">
        <div className="flex flex-col sm:flex-col  md:flex-col 3xl:flex-row justify-between items-start">
          <div className="flex items-center sm:my-2">
            <img src="/assets/images/logo/Logo-2x.png" alt="3rdweblabs" className="h-10" />
          </div>

          <div className="flex items-center">
            {/* Navigation links */}
            <span className="text-center sm:mb-2 sm:text-xs 3xl:px-4 lg:px-3 md:px-3 font-light xl:text-md">

              © 2023 3WEBLABS <span className="font-medium ">Powered by ABCD.</span> All Rights Reserved.

            </span>
          </div>

          <div className="flex items-center sm:my-2">
            <span className="mx-2">
              <a href="https://www.facebook.com/3rdweblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/facebook.png" alt="3rdweblabs" className="h-10 sm:h-6" />
              </a>
            </span>

            <span className="mx-2">
              <a href="https://www.facebook.com/3rdweblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/instagram.png" alt="3rdweblabs" className="h-10 sm:h-6" />
              </a>
            </span>

            <span className="mx-2">
              <a href="https://twitter.com/3weblabs?s=21&t=hn8W1McPNSSTo3Oijo58VQ" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/twitter.png" alt="3rdweblabs_facebook_icon" className="h-10 sm:h-6" />
              </a>
            </span>

            <span className="mx-2">
              <a href="https://www.linkedin.com/company/3-weblabs/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icons/linkedin.png" alt="3rdweblabs_linkedin_icon" className="h-10 sm:h-6" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
