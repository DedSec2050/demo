import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";

const getPost = async (slug) => {
  const query = groq`*[_type== 'blog' && slug.current == $slug]
      {
      _id,
        title,
        smallDescription,
        content,
        _createdAt,
        "currentSlug": slug.current,
        titleImage
    }`;
  return client.fetch(query, { slug });
};

export default async function Post({ params: { slug } }) {
  const [post] = await getPost(slug);
  //   console.log(post);
  return (
    <div className="container mx-auto">
      <div className="min-h-screen">
        <div className="flex items-center rounded-md shadow-md">
          <div className="md:w-2xl mx-auto flex items-center justify-center xl:w-[1200px]">
            <div className="px-4 py-8 text-accent">
              <time dateTime={post._createdAt}>
                {format(post._createdAt, "LLLL d, yyyy")}
              </time>
              <h1 className="pb-4 text-4xl font-extrabold leading-10 text-white">
                {post.title}
              </h1>
              <Image
                src={urlForImage(post.titleImage)}
                height={500}
                width={500}
                alt=""
                className="h-100 w-100 mb-[30px] mt-[30px] object-contain"
              ></Image>
              <div className="prose prose-xl prose-invert">
                <PortableText value={post.content} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}