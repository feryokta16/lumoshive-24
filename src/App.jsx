/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import ActivityList from "./components/ActivityList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
