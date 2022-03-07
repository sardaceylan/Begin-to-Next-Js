import Link from "next/link";

export default function Popular({ movies }) {
  return (
    <div className="popular">
      {movies.results.map((movie) => (
        <div>
          <Link href={`/film/${movie.id}`}>
            <a>
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              ></img>
            </a>
          </Link>
        </div>

        // <div>
        //   <h3>{movie.title}</h3>
        //   <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}></img>
        // </div>
      ))}

      <style jsx>{`
        div {
          margin: 0 auto;
        }
        .popular {
          display: flex;
          flex-wrap: wrap;
          width: 1200px;
          padding-top: 2rem;
        }
        .popular h3 {
          text-align: center;
          margin-bottom: 0.5rem;
          padding-top: 1rem;
        }
        .popular img {
          width: 360px;
          cursor: pointer;
          height: ;
        }
        .popular img:hover {
          opacity: 0.68;
        }

        a{
          color: whitesmoke;
          text-decoration: none;
        }

        a:hover{
          color: #999;
        }

        h3 {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
