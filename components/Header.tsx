import React,{useEffect} from 'react'
import Link from 'next/link'
import Button from './Button/Primary'
import { useRouter } from 'next/router'

export default function Header() {
  const [navbar, setNavbar] = React.useState(false);
  const { pathname, push } = useRouter();

  useEffect(() => {
    setNavbar(false);
  }, [pathname])
  

  return (
    <div className="container mx-auto px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 top-0  sm:px-5 h-18 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] fixed z-[4] bg-[rgb(255,255,255)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
          <img src="/assets/images/logo/Logo-2x.png" alt="3rdweblabs" className="h-12 w-auto" />
          </Link>
          </div>

        <div className={`flex items-center sm:hidden md:hidden ${pathname === '' || pathname === '/' ? 'hidden':''}`}>
            {/* Navigation links */}
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/for-companies">
                For Companies
              </Link>
            </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/openbuild">
                OpenBuild
              </Link>
            </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
              <Link href="/openbuild">
                About
              </Link>
            </span>
          <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
            <Link href="/blog">
              Blog
            </Link>
          </span>
            <span className="xl:px-2 3xl:px-4 lg:px-3 md:px-3 font-light">
            <Link href="/our-onboarding">
                Explore
              </Link>
            </span>
          </div>
        <div className="flex items-center sm:hidden md:hidden">
          <Button onClick={() => push('/contact')} className='font-lighttext-white bg-blue-700'>Hire Us</Button>
          </div>
       

       
        <div className={` ${pathname === '' || pathname === '/' ? 'hidden' : 'sm:block md:block 3xl:hidden flex items-center z-[5]'} `}>
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${navbar ? 'fixed z-[3] w-full left-0 h-screen bg-[#dbc6e2] flex justify-center items-center top-0' : 'hidden'} mobile-menu ease-in transition-[display]`}>
          <ul className="text-center flex justify-center items-center flex-col">
            <li className="active block px-2 py-4 hover:bg-green-500">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className=" block px-2 py-4 hover:bg-green-500 transition duration-300">
              <Link href="/for-companies">
                For Companies
              </Link>
            </li>

            <li className=" block px-2 py-4 hover:bg-green-500 transition duration-300">
              <Link href="/for-developers">
                For Developers
              </Link>
            </li>

            <li className=" block px-2 py-4 hover:bg-green-500 transition duration-300">
                <Link href="/our-onboarding">
                  Explore
                </Link>
            </li>

            <li className=" block px-2 py-4 hover:bg-green-500 transition duration-300">
              <Link href="/blog">
                Blog
              </Link>
            </li>

            <li>
              <Button onClick={() => push('/contact')} className='font-light text-white bg-blue-700'>Hire Us</Button>
              
              </li>
              
          </ul>
        </div>
    </div>
    </div>
  )
}
