import Link from "next/link";

const PostLink = ({ posts }) => {
    if (posts === "undefined") return null;

    return (
        <div>
            {!posts && <div>No posts!</div>}
            <ul>
                {posts && 
                    posts.map((post) => {
                        return (
                            <li key={post.slug}>
                                <Link href={{ pathname: `/post/${post.slug}` }}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default PostLink;