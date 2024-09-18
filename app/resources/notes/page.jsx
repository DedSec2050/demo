import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import React from "react";

const getNotes = async () => {
  const query = groq`*[_type == 'notes'] | order(_createdAt desc){
_id,
      title,
      smallDescription,
      _createdAt,
      "currentSlug": slug.current,
      titleImage
    
}`;
  return client.fetch(query);
};
const page = async () => {
  const notes = await getNotes();
  console.log(notes);
  return (
    <section className="bg-gradient-to-b from-primary via-[#3443839c] to-[#ffffff8f]">
      <div>
        {/* <BlogData /> */}
        {/* <Banner /> */}
        {/* <Floater /> */}
        <Header />
        <section className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-20">
          <h1 className="font-700 mb-[30px] text-[40px] font-bold text-accent">
            CyberSecurity Notes
          </h1>
          <div className="grid max-w-xl grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 xl:max-w-[1280px] xl:grid-cols-3 xxl:grid-cols-4">
            {notes.map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                description={post.smallDescription}
                image={urlForImage(post.titleImage)}
                slug={post.currentSlug}
                type="notes"
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
      <Footer />
    </section>
  );
};

export default page;
