"use client"
import Image from "next/image";

const Photo = () => {
  return (
   <div className="relative min-h-[800px] min-w-[250px] xl:min-w-[403px] ">

        <Image
            src="/assets/trainer.png"
            priority quality={50}
            fill
            alt=""
            className="object-contain xl:object-cover "
            />
    </div>
      
  );
  
}

export default Photo;
