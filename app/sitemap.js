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

const getArticles = async () => {
  const query = groq`*[_type == 'article'] | order(_createdAt desc){
      _id,    
      "currentSlug": slug.current, 
  }`;
  return client.fetch(query);
};

export default async function sitemap() {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const baseUrl = "https://www.cybernous.com";
  console.log(baseUrl);
  const posts = await getPosts();
  const articles = await getArticles();
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
  const articleEntries = articles.map((article) => {
    return {
      url: `${baseUrl}/articles/${article.currentSlug}`,
      // lastModified: new Date(article._createdAt), // Uncomment if needed
    };
  });
  return [
    {
      url: baseUrl,
    },
    ...postEntries,
    ...articleEntries,
    {url: `${baseUrl}/contact-us`},
    {url: `${baseUrl}/courses`},
    {url: `${baseUrl}/failure`},
    {url: `${baseUrl}/hall-of-fame` },
    {url: `${baseUrl}/privacypolicy`},
    {url: `${baseUrl}/terms-conditions`},
    {url: `${baseUrl}/refundpolicy`},
    {url: `${baseUrl}/resources`},
    {url: `${baseUrl}/success`},  
  ];
}
