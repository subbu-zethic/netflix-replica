import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import StaticOverview from "./pages/StaticOverview";
import { useState } from "react";
import staticMovieList from "./utils/staticMovies.json";

function App() {
  const [results, setResults] = useState(staticMovieList.MoviesList);

  console.log("search results", results);
  return (
    <>
      <AuthContextProvider>
        <Navbar setResults={setResults} />
        <Routes>
          <Route path="/" element={<Home results={results} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/static-overview/:id" element={<StaticOverview />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
