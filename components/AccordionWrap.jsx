import Accordion from "./Accordion";

const Page9 = () => {
  return (
    <section className="relative mt-8">
      <div className="mt-4 text-center text-clamptextmd">
        <strong>
          <span className="bg-gradient-to-r from-accent via-grn to-accent bg-clip-text text-transparent">
            FAQ's
          </span>
        </strong>
      </div>
      <div className="mx-auto mt-10 flex max-w-xs flex-col gap-4 rounded-lg bg-[#26355D] p-5 text-accent sm:mt-4 sm:max-w-2xl">
        <div className="flex flex-col gap-4 divide-y">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Page9;
