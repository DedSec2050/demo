
import React from 'react';
import Slider from './Slider';

const Hero = () => {



  return (
    <div className='container justify-center flex flex-col'>
       {/* Text  */}
       <div className='text-center'>
            <div className='inline-block'>
                <h1 className='text-[24px] md:text-[30px] xl:text-[44px] mb-1 font-bold  '>
                    <span className='bg-gradient-to-r from-accent to-white bg-clip-text text-transparent'>CISSP</span>
                    <span className='bg-gradient-to-l from-white via-accent to-white bg-clip-text text-transparent'> Success</span>
                    <span className='bg-gradient-to-l from-accent to-white bg-clip-text text-transparent'> Toolkit</span> </h1>
            </div>
            
            <h1 className='text-[22px] md:text-[28px] xl:text-[40px] mb-2 font-extralight'>10X enabler for your <span className='text-accent font-semibold'>CISSP</span> Success! </h1>
            <hr className="w-[15rem] xl:w-[40rem] h-1 mx-auto bg-accent border-0 rounded mb-5"></hr>

            
            <p className='text-grey text-xs mt-2'>Your information will remain 100% private!</p>
       </div>
       
       <Slider />

    </div>
  );
}

export default Hero;
