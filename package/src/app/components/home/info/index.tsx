import React from 'react';

export default function CompanyInfo() {

    return (
        <div className='bg-white dark:bg-darkmode'>
            <div className='bg-primary w-full'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex lg:flex-row flex-col justify-center items-center md:border-r border-border py-10 px-4 md:px-4' data-aos="fade-right">
                        <p className='text-[60px] leading-[1.2] mr-4 text-white'>15+</p>
                        <p className='text-2xl text-white'>Years Experience</p>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-center items-center md:border-r border-border py-10 px-4 md:px-4' data-aos="fade-up">
                        <p className='text-[60px] leading-[1.2] mr-4 text-white'>500+</p>
                        <p className='text-2xl text-white'>Homes Sold</p>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-center items-center py-10 px-4 md:px-4' data-aos="fade-left">
                        <p className='text-[60px] leading-[1.2] mr-4 text-white'>98%</p>
                        <p className='text-2xl text-white'>Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}