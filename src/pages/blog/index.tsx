import { NextPage } from 'next';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BlogIndex:NextPage = () => {
    return (
        <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
        <h1>
            Blog Index
        </h1>
        </main>
    );
}

export default BlogIndex;