import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { component } from "sanity/structure";

export async function generateMetadata({ params: { slug } }) {
  console.log(slug);
  const [post] = await getPost(slug);
  console.log(post.smallDescription);
  try {
    return {
      title: post.title,
      description: post.smallDescription,
      robots: {
        index: true,
        follow: true,
        nocache: true,
      },
      // twitter: {
      //   card: "",
      //   title: post.title,
      //   description: post.smallDescription,

      // },
      openGraph: {
        title: post.title,
        description: post.smallDescription,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exits",
    };
  }
}

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
  console.log(post.content);
  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-8 flex justify-center">
          <Image
            src={urlForImage(value.asset).url()}
            alt={value.alt || " "}
            width={800}
            height={500}
            className="object-contain"
            fill
          />
          {value.caption && (
            <p className="text-center italic text-gray-500">{value.caption}</p>
          )}
        </div>
      ),
    },
  };
  // console.log(post.content);
  // post.content.map((data, index) => {
  //   try {
  //     console.log(data._type);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });
  // console.log(post.content);
  return (
    <div className="container mx-auto">
      <div className="min-h-screen">
        <div className="flex items-center justify-center rounded-md px-[30px] py-8 text-center shadow-md sm:px-[50px] xl:px-[10vw]">
          <div className="md:w-2xl mx-auto flex items-center justify-center text-justify xl:w-full">
            <div className="flex w-full flex-col items-center justify-center py-8 text-accent">
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
              <div className="prose prose-2xl prose-invert flex w-full flex-col items-center justify-center">
                <PortableText
                  components={components}
                  value={post.content}
                  className="flex w-full flex-col items-center justify-center text-justify text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
