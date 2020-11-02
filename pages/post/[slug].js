import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "@components/Layout";

const PostTemplate = ({ content, data }) => {
    // this holds the data between '---' from the .md file
    const frontmatter = data;

    if (!frontmatter) return <></>;

    return (
        <Layout pageTitle={frontmatter.title}>
            <Link href="/Index">Back to post list</Link>
            <article>
                <h1>{frontmatter.title}</h1>
                <ReactMarkdown source={content} />
            </article>
        </Layout>
    )
}

PostTemplate.getInitialProps = async (context) => {
    const { slug } = context.query;
    
    // import our .md file using the slug from the url
    const content = await import(`../../content/${slug}.md`)

    // parse .md data through matter
    const data = matter(content.default);

    // return data to our component props
    return { ...data };

    return { slug };
}

export default PostTemplate;