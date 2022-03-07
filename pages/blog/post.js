import Head from "next/head";
import Link from "next/link";

export default function Post() {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <style jsx>{`
        body {
          background-color: #f1f1f1;
        }
      `}</style>
      <h1>Post</h1>
      <Link href="/blog">
        <a>Go back</a>
      </Link>
    </div>
  );
}
