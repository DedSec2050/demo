import Accordion from "./Accordion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Accordion2 from "./Accordion2";

const Page9 = () => {
  return (
    <section className="relative mt-8">
      <div className="mb-8 mt-4 text-center text-clamptitle xxl:text-[2.5vw]">
        <strong>
          <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
            FAQ's
          </span>
        </strong>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <Tabs className="w-[80vw]" defaultValue="toolkit">
          <TabsList className="grid h-[8vh] w-full grid-cols-2 border-[1px] border-accent bg-primary">
            <TabsTrigger value="toolkit" className="h-[6vh]">
              <span className="text-clamptextsmm">
                Related to CISSP Success Toolkit
              </span>
            </TabsTrigger>
            <TabsTrigger value="CISSP" className="h-[6vh]">
              <span className="text-clamptextsmm">Related to CISSP</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="toolkit" className="mt-10">
            <div className="mx-auto mt-10 flex max-w-xs flex-col gap-4 rounded-lg bg-[#26355D] p-5 text-accent sm:mt-4 sm:max-w-2xl xxl:max-w-[60vw]">
              <div className="flex flex-col gap-4 divide-y">
                <Accordion />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="CISSP" className="mt-10">
            <div className="mx-auto mt-10 flex max-w-xs flex-col gap-4 rounded-lg bg-[#26355D] p-5 text-accent sm:mt-4 sm:max-w-2xl xxl:max-w-[60vw]">
              <div className="flex flex-col gap-4 divide-y">
                <Accordion2 />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="CISSP"></TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Page9;
