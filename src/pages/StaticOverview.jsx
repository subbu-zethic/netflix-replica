// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import staticMoviesList from "../utils/staticMovies.json";

const StaticOverview = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    console.log("useEffect", staticMoviesList);
    staticMoviesList.MoviesList.find((element) => {
      console.log(element.id);
      if (parseInt(element.id) === parseInt(params.id)) {
        return setMovie(element);
      }
    });
  }, [params.id]);

  return (
    <>
      <div className="w-full h-[900px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[900px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={movie.wallpaper}
            alt={movie.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              {movie.title}{" "}
              <span className="text-2xl"> ({movie.language})</span>
            </h1>
            <div className="my-4">
              <Link to={movie.url} target="_blank">
                <button className=" bg-red-600 text-white py-2 px-5">
                  Play
                </button>
              </Link>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-lg mt-8">
              Released: {movie.release_date}
            </p>
            <p className="text-gray-400 text-lg">Duration: {movie.duration}</p>
            <p className="text-gray-400 text-lg">Ratings: {movie.ratings}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-lg mt-8">
              {movie.overview}
            </p>
            <p className="text-gray-400 text-lg mt-8">
              Starring:{" "}
              <span className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-lg">
                {movie.cast}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticOverview;
