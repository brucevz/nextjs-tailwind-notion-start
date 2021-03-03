import Link from "next/link";
import React from 'react';
import Head from "next/head";

import Navigation from "../components/navigation";

const NOTION_BLOG_ID = 'f6f3df3e54f2432c9783795708d5811f'

export const getAllPosts = async () => {
    return await fetch(
        `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
    ).then((res) => res.json());
}

export async function getStaticProps() {
    const posts = await getAllPosts()
    return {
        props: {
            posts
        },
    };
}
function Blog({ posts }) {

    return (
        <>
            <Head>
                <title>My Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>



        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        From the blog
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                    {posts.map((post) => {
                        return post.category === 'blog' ?

                                <Link href="/blog/[slug]" className=' 	 ' as={`/blog/${post.slug}`}>
                                    <div
                                        className="flex flex-col rounded-lg shadow-lg hover:cursor-pointer overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover"
                                                 src={`${post.image && post.image[0].url}&width=400`} alt=""/>
                                        </div>
                                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-indigo-600">
                                                    <a href="#" className="hover:underline">
                                                        {post.type}
                                                    </a>
                                                </p>
                                                <a href="#" className="block mt-2">
                                                    <p className="text-xl font-semibold text-gray-900">
                                                        {post.title}
                                                    </p>
                                                    <p className="mt-3 text-base text-gray-500">
                                                        {post.Preview}
                                                    </p>
                                                </a>
                                            </div>
                                            {/*          <div className="mt-6 flex items-center">*/}
                                            {/*              <div className="flex-shrink-0">*/}
                                            {/*                  <a href="#">*/}
                                            {/*                      <span className="sr-only">Roel Aufderehar</span>*/}
                                            {/*                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=H889l9sfOF&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />*/}
                                            {/*                  </a>*/}
                                            {/*              </div>*/}
                                            {/*              <div className="ml-3">*/}
                                            {/*                  <p className="text-sm font-medium text-gray-900">*/}
                                            {/*                      <a href="#" className="hover:underline">*/}
                                            {/*                          Roel Aufderehar*/}
                                            {/*                      </a>*/}
                                            {/*                  </p>*/}
                                            {/*                  <div className="flex space-x-1 text-sm text-gray-500">*/}
                                            {/*                      <time dateTime="2020-03-16">*/}
                                            {/*                          Mar 16, 2020*/}
                                            {/*                      </time>*/}
                                            {/*                      <span aria-hidden="true">*/}
                                            {/*  ·*/}
                                            {/*</span>*/}
                                            {/*                      <span>*/}
                                            {/*  6 min read*/}
                                            {/*</span>*/}
                                            {/*                  </div>*/}
                                            {/*              </div>*/}
                                            {/*          </div>*/}
                                        </div>

                                    </div>

                                </Link>

                            : null



                            })}


                </div>
            </div>
        </div>
        </>
    );
}
export default Blog
