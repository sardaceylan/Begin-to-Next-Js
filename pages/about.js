import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hakkında</title>
      </Head>
      <style jsx>{`
        a {
          margin-left: 1rem;
        }
      `}</style>
      <h1>About</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </Layout>
  );
}
