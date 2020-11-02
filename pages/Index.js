import React from "react";
import matter from "gray-matter";
import Layout from "@components/Layout";
import PostList from "@components/PostList";

const Index = (props) => {
    return (
        <Layout pageTitle={props.siteTitle}>
            <h1>Welcome!</h1>
            <p>{props.description}</p>
            <main>
                <PostList posts={props.posts} />
            </main>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const config = await import("../siteconfig.json");

    const posts = ((context) => {
        const keys = context.keys();
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value = values[index];
            const document = matter(value.default);
            return{
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        })
        return data;
    })(require.context("../content", true, /\.md$/));

    return {
        siteTitle: config.siteTitle,
        description: config.description,
        posts
    }
}

export default Index;