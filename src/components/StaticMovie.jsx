import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";

const StaticMovie = ({ item, results }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlists, setWatchlists] = useState([]);
  // const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    const storedWatchlists =
      JSON.parse(localStorage.getItem("watchlists")) || [];
    setWatchlists(storedWatchlists);
  }, []);

  const favouriteShow = async () => {
    if (user?.email) {
      var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      var index = favorites.indexOf(item.id);

      if (index === -1) {
        favorites.push(item.id);
      } else {
        favorites.splice(index, 1);
      }

      setFavorites(favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      alert("Please Log In to add as Favourite");
    }
  };

  const watchlistShow = async () => {
    if (user?.email) {
      var watchlists = JSON.parse(localStorage.getItem("watchlists")) || [];
      var index = watchlists.indexOf(item.id);

      if (index === -1) {
        watchlists.push(item.id);
      } else {
        watchlists.splice(index, 1);
      }

      setWatchlists(watchlists);
      localStorage.setItem("watchlists", JSON.stringify(watchlists));
    } else {
      alert("Please Log In to add to Watchlist");
    }
  };

  const handleOverview = (id) => {
    navigate(`/static-overview/${id}`, { item });
  };
  console.log("movie", item);
  console.log(favorites);
  console.log(watchlists);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img className="w-full h-auto block" src={item.img} alt={item.title} />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p
          className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
          onClick={() => handleOverview(item.id)}
        >
          {item.title}
        </p>
        <p onClick={favouriteShow}>
          {favorites.includes(item.id) ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        <p onClick={watchlistShow}>
          {watchlists.includes(item.id) ? (
            <MdWatchLater className="absolute top-4 left-10 text-gray-300" />
          ) : (
            <MdOutlineWatchLater className="absolute top-4 left-10 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default StaticMovie;
