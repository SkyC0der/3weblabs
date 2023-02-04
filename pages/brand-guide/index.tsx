import React from 'react'
import SEO from '../../components/SEO'
import Button from '../../components/Button/Primary'


export default function BrandGuide() {
  return (
    <div className="mx-44 my-4 sm:mx-4">
      <SEO title="Brand Guide" description="We are excited to provide you with ABCD’s logo for use on marketing materials. To deliver a consistent message, we've created this simple guide." />

      <div className="grid grid-cols-2 grid-rows-1 gap-3 sm:grid-cols-1 sm:grid-rows-2">
        <div>
          <h1 className="my-10">BRAND GUIDE</h1>

          <h2 className="text-4xl font-semibold my-8">Branding & Logo</h2>

          <p className="font-light text-sm my-4 mb-16 pr-[14rem] sm:pr-[2rem]">We are excited to provide you with 3weblab&apos; s logo for use on marketing materials.To deliver a consistent message, we&apos; ve created this simple guide.</p>

          <Button className="ml-0">Download Assets</Button>
        </div>

        <div>
          <img className="h-16 my-4 mt-8" src="/assets/images/logo/Logo-2x.png" alt="Blue logo" />
          <img className="h-16 my-4 mt-8" src="/assets/images/logo/white.png" alt="White logo" />         
           <img className="h-16 my-4 mt-8" src="/assets/images/logo/black.png" alt="Blue logo" />
        </div>

      </div>

      <div>
        <h2 className="text-4xl font-semibold my-8 mt-28">Brand Colors</h2>
        <p className="font-semibold mb-6">Primary Colours</p>

        <div className="grid grid-cols-3 grid-rows-1 gap-3 sm:grid-cols-1 sm:grid-rows-3">
            <div className="flex">
            <div className="h-40 w-40 sm:h-20 sm:w-20 bg-blue-700 mr-4"></div>
            <div className="text-xl sm:text-sm py-4 sm:py-0">
              <p className="py-2 sm:py-1">HEX: #0F43F9</p>
              <p className="py-2 sm:py-1">RGB: 15 / 57 / 249</p>
              <p className="py-2 sm:py-1">HSL: 227 / 95 / 52</p>

              </div>
            </div>

          

          <div className="flex">
            <div className="h-40 w-40 sm:h-20 sm:w-20 bg-[#FFFFFF] mr-4"></div>
            <div className="text-xl sm:text-sm py-4 sm:py-0">
              <p className="py-2 sm:py-1">HEX: #FFFFFF</p>
              <p className="py-2 sm:py-1">RGB: 255 / 255 / 255</p>
              <p className="py-2 sm:py-1">HSL: 0 / 0 / 100</p>

            </div>
          </div>

          <div className="flex">
            <div className="h-40 w-40 sm:h-20 sm:w-20 bg-[#182F43] mr-4"></div>
            <div className="text-xl sm:text-sm py-4 sm:py-0">
              <p className="py-2 sm:py-1">HEX: #182F43</p>
              <p className="py-2 sm:py-1">RGB: 24 / 47 / 67</p>
              <p className="py-2 sm:py-1">HSL: 208 / 47 / 18</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
