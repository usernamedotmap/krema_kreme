import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { MdSportsKabaddi } from "react-icons/md";
import { SiTaxbuzz } from "react-icons/si";

const FeaturesSaBaba = () => {
  return (
    <section className='py-16 px-4 bg-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>

      <div className='flex flex-col items-center'>
        <div className='p-4 rounded-full mb-4'>
          <BiSolidShoppingBags className='size-10' />
        </div>
        <h4 className='tracking-tighter mb-2 text-xl'>
          FREE IF U PAY
        </h4>
        <p className='text-gray-600 text-md tracking-tighter'>
          All over to my world
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <div className='p-4 rounded-full mb-4'>
          <MdSportsKabaddi className='size-10' />
        </div>
        <h4 className='tracking-tighter mb-2 text-xl'>
        NO REFUND
        </h4>
        <p className='text-gray-600 text-md tracking-tighter'>
          Putol meow meow
        </p>
      </div>
      
      <div className='flex flex-col items-center'>
        <div className='p-4 rounded-full mb-4'>
          <SiTaxbuzz className='size-10' />
        </div>
        <h4 className='tracking-tighter mb-2 text-xl'>
          100% TAX GUARANTEED
        </h4>
        <p className='text-gray-600 text-md tracking-tighter'>
          Complain? Call LTFRB
        </p>
      </div>

      </div>
    </section>
  )
}

export default FeaturesSaBaba;