import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MoviesList from "./Components/MoviesList";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Get Data From API
  const GetData = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=704e2fc65e0a6a2108352d2a56772002&language=ar&page=1"
    );
    setMovies(res.data.results);
    if (res.data.total_pages > 500) setPageCount(500);
    else setPageCount(res.data.total_pages);
  };
  // Get Page Data
  const GetPageData = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=704e2fc65e0a6a2108352d2a56772002&language=ar&page=${page}`
    );
    setMovies(res.data.results);
  };
  // Search Fun
  const SearchMoive = async (word) => {
    if (word !== "") {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=704e2fc65e0a6a2108352d2a56772002&language=ar&query=${word}&page=1&include_adult=false`
      );
      setMovies(res.data.results);
      if (res.data.total_pages > 500) setPageCount(500);
      else setPageCount(res.data.total_pages);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <NavBar SearchMoive={SearchMoive} />
      <Routes>
        <Route
          path="/"
          element={
            <MoviesList
              movies={movies}
              GetPageData={GetPageData}
              pageCount={pageCount}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
