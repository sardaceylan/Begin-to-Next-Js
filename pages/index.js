import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Popular from "../components/popular";

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      {/* <style jsx>{`
        body {
          background-color: #f1f1f1;
        }
        a {
          margin-left: 1rem;
        }
      `}</style> */}
      <h1 className="popularHead">Popüler Filmler</h1>
      {/* <Popular movies={movies} /> */}
      <Popular movies={movies} />
    </>
  );
}

export async function getServerSideProps() {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=5f4ac32c9ca2fe3238f40b6a8aa727dd&language=en-US&page=1`
  );
  const movies = await request.json();
  return {
    props: {
      movies,
    },
  };
}

// export async function getStaticProps() {
//   const request = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=5f4ac32c9ca2fe3238f40b6a8aa727dd&language=en-US&page=1`
//   );
//   const movies = await request.json();
//   return {
//     props: {
//       movies,
//     },
//   };
// }
