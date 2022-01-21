import React from "react";
import "./App.css";
import Movies from "./components/movies";
import VidlyNavBar from "./components/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import Login from "./components/login";

function App() {
  return (
    <main className="container-fluid">
      <VidlyNavBar />
      <div className="content">
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/notfound" element={NotFound} />
          <Route path="/" element={<Navigate replace to="/movies" />} />
        </Routes>
      </div>
    </main>
  );
}

function NotFound() {
  return <h1>NotFound</h1>;
}

export default App;
