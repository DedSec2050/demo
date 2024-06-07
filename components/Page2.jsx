import React from 'react';
import { Button } from './ui/button';
import Photo from './Photo';





const text =[
    {
        title: "New to CISSP? Find out if CISSP is good for you"
    },
    {
        title: "Attend our FREE Masterclass"
    },
    {
        title: "Test your CISSP Preparation through our Mock Test "
    },
    {
        title: "Book a FREE Consultation Call"
    },



    
]

const Page2 = () => {
  return (
    <section>
        <div className=" mt-[60px] xl:inline-flex w-[100%] justify-between ">
            
            {/* Text  */}
            <div className="px-[13px] xl:px-[40px] text-center xl:text-left order-2 xl:order-none flex flex-col gap-[30px]">


                {/* Text wrap  */}
                <div className="text-wrap1 flex flex-col items-center xl:items-start ">
                    <span className='font-bold text-[20px] md:text-[22px] xl:text-[24px]'>Free CISSP resources</span>
                    {
                        text.map((title, index) =>{
                            return <h2 key={index} className='font-bold text-[16px] md:text-[19px] xl:text-[22px] mt-[20px]'>
                                {title.title}
                            </h2>
                        })
                    }
                    <Button className='rounded-full bg-gradient-to-r from-gray-400 to-accent hover:bg-gradient-to-r hover:from-accent hover:to-gray-400 mt-[29px] w-[200px] xl:w-[362px]'>Talk to your Experts</Button>
                </div>
                <div className="text-wrap2 flex flex-col items-center xl:items-start">
                    <span className='font-bold text-[20px] md:text-[22px] xl:text-[24px] '>Free CISSP resources</span>
                    {
                        text.map((title, index) =>{
                            return <h2 key={index} className='font-bold text-[16px] md:text-[19px] xl:text-[22px] mt-[20px]'>
                                {title.title}
                            </h2>
                        })
                    }
                    <Button
                     variant="outline"
                     className='rounded-full mt-[29px]  w-[180px] xl:w-[362px]'>Know more</Button>
                </div>
            </div>
                <div className="trainer ">
                    <Photo />
                </div>
        </div>
    </section>
  );
}

export default Page2;
