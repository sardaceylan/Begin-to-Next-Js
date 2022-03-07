import { Head } from "next/document";
import { useRouter } from "next/router";

export default function FilmDetails({ movie }) {
  return (
    <div>
      <Head><title>{movie.title}</title></Head>
      <h3>
        <h3>{movie.title}</h3>
      </h3>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=5f4ac32c9ca2fe3238f40b6a8aa727dd&language=en-US`
  );
  const movie = await request.json();
  return {
    props: {
      movie,
    },
  };
}
