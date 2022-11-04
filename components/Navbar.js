//import next.js link api
import Link from "next/link";

// Header component with Navbar links
const Header = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav-logo">
            <span className="span1">Web</span>
            <span className="span2">Dev</span>
          </div>

          <ul>

            <li>
              <Link href="/">
                Home
              </Link>{" "}
            </li>

            <li>
              <Link href="/about">
                About
              </Link>{" "}
            </li>

            <li>
              <Link href="/skills">
                Skills
              </Link>{" "}
            </li>

            <li>
              <Link href="/projects">
                Projects
              </Link>{" "}
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* jsx styling */}

      <style jsx global>
        {`
          body {
            font-family: "Inter", sans-serif;
          }
          nav {
            background: #fff;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.25rem;
            position: sticky;
            top: 0;
            z-index: 999;
          }

          .container {
            z-index: 1;
            width: 100%;
            max-width: 1300px;
            margin-right: auto;
            margin-left: auto;
            padding-left: 50px;
            padding-right: 50px;
            display: flex;
            justify-content: space-between;
            height: 80px;
          }

          .nav-logo {
            justify-self: flex-start;
            font-size: 2rem;
            display: flex;
            align-items: center;
            text-shadow: 2px 2px 2px;
            font-weight: 510;
          }

          .span1 {
            color: #1f494c;
          }
          .span2 {
            color: #5be0e9;
          }

          .mobile-icon {
            display: none;
          }

          .mobile-icon:hover {
            color: #398b91;
            transition: all 0.5s ease;
          }

          ul {
            display: flex;
            align-items: center;
            list-style: none;
            text-align: center;
          }

          li {
            height: 80px;
            border-bottom: 4px solid transparent;
          }

          li:hover {
            border-bottom: 4px solid #5be0e9;
            color: #49b1b9;
          }

          a {
            color: #131819;
            cursor: pointer;
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            height: 100%;
            font-size: 1rem;
            letter-spacing: 0.5px;
          }

          a:hover {
            transition: all 0.3s ease;
            color: #49b1b9;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
