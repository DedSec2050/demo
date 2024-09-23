import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const MoU = () => {
  return (
    <section className="my-10 w-full">
      <div className="bg-mou flex w-full flex-col items-center justify-between bg-cover px-[4vw] py-4 md:h-[300px] md:flex-row xl:h-[350px]">
        <div>
          <div className="text-[1.8rem] font-bold leading-normal xl:text-[2.8rem] [&>h3]:text-accent">
            <h3>Cybernous Recently Signed an MoU with</h3>
            <h3>Reva University, Bangalore</h3>
          </div>
          <div className="my-4">
            <p className="text-[1.1rem] font-semibold text-accent-hover">
              Just one call away:{"  "}
              <Link href="#" className="text-white underline">
                +91 85953 38705
              </Link>
            </p>
          </div>
        </div>
        <Button className="max-w-[250px]">Read About it</Button>
      </div>
    </section>
  );
};

export default MoU;
