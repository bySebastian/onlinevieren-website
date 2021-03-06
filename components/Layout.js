import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, pageTitle, ...props }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <section className="layout">
                <Header />
                <div className="content">{children}</div>
            </section>
            <footer>Built by Hello Pixel. 2020 &copy; RKMedia.</footer>
        </>
    );
};

export default Layout;