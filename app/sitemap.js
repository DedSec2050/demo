import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

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
export default async function sitemap() {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const baseUrl = "https://cybernous.com";
  console.log(baseUrl);
  const posts = await getPosts();
  //   console.log(posts);
  const postEntries = posts.map((post) => {
    console.log(post);
    return {
      url: `${baseUrl}/blog/${post.currentSlug}`,
      //   lastModified: new Date(post._createdAt),
      //    changeFrequency
      //    priority:
    };
  });
  return [
    {
      url: baseUrl,
    },
    ...postEntries,
  ];
}
