export default function Header() {
    return (
        <div className="header">
        <header>
            <img src="/image.JPG" alt="Profile Image" className="logo" height width={80}/>
            <nav className="nav">
                <ul>
                    <li><a href="/public">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </div>
    );
}