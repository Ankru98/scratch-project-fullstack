import React from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";

// sections
import Hero from "./sections/home/Hero";
import FeaturedPosts from "./sections/home/FeaturedPosts";

// blog posts
import { getSortedPostsData } from "../../utils/posts";


// --------------------------------------------------------------------------------
// Home page of the website. This is the first thing that the user sees when they visit the website.
const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }: { allPostsData: Array<object> }) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Hero />  


      {/* Show allPostsData from function */}
      <section className="flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl font-bold text-center">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold">{title}</h3>
              <small className="text-sm text-gray-500">{date}</small>
            </div>
          ))}
        </div>
      </section>


    </main>

    
  );
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
