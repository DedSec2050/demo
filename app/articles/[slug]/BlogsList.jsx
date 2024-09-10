import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";

const getPosts = async () => {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) [0...4]{
      _id,
        title,
        "currentSlug": slug.current,
    }`;
  return client.fetch(query);
};
const getArticles = async () => {
  const query = groq`*[_type == 'article'] | order(_createdAt desc) [0...4]{
      _id,
        title,
        "currentSlug": slug.current,
    }`;
  return client.fetch(query);
};
const BlogsList = async () => {
  const posts = await getPosts();
  const articleposts = await getArticles();
  console.log(posts);
  return (
    <section className="hidden flex-col md:flex">
      <strong className="text-accent">Other Domain Summaries</strong>
      {articleposts.map((post, id) => (
        <Link key={id} href={`/articles/${post.currentSlug}`}>
          {id + 1}. {post.title}
        </Link>
      ))}
      <br />
      <strong className="text-accent">Blogs List</strong>
      {posts.map((post, id) => (
        <Link key={id} href={`/blog/${post.currentSlug}`}>
          {id + 1}. {post.title}
        </Link>
      ))}
    </section>
  );
};

export default BlogsList;
