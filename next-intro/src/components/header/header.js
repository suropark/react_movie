import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src="/next.svg" alt="logo" width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
            </ul>
            <img />
          </nav>
        </div>
        <h1>lorem </h1>
      </div>
    </header>
  );
};

export default Header;
