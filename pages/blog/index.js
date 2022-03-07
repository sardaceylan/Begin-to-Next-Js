import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Blogpage</title>
      </Head>
      <style jsx>{`
        body {
          background-color: #f1f1f1;
        }
        a {
          margin-left: 1rem;
        }
      `}</style>
      <h1>Index</h1>
      <Link href="/blog/post">
        <a>post</a>
      </Link>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
}
