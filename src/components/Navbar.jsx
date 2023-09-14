import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import staticMoviesList from "../utils/staticMovies.json";

const Navbar = (props) => {
  const { user, logOut } = UserAuth();
  const [search, setSearch] = useState("");
  // const [jsonData, setJsonData] = useState(staticMoviesList);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = (value) => {
    console.log("value", value);
    if (value == "") return staticMoviesList.MoviesList;
    const results = staticMoviesList.MoviesList.filter((searchList) => {
      return (
        value &&
        searchList &&
        searchList.title &&
        searchList.title.toLowerCase().includes(value)
      );
    });
    props.setResults(results);
  };

  const handleChange = (value) => {
    setSearch(value);
    fetchData(value);
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <img
          src="/images/netflix-logo.svg"
          alt="netflix-logo"
          height={40}
          width={148}
        />
      </Link>

      {user?.email ? (
        <div>
          <input
            type="text"
            placeholder="Search Your Movies/Shows"
            className="bg-black/60 p-2 w-[250px] text-white outline-none mr-20"
            value={search}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Link to={"/account"}>
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search Your Movies/Shows"
            className="bg-black/60 p-2 w-[250px] text-white outline-none mr-20"
            value={search}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Link to={"/login"}>
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
