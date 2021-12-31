import React from "react";
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import DcPage from "../components/dc/DcPage";
import LoginPage from "../components/login/LoginPage";
import MarvelPage from "../components/marvel/MarvelPage";
import SearchPage from "../components/search/SearchPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DcPage />} />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
