import Link from "next/link";
import React from 'react';

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
        <div>
            {posts.map((post) => (
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                    <div>
                        <div className='text-6xl'>{post.title}</div>
                        <img className='w-24' src={post.imgUrl}></img>

                        {post.image && post.image[0].rawUrl}


                    </div>
                </Link>
            ))}
        </div>
    );
}
export default Blog
