// pages/blog.js

import Head from "next/head";
import Header from "@/components/Header";
import { getPosts } from "@/lib/getPosts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - NextJs Blog</title>
      </Head>
      <Header />
      <main>
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Read blog posts and articles
            </h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.id}>
                <h3 className="text-xl font-semibold">
                  {post.title || "Untitled"}
                </h3>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt || "<p>No excerpt available.</p>",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
