import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center p-24 md:p-8">
        <h1 className="font-700 mb-[30px] text-[40px] font-bold text-accent">
          CyberSecurity Certification Blogs
        </h1>
        <div className="grid max-w-xl grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 xl:max-w-[1280px] xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.smallDescription}
              image={urlForImage(post.titleImage)}
              slug={post.currentSlug}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
