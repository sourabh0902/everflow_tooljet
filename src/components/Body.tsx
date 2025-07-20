import React from 'react'
import GridSection from './GridSection'
import Input from './Input'

const Body = () => {
    return (
        <section className='container mx-auto relative h-[680px]'>
            <GridSection />
            <span className='relative block max-w-[600px] w-full mx-auto pt-24'>
                <h1 className='relative ibm-plex-sans-bold text-6xl leading-[90%] tracking-[-1%] text-center text-[#CFD3D8] font-medium '>Lorem ipsum dolor sit in tempor</h1>
                <img src="/curve_line.svg" alt="" className='absolute right-0 top-[75%]' />
            </span>
            <h3 className='ibm-plex-sans text-[#CFD3D8] font-normal text-[18px] leading-[100%] text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod</h3>

            {/* Prompt Input  */}
            <Input />

            {/* Checklist container  */}
            <ul className='relative z-[2] w-full max-w-[660px] mx-auto mt-[68px] mb-[107px] flex justify-between items-center gap-7'>
                <li className='flex gap-[22px] justify-center items-center'>
                    <img src="/check_shield.svg" alt="" />
                    <div>
                        <p className='ibm-plex-sans text-[#FAFCFF] font-medium text-[16px] leading-5'>Loreum ipsum dolor</p>
                        <p className='ibm-plex-sans text-[#858C94] font-normal text-[14px] leading-5'>sit met consectetur</p>
                    </div>
                </li>
                <li className='flex gap-[22px] justify-center items-center'>
                    <img src="/check_shield.svg" alt="" />
                    <div>
                        <p className='ibm-plex-sans text-[#FAFCFF] font-medium text-[16px] leading-5'>Loreum ipsum dolor</p>
                        <p className='ibm-plex-sans text-[#858C94] font-normal text-[14px] leading-5'>sit met consectetur</p>
                    </div>
                </li>
                <li className='flex gap-[22px] justify-center items-center'>
                    <img src="/check_shield.svg" alt="" />
                    <div>
                        <p className='ibm-plex-sans text-[#FAFCFF] font-medium text-[16px] leading-5'>Loreum ipsum dolor</p>
                        <p className='ibm-plex-sans text-[#858C94] font-normal text-[14px] leading-5'>sit met consectetur</p>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Body