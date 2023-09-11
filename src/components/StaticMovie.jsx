import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";

const StaticMovie = ({ item }) => {
  const [favorite, setFavourite] = useState(false);
  const [watchlist, setWatchlist] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const navigate = useNavigate();

  const favouriteShow = async () => {
    if (user?.email) {
      setFavourite(!favorite);
      setSaved(true);
      await updateDoc(movieID, {
        myFavourites: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Log In to add as Favourite");
    }
  };

  const watchlistShow = async () => {
    if (user?.email) {
      setWatchlist(!watchlist);
      setSaved(true);
      await updateDoc(movieID, {
        myWatchlists: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Log In to add to Watchlist");
    }
  };

  const handleOverview = (id) => {
    navigate(`/static-overview/${id}`, { item });
  };
  console.log("movie", item);

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
          {favorite ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        <p onClick={watchlistShow}>
          {watchlist ? (
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
