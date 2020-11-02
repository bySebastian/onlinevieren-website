import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/Index">Home</Link>
                <Link href="/About">About</Link>
            </nav>
        </header>
    );
};

export default Header;