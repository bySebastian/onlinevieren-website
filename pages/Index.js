import React from "react";
import matter from "gray-matter";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

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
        return getPosts(context);
    })(require.context("../content", true, /\.md$/));

    return {
        siteTitle: config.siteTitle,
        description: config.description,
        posts
    }
}

export default Index;