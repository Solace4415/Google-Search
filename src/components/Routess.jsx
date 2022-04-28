import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const array = ["/search", "/image", "/video"];

const Routess = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />

        {array.map((path) => (
          <Route exact key={path} path={path} element={<Results />} />
        ))}
      </Routes>
    </div>
  );
};

export default Routess;
