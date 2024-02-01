import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Naujienos from "./pages/naujienos/Naujienos";
import Paslaugos from "./pages/paslaugos/Paslaugos";
import Teisine from "./pages/teisine/Teisine";
import Error from "./pages/404/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/naujienos" element={<Naujienos />} />
            <Route path="/paslaugos" element={<Paslaugos />} />
            <Route path="/teisine" element={<Teisine />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
