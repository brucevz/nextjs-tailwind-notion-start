import { NotionRenderer } from "react-notion";

import React from 'react';

import { getAllPosts } from "../blog";

export async function getStaticProps({ params: { slug }, }) {
    // Get all posts again
    const posts = await getAllPosts();
    // Find the current blogpost by slug
    const post = posts.find((t) => t.slug === slug);
    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
    return {
        props: {
            blocks,
            post,
        },
    };
}

const CustomPage = ({ post, blocks }) => {
    if (!post)
        return (null);
    return (
        <>
            <div className='mt-10 max-w-7xl px-5 md:px-0 mx-auto' style={{ maxWidth: 768 }}>
                <div className='  text-5xl text-blue-800'>{post.title}</div>

                <NotionRenderer blockMap={blocks} />
            </div>
        </>
    );
};
export async function getStaticPaths() {
    const table = await getAllPosts();
    return {
        paths: table.map((row) => `/page/${row.slug}`),
        fallback: true,
    };
}

export default CustomPage
