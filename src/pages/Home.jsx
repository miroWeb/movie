import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { trendingTodayURL } from "../api/URLS";
import customAxios from "../api/customAxios";
import MovieLoading from "../components/MovieLoading";

const Home = () => {
  const [movies, setMovies] = useState({
    page: null,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await customAxios.get(trendingTodayURL);
        setMovies(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="container mx-auto px-5">
      <nav className="flex justify-between shadow-2xl rounded-2xl p-5 items-center text-2xl text-slate-300">
        <div className="text-6xl cursor-pointer">🎬</div>
        <form>
          <input  
            className="inp"
            type="text"
            placeholder="search"
          />
          <button className="btn">search</button>
        </form>
        <ul className="flex gap-10">
          <li>
            <Link to={"/trending"}>Trending</Link>
          </li>
          <li>
            <Link to={"/movies"}>Movie</Link>
          </li>
          <li>
            <Link to={"/series"}>TV Series</Link>
          </li>
        </ul>
      </nav>

      <div>
        <h1 className="text-center text-4xl my-10 text-slate-300">
          Trending Today
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(auto,342px))] justify-center gap-10">
          {movies.results?.map((movie) => (
            <MovieCard key={movie.id} {...movie}></MovieCard>
          ))}
          {loading
            ? [1, 2, 3, 4, 5, 6].map((i) => (
                <MovieLoading key={i}></MovieLoading>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
