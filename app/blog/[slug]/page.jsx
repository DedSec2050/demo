import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Head from "next/head";

export async function generateMetadata({ params: { slug } }) {
  // console.log(slug);
  const [post] = await getPost(slug);
  // console.log(post.smallDescription);

  try {
    if (
      post.seo |
      post.seo.twitter |
      post.seo.openGraph |
      post.seo.seoKeywords
    ) {
      // var metakwords = "";
      // for (let i = 0; i < post.seo.seoKeywords.length; i++) {
      //   metakwords += post.seo.seoKeywords[i] + ", ";
      // }
      return {
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        keywords: post.seo.seoKeywords,
        openGraph: {
          title: post.seo.openGraph.title,
          description: post.seo.openGraph.description,
          url: "https://www.cybernous.com/blog/" + post.currentSlug,
          siteName: post.seo.openGraph.siteName,
          images: [
            {
              url: urlForImage(post.titleImage),
              width: 800,
              height: 600,
              alt: post.title,
            },
          ],
        },
        twitter: {
          card: post.seo.twitter.cardType,
          title: post.title,
          description: post.seo.metaDescription,
          siteId: post.seo.twitter.site,
          creator: post.seo.twitter.creator,
          images: ["https://www.cybernous.com/assets/cyberlgb.webp"],
        },
      };
    } else {
      return {
        title: post.seo.metaTitle,
        description: post.smallDescription,
        openGraph: {
          title: post.title,
          description: post.smallDescription,
          images: [
            {
              url: urlForImage(post.titleImage),
              width: 800,
              height: 600,
              alt: post.title,
            },
          ],
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      title: post.title,
      description: post.smallDescription,
      openGraph: {
        title: post.title,
        description: post.smallDescription,
        images: [
          {
            url: urlForImage(post.titleImage),
            width: 800,
            height: 600,
            alt: post.title,
          },
        ],
      },
    };
  }
}

const getPost = async (slug) => {
  // console.log(slug);
  const query = groq`*[_type== 'blog' && slug.current == $slug]
      {
      _id,
        seo,
        title,
        smallDescription,
        content,
        _createdAt,
        "currentSlug": slug.current,
        titleImage,
        author->
    }`;
  return client.fetch(query, { slug });
};

export default async function Post({ params: { slug } }) {
  const [post] = await getPost(slug);
  if (post.seo) {
    // console.log(post.seo);
    // console.log("Meta title : " + post.seo.metaTitle);
    // console.log("Meta desc : " + post.seo.metaDescription);
    // var metakwords = "";
    // for (let i = 0; i < post.seo.seoKeywords.length; i++) {
    //   metakwords += post.seo.seoKeywords[i] + ", ";
    // }
    // console.log("Meta Keywords : " + post.seo.seoKeywords);
    // OG section
    // console.log("OG title : " + post.seo.openGraph.title);
    // console.log("OG desc : " + post.seo.openGraph.description);
    // console.log("OG siteName : " + post.seo.openGraph.siteName);
    // Twitter section
    // console.log("Twitter handle : " + post.seo.twitter.handle);
    // console.log("Twitter site : " + post.seo.twitter.site);
    // console.log("Twitter creator : " + post.seo.twitter.creator);
    // console.log("Twitter cardType : " + post.seo.twitter.cardType);
    // console.log("length : " + post.seo);
  }
  // console.log(post.author);

  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-8 flex justify-center">
          {/* {console.log(slug)} */}
          <Image
            src={urlForImage(value.asset)}
            alt={slug || "blog image"}
            width={800}
            height={500}
            className="object-contain"
          />
          {value.caption && (
            <p className="text-center italic text-gray-500">{value.caption}</p>
          )}
        </div>
      ),
    },
  };
  // console.log(post);
  // console.log(post.currentSlug);
  // console.log(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  // console.log(post.author);
  // console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.currentSlug}`);
  // Generate JSON schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.currentSlug}`,
    },
    headline: post.title,
    description: post.smallDescription,
    image: urlForImage(post.titleImage),
    dateCreated: post._createdAt,
    datePublished: post._createdAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: "https://www.linkedin.com/in/mksharma007/",
    },
    publisher: {
      "@type": "Person",
      name: post.author.name,
      logo: {
        "@type": "ImageObject",
        url: urlForImage(post.author.image),
      },
    },
    isFamilyFriendly: "true",
  };
  // console.log(post);
  return (
    <>
      <Head>
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="">
        <Header />
        <Floater />
        <div className="min-h-screen">
          <div className="flex items-center justify-center rounded-md px-[30px] py-8 text-center shadow-md sm:px-[50px] xl:px-[10vw]">
            <div className="md:w-2xl mx-auto flex items-center justify-center text-justify xl:w-full">
              <div className="flex w-full flex-col items-center justify-center py-8 text-accent">
                <div className="flex w-full flex-col rounded-[30px] border-2 border-accent bg-gradient-to-t from-[#739DED66] to-[#A8AEE000] p-6">
                  <time
                    dateTime={post._createdAt}
                    className="font-semibold xl:text-[1.3rem]"
                  >
                    {/* {console.log(post)} */}
                    {format(post._createdAt, "LLLL d, yyyy")}
                  </time>
                  <h1 className="pb-4 text-justify text-4xl font-extrabold leading-10 text-white">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <Image
                      src={urlForImage(post.author.image)}
                      height={55}
                      width={55}
                      alt={post.author.name}
                      className="rounded-full object-contain"
                    ></Image>
                    <div className="flex flex-col justify-center leading-normal">
                      <span className="font-semibold text-white xl:text-[1.2rem]">
                        {post.author.name}
                      </span>

                      <span className="font-semibold text-white xl:text-[1.2rem]">
                        {post.author.bio}
                      </span>
                    </div>
                  </div>
                </div>
                <Image
                  src={urlForImage(post.titleImage)}
                  height={500}
                  width={500}
                  alt={post.title + " CISSP-training-in-bangalore"}
                  className="h-100 w-100 mb-[30px] mt-[30px] object-contain smm:max-w-[310px] md:max-w-full"
                ></Image>
                <div className="prose prose-lg prose-invert flex w-full max-w-full flex-col text-left leading-tight md:prose-xl md:leading-snug">
                  <PortableText
                    components={components}
                    value={post.content}
                    className="flex w-full flex-col items-center justify-center text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
