import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          height: 60px;
          background-color: rgb(6, 7, 32);
          margin-bottom: 0.57rem;
        }
        ul {
          display: flex;
        }
        a {
          text-decoration: none;
          display: flex;
          height: 60px;
          align-items: center;
          padding: 0 20px;
        }
        a:hover{
          color: whitesmoke;
        }
      `}</style>
    </header>
  );
}
