import Accordion from "./Accordion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Accordion2 from "./Accordion2";
import { Button } from "./ui/button";
import Link from "next/link";

const Page9 = () => {
  return (
    <section>
      <div className="relative mt-8 w-full px-[30px] sm:px-[50px] xl:px-[10vw]">
        <div className="flex h-[250px] w-full flex-col items-center justify-center rounded-[40px] border-[2px] border-white bg-gradient-to-l from-[#D7D7D766] via-[#D7D7D766] to-[#E9E0A5B5] text-center">
          <div>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-clamptextsm font-bold leading-6 text-transparent sm:leading-8 md:text-clampheader">
              " FAQ's: <br className="flex sm:py-4 xl:hidden"></br> Uncover
              Answers Instantly! "
            </span>
          </div>
          <div className="text-clamptextsm">
            Your Queries, Our Quick Solutions.
          </div>
          <div className="pt-4">
            <Link href="https://calendly.com/cisspsuccess">
              <Button
                variant="outline"
                className="rounded-[30px] transition-all duration-500 xl:text-[17px]"
              >
                Book a FREE Consultation
              </Button>
            </Link>
          </div>
        </div>
        <div className="mb-8 mt-4 text-center text-clampheader xxl:text-[2.5vw]">
          <strong>
            <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </strong>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Tabs className="w-full" defaultValue="toolkit">
            <TabsList className="grid h-[8vh] w-full grid-cols-2 border-[1px] border-accent bg-primary">
              <TabsTrigger value="toolkit" className="h-[6vh]">
                <span className="text-clamptextsmm leading-6 sm:leading-8">
                  Related to CISSP<br className="flex sm:py-4 xl:hidden"></br>{" "}
                  Success Toolkit
                </span>
              </TabsTrigger>
              <TabsTrigger value="CISSP" className="h-[6vh]">
                <span className="text-clamptextsmm">Related to CISSP</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="toolkit" className="mt-10">
              <div className="mx-auto mt-10 flex flex-col gap-4 rounded-lg bg-[#26355D] p-5 text-white sm:mt-4 sm:max-w-[80vw] xxl:max-w-[80vw]">
                <div className="flex w-full flex-col gap-4 divide-y">
                  <Accordion />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="CISSP" className="mt-10">
              <div className="mx-auto mt-10 flex flex-col gap-4 rounded-lg bg-[#26355D] p-5 text-white sm:mt-4 sm:max-w-[80vw] xxl:max-w-[80vw]">
                <div className="flex w-full flex-col gap-4 divide-y">
                  <Accordion2 />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="CISSP"></TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Page9;
