import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Home - NextJs Blog</title>
        <meta
          key="description"
          name="description"
          content="Welcome to the NextJs Blog homepage."
        />
      </Head>
      
        <Header />
        <main>
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                Welcome to My Blog
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Sharing insights, tutorials, and tips on web development,
                Next.js, and WordPress.
              </p>
              <div className="mt-6">
                <Link href="/blog" className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Read the Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
  
    </>
  );
}
