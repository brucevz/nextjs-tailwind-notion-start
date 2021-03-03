import { NotionRenderer } from "react-notion";

import React from 'react';


import { getAllPosts } from "../blog";
import Navigation from "../../components/navigation";
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
const BlogPost = ({ post, blocks, }) => {
    if (!post)
        return (null);
    return (
        <>
            <Navigation />
            <div style={{ maxWidth: 768 }}>
                <h1>{post.title}</h1>

                <NotionRenderer blockMap={blocks} />
            </div>
        </>
    );
};
export async function getStaticPaths() {
    const table = await getAllPosts();
    return {
        paths: table.map((row) => `/blog/${row.slug}`),
        fallback: true,
    };
}
export default BlogPost;
