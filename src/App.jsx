import React from "react";
import "./App.css";
import Movies from "./components/movies";
import VidlyNavBar from "./components/vidlyNavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import NotFound from "./components/notFound";
import Shit from "./components/shit";

function App() {
  return (
    <main className="container-fluid">
      <VidlyNavBar />
      <div className="content">
        <Routes>
          <Route
            path="/shit/:id"
            element={
              <Shit
                //dear sweet jesus this took forever to figure out
                someShit={"some shit"}
                onShit
              />
            }
          />
          <Route path="/login/*" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movie/newmovie"
            element={<MovieForm onSave="i am a thing" />}
          />
          <Route
            path="/movie/:id"
            element={<MovieForm onSave={(movie) => this.handleSave(movie)} />}
          />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/" element={<Navigate replace to="/movies" />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/notfound" />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
