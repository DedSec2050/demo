// "use client";
import React from "react";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { format } from "date-fns";
import { groq } from "next-sanity";
import Image from "next/image";

import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
import Footer from "@/components/Footer";
import Head from "next/head";

const getPosts = async () => {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc){
      _id,
        title,
        smallDescription,
        _createdAt,
        "currentSlug": slug.current,
        titleImage
    }`;
  return client.fetch(query);
};
const BlogData = async () => {
  const posts = await getPosts();
  console.log(posts);
  return <div>Called Blog Data</div>;
};

export default BlogData;
